import { StyleSheet,Dimensions } from 'react-native'

export default (theme) => StyleSheet.create({
    badgeContainer: {
        backgroundColor: theme.badge_background_color,
        paddingHorizontal: theme.badge_paddingHorizontal,
        alignItems: 'center',
        justifyContent: 'space-between',
        width:Dimensions.get('window').width,
        flexDirection:'row',
        height:theme.badge_item_height
    },
    redPointStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.badge_color,
    },
    numberStyle: {
        borderRadius: 8,
        paddingHorizontal: 4,
        backgroundColor: theme.badge_color,
    },
    numberFont:{
        fontSize: theme.font_size_caption_sm,
        color: '#fff'
    },
    badge_marginRight:{
        marginRight:7,
    },
    newStyle:{
        fontSize: theme.font_size_base,
        color: theme.badge_color
    },
    textStyle:{
        fontSize: theme.font_size_base,
        color: theme.badge_text_color
    },
    rightView:{
        flexDirection:'row',
        alignItems:'center'
    }
})