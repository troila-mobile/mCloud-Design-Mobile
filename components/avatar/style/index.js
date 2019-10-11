import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    normalBorder:{
        // todo
    },
    whiteBorder:{
        borderWidth: theme.border_width_lg,
        borderColor: theme.border_color_white,
    },
})
