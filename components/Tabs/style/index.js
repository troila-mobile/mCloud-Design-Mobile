/**
 * Created by wy on 2019/9/20.
 */
import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    wrapper: {
        flex:1,
    },
    tabStyle:{
        height:theme.tabs_height,
        alignItems: 'center',
    },
    TabBarWrapper:{
        height:theme.tabs_height,
        width:theme.screen_W,
        backgroundColor:theme.labelBackgroundColor,
    },
    TabBarWrapperScrollView:{
        flexDirection: 'row',
    },
    labelStyle: {
        paddingTop:theme.tabs_label_paddingTop,
    },
    indicatorStyle:{
        height: theme.tabs_indicator_height,
        borderRadius: theme.tabs_indicator_borderRadius,
    },
    initialLayout:{
        height:0,
        width: theme.screen_W ,
    },
    initialLayoutTwo:{
        height: theme.tabs_initialLayout_height,
        width:theme.screen_W,
    },
})
