let googleMapStyles = {
  styles: [
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType : "road",
            elementType : "labels.icon",
            stylers : [
              {
                weight : 1
              }
            ]
          },
          {
            featureType : "road.highway.controlled_access",
            elementType : "labels.icon",
            stylers : [
              {
                visibility : "on"
              }
            ]
          },
          {
            featureType : "road.local",
            elementType : "labels",
            stylers : [
              {
                visibility : "off"
              }
            ]
          },
          {
            featureType : "transit",
            stylers : [
              {
                visibility : "off"
              }
            ]
          },
          {
            featureType : "transit.station.bus",
            elementType : "labels.icon",
            stylers : [
              {
                saturation : -5
              },
              {
                lightness : 5
              },
              {
                visibility : "on"
              },
              {
                weight : 1
              }
            ]
          }
    ]
};

export default googleMapStyles;