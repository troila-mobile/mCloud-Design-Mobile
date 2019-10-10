import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#FED39F',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#FED39F',
        backgroundColor: '#FFFAE4',
    },
    textContainer: {
        flex:1,
        overflow:'hidden',
    },
    textStyle: {
        color: '#FE821E',
        fontSize: theme.font_size_base,
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    closeStyle: {
        color: '#FE821E',
        fontSize: 20,
    },
    neverStyle: {
        color: '#FE821E',
        fontSize: theme.font_size_base,
        textDecorationLine: 'underline',
        fontWeight: '500',
    },
    closeMargin: {
        marginLeft: 15,
    },
})
