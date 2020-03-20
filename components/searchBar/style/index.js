import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    default_wrapper: {
        backgroundColor: theme.fill_base,
        height: theme.search_bar_height,
        paddingLeft: theme.h_spacing_lg,
        paddingRight: theme.h_spacing_lg,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: theme.border_width_sm,
        borderBottomWidth: theme.border_width_sm,
        borderColor: theme.border_color_base,
    },
    default_inputWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    default_input: {
        backgroundColor: theme.fill_base,
        height: theme.search_bar_input_height,
        color: theme.color_text_base,
        fontSize: theme.font_size_base,
        paddingLeft: 15 + theme.h_spacing_sm,
        paddingRight: theme.h_spacing_sm,
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
    },
    default_searchView: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        left: theme.h_spacing_lg,
        marginRight: theme.h_spacing_sm,
    },
    default_clearView: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        right: theme.h_spacing_md,
    },
    radius_wrapper: {
        height: theme.search_bar_height,
        paddingLeft: theme.h_spacing_lg,
        paddingRight: theme.h_spacing_lg,
        flexDirection: 'row',
        alignItems: 'center',
    },
    radius_inputWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    radius_input: {
        borderRadius: theme.search_bar_input_height / 2,
        backgroundColor: theme.fill_base,
        height: theme.search_bar_input_height,
        color: theme.color_text_base,
        fontSize: theme.font_size_base,
        paddingLeft: theme.h_spacing_lg + 13 + theme.h_spacing_sm * 2,
        paddingRight: theme.h_spacing_lg + 23 + theme.h_spacing_sm,
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
        borderWidth: theme.border_width_sm,
        borderColor: theme.border_color_base,
    },
    radius_searchView: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        left: theme.h_spacing_lg * 2 + theme.h_spacing_sm,
        marginRight: theme.h_spacing_sm,
    },
    radius_clearView: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        right: theme.h_spacing_lg + theme.h_spacing_md + 2,
    },
})
