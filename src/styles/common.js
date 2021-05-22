import { StyleSheet } from "react-native";
import { color } from "./colors.js";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        flex: 1,
        top: -20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    // shadowLong: {
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 8 },
    //     shadowOpacity: 0.15,
    //     shadowRadius: 14,
    //     // margin:2,
    //     elevation: 3,
    //     backgroundColor: '#fff'
    // },
    shadowLong: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 14,
        // margin:2,
        elevation: 14,
        backgroundColor: '#fff'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        // margin:2,
        elevation: 3,
        backgroundColor: '#fff'
    },
    iconMenu: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'grey',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.g800,
    },
    p: {
        fontSize: 14,
        color: color.g800
    },
    p50: {
        fontSize: 12,
        color: color.g700
    }
})