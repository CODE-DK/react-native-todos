import React, {FC} from 'react';
import {StyleSheet, Text, View, ViewStyle} from "react-native";
import {THEME} from "../theme";

const styles = StyleSheet.create<{
    navbar: ViewStyle,
    text: ViewStyle
}>({
    navbar: {
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: THEME.PRIMARY_COLOR,
        paddingBottom: 10
    },
    text: {
        color: THEME.SECONDARY_COLOR,
        fontSize: 20
    }
})

interface NavbarProps {
    title: string
}

export const Navbar: FC<NavbarProps> = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );

};
