import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox } from 'react-native-elements'


export function TodoList(props) {
    const [checked, setChecked] = useState(false);
    console.log("props", props.todoTitle);

return (
    <View style={styles.viewList}>     
        <CheckBox
            left
            title={props.todoTitle}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={checked}
            containerStyle={styles.task}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    viewList : {
        width: "100%",
        height: '4em',
    },
    task:{
        height: "100%",
        width: "100%",
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1, 
        borderTopColor: '#DDDDDD',
        borderTopWidth: 1,
        marginLeft: 0,
        padding: "1.125em"
    }
});

export default TodoList;