import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

import { MiniProfile } from "./Components/MiniProfile";

export function HomeScreen(props) {
  const HomeScreenContextual = HomeScreenStyle();
  return (
    <>
      {props.users !== null && (
        <SafeAreaView>
          <ScrollView>
            <Text>Choose a user</Text>
            <FlatList
              data={props.users}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => props.setUser(item)}
                  style={HomeScreenContextual.container}
                >
                  <MiniProfile item={item} ></MiniProfile>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </SafeAreaView>
      )}
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
