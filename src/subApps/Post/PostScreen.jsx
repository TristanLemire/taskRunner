import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
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
              onPress={() =>
                navigation.navigate("PostDetail", {
                  post: item,
                  user: props.route.params.user,
                })
              }
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
    postContainer: {
      flex: 1,
      margin: 24,
    },
    title: {
      color: "#20232a",
      fontSize: 20,
      fontWeight: "bold",
    },
    body: {
      fontSize: 15,
      marginTop: 16,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
      width: "80%",
    },
    buttonComment: {
      backgroundColor: "#FF7A00",
      borderRadius: 100,
      height: "40%",
      justifyContent: "center",
    },
    commentContainer: {
      flex: 3,
      borderRadius: 30,
      backgroundColor: "#FF7A00",
    },
    commentTitle: {
      fontSize: 20,
      alignSelf: "center",
      color: "white",
      marginVertical: 24,
    },
  });
