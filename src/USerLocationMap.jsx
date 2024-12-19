import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const UserLocationMap = ({ disasters }) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const filterNearbyDisasters = () => {
    if (!userLocation) return [];
    return disasters.filter((disaster) => {
      const disasterCoords = disaster.geometry[0].coordinates;
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lon,
        disasterCoords[1], // latitude of disaster
        disasterCoords[0], // longitude of disaster
      );
      return distance < 1000; // Filter disasters within 1000 km radius
    });
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const nearbyDisasters = filterNearbyDisasters();

  return (
    <div className="map-container" style={{ height: '500px' }}>
      {userLocation && (
        <MapContainer center={[userLocation.lat, userLocation.lon]} zoom={5} style={{ height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* User's Location Marker */}
          <Marker position={[userLocation.lat, userLocation.lon]}>
            <Popup>Your current location</Popup>
          </Marker>

          {/* Disaster Markers */}
          {nearbyDisasters.map((disaster) => (
            <Marker
              key={disaster.id}
              position={[disaster.geometry[0].coordinates[1], disaster.geometry[0].coordinates[0]]}
              icon={new L.Icon({ iconUrl: require('leaflet/dist/images/marker-icon.png') })}
            >
              <Popup>
                <h3>{disaster.title}</h3>
                <p><strong>Category:</strong> {disaster.categories.map((cat) => cat.title).join(", ")}</p>
                <p><strong>Date:</strong> {new Date(disaster.geometry[0].date).toLocaleDateString()}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default UserLocationMap;
