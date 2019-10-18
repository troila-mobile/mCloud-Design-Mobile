import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9000,
    },
    maskView: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000',
    },
    dialogView: {
        zIndex: 9999,
    },
    dialogContainer: {
        backgroundColor: theme.fill_base,
        width: 300,
        borderRadius: 5,
    },
    contentContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    buttonContainer: {
        height: theme.modal_button_height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalLine: {
        backgroundColor: theme.border_color_base,
        height: 1,
    },
    verticalLine: {
        backgroundColor: theme.border_color_base,
        width: 1,
    },
    title: {
        color: theme.color_text_base,
        fontSize: theme.modal_font_size_heading,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {
        color: theme.color_text_base,
        fontSize: theme.modal_font_size_content,
        textAlign: 'center',
    },
    action: {
        color: theme.color_text_base,
        fontSize: theme.modal_button_font_size,
        fontWeight: 'bold',
    },
    space: {
        marginVertical: 8,
        paddingHorizontal: 12,
    },
    close: {
        alignSelf:'flex-end',
    },
    icon: {
        alignSelf: 'center',
        marginVertical: 8,
    },
    neverContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    toastContainer: {
        backgroundColor: theme.toast_background_color,
        padding: 20,
        alignItems: 'center',
        maxWidth: 220,
        minWidth: 140,
        borderRadius: 5,
    },
    center: {
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
    },
    toastText: {
        color: theme.color_text_base_inverse,
        fontSize: theme.font_size_base,
        lineHeight: theme.font_size_heading,
    },
    positiveColor: {
        color: theme.positive_text_color,
    },
    invalidColor: {
        color: theme.invalid_text_color,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: theme.border_color_base,
        flexDirection: 'row',
        alignItems: 'center',
        height: 36,
    },
    inputStyle: {
        flex: 1,
        color: theme.color_text_paragraph,
        fontSize: theme.font_size_base,
        padding: 0,
    },
    errorHint: {
        color: theme.error_hint_color,
        fontSize: theme.error_hint_font_size,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    iconMargin: {
        marginBottom: 16,
    },
    loadingMargin: {
        marginBottom: 25,
    },
    loadingContainer: {
        backgroundColor: theme.toast_background_color,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 120,
        height: 120,
        paddingTop: 10,
    },
    noticeContainer: {
        backgroundColor: theme.fill_base,
        position: 'absolute',
        left: 15,
        right: 15,
        top: 53,
        height: 82,
        borderRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: '#000',
        elevation: 3,
    },
    noticeContent: {
        padding: 15,
        justifyContent: 'space-between',
        flex: 1,
    },
    noticeTopView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    noticeIcon: {
        height: 30,
        width: 30,
        marginRight: 10,
    },
    noticeTitle: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: theme.modal_font_size_content,
        color: theme.color_text_base,
        marginRight: 10,
    },
    actionTitle: {
        color: theme.color_text_info,
        fontSize: theme.modal_font_size_content,
    },
    noticeText: {
        color: theme.color_text_info,
        fontSize: theme.modal_font_size_small,
    },
})
