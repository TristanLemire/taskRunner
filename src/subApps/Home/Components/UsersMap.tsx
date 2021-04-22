import React from "react";
import MapView, { Marker } from "react-native-maps";
import { User } from "../../../typing";
import { View } from "react-native";

type UsersMapProps = {
  users: User[];
};

export const UsersMap = (props: UsersMapProps) => {
  return (
    <View>
      {props.users && (
        <MapView
          style={{ height: 200, width: "100%" }}
          initialRegion={{
            latitude:
              props.users[0] && parseInt(props.users[0].address.geo.lat, 10),
            longitude:
              props.users[0] && parseInt(props.users[0].address.geo.lng, 10),
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
      )}
    </View>
  );
};
