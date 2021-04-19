import * as React from "react";
import {
  FlatList,
  SafeAreaView,
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
    <>
      <SafeAreaView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",padding: 20 }}>
          <FlatList
            data={albums}
            renderItem={({ item }) =>
              <TouchableOpacity
                style={{ flex: 1, flexDirection: "row",justifyContent: "space-between",flexWrap: "wrap"}}
              >
                <AlbumItem />
              </TouchableOpacity>
            }
          />
        </View>
      </SafeAreaView>
    </>
  );
}
