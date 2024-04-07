import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timetable, setTimetable] = useState([
    {
      subject: 'Data Mining & Warehousing',
      teacher: 'Prof. Smith',
      day: 'Monday',
      time: '10:00 AM - 12:00 PM',
    },
    {
      subject: 'Stochastic Processing',
      teacher: 'Dr. Jones',
      day: 'Tuesday',
      time: '1:00 PM - 3:00 PM',
    },
    {
      subject: 'Theory of Automata',
      teacher: 'Ms. Lee',
      day: 'Wednesday',
      time: '9:00 AM - 11:00 AM',
    },
    {
      subject: 'Research Methodology',
      teacher: 'Mr. Garcia',
      day: 'Thursday',
      time: '2:00 PM - 4:00 PM',
    },
    {
      subject: 'Human Interaction & Computing',
      teacher: 'Prof. Smith',
      day: 'Friday',
      time: '11:00 AM - 1:00 PM',
    },
    {
      subject: 'Advanced Database Applications',
      teacher: 'Dr. Jones',
      day: 'Friday',
      time: '3:00 PM - 5:00 PM',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleDelete = (index) => {
    const newTimetable = [...timetable];
    newTimetable.splice(index, 1);
    setTimetable(newTimetable);
  };

  const handleUpdate = (index, updatedDetails) => {
    const newTimetable = [...timetable];
    newTimetable[index] = { ...newTimetable[index], ...updatedDetails };
    setTimetable(newTimetable);
  };

  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  const filteredTimetable = timetable.filter((item) =>
    item.subject.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="timetable-container">
      <h1>Student Timetable</h1>
      <input
        type="text"
        placeholder="Search subjects..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Day</th>
            <th>Time</th>
            <th>Teacher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTimetable.map((item, index) => (
            <tr key={index} className={selectedRow === index ? 'highlighted' : ''}>
              <td>{item.subject}</td>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.teacher}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
