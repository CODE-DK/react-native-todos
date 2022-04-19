import React, {FC} from 'react';
import {StyleSheet, View, ViewStyle} from "react-native";
import {THEME} from "../../theme";

const styles = StyleSheet.create<{ default: ViewStyle }>({
    default: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 5,
        borderColor: THEME.BOARDER_COLOR,
        backgroundColor: "white",
        // this shadows works only for ios
        shadowColor: "black",
        shadowRadius: 5,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 2,
            height: 2
        },
        //this shadows only for android
        elevation: 8,
    }
})

interface CardProps {
    style: ViewStyle
}

export const Card: FC<CardProps> = ({children, style}) => {
    return (
        <View style={{...styles.default, ...style}}>
            {children}
        </View>
    );
};