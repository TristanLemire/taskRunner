import React from "react";
import MapView, { Marker } from "react-native-maps";
import { User } from "../../../typing";

type UsersMapProps = {
  users: User[];
};

export const UsersMap = (props: UsersMapProps) => {
  return (
    <MapView
      style={{ height: 200, width: "100%" }}
      initialRegion={{
        latitude: parseInt(props.users[0].address.geo.lat, 10),
        longitude: parseInt(props.users[0].address.geo.lng, 10),
        latitudeDelta: 20,
        longitudeDelta: 20,
      }}
    >
      {props.users.map((user) => (
        <Marker
          coordinate={{
            latitude: parseInt(user.address.geo.lat, 10),
            longitude: parseInt(user.address.geo.lng, 10),
          }}
        />
      ))}
    </MapView>
  );
};
