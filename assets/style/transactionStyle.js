import { StyleSheet } from "react-native";


export const transStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    parentContainer: {
        width: "100%",
        paddingVertical: 10,
        backgroundColor: '#0ff',
        flexDirection: 'row',
        alignItems: "center"
    },
    transIconStyle: {
        height: 50,
        weight: 50
    }
})