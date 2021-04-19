import * as React from "react";
import {Image, Text, View} from "react-native";

export function AlbumItem() {
  return (
    <View style={{
      marginBottom: 20,
      backgroundColor: "#e0e0e0"
      }}
    >
      <Image
        source={{uri: "https://picsum.photos/500/500"}}
        style={{
          width: 130,
          height: 100,
          resizeMode: 'cover',
        }}
      />
      <Text
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 8
        }}
      >Favoris</Text>
    </View>
  );
}
