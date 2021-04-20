import React, { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

import { MiniProfile } from "./Components/MiniProfile";
import { ErrorMessage } from "../../components/error";

import { SearchBar } from "react-native-elements";

export function HomeScreen(props) {
  const HomeScreenContextual = HomeScreenStyle();
  const [value, setValue] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setUsers(props.users);
  }, [props.users]);

  const onChangeSearch = (newVal) => {
    newVal === null || newVal === ""
      ? setUsers(props.users)
      : setUsers(props.users.filter((item) => item.name.includes(newVal)));
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {props.error && (
            <ErrorMessage
              message={
                "Oups ! Une erreur s'est glissée dans la page, veuillez réessayer."
              }
              retry={props.retry}
            />
          )}
          <Text style={HomeScreenContextual.title}>Choisir un utilisateur</Text>
          <SearchBar
            platform={Platform.OS === "ios" ? "ios" : "android"}
            lightTheme
            onChangeText={(newVal) => {
              setValue(newVal);
              onChangeSearch(newVal);
            }}
            placeholder="Chercher un utilisateur ..."
            placeholderTextColor="#888"
            round
            onClearText={() => setUsers(props.users)}
            value={value}
          />
          {users !== null && (
            <FlatList
              data={users}
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
