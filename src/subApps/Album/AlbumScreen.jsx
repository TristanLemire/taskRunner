import * as React from "react";
import {
  FlatList, StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {AlbumItem} from "./Components/AlbumItem";
import {useEffect, useState} from "react";

export function AlbumScreen(props) {
  const [album, setAlbum] = useState(null);
  const [albums, setAlbums] = useState(null);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((response) => response.json())
    .then((json) => setAlbums(json));
  }, []);
  
  const onChange = (value) => {
    setAlbum(value);
  };
  
  return (
    <View style={styles.cardContainer}>
      <FlatList
        data={albums}
        numColumns={2}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() => onChange(album)}
            style={styles.cardRow}
          >
             <AlbumItem
             url={item.url}
             title={item.title}
             />
          </TouchableOpacity>
        }
      />
    </View>
  );
}

styles = StyleSheet.create ({
  cardContainer: {
    flex: 1,
    padding: 20
  },
  cardRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

