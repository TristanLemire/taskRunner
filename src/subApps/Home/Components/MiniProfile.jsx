import React from "react";
import { Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export function MiniProfile(props) {
	const { item } = props;

	return (
		<ListItem bottomDivider pad={16}>
			<Avatar
				rounded
				containerStyle={{ backgroundColor: "#BDBDBD" }}
				size="medium"
			/>
			<ListItem.Content>
				<ListItem.Title>
					<Text>{item.name}</Text>
				</ListItem.Title>
				<ListItem.Subtitle>
					<Text>{item.email}</Text>
				</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	);
}
