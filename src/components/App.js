import React, { useState, useEffect } from 'react';

const API_URL = 'https://dog.ceo/api/breeds/image/random';

const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch(API_URL)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setDogImageUrl(data.message);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogImageUrl} alt="A Random Dog" />
        </div>
      )}
    </div>
  );
};

export default App;
