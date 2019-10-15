/**
 * Created by sml on 2019/9/20.
 */
import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    defaultContainer: {
        flexDirection: 'row',
        borderColor:theme.sc_selected_bg_color_default,
        borderWidth:1,
        borderRadius:theme.radius_md,
        width:theme.segmented_control_width,
    },
    specialContainer:{
        flexDirection: 'row',
        borderColor:theme.sc_sepcial_border_color,
        borderWidth:1,
        borderRadius:theme.radius_md,
        width:theme.segmented_control_width,
    },
    containerHeight:{
        height:theme.segmented_control_height,
    },
    defaultBorderRight:{
        borderColor:theme.sc_selected_bg_color_default,
        borderRightWidth:1
    },
    specialBorderRight:{
        borderColor:theme.sc_selected_bg_color_special,
        borderRightWidth:1
    },
    disabled:{
        opacity:0.6,
    },
    defaultButtonBGUnselected:{
        backgroundColor:theme.sc_unselected_bg_color_default,
    },
    defaultButtonBGSelected:{
        backgroundColor:theme.sc_selected_bg_color_default,
    },
    defaultUnselectedText:{
        fontSize:theme.font_size_base,
        color:theme.sc_unselected_text_color_default,
    },
    defaultSelectedText:{
        fontSize:theme.font_size_base,
        color:theme.sc_selected_text_color_default,
    },
    specialButtonBGUnselected:{
        backgroundColor:theme.sc_selected_bg_color_default,
    },
    specialButtonBGSelected:{
        backgroundColor:theme.sc_selected_bg_color_special,
    },
    specialUnselectedText:{
        fontSize:theme.font_size_base,
        color:theme.sc_unselected_text_color_special
    },
    specialSelectedText:{
        fontSize:theme.font_size_base,
        color:theme.sc_selected_text_color_special,
    },
    borderRadiusLeft: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius:theme.radius_md,
        borderBottomLeftRadius:theme.radius_md,
    },
    borderRadiusRight: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius:theme.radius_md,
        borderBottomRightRadius:theme.radius_md,
    },
    wrapperStyle: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
