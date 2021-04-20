import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
// import MapView from 'react-native-maps';
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

export const UserScreen = (props) => {
  const lat = parseInt(props.route.params.user.address.geo.lat, 10);
  const lng = parseInt(props.route.params.user.address.geo.lng, 10);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ff7A00"}}>
      <View style={styles.username}>
        <Avatar
          rounded
          containerStyle={{ backgroundColor: "#BDBDBD" }}
          size="large"
        />
        <Text>{props.route.params.user.username}</Text>
      </View>

      <Text>Personnal Info</Text>
      <View style={styles.userInfo}>
        <Text><Ionicons name="mail-outline" size={22} color="#ff7A00" />{props.route.params.user.email}</Text>
        <Text><Ionicons name="location-outline" size={22} color="#ff7A00" />{props.route.params.user.address.street} {props.route.params.user.address.suite} {props.route.params.user.address.city} {props.route.params.user.address.zipcode}</Text>
        <Text><Ionicons name="phone-portrait-outline" size={22} color="#ff7A00" />{props.route.params.user.phone}</Text>
        <Text><Ionicons name="globe-outline" size={22} color="#ff7A00" />{props.route.params.user.website}</Text>
      </View>

      <Text>Company</Text>
      <View style={styles.userCompany}>
        <Text>{props.route.params.user.company.name}</Text>
        <Text>{props.route.params.user.company.catchPhrase}</Text>
        <Text>{props.route.params.user.company.bs}</Text>
      </View>

      {/* <MapView
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  userCompany: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 8
  }
})
