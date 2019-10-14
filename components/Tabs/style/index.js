/**
 * Created by wy on 2019/9/20.
 */
import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    wrapper: { flex:1 },
    tabStyle:{
        alignItems: 'center',
        height: theme.tabs_height,
        justifyContent: 'center',
    },
    labelStyle: {
        color: theme.label_textColor,
    },
    style_type:{
        height: theme.tabs_height,
        borderColor: theme.color_icon_base,
        borderBottomWidth: theme.border_width_md,
        backgroundColor: theme.fill_base,
        elevation: theme.tabs_elevation,
    },
    indicatorStyle:{
        backgroundColor: theme.tabs_color,
        height: theme.tabs_indicator_height,
        borderRadius: theme.tabs_indicator_borderRadius,
    },
    initialLayout:{
        height: theme.tabs_initialLayout_height,
        width:theme.screen_W,
    },
})
