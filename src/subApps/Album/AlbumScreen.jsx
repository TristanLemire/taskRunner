import * as React from "react";
import {
  FlatList,
  TouchableOpacity,
  View
} from "react-native";
import {AlbumItem} from "./Components/AlbumItem";
import {useState} from "react";

export function AlbumScreen(props) {
  const [albums, setAlbums] = useState([
    {
      userId: 1,
      id: 1,
      title: "quidem molestiae enim"
    },
    {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa"
    }
  ]);
  
  return (
    <View
      style={{ flex: 1, padding: 20  }}
    >
      <FlatList
        data={albums}
        numColumns={2}
        renderItem={({ item }) =>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}
          >
             <AlbumItem />
          </TouchableOpacity>
        }
      />
    </View>
  );
}
