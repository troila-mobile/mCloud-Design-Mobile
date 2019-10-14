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
        justifyContent:'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.border_color_base,
        borderTopLeftRadius:theme.radius_lg,
        borderTopRightRadius:theme.radius_lg,
        backgroundColor: theme.picker_header_background_color,
    },
    headerItem: {
        height: 44,
        flex: 1,
        justifyContent: 'center',
    },
    actionText: {
        fontSize: theme.font_size_base,
        fontWeight:'bold',
    },
    okText: {
        color: theme.brand_primary,
    },
    dismissText: {
        color: theme.picker_dismiss_text_color,
    },
    title: {
        color: theme.picker_title_text_color,
        fontSize: theme.font_size_caption,
        textAlign: 'center',
    },
    modelContainer:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    topView:{
        flex: 1,
    },
    leftHeaderItem:{
        paddingLeft: theme.h_spacing_lg,
    },
    rightHeaderItem: {
        paddingRight: theme.h_spacing_lg,
        alignItems:'flex-end',
    },
    centerHeaderItem:{
        alignItems: 'center',
    },
    pickerContainer:{
        backgroundColor: theme.picker_background_color,
    },
    pickerItem:{
        color: theme.color_text_base,
    },
})
