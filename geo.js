navigator.geolocation.getCurrentPosition(function(position) {
    alert("Latitude: " + position.coords.latitude, );
    alert("Longitude: " + position.coords.longitude);
  });
  