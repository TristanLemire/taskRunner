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
  const style = PostScreenStyle();

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
    <ScrollView style={style.page}>
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
            >
              <MiniPost post={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </ScrollView>
  );
}

const PostScreenStyle = () =>
  StyleSheet.create({
    page: {
      flex: 1,
    },
  });
