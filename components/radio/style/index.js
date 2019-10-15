import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: theme.checkbox_item_height,
        backgroundColor: theme.fill_base,
        paddingLeft: theme.h_spacing_lg,
    },
    circleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: theme.border_width_md,
        borderColor: theme.radio_circle_border_color,
    },
    centerStyle: {
        backgroundColor: theme.brand_primary,
    },
    iconRight: {
        marginLeft: theme.h_spacing_md,
    },
    itemText: {
        marginLeft: theme.h_spacing_lg,
        fontSize: theme.font_size_caption,
        color: theme.color_text_base,
    },
    line: {
        backgroundColor: theme.border_color_base,
        height: theme.border_width_sm,
        position: 'absolute',
        left: theme.h_spacing_lg,
        right: 0,
        bottom: 0,
    },
})
