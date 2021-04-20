import * as React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {AlbumItem} from "./Components/AlbumItem";
import {useEffect, useState} from "react";

export function AlbumScreen(props) {
  const [album, setAlbum] = useState(null);
  const [albums, setAlbums] = useState(null);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${props.route.params.user.id}`)
    .then((response) => response.json())
    .then((json) => setAlbums(json));
  }, []);
  
  const onChange = (value) => {
    setAlbum(value);
  };
  const AlbumContextual = AlbumStyle();
  
  return (
    <View style={AlbumContextual.cardContainer}>
      <FlatList
        data={albums}
        numColumns={2}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() => onChange(album)}
            style={AlbumContextual.cardRow}
          >
             <AlbumItem
               id={item.id}
               title={item.title}
             />
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const AlbumStyle = () =>
  StyleSheet.create ({
    cardContainer: {
      flex: 1,
      padding: 10
    },
    cardRow: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      flexDirection: "row",
      justifyContent: "space-between"
    }
  });


