import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
// import * as parkData from "./data/skateboard-parks.json";
import mapStyles from "./mapstyles";

const MapWrapped = withScriptjs(
  withGoogleMap(() => {
    return (
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 17.385044, lng: 78.486671 }}
        defaultOptions={{}}
      ></GoogleMap>
    );
  })
);

const App = ({ lat, lng }) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <MapWrapped
        lat={lat}
        lng={lng}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD1evnI9XmPL4W05NUdZZe92af90-Esdd0`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default App;
