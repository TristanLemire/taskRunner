import * as React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, FONTSIZES, SPACES } from "../../assets/tokens";

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
        colors={[COLORS.primary, COLORS.secondary]}
        style={style.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <View style={style.headerProfile}>
        <Avatar
          rounded
          containerStyle={{ backgroundColor: COLORS.white }}
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
              size={SPACES.large}
              color={COLORS.primary}
            />
            <Text style={style.text}>{email}</Text>
          </View>

          <View style={style.textWithIcon}>
            <Ionicons
              style={style.icon}
              name="location-outline"
              size={SPACES.large}
              color={COLORS.primary}
            />
            <Text style={style.text}>
              {street} {suite} {city} {zipcode}
            </Text>
          </View>

          <View style={style.textWithIcon}>
            <Ionicons
              style={style.icon}
              name="phone-portrait-outline"
              size={SPACES.large}
              color={COLORS.primary}
            />
            <Text style={style.text}>{phone}</Text>
          </View>

          <View style={style.textWithIcon}>
            <Ionicons
              style={style.icon}
              name="globe-outline"
              size={SPACES.large}
              color={COLORS.primary}
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
      marginTop: SPACES.large,
    },
    titleName: {
      flex: 1,
      margin: SPACES.default,
      fontSize: FONTSIZES.default,
      fontWeight: "bold",
    },
    section: {
      flex: 1,
      alignItems: "center",
      margin: SPACES.xdefault,
    },
    sectionMap: {
      alignItems: "center",
      marginTop: SPACES.default,
    },
    titleSection: {
      marginBottom: SPACES.default,
      textDecorationLine: "underline",
      textTransform: "uppercase",
      fontSize: FONTSIZES.default,
      color: COLORS.white,
      fontWeight: "300",
    },
    box: {
      flex: 1,
      padding: SPACES.large,
      paddingBottom: SPACES.default,
      justifyContent: "space-between",
      backgroundColor: COLORS.white,
      borderRadius: 8,
      width: Dimensions.get("window").width / 1.1,
    },
    compagny: {
      padding: SPACES.large,
      backgroundColor: COLORS.white,
      borderRadius: 8,
      width: Dimensions.get("window").width / 1.1,
      alignItems: "center",
    },
    compagnyTitle: {
      marginBottom: SPACES.xdefault,
      fontSize: FONTSIZES.default,
      fontWeight: "bold",
      color: COLORS.black,
    },
    compagnyInfo: {
      marginBottom: SPACES.xdefault,
      fontSize: FONTSIZES.default,
      color: COLORS.black,
      fontStyle: "italic",
    },
    compagnyBs: {
      fontSize: FONTSIZES.default,
      color: COLORS.grey,
    },
    textWithIcon: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: SPACES.xdefault,
    },
    icon: {
      marginRight: SPACES.xdefault,
    },
    text: {
      flex: 1,
      flexWrap: "wrap",
    },
    background: {
      position: "absolute",
      left: SPACES.none,
      right: SPACES.none,
      top: SPACES.none,
      height: windowHeight,
    },
  });
