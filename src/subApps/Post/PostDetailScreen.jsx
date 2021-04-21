import * as React from "react";
import { Text, View, Button } from "react-native";
import { ListItem } from "react-native-elements";

export function PostDetailScreen(props) {
  const {
    route: {
      params: {
        post: { id, body, title, userId },
      },
    },
  } = props;

  console.log("body", body);
  return (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Button title="Ajouter un commentaire"></Button>

      <ListItem bottomDivider pad={16}>
        <Text>Comment</Text>
        <ListItem.Content>
          <ListItem.Title>
            <Text>Comment title</Text>
          </ListItem.Title>

          <ListItem.Subtitle>
            <Text>Comment body</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}
