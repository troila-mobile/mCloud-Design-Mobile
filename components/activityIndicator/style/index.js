import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'transparent',
        zIndex: theme.toast_zindex,
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: theme.activity_indicator_size,
        height: theme.activity_indicator_size,
        borderRadius: theme.radius_md,
        backgroundColor: theme.toast_fill,
    },
    tip: {
        color: theme.color_text_base,
        fontSize: theme.font_size_base,
        marginLeft: theme.h_spacing_md,
    },
    toast: {
        color: theme.color_text_base_inverse,
        fontSize: theme.font_size_base,
        marginTop: theme.v_spacing_sm,
    },
    spinner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
