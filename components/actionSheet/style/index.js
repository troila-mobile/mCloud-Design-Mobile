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
        maxWidth: '80%',
    },
    disableTextStyle: {
        color: theme.color_text_disabled,
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
        backgroundColor: theme.sheet_backgroundColor,
    },
    titleBox: {
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
        backgroundColor: theme.sheet_title_backgroundcolor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
        left: 0,
        right: 0,
    },
    wrapper: {
        flex: 1,
    },
    buttonViewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    CheckImage: {
        position: 'absolute',
        left: -theme.h_spacing_lg,
        alignSelf: 'center',
    },
    SafeAreaView: {
        backgroundColor: theme.sheet_backgroundColor,
    },
})
