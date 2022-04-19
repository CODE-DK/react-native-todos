import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import {ITodo} from "../models";
import {THEME} from "../theme";

const styles = StyleSheet.create<{
    todo: ViewStyle,
    title: ViewStyle
}>({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderWidth: 1,
        borderColor: THEME.BOARDER_COLOR,
        borderRadius: 5,
        marginBottom: 10
    },
    title: {
        fontFamily: "Roboto-Bold"
    }
});

interface TodoProps {
    todo: ITodo
    onRemove: (id: string) => void
    onOpen: (id: string) => void
}

export const Todo: FC<TodoProps> = ({todo, onRemove, onOpen}) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onOpen(todo.id)}
            onLongPress={longPressHandler}
        >
            <View style={styles.todo}>
                <Text style={styles.title}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    );
};