import React, {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ITodo} from "../data/models";

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        marginBottom: 10
    }
});

interface TodoProps {
    todo: ITodo
}

const Todo: FC<TodoProps> = ({todo}) => {
    return (
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
    );
};

export default Todo;