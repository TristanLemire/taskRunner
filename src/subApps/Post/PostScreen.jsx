import * as React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import { MiniPost } from "./Components/MiniPost";

export function PostScreen(props) {
  return (
    <View style={styles.page}>
      <TouchableOpacity
        // onPress={() => props.setUser(post)}
        style={styles.container}
      >
      <MiniPost 
      // post={post}
      ></MiniPost>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
