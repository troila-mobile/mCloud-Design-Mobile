import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: theme.font_size_base,
        color: theme.color_text_base,
    },
})
