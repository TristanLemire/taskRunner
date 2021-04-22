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
import { User } from "../../typing";
import { COLORS, FONTSIZES, SPACES } from "../../assets/tokens";

type HomeScreenProps = {
  users: User[] | null;
  error: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  retry: () => void;
};

export const HomeScreen = (props: HomeScreenProps) => {
  const style = HomeScreenStyle();
  const [value, setValue] = useState<string | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    setUsers(props.users);
  }, [props.users]);

  const onChangeSearch = (newVal: string) => {
    if (!props.users) {
      return;
    }
    newVal === null || newVal === ""
      ? setUsers(props.users)
      : setUsers(
          props.users.filter((item) =>
            item.name.toLowerCase().includes(newVal.toLowerCase())
          )
        );
  };

  return (
    <>
      <SafeAreaView style={style.droidSafeArea}>
        <ScrollView>
          {props.error && (
            <ErrorMessage
              message={
                "Oups ! Une erreur s'est glissée dans la page, veuillez réessayer."
              }
              retry={props.retry}
            />
          )}
          <Text style={style.title}>Choisir un utilisateur</Text>
          <SearchBar
            platform={Platform.OS === "ios" ? "ios" : "android"}
            lightTheme
            onChangeText={(newVal) => {
              setValue(newVal);
              onChangeSearch(newVal);
            }}
            placeholder="Chercher un utilisateur ..."
            placeholderTextColor={COLORS.grey}
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
                  style={style.container}
                >
                  <MiniProfile item={item}></MiniProfile>
                </TouchableOpacity>
              )}
            />
          )}
          {users !== null && <UsersMap users={users} />}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const HomeScreenStyle = () =>
  StyleSheet.create({
    title: {
      margin: SPACES.xdefault,
      color: COLORS.black,
      textAlign: "center",
      fontSize: FONTSIZES.xlarge,
      fontWeight: "bold",
      fontFamily: "Montserrat, sans-serif",
    },
    container: {
      margin: SPACES.default,
      padding: SPACES.default,
    },
    droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? SPACES.large : SPACES.none,
    },
  });
