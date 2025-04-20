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
app.get('/api/airline', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM airplane');
    res.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
//   console.log('Using database config:', dbConfig);
});