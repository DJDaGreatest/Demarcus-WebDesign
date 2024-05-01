// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [currentData, setCurrentData] = useState([]);
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentResponse = await axios.get('https://smstestbed.nist.gov/vds/current');
        setCurrentData(currentResponse.data);

        const sampleResponse = await axios.get('https://smstestbed.nist.gov/vds/sample');
        setSampleData(sampleResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000); // Update data every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

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