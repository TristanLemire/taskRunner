import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Post } from "./Components/Post"

export function PostScreen(props) {
  return (
    <View style={styles.page}>

      <Post>

      </Post>

    </View>

  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});