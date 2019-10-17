import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    stepsContainer: {
        flex: 1,
        backgroundColor: theme.fill_base,
        paddingHorizontal: theme.steps_paddingHorizontal,
    },
    // 图片
    image_style_small: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image_style_large: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // 中间线
    line_gray: {
        backgroundColor: theme.color_text_placeholder,
    },
    line_blue: {
        backgroundColor: theme.brand_primary,
    },
    line_last: {
        backgroundColor: 'transparent',
    },
    line_error: {
        backgroundColor: theme.brand_error,
    },
    line_default_small: {
        height: 30,
        width: theme.border_width_md,
        marginLeft: 20,
    },
    line_default_small_horizontal: {
        height: theme.border_width_md,
        width: 50,
        marginTop: 20,
    },
    line_default_large: {
        height: 30,
        width: theme.border_width_md,
        marginLeft: 25,
    },
    line_default_large_horizontal: {
        height: theme.border_width_md,
        width: 50,
        marginTop: 25,
    },
    // 内容
    content_small: {
        paddingLeft: theme.h_spacing_md,
        paddingRight: 20,
    },
    content_small_horizontal: {
        paddingTop: theme.v_spacing_sm,
        paddingRight: 20,
    },
    content_large: {
        paddingLeft: theme.h_spacing_sm,
        paddingRight: 20,
    },
    content_large_horizontal: {
        paddingTop: theme.v_spacing_lg,
        paddingRight: 20,
    },
    // 标题
    title_style_small: {
        fontSize: theme.font_size_base,
        color: theme.steps_text_black_color,
        paddingBottom: theme.v_spacing_md,
        paddingRight: 20,
    },
    title_style_large: {
        fontSize: theme.font_size_caption,
        fontWeight: 'bold',
        paddingBottom: theme.v_spacing_md,
        color: theme.steps_text_black_color,
        paddingRight: 20,
    },
    // 描述
    description_style_small: {
        fontSize: theme.font_size_caption_sm,
        color: theme.steps_text_normal_color,
        paddingRight: 20,
    },
    description_style_large: {
        fontSize: theme.font_size_base,
        fontWeight: 'bold',
        color: theme.steps_text_normal_color,
        paddingRight: 20,
    },
})
