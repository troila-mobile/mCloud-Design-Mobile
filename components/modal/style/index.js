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
    },
    space: {
        marginVertical: 8,
        paddingHorizontal: 16,
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
})
