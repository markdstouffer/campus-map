import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGltYXJrcyIsImEiOiJja3R1ZzB0bzExemlyMm9wOXN1dmdtYXliIn0.10tKlktK0JWd6THSQwqn3Q";

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-71.0898);
  const [lat, setLat] = useState(42.3391);
  const [zoom, setZoom] = useState(14.44);
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  })

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    }).addControl(directions, 'top-left');
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
