import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.4,
        backgroundColor:theme.fill_grey,

    },
    textStyle:{
        color: 2,
        borderColor: '#f1f1f1',
    },
    normalText:{
        color:theme.color_text_base,
        fontSize:theme.font_size_caption,
        textAlign:'center',
    },
    disableTextStyle:{
        color:theme.color_text_disabled,
        fontSize:theme.font_size_caption,
        textAlign:'center',
    },
    cancelButton: {
        height: 50,
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.sheet_title_backgroundcolor,
    },
    buttonStyle: {
        height: 50,
        marginTop: StyleSheet.hairlineWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.color_text_base_inverse,
    },
    titleBox: {
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.sheet_title_backgroundcolor,
        paddingHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    titleStyle:{
        textAlign:'center',
        color:theme.color_text_base,
        fontSize:theme.font_size_base,
    },
    body: {
        flex: 1,
        alignSelf: 'flex-end',
        backgroundColor: theme.color_text_base_inverse,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
})
