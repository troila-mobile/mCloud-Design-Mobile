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
        height:theme.segmented_control_height,
    },
    specialContainer:{
        flexDirection: 'row',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:theme.radius_md,
        width:theme.segmented_control_width,
        height:theme.segmented_control_height,
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
        color:'#fff',
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
    wrapperStyleLeft: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius:theme.radius_md,
        borderBottomLeftRadius:theme.radius_md,
    },
    wrapperStyleRight: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius:theme.radius_md,
        borderBottomRightRadius:theme.radius_md,
    },
})
