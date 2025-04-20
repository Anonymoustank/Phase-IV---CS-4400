const express = require('express'); // START THIS WITH NPM RUN DEV
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const app = express();

app.use(express.json());

// credentials are stored in credentials.txt with the following format
/**
host=localhost
user=username
password=password
database=flight_tracking
 * 
 */

function loadCredentials() { 
    try {
      // Read the credentials file
      const credentialsPath = path.join(__dirname, 'credentials.txt');
      const fileContent = fs.readFileSync(credentialsPath, 'utf8');
      
      // Parse the file content
      const lines = fileContent.split('\n');
      const dbConfig = {};
      
      lines.forEach(line => {
        // Skip empty lines
        if (!line.trim()) return;
        
        // Split each line by the first equals sign
        const [key, value] = line.split('=');
        if (key && value) {
          dbConfig[key.trim()] = value.trim();
        }
      });
      
      return dbConfig;
    } catch (error) {
      console.error('Error loading database credentials:', error);
      process.exit(1); // Exit if we can't read credentials
    }
  }
  

// Database connection configuration
const dbConfig = loadCredentials();


// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Example endpoint to get users
app.post('/api/execute-query', async (req, res) => {
    const { query } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'SQL query is required' });
    }
    
    try {
      const [results] = await pool.query(query);
      res.json({ success: true, results });
    } catch (error) {
      console.error('Query execution error:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
});

// how you should do this in the frontend:

// const query = "select * from airline"
// const response = await fetch('/api/execute-query', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
//   });
  
//   const data = await response.json();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
//   console.log('Using database config:', dbConfig);
});