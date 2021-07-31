import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

//styles
import googleMapStyles from './GoogleMapStyles';
import './gmap.scss';

export default function Gmap() {
  const options = {
    zoom: 17,
    minZoom: 17,
    maxZoom: 18,
    disableDefaultUI: true,
    streetViewControl: true,
    center: {
      lat: 50.751642333131244,
      lng: 25.329876895818945,
    },
    ...googleMapStyles,
  };
  return (
    <div className="gmap_wrapper">
      <LoadScript googleMapsApiKey="AIzaSyBOczvH2n2uuDy6VClOiM1r4UoEKCV4F6M">
        <GoogleMap
          mapContainerClassName="gmap"
          options={options}
          onLoad={this.props.onLoadMap}>
          <Marker
            position={{
              lat: 50.7516779698738,
              lng: 25.329030658899786,
            }}
            title="Ми знаходимось тут"
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
