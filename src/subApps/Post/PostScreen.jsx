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
import { COLORS } from "../../assets/colors";

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
          color={COLORS.brandOrange}
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
    postContainer: {
      flex: 1,
      margin: 24,
    },
    title: {
      color: COLORS.black,
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
      backgroundColor: COLORS.brandOrange,
      borderRadius: 100,
      height: "40%",
      justifyContent: "center",
    },
    commentContainer: {
      flex: 3,
      borderRadius: 30,
      backgroundColor: COLORS.brandOrange,
    },
    commentTitle: {
      fontSize: 20,
      alignSelf: "center",
      color: COLORS.white,
      marginVertical: 24,
    },
  });
