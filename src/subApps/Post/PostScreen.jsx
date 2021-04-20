import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export function PostScreen(props) {
  return (
    <View style={styles.page}>

      <View style={styles.container}>
      <Text style={styles.containerTitle}>Lorem dolor ipsum</Text>
      <Text style={styles.containerText}>ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum...</Text>
      </View>

      <View style={styles.container}>
      <Text style={styles.containerTitle}>Lorem dolor ipsum</Text>
      <Text style={styles.containerText}>ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum...</Text>
      </View>
      <View style={styles.container}>
      <Text style={styles.containerTitle}>Lorem dolor ipsum</Text>
      <Text style={styles.containerText}>ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum...</Text>
      </View>
      <View style={styles.container}>
      <Text style={styles.containerTitle}>Lorem dolor ipsum</Text>
      <Text style={styles.containerText}>ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-evenly',
    maxHeight: 120,
  },
  containerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  containerText: {
    fontSize: 14,
  }
});