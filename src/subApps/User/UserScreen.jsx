import * as React from "react";
import { Text, View, Button } from "react-native";
import MapView from 'react-native-maps';

export function UserScreen(props) {
  const lat = parseInt(props.route.params.user.address.geo.lat, 10);
  const lng = parseInt(props.route.params.user.address.geo.lng, 10);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{props.route.params.user.name}</Text>
      <Text>{props.route.params.user.username}</Text>
      
      <Text>Personnal Info</Text>
      
      <Text>{props.route.params.user.email}</Text>
      <Text>{props.route.params.user.address.street} {props.route.params.user.address.suite} {props.route.params.user.address.city} {props.route.params.user.address.zipcode}</Text>
      <Text>{props.route.params.user.phone}</Text>
      <Text>{props.route.params.user.website}</Text>
      
      <Text>Company</Text>
      
      <Text>{props.route.params.user.company.name}</Text>
      <Text>{props.route.params.user.company.catchPhrase}</Text>
      <Text>{props.route.params.user.company.bs}</Text>
      
      <Button
        onPress={() => props.route.params.onChange(false)}
        title="Select user"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      
      <MapView
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
