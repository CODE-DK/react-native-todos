import React, {FC, useState} from 'react';
import {Alert, Button, Modal, StyleSheet, TextInput, View, ViewStyle} from "react-native";
import {THEME} from "../theme";

const styles = StyleSheet.create<{
    default: ViewStyle,
    input: ViewStyle,
    buttons: ViewStyle
}>({
    default: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    input: {
        borderBottomColor: THEME.PRIMARY_COLOR,
        borderBottomWidth: 1,
        padding: 10,
        width: "80%",
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

interface EditModalProps {
    onCancel: () => void
    onSave: (title: string) => void
    visible: boolean,
    value: string
}

export const EditModal: FC<EditModalProps> = ({value, visible, onCancel, onSave}) => {
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert("Ошибка!",
                `Минимальная длина названия 3 символа. Сейчас ${title.trim().length} символов.`)
        } else {
            onSave(title)
        }
    }
    return (
        <Modal
            animationType={"slide"}
            visible={visible}
            transparent={false}
        >
            <View style={styles.default}>
                <TextInput
                    value={title}
                    style={styles.input}
                    onChangeText={setTitle}
                    placeholder={"Введите текст"}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button
                        title={"Отменить"}
                        onPress={onCancel}
                        color={THEME.ERROR_COLOR}
                    />
                    <Button
                        title={"Сохранить"}
                        onPress={saveHandler}
                    />
                </View>
            </View>
        </Modal>
    );
};