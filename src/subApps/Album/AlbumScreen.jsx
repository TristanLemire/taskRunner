import * as React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View
} from "react-native";
import {AlbumItem} from "./Components/AlbumItem";

export function AlbumScreen() {
  return (
    <>
      <SafeAreaView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",padding: 20 }}>
          <View style={{ flex: 1, flexDirection: "row",justifyContent: "space-between",flexWrap: "wrap"}}>
            <AlbumItem />
            <AlbumItem />
            <AlbumItem />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
