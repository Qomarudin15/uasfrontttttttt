import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SunscreenList = () => {
  const [sunscreens, setSunscreens] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Fetching data from backend...');
    axios.get('http://localhost:3001/sunscreens')
      .then(response => {
        console.log('Data fetched:', response.data);
        setSunscreens(response.data);
      })
      .catch(error => {
        setError('Error fetching data');
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Sunscreen</h1>
      {error && <p>{error}</p>}
      <ul>
        {sunscreens.map((sunscreen, index) => (
          <li key={index}>
            <h2>{sunscreen.nama}</h2>
            <p>{sunscreen.deskripsi}</p>
            <p>Harga: {sunscreen.harga}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SunscreenList;
