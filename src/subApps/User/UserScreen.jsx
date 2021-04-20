import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

export const UserScreen = (props) => {
  const user = props.route.params.user;
  const lat = parseInt(user.address.geo.lat, 10);
  const lng = parseInt(user.address.geo.lng, 10);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff7A00",
      }}
    >
      <View style={styles.username}>
        <Avatar
          rounded
          containerStyle={{ backgroundColor: "#BDBDBD" }}
          size="large"
          source={{ uri: user.image }}
        />
        <Text>{user.username}</Text>
      </View>

      <Text>Personnal Info</Text>
      <View style={styles.userInfo}>
        <Text>
          <Ionicons name="mail-outline" size={22} color="#ff7A00" />
          {user.email}
        </Text>
        <Text>
          <Ionicons name="location-outline" size={22} color="#ff7A00" />
          {user.address.street} {user.address.suite} {user.address.city}{" "}
          {user.address.zipcode}
        </Text>
        <Text>
          <Ionicons name="phone-portrait-outline" size={22} color="#ff7A00" />
          {user.phone}
        </Text>
        <Text>
          <Ionicons name="globe-outline" size={22} color="#ff7A00" />
          {user.website}
        </Text>
      </View>

      <Text>Company</Text>
      <View style={styles.userCompany}>
        <Text>{user.company.name}</Text>
        <Text>{user.company.catchPhrase}</Text>
        <Text>{user.company.bs}</Text>
      </View>

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
};

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
    borderRadius: 8,
  },
});
