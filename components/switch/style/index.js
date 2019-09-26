import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: theme.checkbox_item_height,
        backgroundColor: theme.fill_base,
        paddingLeft: theme.h_spacing_lg,
        paddingRight: theme.h_spacing_lg,
    },
    switch: {
        width: 51,
        height: 31,
        borderRadius: 31 / 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchBtn: {
        width: 51,
        height: 31,
        borderRadius: 31 / 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchThumb: {
        width: 28,
        height: 28,
        borderRadius: 28 / 2,
        position: 'absolute',
    },
    itemText: {
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
