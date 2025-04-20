import React from 'react';

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div style={{ 
      overflowX: 'auto', 
      maxHeight: '70vh', 
      overflowY: 'auto',
      paddingRight: '10px' 
    }}>
      <table style={{ 
        borderCollapse: 'collapse', 
        width: '100%', 
        minWidth: '600px' 
      }}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  backgroundColor: '#f2f2f2',
                  textAlign: 'left',
                  whiteSpace: 'nowrap',
                  position: 'sticky',
                  top: 0,
                  zIndex: 1
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {headers.map((header) => (
                <td
                  key={header}
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
