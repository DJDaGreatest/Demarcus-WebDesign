// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Functional component for displaying current and sample data fetched from an API.
 * @returns JSX.Element
 */
const App = () => {
  // State variables to hold current and sample data
  const [currentData, setCurrentData] = useState([]);
  const [sampleData, setSampleData] = useState([]);

  // Effect hook to fetch data on component mount and update every second
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch current data
        const currentResponse = await axios.get('https://smstestbed.nist.gov/vds/current');
        setCurrentData(currentResponse.data);

        // Fetch sample data
        const sampleResponse = await axios.get('https://smstestbed.nist.gov/vds/sample');
        setSampleData(sampleResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Initial data fetch and interval setup
    fetchData();
    const interval = setInterval(fetchData, 1000); // Update data every second

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // JSX to display current and sample data
  return (
    <div>
      <h1>Current Data</h1>
      <ul>
        {currentData.map((item) => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>

      <h1>Sample Data</h1>
      <ul>
        {sampleData.map((item) => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
