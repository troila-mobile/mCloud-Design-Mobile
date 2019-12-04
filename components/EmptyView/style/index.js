/**
 * Created by wy on 2019/9/20.
 */
import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
    },
    text:{
        fontSize: theme.font_size_caption,
        color: theme.emptyView_text_color,
    },
    touchable: {
        height: theme.button_height_de,
        width: theme.large_label_width,
        borderRadius: theme.button_height_de / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.emptyView_touchable_marginTop,
    },
    touchableText: {
        color:theme.color_text_base_inverse,
        fontSize: theme.font_size_caption,
        fontWeight: 'bold',
    },
})
