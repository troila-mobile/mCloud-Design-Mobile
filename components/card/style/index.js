import { StyleSheet,Dimensions } from 'react-native'

export default (theme) => StyleSheet.create({
    horizontalContainer: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingLeft:15,
        width:Dimensions.get('window').width,
    },
    verticalContainer:{
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingLeft:15,
        flexDirection:'row'
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
    },
    imageStyle:{
        height: theme.card_imageHeight,
        width: theme.card_imageWidth,
        borderRadius: theme.radius_md,
        marginRight: 11
    },
    imageBGColor:{
        color: theme.card_image_BG_color
    }
})