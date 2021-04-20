import * as React from "react";
import {
  FlatList,
  TouchableOpacity,
  View
} from "react-native";
import {AlbumItem} from "./Components/AlbumItem";

export function AlbumScreen(props) {
  return (
    <View
      style={{ flex: 1, padding: 20  }}
    >
      <FlatList
        data={props.route.params.user}
        numColumns={2}
        renderItem={({ item }) =>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}
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
