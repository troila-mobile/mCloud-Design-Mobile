/**
 * Created by sml on 2019/9/20.
 */
import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    defaultContainer: {
        flexDirection: 'row',
        borderColor:theme.segmented_control_color,
        borderWidth:1,
        borderRadius:theme.radius_md,
        width:theme.segmented_control_width,
    },
    specialContainer:{
        flexDirection: 'row',
        borderColor:theme.fill_base,
        borderWidth:1,
        borderRadius:theme.radius_md,
        width:theme.segmented_control_width,
    },
    containerHeight:{
        height:theme.segmented_control_height,
    },
    defaultBorderRight:{
        borderColor:theme.segmented_control_color,
        borderRightWidth:1
    },
    specialBorderRight:{
        borderColor:theme.fill_base,
        borderRightWidth:1
    },
    disabled:{
        opacity:0.6,
    },
    defaultButtonBGUnselected:{
        backgroundColor:theme.segmented_control_background_grey,
    },
    defaultButtonBGSelected:{
        backgroundColor:theme.segmented_control_color,
    },
    defaultUnselectedText:{
        fontSize:theme.font_size_base,
        color:theme.segmented_control_color,
    },
    defaultSelectedText:{
        fontSize:theme.font_size_base,
        color:theme.fill_base,
    },
    specialButtonBGUnselected:{
        backgroundColor:theme.segmented_control_color,
    },
    specialButtonBGSelected:{
        backgroundColor:'#fff',
    },
    specialUnselectedText:{
        fontSize:theme.font_size_base,
        color:'#fff'
    },
    specialSelectedText:{
        fontSize:theme.font_size_base,
        color:theme.segmented_control_color,
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
