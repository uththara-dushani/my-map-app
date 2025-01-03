'use client';

import React from 'react'

import { MapContainer,TileLayer,Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';

// Define the custom icon for the marker
const customIcon = L.icon({
  iconUrl: '/icon.png',
  iconSize: [35, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});
export const MapPoc = () => {
  return (
    <div style={{height: '500px', margin: '2rem'}}>Map
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
      <Marker position={[51.505, -0.09]} icon={customIcon}>
    <Popup>
    London, England <br /> near the Tower Bridge.
    </Popup>
  </Marker>
    </MapContainer>
    </div>
  )
}
