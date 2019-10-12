import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    stepsContainer: {
        flex: 1,
        backgroundColor: theme.fill_base,
        paddingHorizontal: theme.steps_paddingHorizontal,
    },
    stepsNormalTextStyle: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        textColor: theme.steps_text_normal_color,
    },
    stepsBlackTextStyle: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        textColor: theme.steps_text_black_color,
    },
})
