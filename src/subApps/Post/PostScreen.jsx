import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { MiniPost } from "./Components/MiniPost";
import { useNavigation } from "@react-navigation/native";

export function PostScreen(props) {
  const navigation = useNavigation();
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const getPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(
          json.filter((item) => item.userId === props.route.params.user.id)
        );
        setIsPending(false);
      });
  };

  useEffect(() => {
    setIsPending(true);
    getPosts();
  }, []);

  return (
    <ScrollView>
      {isPending ? (
        <ActivityIndicator
          style={{ marginTop: 100 }}
          size="large"
          color="#ff7A00"
        />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostDetail", { post: item })}
              style={styles.container}
            >
              <MiniPost post={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-evenly",
    maxHeight: 120,
  },
  containerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  containerText: {
    fontSize: 14,
  },
});
