import React, { useState } from 'react';
import './TimetableViewer.css';


const TimetableViewer = ({ timetable }) => {
  const days = Object.keys(timetable);
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const [selectedDay, setSelectedDay] = useState(days.includes(today) ? today : days[0]);

  return (
    <div className="timetable-container p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">📅 Timetable for {selectedDay}</h2>

      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <table className="w-full border">
        <thead className="bg-blue-100 text-blue-900">
          <tr>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Room</th>
          </tr>
        </thead>
        <tbody>
          {timetable[selectedDay].map((entry, idx) => (
            <tr key={idx} className="text-center hover:bg-blue-50">
              <td className="p-2 border">{entry.time}</td>
              <td className="p-2 border">{entry.subject}</td>
              <td className="p-2 border">{entry.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableViewer;
