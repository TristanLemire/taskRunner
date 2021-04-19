import * as React from "react";
import {Image, Text, View} from "react-native";

export function AlbumItem() {
  return (
    <View style={{
      marginBottom: 20
      }}
    >
      <Image
        source={{uri: "https://picsum.photos/500/500"}}
        style={{
          width: 150,
          height: 100,
          resizeMode: 'cover',
        }}
      />
      <Text>Favoris</Text>
    </View>
  );
}
