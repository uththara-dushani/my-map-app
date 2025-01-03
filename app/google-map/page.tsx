'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet'; 
import L from 'leaflet';

// Define the custom icon for the marker
const customIcon = L.icon({
  iconUrl: '/icon.png',
  iconSize: [38, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});// Import the type

export default function GoogleMap() {
  const center: LatLngTuple = [51.505, -0.09]; // Explicitly define as LatLngTuple
  const zoom = 13;

  return (
    <div style={{marginTop:"3rem"}}>
         <MapContainer
      center={center}
      zoom={zoom}
      style={{ width: '80%', height: '400px',margin: 'auto' }}
    >
      <TileLayer
         url={`https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
        attribution="&copy; Google Maps contributors"
      />
       <Marker position={center} icon={customIcon}>
    <Popup>
    London, England <br /> near the Tower Bridge.
    </Popup>
  </Marker>
    </MapContainer>
    </div>
   
  );
}

// mt1.google.com/vt/lyrs=m: This part of the URL specifies the map type. You can choose from:
// m: Standard map
// s: Satellite imagery
// h: Hybrid (satellite + road)
// p: Terrain
// r: Roadmap
// {x}, {y}, {z}: These placeholders are used by Leaflet for tiling.
// key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}: This is where you place your Google Maps API key.