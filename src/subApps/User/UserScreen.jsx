import * as React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const windowHeight = Dimensions.get("window").height;

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
          company: { name, catchPhrase, bs },
          address: {
            street,
            suite,
            city,
            zipcode,
            geo: { lat, lng },
          },
        },
      },
    },
  } = props;

  const latitude = parseInt(lat, 10);
  const longitude = parseInt(lng, 10);

  const style = UserScreenStyle();
  return (
    <ScrollView style={style.page}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#FF7A00", "#FFBC7E"]}
        style={style.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <View style={style.headerProfile}>
        <Avatar
          rounded
          containerStyle={{ backgroundColor: "#BDBDBD" }}
          size="large"
          source={{ uri: image }}
        />
        <Text style={style.titleName}>{username}</Text>
      </View>

      <View style={style.section}>
        <Text style={style.titleSection}>Informations personnelles</Text>

        <View style={style.box}>
          <View style={style.textWithIcon}>
            <Ionicons
              style={style.icon}
              name="mail-outline"
              size={22}
              color="#ff7A00"
            />
            <Text style={style.text}>{email}</Text>
          </View>

          <View style={style.textWithIcon}>
            <Ionicons
              style={style.icon}
              name="location-outline"
              size={22}
              color="#ff7A00"
            />
            <Text style={style.text}>
              {street} {suite} {city} {zipcode}
            </Text>
          </View>

          <View style={style.textWithIcon}>
            <Ionicons
              style={style.icon}
              name="phone-portrait-outline"
              size={22}
              color="#ff7A00"
            />
            <Text style={style.text}>{phone}</Text>
          </View>

          <View style={style.textWithIcon}>
            <Ionicons
              style={style.icon}
              name="globe-outline"
              size={22}
              color="#ff7A00"
            />
            <Text style={style.text}>{website}</Text>
          </View>
        </View>
      </View>

      <View style={style.section}>
        <Text style={style.titleSection}>Entreprise</Text>
        <View style={style.compagny}>
          <Text style={style.compagnyTitle}>{name}</Text>
          <Text style={style.compagnyInfo}>“{catchPhrase}“</Text>
          <Text style={style.compagnyBs}>{bs}</Text>
        </View>
      </View>
      <View style={style.sectionMap}>
        <Text style={style.titleSection}>Votre Position</Text>
        <MapView
          style={{ height: 200, width: "100%" }}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 20,
            longitudeDelta: 20,
          }}
        >
          <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
        </MapView>
      </View>
    </ScrollView>
  );
};

const UserScreenStyle = () =>
  StyleSheet.create({
    page: {
      flex: 1,
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
    sectionMap: {
      alignItems: "center",
      marginTop: 16,
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
    text: {
      flex: 1,
      flexWrap: "wrap",
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: windowHeight,
    },
  });
