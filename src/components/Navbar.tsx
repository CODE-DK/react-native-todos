import React, {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "dodgerblue",
        paddingBottom: 10
    },
    text: {
        color: "white",
        fontSize: 20
    }
})

interface NavbarProps {
    title: string
}

const Navbar: FC<NavbarProps> = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );

};

export default Navbar;
