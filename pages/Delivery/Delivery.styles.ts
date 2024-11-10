import { StyleSheet } from "react-native";

export const homeStyles = (theme: 'light' | 'dark' | null | undefined) => StyleSheet.create({
    pageView: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: theme === 'dark' ? "#1f1f1f" : "#f8f4f4"
    },
    topView: {
        height: '50%',
        backgroundColor: '#d75158',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    firstRowTopView: {
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    firstRowTopViewAddress: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    addressName: {
        fontWeight: '900',
        fontSize: 19,
    },
    fullAddress: {
        fontWeight: '100',
    },
    middleView: {
        height: '50%',
        borderBottomColor: 'black',
    }
})