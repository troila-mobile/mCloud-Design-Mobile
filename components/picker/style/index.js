import { StyleSheet } from 'react-native'


export default (theme) => StyleSheet.create({
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    header: {
        height: 44,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
    },
    headerItem: {
        height: 44,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionText: {
        color: theme.brand_primary,
        fontSize: 18,
        textAlign: 'center',
    },
    okText: {},
    dismissText: {},
    title: {
        color: '#666',
        fontSize: 18,
        textAlign: 'center',
    },
    modelContainer:{
        flex:1,
    },
    topView:{
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
    },
})
