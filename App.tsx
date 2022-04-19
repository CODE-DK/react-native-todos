import {Alert, StyleSheet, View} from 'react-native';
import {ITodo} from "./src/models";
import React, {useState} from "react";

import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

import {useFonts} from 'expo-font';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 8
    },
});

export default function App() {
    const [todoId, setTodoId] = useState<string | null>(null);
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now().toString(),
            title: title
        }
        setTodos(prevState => [
            ...prevState,
            newTodo
        ])
    }
    const updateTodo = (id: string, title: string) => {
        setTodos(prevState => prevState.map(it => {
            if (it.id === id) {
                it.title = title
            }
            return it
        }))
    }
    const removeTodo = (id: string) => {
        const showAlert = () => {
            Alert.alert(
                "Удаление",
                "Вы не сможете вернуть заметку",
                [
                    {
                        text: "Отмена",
                        style: "cancel"
                    },
                    {
                        text: "Удалить",
                        style: "destructive",
                        onPress: () => {
                            setTodoId(null)
                            setTodos(prevState => prevState.filter(todo => todo.id !== id))
                        },
                    }
                ],
                {
                    cancelable: false
                }
            );
        }
        showAlert()
    }
    let screen = (<MainScreen addTodo={addTodo}
                              removeTodo={removeTodo}
                              openTodo={(id: string) => setTodoId(id)}
                              todos={todos}/>);
    if (todoId) {
        screen = (<TodoScreen todo={todos.filter(someTodo => someTodo.id === todoId)[0]}
                              goBack={() => setTodoId(null)}
                              onSave={updateTodo}
                              removeTodo={removeTodo}/>);
    }

    const [isLoaded] = useFonts({
        "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    });

    if (!isLoaded) {
        return null;
    }

    return (
        <View>
            <Navbar title={"You todos"}/>
            <View style={styles.container}>
                {screen}
            </View>
        </View>
    );
}
