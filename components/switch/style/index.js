import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    wrapper: {
        height: 34,
        width: 52,
        borderRadius: 34 / 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    switchBtn: {
        height: 29,
        width: 49,
        backgroundColor: '#fff',
        borderRadius: 29 / 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 1,
    },
    switchThumb: {
        width: 29,
        height: 29,
        borderRadius: 29 / 2,
        backgroundColor: '#fff',
        position: 'absolute',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        zIndex: 1,
        elevation: 4,
    },
})
