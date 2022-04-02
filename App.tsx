import {ScrollView, StyleSheet, View} from 'react-native';
import Navbar from "./src/components/Navbar";
import AddTodo from "./src/components/AddTodo";
import {ITodo} from "./src/data/models";
import React, {useState} from "react";
import Todo from "./src/components/Todo";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 8
    },
});

const DEFAULT_TITLE = "you todo list"

export default function App() {
    const [todos, setTodos] = useState<ITodo[]>([
        {id: "1", title: "купить хлеб"},
        {id: "2", title: "купить молоко"},
        {id: "3", title: "купить сосиськи"},
        {id: "4", title: "купить ежа"},
        {id: "5", title: "купить матрешку"},
        {id: "6", title: "купить и продать"},
        {id: "7", title: "купить что нибудь не нужное"},
        {id: "8", title: "купить что нибудь нужное"},
        {id: "9", title: "купить что нибудь нужное"},
        {id: "10", title: "продать что нибудь не нужное"},
        {id: "11", title: "продать что нибудь нужное"},
        {id: "12", title: "занять денег и не отдавать"},
        {id: "13", title: "отдать то, что никогда не занимал"},
        {id: "14", title: "поспать и проснуться"},
        {id: "15", title: "расчесать ежа"},
    ]);

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now().toString(),
            title: title
        }
        setTodos((todoList: ITodo[]) => [...todoList, newTodo]);
    }

    return (
        <View>
            <Navbar title={DEFAULT_TITLE}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <ScrollView>
                    {todos.map((todo) => (<Todo todo={todo} key={todo.id}/>))}
                </ScrollView>
            </View>
        </View>
    );
}
