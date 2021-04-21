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
import { UsersMap } from "./Components/UsersMap";
import { ErrorMessage } from "../../components/error";

import { SearchBar } from "react-native-elements";
import { User } from "../../../App";

type HomeScreenProps = {
  users: User[] | null;
  error: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  retry: () => void;
};

export function HomeScreen(props: HomeScreenProps) {
  const HomeScreenContextual = HomeScreenStyle();
  const [value, setValue] = useState<string | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  console.log(props);

  useEffect(() => {
    setUsers(props.users);
  }, [props.users]);

  const onChangeSearch = (newVal: string) => {
    if (!props.users) {
      return;
    }
    newVal === null || newVal === ""
      ? setUsers(props.users)
      : setUsers(props.users.filter((item) => item.name.includes(newVal)));
  };

  return (
    <>
      <SafeAreaView style={HomeScreenContextual.droidSafeArea}>
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
          {users !== null && 
            <UsersMap data={users} />
          }
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
    droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? 25 : 0,
    },
  });
