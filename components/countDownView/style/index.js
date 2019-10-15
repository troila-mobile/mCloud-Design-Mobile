import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.radius_md,
        borderWidth: 1,
    },
    defaultHeight: {
        height: theme.button_height,
        paddingLeft: theme.h_spacing_lg,
        paddingRight: theme.h_spacing_lg,
    },
    defaultColor: {
        backgroundColor: theme.fill_base,
        borderColor: theme.border_color_base,
    },
    disabledColor: {
        backgroundColor: theme.fill_disabled,
        borderColor: theme.fill_disabled,
    },
    defaultText: {
        color: theme.color_text_base,
        fontSize: theme.button_font_size,
    },
    disabledText: {
        color: `${theme.color_text_base}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW,
        fontSize: theme.button_font_size,
    },


})
