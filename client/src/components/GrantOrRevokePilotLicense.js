import React, { useState } from 'react';

export default function GrantOrRevokePilotLicense({ onCancel, onSubmit }) {
  const [formData, setFormData] = useState({
    personId: '',
    license: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Add validation as needed
    onSubmit?.(formData);
  };

  return (
    <div>
      <h2>Procedure: Grant or Revoke Pilot License</h2>
      <div>
        {renderField('Person ID', 'personId')}
        {renderField('License', 'license')}

        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={onCancel}>Cancel</button>
          <button style={styles.button} onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );

  function renderField(label, name) {
    return (
      <div style={styles.field} key={name}>
        <label style={styles.label}>{label}</label>
        <input
          type="text"
          name={name}
          value={formData[name]}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
    );
  }
}

const styles = {
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    marginTop: '16px'
  },
  field: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: '5px'
  },
  label: {
    flex: '1',
    fontWeight: 'bold'
  },
  input: {
    flex: '2',
    padding: '4px'
  },
  buttonRow: {
    gridColumn: 'span 3',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px'
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  }
};
