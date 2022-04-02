import React, {FC, useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";

const styles = StyleSheet.create({
        block: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15
        },
        input: {
            width: "70%",
            padding: 8,
            borderStyle: "solid",
            borderBottomWidth: 1,
            borderBottomColor: "dodgerblue"
        }
    }
);

interface AddProps {
    onSubmit: (title: string) => void
}

const AddTodo: FC<AddProps> = ({onSubmit}: AddProps) => {
    const [value, setValue] = useState<string>("")

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue("")
        } else {
            Alert.alert("Заметка не может быть пустой :(")
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       onChangeText={text => setValue(text)}
                       value={value}
                       placeholder={"Новая заметка..."}
                       autoCorrect={true}
            />
            <Button onPress={pressHandler} title={"Добавить"}/>
        </View>
    );

};

export default AddTodo;
