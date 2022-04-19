import React, {FC} from 'react';
import {FlatList, Image, StyleSheet, View} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {ITodo} from "../models";

const styles = StyleSheet.create({
    imageWrapper: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    }
})

interface MainScreenProps {
    addTodo: (title: string) => void
    removeTodo: (id: string) => void
    openTodo: (id: string) => void

    todos: ITodo[]
}

export const MainScreen: FC<MainScreenProps> = ({openTodo, addTodo, removeTodo, todos}) => {
    let content = (
        <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Todo
                    todo={item}
                    onRemove={removeTodo}
                    onOpen={openTodo}
                />
            )}
        />);
    if (todos.length === 0) {
        content = (
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={require("../../assets/no-items.png")}
                />
            </View>
        )
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    );
};