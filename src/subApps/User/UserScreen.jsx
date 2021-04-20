import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

export const UserScreen = (props) => {

const {
  route: {
    params: {
      user: {
        username,
        email,
        phone,
        website,
        company: {
          name,
          catchPhrase,
          bs,
        },
        address: {
          street,
          suite,
          city,
          zipcode,
          geo: {
            lat,
            lng,
          }
        }
      }
    }
  }
} = props;

  const latitude = parseInt(lat, 10);
  const longitude = parseInt(lng, 10);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ff7A00"}}>
      <View style={styles.username}>
        <Avatar
          rounded
          containerStyle={{ backgroundColor: "#BDBDBD" }}
          size="large"
        />
        <Text>{username}</Text>
      </View>

      <Text>Personnal Info</Text>
      <View style={styles.userInfo}>
        <Text><Ionicons name="mail-outline" size={22} color="#ff7A00" />{email}</Text>
        <Text><Ionicons name="location-outline" size={22} color="#ff7A00" />{street} {suite} {city} {zipcode}</Text>
        <Text><Ionicons name="phone-portrait-outline" size={22} color="#ff7A00" />{phone}</Text>
        <Text><Ionicons name="globe-outline" size={22} color="#ff7A00" />{website}</Text>
      </View>

      <Text>Company</Text>
      <View style={styles.userCompany}>
        <Text>{name}</Text>
        <Text>{catchPhrase}</Text>
        <Text>{bs}</Text>
      </View>

      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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
