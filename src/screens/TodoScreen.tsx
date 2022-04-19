import React, {FC, useState} from 'react';
import {Button, StyleSheet, Text, View, ViewStyle} from "react-native";
import {ITodo} from "../models";
import {THEME} from "../theme";
import {Card} from "../components/ui/Card";
import {EditModal} from "../components/EditModal";

const styles = StyleSheet.create<{
    buttons: ViewStyle,
    title: ViewStyle,
    card: ViewStyle
}>({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    title: {
        fontSize: 20
    },
    card: {
        padding: 15,
        marginBottom: 20
    }
})

interface TodoScreenProps {
    goBack: () => void
    removeTodo: (id: string) => void
    onSave: (id: string, title: string) => void
    todo: ITodo
}

export const TodoScreen: FC<TodoScreenProps> = ({goBack, removeTodo, onSave, todo}) => {
    const [modal, setModal] = useState<boolean>(false)
    const saveHandler = (title: string) => {
        onSave(todo.id, title)
        setModal(false)
    }
    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />
            <Card style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button
                    title={"Редактировать"}
                    color={THEME.PRIMARY_COLOR}
                    onPress={() => setModal(true)}
                />
            </Card>
            <View style={styles.buttons}>
                <Button
                    title={"Назад"}
                    color={THEME.PRIMARY_COLOR}
                    onPress={goBack}
                />
                <Button
                    title={"Удалить"}
                    color={THEME.ERROR_COLOR}
                    onPress={() => removeTodo(todo.id)}
                />
            </View>
        </View>
    );
};