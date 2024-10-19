import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // State to store API response data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from the API
  const fetchData = () => {
    axios
      .get('https://your-api-id.execute-api.region.amazonaws.com/prod/get-data')
      .then(response => {
        // Store the response data in state
        setData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('API Error:', error);
        setError(error); // Store any errors
        setLoading(false);
      });
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // The empty array ensures the effect runs only once when the component mounts

  // Conditionally render content based on state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>API Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display fetched data */}
      <button onClick={fetchData}>Refresh Data</button> {/* Optional refresh button */}
    </div>
  );
}

export default App;
