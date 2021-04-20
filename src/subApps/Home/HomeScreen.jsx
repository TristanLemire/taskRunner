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

export function HomeScreen(props) {
  const HomeScreenContextual = HomeScreenStyle();
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
          <Text>Choose a user</Text>
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
    container: {
      margin: 8,
      padding: 8,
      borderWidth: 1,
      borderColor: "black",
    },
  });
