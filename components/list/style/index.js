import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    ListWrapper: {
        // backgroundColor: theme.fill_tap,
    },
    ListView: {
        backgroundColor: theme.fill_grey,
    },
    Header: {
        fontSize: theme.font_size_base,
        color: theme.color_text_info,
        paddingHorizontal: theme.h_spacing_lg,
        paddingTop: theme.v_spacing_lg,
        paddingBottom: theme.v_spacing_md,
    },
    Footer: {
        fontSize: theme.font_size_base,
        color: theme.color_text_info,
        paddingHorizontal: theme.h_spacing_lg,
        paddingVertical: theme.v_spacing_md,
    },
    Body: {
        backgroundColor: theme.fill_base,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: theme.border_color_base,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: theme.border_color_base,
    },
    Item: {
        flexGrow: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: theme.h_spacing_lg,
        backgroundColor: theme.fill_base,
    },
    RightView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: theme.h_spacing_lg,
        paddingVertical: theme.v_spacing_lg,
        minHeight: theme.list_item_height,
    },
    RightViewMargin: {
        marginLeft: theme.h_spacing_normal,
    },
    Line: {
        backgroundColor: theme.border_color_base,
        height: theme.border_width_sm,
        position: 'absolute',
        left: theme.h_spacing_lg,
        right: 0,
        bottom: 0,
    },
    Thumb: {
        width: theme.icon_size_md,
        height: theme.icon_size_md,
        marginRight: theme.h_spacing_lg,
    },
    Content: {
        color: theme.color_text_base,
        fontSize: theme.font_size_caption,
        textAlignVertical: 'center',
    },
    ExtraView: {
        maxWidth: theme.list_item_extra_max_width,
    },
    Extra: {
        fontSize: theme.font_size_base,
        textAlign: 'right',
        textAlignVertical: 'center',
        color: theme.color_text_base,
    },
    Brief: {
        minHeight: theme.font_size_icontext,
    },
    BriefText: {
        color: theme.color_text_info,
        fontSize: theme.font_size_base,
        paddingTop: theme.v_spacing_sm,
        textAlignVertical: 'center',
    },
    Arrow: {
        marginLeft: theme.h_spacing_md,
    },
    ContentViewWarp: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ContentView: {
        flex: 1,
        flexDirection: 'column',
    },
    RequiredText: {
        fontSize: theme.font_size_caption,
        marginRight: theme.h_spacing_md,
        color: 'red',
    },
})
