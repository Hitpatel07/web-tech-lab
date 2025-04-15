import React, { useState } from 'react';
import './SelectionForm.css';

const SelectionForm = ({ onSubmit }) => {
  const [division, setDivision] = useState('');
  const [batch, setBatch] = useState('');
  const [electives, setElectives] = useState([]);

  const divisions = {
    1: ['H1', 'H2', 'H3'],
    2: ['H4', 'H5', 'H6'],
    3: ['H7', 'H8', 'H9'],
  };

  const electiveOptions = ['Machine Learning', 'Deep Learning', 'Cloud Computing', 'Web Technology'];

  const handleElectiveChange = (e) => {
    const selected = e.target.value;
    let updatedElectives = [...electives];

    const isSelected = updatedElectives.includes(selected);

    if (isSelected) {
      updatedElectives = updatedElectives.filter((elec) => elec !== selected);
    } else {
      if (updatedElectives.length === 2) {
        alert('You can select only 2 electives.');
        return;
      }
      if (
        (selected === 'Machine Learning' && updatedElectives.includes('Deep Learning')) ||
        (selected === 'Deep Learning' && updatedElectives.includes('Machine Learning'))
      ) {
        alert('Choose either Machine Learning or Deep Learning, not both.');
        return;
      }
      updatedElectives.push(selected);
    }

    setElectives(updatedElectives);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!division || !batch || electives.length === 0) {
      alert('Please fill all fields and select your core electives.');
      return;
    }

    onSubmit({ branch: 'ICT', division, batch, electives });
  };

  return (
    <div className="selection-container">
      <form onSubmit={handleSubmit} className="selection-form">
        <h2 className="form-title">Choose Your Details</h2>

        <div>
          <label className="form-label">Division</label>
          <select
            value={division}
            onChange={(e) => {
              setDivision(e.target.value);
              setBatch('');
            }}
            className="form-select"
          >
            <option value="">Select Division</option>
            <option value="1">Division 1</option>
            <option value="2">Division 2</option>
            <option value="3">Division 3</option>
          </select>
        </div>

        <div>
          <label className="form-label">Batch</label>
          <select
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            disabled={!division}
            className="form-select"
          >
            <option value="">Select Batch</option>
            {division &&
              divisions[division].map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="form-label">Core Electives (Max 2)</label>
          <div className="electives-grid">
            {electiveOptions.map((option) => (
              <label key={option} className="elective-option">
                <input
                  type="checkbox"
                  value={option}
                  checked={electives.includes(option)}
                  onChange={handleElectiveChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SelectionForm;