import React, { useState } from 'react';
import './GradeCalculator.css';

const subjects = [
  { name: 'Embedded System (Theory)', credit: 3, type: 'theory' },
  { name: 'Artificial Intelligence System (Theory)', credit: 3, type: 'theory' },
  { name: 'Computer Communication & Networking (Theory)', credit: 3, type: 'theory' },
  { name: 'Core Elective 1 (Theory)', credit: 2, type: 'theory' },
  { name: 'Core Elective 2 (Theory)', credit: 2, type: 'theory' },
  { name: 'Industry 4.0 (Theory)', credit: 2, type: 'theory' },
  { name: 'Open Elective', credit: 3, type: 'theory' },
  { name: 'Embedded System (Lab)', credit: 1, type: 'lab' },
  { name: 'Artificial Intelligence System (Lab)', credit: 1, type: 'lab' },
  { name: 'Computer Communication & Networking (Lab)', credit: 1, type: 'lab' },
  { name: 'Core Elective 1 (Lab)', credit: 1, type: 'lab' },
  { name: 'Core Elective 2 (Lab)', credit: 1, type: 'lab' },
  { name: 'Industry 4.0 (Lab)', credit: 1, type: 'lab' },
  { name: 'Communication Skills', credit: 1, type: 'lab' },
];

const getPointer = (total) => {
  if (total >= 80) return 10;
  if (total >= 70) return 9;
  if (total >= 60) return 8;
  if (total >= 55) return 7;
  if (total >= 50) return 6;
  if (total >= 45) return 5;
  if (total >= 40) return 4;
  return 0;
};

const GradeCalculator = () => {
  const [marks, setMarks] = useState(subjects.map(() => ({ mid: '', ia: '', end: '' })));

  const handleChange = (index, type, value) => {
    const updated = [...marks];
    const subj = subjects[index];
    const isLab = subj.type === 'lab';

    let max = 100;
    if (type === 'mid') max = isLab ? 0 : 25;
    if (type === 'ia') max = isLab ? 50 : 25;
    if (type === 'end') max = isLab ? 50 : 100;

    const num = Math.max(0, Math.min(parseFloat(value) || 0, max));
    updated[index][type] = num;
    setMarks(updated);
  };

  const calculateTotal = (m, i) => {
    const subj = subjects[i];
    const mid = subj.type === 'lab' ? 0 : parseFloat(m.mid) || 0;
    const ia = parseFloat(m.ia) || 0;
    const end = parseFloat(m.end) || 0;
    const scaledEnd = subj.type === 'lab' ? end : end * 0.5;
    return mid + ia + scaledEnd;
  };

  const calculateCPI = () => {
    let totalCredits = 0;
    let weightedSum = 0;
    marks.forEach((m, i) => {
      const total = calculateTotal(m, i);
      const pointer = getPointer(total);
      const credit = subjects[i].credit;
      totalCredits += credit;
      weightedSum += pointer * credit;
    });
    return totalCredits ? (weightedSum / totalCredits).toFixed(2) : '0.00';
  };

  const renderTable = (type) => (
    <div className="table-container">
      <h3 className="notice">{type === 'theory' ? 'Theory Subjects: Mid & IA out of 25, End out of 100 (scaled to 50)' : 'Lab Subjects: IA out of 50, End out of 50. No Mid Exam'}</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Mid</th>
            <th>IA</th>
            <th>End</th>
            <th>Total</th>
            <th>Pointer</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subj, i) => {
            if (subj.type !== type) return null;
            const total = calculateTotal(marks[i], i);
            const pointer = getPointer(total);
            const isLab = subj.type === 'lab';

            return (
              <tr key={i}>
                <td>{subj.name}</td>
                <td>
                  <input
                    type="number"
                    value={marks[i].mid}
                    onChange={(e) => handleChange(i, 'mid', e.target.value)}
                    disabled={isLab}
                    placeholder={isLab ? 'N/A' : ''}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={marks[i].ia}
                    onChange={(e) => handleChange(i, 'ia', e.target.value)}
                    max={isLab ? 50 : 25}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={marks[i].end}
                    onChange={(e) => handleChange(i, 'end', e.target.value)}
                    max={isLab ? 50 : 100}
                  />
                </td>
                <td>{total.toFixed(2)}</td>
                <td>{pointer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container">
      <h2 className="title">📊 Grade & CPI Calculator</h2>
      {renderTable('theory')}
      {renderTable('lab')}
      <div className="cpi">
        🎓 CPI: <span>{calculateCPI()}</span>
      </div>
    </div>
  );
};

export default GradeCalculator;
