// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS for styling

// The main component responsible for fetching and displaying manufacturing data
const App = () => {
  // State variables to store current and sample data, base URL, and number of samples
  const [currentData, setCurrentData] = useState([]); // Stores current manufacturing data
  const [sampleData, setSampleData] = useState([]); // Stores sample manufacturing data
  const [url, setUrl] = useState('https://smstestbed.nist.gov/vds/'); // Default base URL for API endpoints
  const [count, setCount] = useState(1000); // Default number of samples to retrieve

  // Fetch data from API endpoints and update state variables
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch current data from the API
        const currentResponse = await axios.get(`${url}current`);
        setCurrentData(currentResponse.data);

        // Fetch sample data with specified count from the API
        const sampleResponse = await axios.get(`${url}sample?count=${count}`);
        setSampleData(sampleResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Initial data fetch
    const interval = setInterval(fetchData, 1000); // Update data every second

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [url, count]); // Execute effect when URL or count changes

  return (
    <div className="container">
      {/* Application title */}
      <h1 className="title">Manufacturing Data Viewer</h1>
      
      {/* Settings section to change base URL and number of samples */}
      <div className="settings-section">
        <h2 className="section-title">Settings</h2>
        {/* Input field to change base URL */}
        <div className="input-group">
          <label className="input-label">Base URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="input-field"
          />
        </div>
        {/* Input field to change number of samples */}
        <div className="input-group">
          <label className="input-label">Number of Samples:</label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="input-field"
          />
        </div>
      </div>
      
      {/* Section to display current manufacturing data */}
      <div className="data-section">
        <h2 className="section-title">Current Data</h2>
        <ul className="data-list">
          {currentData.map((item) => (
            <li key={item.id} className="data-item">
              <span className="data-name">{item.name}:</span> {item.value}
            </li>
          ))}
        </ul>
      </div>

      {/* Section to display sample manufacturing data */}
      <div className="data-section">
        <h2 className="section-title">Sample Data</h2>
        <ul className="data-list">
          {sampleData.map((item) => (
            <li key={item.id} className="data-item">
              <span className="data-name">{item.name}:</span> {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
