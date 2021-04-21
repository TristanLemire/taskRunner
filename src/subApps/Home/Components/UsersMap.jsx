import React from "react";
import MapView, { Marker } from "react-native-maps";

export function UsersMap({data}) {

  return (
    <MapView
      style={{ height: 200, width: "100%" }}
      initialRegion={{
				latitude: parseInt(data[0].address.geo.lat, 10),
				longitude: parseInt(data[0].address.geo.lng, 10),
				latitudeDelta: 20,
				longitudeDelta: 20,
   		}}
		>
      {data.map( user => (
        <Marker coordinate={{ latitude: parseInt(user.address.geo.lat, 10), longitude: parseInt(user.address.geo.lng, 10)}} />
      ))}
    </MapView>
  );
}
