import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">📖 About Smart Academia</h1>

      <section className="about-section">
        <h2>🚀 Project Overview</h2>
        <p>
          Smart Academia is a React-based web application designed to enhance the academic experience for ICT students of Pandit Deendayal Energy University. It offers two major features:
        </p>
        <ul>
          <li>📅 A personalized timetable viewer based on division, batch, and core elective selection.</li>
          <li>📊 A real-time grade and CPI calculator that accounts for subject-wise credit distribution.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🛠️ Technologies Used</h2>
        <p>We’ve used modern tools and technologies to make this app fast, interactive, and scalable:</p>
        <ul>
          <li>⚛️ <strong>React.js</strong> for the frontend framework</li>
          <li>🎨 <strong>CSS</strong> (with modular files) for styling</li>
          <li>📂 <strong>Excel → JSON conversion</strong> for batch-wise timetable data</li>
          <li>📐 <strong>JavaScript</strong> for CPI and grade logic</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🌱 Future Scope</h2>
        <p>
          Currently, Smart Academia supports only the ICT department (Semester 6). In the future, this platform can be extended to:
        </p>
        <ul>
          <li>📚 All departments within PDEU (CSE, Chemical, Mechanical, etc.)</li>
          <li>🔄 Dynamic timetable uploads for different semesters and years</li>
          <li>📈 Grade tracking across semesters with analytics</li>
          <li>👥 Login system for personalized dashboards</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>👨‍💻 Developed By</h2>
        <ul>
          <li><strong>Hit Patel</strong> - 22BIT246D</li>
          <li><strong>Parshwa Panchiwala</strong> - 22BIT243D</li>
          <li><strong>Mihir Rathod</strong> - 22BIT250D</li>
        </ul>
        <p>
          We’re 6th semester students from ICT at PDEU. This project was built as part of our coursework and to genuinely solve a student problem.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;