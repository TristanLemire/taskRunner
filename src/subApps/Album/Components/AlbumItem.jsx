import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

export function AlbumItem(props) {
  const AlbumContextual = AlbumStyle();
  
  return (
    <View style={AlbumContextual.cardBody}>
      <Image
        source={{uri:`https://picsum.photos/id/${props.id}/200/300`}}
        style={AlbumContextual.cardImage}
      />
      <Text numberOfLines={1} style={AlbumContextual.cardTitle}>
        {props.title}
      </Text>
    </View>
  );
}

const AlbumStyle = () =>
  StyleSheet.create ({
    cardBody: {
      marginBottom: 20,
      backgroundColor: "#e0e0e0"
    },
    cardImage: {
      width: 140,
      height: 100,
      resizeMode: 'cover',
    },
    cardTitle: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 8
    }
  });


