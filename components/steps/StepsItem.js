import React from 'react'
import {
    ViewPropTypes, Image, Text, View,
} from 'react-native'
import { WithTheme } from '../style'
import StepsStyles from './style'
import PropTypes from 'prop-types'

export default class StepsItem extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        status: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
        renderIcon: PropTypes.string,

        width: PropTypes.number,
        size: PropTypes.string,
        current: PropTypes.number,
        index: PropTypes.number,
        last: PropTypes.bool,
        direction: PropTypes.string,
        errorTail: PropTypes.number,

        starting: PropTypes.bool,
        waiting: PropTypes.bool,
        error: PropTypes.bool,
    }

    static defaultProps = {
        style: {},
        styles: {},
        status: 'wait',
        title: '',
        description: '',
        icon: null,
        renderIcon: null,

        width: 60,
        size: 'large',
        current: 0,
        index: 0,
        last: false,
        direction: 'vertical',
        errorTail: 0,

        starting: false,
        waiting: false,
        error: false,
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {
            style,
            styles,
            status,
            title,
            description,
            icon,
            renderIcon,

            width,
            size,
            current,
            index,
            last,
            direction,
            errorTail,

            starting,
            waiting,
            error,
        } = this.props;

        return (
            <WithTheme themeStyles={StepsStyles} styles={styles}>
                {
                    (_styles) => {
                        const containerStyle = [
                            _styles.stepsContainer,
                            style,
                        ]
                        const textNormalStyle = [
                            _styles.stepsNormalTextStyle,
                            style,
                        ]
                        const textBlackStyle = [
                            _styles.stepsBlackTextStyle,
                            style,
                        ]

                        return (
                            <View style={containerStyle}>

                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
