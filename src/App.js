import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Timetable from './pages/Timetable';
import GradeCalculator from './components/GradeCalculator';
import SelectionForm from './components/SelectionForm';
import TimetableViewer from './components/TimetableViewer';
import { h6WebCloudTimetable } from './data/h6WebCloudTimetable';
import AboutPage from './pages/AboutPage';

import SubjectSummary from './pages/SubjectSummary';




function App() {
  const [timetable, setTimetable] = useState(null);

  const handleFormSubmit = (selection) => {
    const { division, batch, electives } = selection;

    const isH6WebCloud =
      division === '2' &&
      batch === 'H6' &&
      electives.includes('Web Technology') &&
      electives.includes('Cloud Computing') &&
      electives.length === 2;

    if (isH6WebCloud) {
      setTimetable(h6WebCloudTimetable);
    } else {
      alert("Timetable is only available for H6 + Web + Cloud at this moment.");
    }
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/grade-calculator" element={<GradeCalculator />} />
          <Route
            path="/custom-timetable"
            element={
              !timetable ? (
                <SelectionForm onSubmit={handleFormSubmit} />
              ) : (
                <TimetableViewer timetable={timetable} />
              )
            }
          />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/subject-summary" element={<SubjectSummary />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
