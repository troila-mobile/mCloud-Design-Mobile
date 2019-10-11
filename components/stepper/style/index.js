import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        margin:2
    },
    radius_text:{
        marginHorizontal:theme.h_spacing_lg,
        color:theme.color_text_base,
        fontSize:theme.font_size_subhead,
    }

})
