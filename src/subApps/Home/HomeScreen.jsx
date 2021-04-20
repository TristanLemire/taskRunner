import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { MiniProfile } from "./Components/MiniProfile";
import { ErrorMessage } from "../../components/error";

import { SearchBar } from "react-native-elements";

export function HomeScreen(props) {
  const HomeScreenContextual = HomeScreenStyle();
  const [value, setValue] = React.useState("");

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {props.error && (
            <ErrorMessage
              message={
                "Veuillez nous pardonner une erreur a du se produire de notre coter, veuillez réessayer."
              }
              retry={props.retry}
            />
          )}
          <Text style={HomeScreenContextual.title}>Choisir un utilisateur</Text>
          <SearchBar
            platform="android"
            lightTheme
            onChangeText={(newVal) => setValue(newVal)}
            placeholder="Chercher un utilisateur ..."
            placeholderTextColor="#888"
            round
            onClearText={() => console.log(onClearText())}
            value={value}
          />
          {props.users !== null && (
            <FlatList
              data={props.users}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => props.setUser(item)}
                  style={HomeScreenContextual.container}
                >
                  <MiniProfile item={item}></MiniProfile>
                </TouchableOpacity>
              )}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const HomeScreenStyle = () =>
  StyleSheet.create({
    title: {
      margin: 16,
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
    },
    container: {
      margin: 8,
      padding: 8,
    },
  });
