import React, { useEffect } from "react";

function Heatmap() {
  useEffect(() => {
    // Sample data
    var locations = [
      { pincode: 560043, totalReq: 243, noOfBags: 300 },
      { pincode: 560029, totalReq: 500, noOfBags: 800 },
      { pincode: 560036, totalReq: 100, noOfBags: 800 }
      // Add more locations as needed
    ];

    function initMap() {
      var map = new window.google.maps.Map(document.getElementById('heatmap'), {
        center: { lat: 12.971598, lng: 77.594562 }, // Set your initial map center
        zoom: 12
      });

      var heatmapData = [];

      // Loop through locations and create heatmap data
      locations.forEach(function (location) {
        var color = 'green'; // Default color

        if (location.noOfBags > 100 && location.noOfBags <= 200) {
          color = 'orange';
        } else if (location.noOfBags > 200) {
          color = 'red';
        }

        heatmapData.push({
          location: new window.google.maps.LatLng(location.pincode), // Use actual latlng if available
          weight: location.noOfBags,
          fillColor: color
        });
      });

      var heatmap = new window.google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: map
      });
    }

    

 
      initMap();
    
  }, []);

  return (
    <div className="heatmapContainer">
      <div id="heatmap" style={{ height: '500px' }}></div>
    </div>
  );
}

export default Heatmap;
