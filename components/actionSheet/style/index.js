import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    overlay: {
        flex:1,
        opacity: 0.6,
        backgroundColor: '#000',
    },
    normalText: {
        color: theme.sheet_title_color,
        fontSize: theme.font_size_caption,
        textAlign: 'center',
    },
    disableTextStyle: {
        color: theme.color_text_disabled,
        fontSize: theme.font_size_caption,
        textAlign: 'center',
    },
    cancelButton: {
        height: 50,
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.sheet_backgroundColor,
    },
    buttonStyle: {
        height: 50,
        marginTop: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.sheet_backgroundColor,
    },
    titleBox: {
        // flex:1,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.sheet_title_backgroundcolor,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    titleStyle: {
        textAlign: 'center',
        color: theme.sheet_title_color,
        fontSize: theme.font_size_base,

    },
    body: {
        justifyContent: 'flex-end',
        backgroundColor: theme.sheet_title_backgroundcolor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    wrapper: {
        flex: 1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    CheckImage: {
        marginRight: theme.h_spacing_lg,
    },
    SafeAreaView: {
        backgroundColor: theme.sheet_backgroundColor,
    },
})
