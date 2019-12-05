import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    defaultHighlight: {
        backgroundColor: theme.fill_tap,
        borderColor: theme.border_color_base,
    },
    primaryHighlight: {
        backgroundColor: theme.primary_button_fill_tap,
        borderColor: theme.primary_button_fill,
    },
    ghostHighlight: {
        backgroundColor: theme.ghost_button_fill_tap,
        borderColor: theme.ghost_button_color,
    },
    warningHighlight: {
        backgroundColor: theme.warning_button_fill_tap,
        borderColor: theme.warning_button_fill,
    },
    wrapperStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    largeRaw: {
        height: theme.button_height,
        paddingLeft: theme.h_spacing_lg,
        paddingRight: theme.h_spacing_lg,
    },
    smallRaw: {
        height: theme.button_height_sm,
        paddingLeft: theme.h_spacing_sm,
        paddingRight: theme.h_spacing_sm,
        borderRadius: theme.radius_sm,
    },
    defaultRaw: {
        backgroundColor: theme.fill_base,
        borderColor: theme.border_color_base,
    },
    primaryRaw: {
        backgroundColor: theme.primary_button_fill,
        borderColor: theme.primary_button_fill,
    },
    ghostRaw: {
        backgroundColor: 'transparent',
        borderColor: theme.ghost_button_color,
    },
    warningRaw: {
        backgroundColor: theme.warning_button_fill,
        borderColor: theme.warning_button_fill,
    },
    defaultDisabledRaw: {
        backgroundColor: theme.fill_disabled,
        borderColor: theme.fill_disabled,
    },
    primaryDisabledRaw: {
        opacity: 0.4,
        backgroundColor: theme.primary_button_fill,
    },
    ghostDisabledRaw: {
        borderColor: `${theme.ghost_button_color}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
        backgroundColor: theme.ghost_button_background_color,
    },
    warningDisabledRaw: {
        opacity: 0.4,
    },
    defaultHighlightText: {
        color: theme.color_text_base,
    },
    primaryHighlightText: {
        color: `${theme.color_text_base_inverse}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    ghostHighlightText: {
        color: theme.ghost_button_fill_tap,
    },
    warningHighlightText: {
        color: `${theme.color_text_base_inverse}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    largeRawText: {
        fontSize: theme.button_font_size,
    },
    smallRawText: {
        fontSize: theme.button_font_size_sm,
    },
    defaultRawText: {
        color: theme.color_text_base,
    },
    primaryRawText: {
        color: theme.color_text_base_inverse,
    },
    ghostRawText: {
        color: theme.ghost_button_color,
    },
    warningRawText: {
        color: theme.color_text_base_inverse,
    },
    defaultDisabledRawText: {
        color: theme.color_text_base,
    },
    primaryDisabledRawText: {
        color: theme.color_text_base_inverse,
    },
    ghostDisabledRawText: {
        color: `${theme.ghost_button_color}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    warningDisabledRawText: {
        color: `${theme.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    indicator: {
        marginRight: theme.h_spacing_md,
    },
    defaultLayoutRaw: {
        // borderRadius: 0,
    },
    radiusLayoutRaw: {
        borderRadius: theme.radius_slg,
        height: theme.button_height_de,
    },
})
