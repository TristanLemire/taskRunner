import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

export function AlbumItem(props) {
  return (
    <View style={styles.cardBody}>
      <Image
        source={{uri: props.url}}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>
        {props.title}
      </Text>
    </View>
  );
}

styles = StyleSheet.create ({
  cardBody: {
    marginBottom: 20,
    backgroundColor: "#e0e0e0"
  },
  cardImage: {
    width: 130,
    height: 100,
    resizeMode: 'cover',
  },
  cardTitle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8
  }
});

