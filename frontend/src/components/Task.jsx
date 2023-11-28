import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./taskcompo.css";
import CloseIcon from "@mui/icons-material/Close";
function Task(props) {
  const pincode = props.pincode;
  <script
    async
    defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjzqFP8e3TkQxPOzPWf0RfxiimfmAYLm4&libraries=visualization&callback=initMap"
  ></script>;
  const [locationData, setLocationData] = useState(null);
  const mapRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pincode = props.pincode;
        const apiKey = "AIzaSyDED2KrlWQj7qML9yACc8TkXMk9HjrDjiU";
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=india&components=postal_code:${pincode}&sensor=false&key=${apiKey}`
        );
        setLocationData(response.data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
  }, []);

  const extractedNames =
    locationData?.results[0]?.postcode_localities?.slice(0, 1) || [];

  function geocodeAddress(apiKey, address, onMapReady) {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          const location = data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;

          // Invoke the callback with coordinates
          onMapReady(latitude, longitude);
        } else {
          console.error(`Geocoding request failed with status: ${data.status}`);
        }
      })
      .catch((error) => {
        console.error("Error during geocoding request:", error);
      });
  }

  const viewPopup = () => {
    geocodeAddress(
      "AIzaSyDED2KrlWQj7qML9yACc8TkXMk9HjrDjiU",
      extractedNames,
      (latitude, longitude) => {
        // Display the map centered on the coordinates
        showMap(latitude, longitude);
      }
    );
  };

  const showMap = (latitude, longitude) => {
    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 15, // Adjust the zoom level as needed
    });

    // Add a marker for the specified location
    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: "Location",
    });
  };
  const show = function (id) {
    document.getElementById(id).style.display = "block";
    document.getElementById("close").style.display = "block";
    viewPopup();
  };
  const hide = function (id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("close").style.display = "none";
  };
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const toggleTask = () => {
    const task = document.getElementById(pincode);
    setIsChecked((prev) => !prev); // Toggle the isChecked state
  
    // Toggle the 'checked' class on the task element
    task.classList.toggle("checked");
  }
  return (
    <div className="Task" id={pincode}>
      <div className="AreaName">
        <h3>
          {extractedNames.length > 0 && (
            <div className="converted">
              <ul id="convertedarea">
                {extractedNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          )}
          
          
        </h3>
        <div className="buttony">
          <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleTask}
              id={`checkbox-${props.pincode}`}
            />
        
            <button className={pincode} id="try" onClick={() => show("map")}>
              View Location
            </button>
          </div>
      </div>
      <div>
        <div className="mapshow">
          <div id="map" ref={mapRef}></div>
          <CloseIcon id="clos" onClick={() => hide("map")} />
        </div>
      </div>
    </div>
  );
}

export default Task;
