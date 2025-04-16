import React from 'react';
import './SubjectSummary.css';

const subjects = [
  { code: '20IC304T', name: 'Embedded Systems', type: 'Theory', credit: 3, faculty: 'Aarti Solanki' },
  { code: '20IC304P', name: 'Embedded Systems Lab', type: 'Lab', credit: 1, faculty: 'Aarti Solanki' },
  { code: '20IC305T', name: 'AI Systems', type: 'Theory', credit: 3, faculty: 'Soumyashree Panda' },
  { code: '20IC305P', name: 'AI Systems Lab', type: 'Lab', credit: 1, faculty: 'Santosh Satapathi' },
  { code: '20IC306T', name: 'Computer Communication & Networking', type: 'Theory', credit: 3, faculty: 'Pradip Barik' },
  { code: '20IC306P', name: 'CCN Lab', type: 'Lab', credit: 1, faculty: 'Deepak Sahu' },
  { code: '23IC301T', name: 'Web Technology', type: 'Theory', credit: 2, faculty: 'Shivangi Mehta' },
  { code: '23IC301P', name: 'Web Technology Lab', type: 'Lab', credit: 1, faculty: 'Kamal garg' },
  { code: '20IC316T', name: 'Cloud Architecture and Services', type: 'Theory', credit: 2, faculty: 'Manish Kumar' },
  { code: '20IC316P', name: 'Cloud Lab', type: 'Lab', credit: 1, faculty: 'Mohendra Roy' },
  { code: '20IF201T', name: 'Industry 4.0', type: 'Theory', credit: 2, faculty: '---' },
  { code: '20IF201P', name: 'Industry 4.0 Lab', type: 'Lab', credit: 1, faculty: '---' },
  { code: '22CDC006', name: 'CDC Training', type: 'CDC', credit: 0, faculty: 'CD Cell Trainer' },
  { code: '20HS301P', name: 'Communication Skills III', type: 'Lab', credit: 1, faculty: 'Charu Sharma' },
];

const SubjectSummary = () => {
  return (
    <div className="summary-container">
      <h1 className="summary-title">📘 Subject Summary</h1>
      <div className="summary-table">
        <div className="table-header">
          <div>Code</div>
          <div>Subject</div>
          <div>Type</div>
          <div>Credit</div>
          <div>Faculty</div>
        </div>
        {subjects.map((subj, i) => (
          <div className="table-row animate" key={i}>
            <div>{subj.code}</div>
            <div>{subj.name}</div>
            <div>{subj.type}</div>
            <div>{subj.credit}</div>
            <div>{subj.faculty}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSummary;