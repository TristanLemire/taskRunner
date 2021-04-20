import * as React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

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

  const UserScreenStyleContextual = UserScreenStyle();
  return (
    <ScrollView style={UserScreenStyleContextual.page}>
      <View style={UserScreenStyleContextual.headerProfile}>
        <Avatar
          rounded
          containerStyle={{ backgroundColor: "#BDBDBD" }}
          size="large"
          source={{ uri: image }}
        />
        <Text style={UserScreenStyleContextual.titleName}>{username}</Text>
      </View>

      <View style={UserScreenStyleContextual.section}>
        <Text style={UserScreenStyleContextual.titleSection}>
          Informations personnelles
        </Text>

        <View style={UserScreenStyleContextual.box}>
          <View style={UserScreenStyleContextual.textWithIcon}>
            <Ionicons
              style={UserScreenStyleContextual.icon}
              name="mail-outline"
              size={22}
              color="#ff7A00"
            />
            <Text>{email}</Text>
          </View>

          <View style={UserScreenStyleContextual.textWithIcon}>
            <Ionicons
              style={UserScreenStyleContextual.icon}
              name="location-outline"
              size={22}
              color="#ff7A00"
            />
            <Text>
              {street} {suite} {city} {zipcode}
            </Text>
          </View>

          <View style={UserScreenStyleContextual.textWithIcon}>
            <Ionicons
              style={UserScreenStyleContextual.icon}
              name="phone-portrait-outline"
              size={22}
              color="#ff7A00"
            />
            <Text>{phone}</Text>
          </View>

          <View style={UserScreenStyleContextual.textWithIcon}>
            <Ionicons
              style={UserScreenStyleContextual.icon}
              name="globe-outline"
              size={22}
              color="#ff7A00"
            />
            <Text>{website}</Text>
          </View>
        </View>
      </View>

      <View style={UserScreenStyleContextual.section}>
        <Text style={UserScreenStyleContextual.titleSection}>Entreprise</Text>
        <View style={UserScreenStyleContextual.compagny}>
          <Text style={UserScreenStyleContextual.compagnyTitle}>{name}</Text>
          <Text style={UserScreenStyleContextual.compagnyInfo}>
            “{catchPhrase}“
          </Text>
          <Text style={UserScreenStyleContextual.compagnyBs}>{bs}</Text>
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
    </ScrollView>
  );
};

const UserScreenStyle = () =>
  StyleSheet.create({
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
      alignItems: "center",
      margin: 16,
      flex: 1,
    },
    titleSection: {
      marginBottom: 16,
      textDecorationLine: "underline",
      textTransform: "uppercase",
      fontSize: 16,
      color: "white",
      fontWeight: "300",
    },
    box: {
      flex: 1,
      padding: 24,
      paddingBottom: 8,
      justifyContent: "space-between",
      backgroundColor: "white",
      borderRadius: 8,
      width: Dimensions.get("window").width / 1.1,
    },
    compagny: {
      padding: 24,
      backgroundColor: "white",
      borderRadius: 8,
      width: Dimensions.get("window").width / 1.1,
      alignItems: "center",
    },
    compagnyTitle: {
      marginBottom: 16,
      fontSize: 16,
      fontWeight: "bold",
      color: "#181818",
    },
    compagnyInfo: {
      marginBottom: 16,
      fontSize: 14,
      color: "#181818",
      fontStyle: "italic",
    },
    compagnyBs: {
      fontSize: 14,
      color: "#666666",
    },
    textWithIcon: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    icon: {
      marginRight: 12,
    },
  });
