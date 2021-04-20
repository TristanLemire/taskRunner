import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

export const UserScreen = (props) => {

  const {
    route: {
      params: {
        user: {
          username,
          image,
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
    <View style={styles.page}>
      <View style={styles.headerProfile}>
        <Avatar
          rounded
          containerStyle={{ backgroundColor: "#BDBDBD" }}
          size="large"
          source={{ uri: image }}
        />
        <Text style={styles.titleName}>{username}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.titleSection}>Informations personnelles</Text>
        
        <View style={styles.box}>

          <View style={styles.textWithIcon}>
            <Ionicons style={styles.icon} name="mail-outline" size={22} color="#ff7A00" />
            <Text>{email}</Text>
          </View>
          
          <View style={styles.textWithIcon}>
              <Ionicons style={styles.icon} name="location-outline" size={22} color="#ff7A00" />
            <Text>
              {street} {suite} {city} {zipcode}</Text>
          </View>
          
          <View style={styles.textWithIcon}>
              <Ionicons style={styles.icon} name="phone-portrait-outline" size={22} color="#ff7A00" />
            <Text>
            {phone}</Text>
          </View>
          
          <View style={styles.textWithIcon}>
              <Ionicons style={styles.icon} name="globe-outline" size={22} color="#ff7A00" />
            <Text>
              {website}</Text>
          </View>

        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.titleSection}>Entreprise</Text>
        <View style={styles.box}>
          <Text>{name}</Text>
          <Text>{catchPhrase}</Text>
          <Text>{bs}</Text>
        </View>
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
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ff7A00",
  },
  headerProfile: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  titleName: {
    flex: 1,
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    margin: 24,
    flex: 1,
  },
  titleSection: {
    marginBottom: 16,
    textDecorationLine: "underline",
    textTransform: "uppercase",
    fontSize: 24,
    color: "white",
    fontWeight: "300",
  },
  box: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    backgroundColor: "white",
    borderRadius: 8,
  },
  textWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
})
