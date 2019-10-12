/**
 * Created by wy on 2019/9/20.
 */
import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: theme.label_bg_color,
        paddingHorizontal:7,
    },
    text:{
        fontSize: theme.font_size_base,
    },
    whiteRawText: {
        color: theme.color_text_base_inverse,
    },
    blackRawText:{
        color: theme.color_text_base,
    },
    smallText:{
        fontSize:theme.small_font_size,
    },
    middleText:{
        fontSize:theme.middle_font_size,
    },
    largeText:{
        fontSize:theme.large_font_size,
    },
    smallLabel: {
        height:theme.small_label_height,
        borderRadius:theme.small_label_height / 2,
    },
    middleLabel: {
        height:theme.middle_label_height,
        borderRadius:theme.middle_label_height / 2,
    },
    largeLabel: {
        height:theme.large_label_height,
        borderRadius:theme.large_label_height / 2,
    },
})
