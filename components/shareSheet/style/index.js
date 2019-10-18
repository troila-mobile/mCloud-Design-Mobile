import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.4,
        backgroundColor:theme.sheet_backgroundColor,

    },
    textStyle:{
        color: 2,
        borderColor: '#f1f1f1',
    },
    cancelText:{
        color:theme.sheet_title_color,
        fontSize:theme.font_size_caption,
        textAlign:'center',
    },
    cancelButton: {
        height: 50,
        marginTop: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.sheet_backgroundColor,
    },
    titleBox: {
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.sheet_title_backgroundcolor,
        paddingHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    titleStyle:{
        textAlign:'center',
        color:theme.sheet_title_color,
        fontSize:theme.font_size_base,
    },
    body: {
        flex: 1,
        alignSelf: 'flex-end',
        backgroundColor: theme.sheet_spre_color,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    itemView:{
        backgroundColor:theme.sheet_item_backgroundColor,
        width:55,
        height:55,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    itemText:{
        textAlign:'center',
        color:theme.sheet_item_title_color,
        marginTop:10,
    },
    scrollContent:{
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:10,
    },
    scrollStyle:{
        backgroundColor:theme.sheet_backgroundColor,
    },
})
