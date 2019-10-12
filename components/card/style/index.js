import { StyleSheet,Dimensions } from 'react-native'

export default (theme) => StyleSheet.create({
    horizontalContainer: {
        backgroundColor: theme.card_background_color,
        paddingTop: 15,
        paddingLeft:15,
        width:Dimensions.get('window').width,
    },
    verticalContainer:{
        backgroundColor: theme.card_background_color,
        paddingVertical: 15,
        paddingLeft:15,
        flexDirection:'row',
        width:Dimensions.get('window').width,
    },
    containerPaddingRight:{
        paddingRight: 16
    },
    titleStyle:{
        fontSize: theme.font_size_heading,
        color: theme.card_title_color,
        lineHeight: theme.card_lineHeight,
    },
    contentStyle:{
        fontSize: theme.font_size_base,
        color: theme.card_content_color,
        lineHeight: theme.card_lineHeight,
        marginVertical:8,
        // marginBottom: 12
    },
    imageStyle:{
        height: theme.card_imageHeight,
        width: theme.card_imageWidth,
        borderRadius: theme.radius_md,
        marginRight: 11
    },
})