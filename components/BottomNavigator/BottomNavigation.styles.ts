import { StyleSheet } from "react-native";

export const bottomNavigatorStyles = (theme: 'light' | 'dark' | null | undefined) => StyleSheet.create({
    pageView: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: theme === 'dark' ? "#000000" : "#f8f4f4"
    },
    topView: {
        height: '45%',
        paddingTop: 15,
        backgroundColor: '#d75158',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    firstRowTopView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2%',
        paddingTop: 30
    },
    firstRowTopViewAddress: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: 5
    },
    firstRowTopViewLocation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addressName: {
        fontWeight: '900',
        fontSize: 19,
        color: 'white'
    },
    fullAddress: {
        fontWeight: '400',
        fontSize: 13,
        color: '#eeffff'
    },
    downIcon: {
        color: 'white',
        fontSize: 19
    },
    addressSelector: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5
    },
    firstRowTopViewRightSection: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    }
})