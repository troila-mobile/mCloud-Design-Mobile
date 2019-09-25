import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemWarpper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: theme.checkbox_item_height,
        backgroundColor: '#fff',
        paddingLeft: theme.h_spacing_lg,
    },
    icon: {
        width: 25,
        height: 25,
    },
    iconRight: {
        marginLeft: theme.h_spacing_md,
    },
    agreeItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeItemCheckbox: {
        marginLeft: theme.h_spacing_lg,
        marginRight: theme.h_spacing_md,
    },
    checkboxItemCheckbox: {
        marginRight: theme.h_spacing_md,
        alignSelf: 'center',
    },
    itemText: {
        marginLeft: theme.h_spacing_lg,
        fontSize: theme.font_size_caption,
        color: '#1F2530',
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
