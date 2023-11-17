import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./taskcompo.css"

function Task(props) {
    const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pincode=props.pincode;
        const apiKey = 'AIzaSyDED2KrlWQj7qML9yACc8TkXMk9HjrDjiU';
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=india&components=postal_code:560049&sensor=false&key=${apiKey}`);
        setLocationData(response.data);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchData();
  }, []);

  const extractedNames = locationData?.results[0]?.postcode_localities?.slice(0, 2) || [];

  return (
    <div className='Task'>
      <div className='AreaName'>
        <h3>
        {extractedNames.length > 0 && (
        <div className='converted'>
          <ul id='convertedarea'>
            {extractedNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
      </h3>
        <button className='bbb'>View Location</button>
      </div>
    </div>
  )
}

export default Task
