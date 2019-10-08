import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    bottomLiner: {
        backgroundColor: theme.border_color_base,
        position: 'absolute',
        height: StyleSheet.hairlineWidth,
        left: 0,
        right: 0,
        bottom: 0,
    },
    itemContainer: {
        borderColor: theme.border_color_base,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingRight: theme.h_spacing_lg,
        marginLeft: theme.h_spacing_lg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: theme.v_spacing,
    },
    column: {
        flex: 1,
    },
    content: {
        color: theme.color_text_base,
        fontSize: theme.font_size_base,
    },
    extra: {

    },
})
