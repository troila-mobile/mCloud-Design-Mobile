import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    stepsContainer: {
        flex: 1,
        backgroundColor: theme.fill_base,
        paddingHorizontal: theme.steps_paddingHorizontal,
    },
    steps_head_small: {
        width: 18,
        height: 18,
        backgroundColor: theme.fill_base,
        borderRadius: 18,
        borderWidth: theme.border_width_sm,
        borderColor: theme.brand_primary,
        borderStyle: 'solid',
        overflow: 'hidden',
    },
    steps_head_large: {
        width: 24,
        height: 24,
        backgroundColor: theme.fill_base,
        borderRadius: 18,
        borderWidth: theme.border_width_md,
        borderColor: theme.brand_primary,
        borderStyle: 'solid',
        overflow: 'hidden',
    },
    head_blue_small: {
        borderColor: theme.brand_primary,
    },
    head_gray_small: {
        borderColor: theme.color_text_placeholder,
    },
    head_red_small: {
        borderColor: theme.brand_error,
    },
    head_blue_large: {
        borderColor: theme.brand_primary,
        backgroundColor: theme.brand_primary,
    },
    head_gray_large: {
        borderColor: theme.color_text_placeholder,
        backgroundColor: theme.color_text_placeholder,
    },
    head_red_large: {
        borderColor: theme.brand_error,
        backgroundColor: theme.brand_error,
    },
    tail_gray: {
        backgroundColor: theme.color_text_placeholder,
    },
    tail_blue: {
        backgroundColor: theme.brand_primary,
    },
    tail_last: {
        backgroundColor: 'transparent',
    },
    tail_error: {
        backgroundColor: theme.brand_error,
    },
    title_style_small: {
        fontSize: 16,
        textColor: theme.steps_text_black_color,
    },
    title_style_large: {
        fontSize: 16,
        fontWeight: 'bold',
        textColor: theme.steps_text_black_color,
    },
    description_style_small: {
        fontSize: 14,
        textColor: theme.steps_text_normal_color,
    },
    description_style_large: {
        fontSize: 14,
        fontWeight: 'bold',
        textColor: theme.steps_text_normal_color,
    },
    content_small: {
        paddingLeft: theme.h_spacing_sm,
        paddingTop: theme.v_spacing_sm,
    },
    content_small_horizontal: {
        paddingLeft: theme.h_spacing_sm,
        paddingTop: theme.v_spacing_sm,
    },
    content_large: {
        paddingLeft: theme.h_spacing_lg,
        paddingTop: theme.v_spacing_lg,
    },
    content_large_horizontal: {
        paddingLeft: theme.h_spacing_lg,
        paddingTop: theme.v_spacing_lg,
    },
    tail_default_small: {
        height: 30,
        width: 50,
        marginLeft: theme.h_spacing_md,
    },
    tail_default_small_horizontal: {
        height: 30,
        width: 50,
        marginTop: theme.v_spacing_sm,
    },
    tail_default_large: {
        height: 40,
        width: 60,
        marginLeft: theme.h_spacing_sm,
    },
    tail_default_large_horizontal: {
        height: 40,
        width: 60,
        marginTop: theme.v_spacing_md,
    },
})
