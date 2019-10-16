import React from 'react'
import {
    Text,
    ViewPropTypes,
    TouchableOpacity,
} from 'react-native'
import { WithTheme } from '../style'
import CountDownViewStyles from './style'
import PropTypes from 'prop-types'

export default class CountDownView extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        textStyle: ViewPropTypes.style,
        styles: PropTypes.object,
        text: PropTypes.string,
        waitingText: PropTypes.string,
        resendText: PropTypes.string,
        seconds: PropTypes.number,
        onPress: PropTypes.func,
    }
    static defaultProps = {
        style: {},
        textStyle: {},
        styles: {},
        text: '获取验证码',
        waitingText: '已发送',
        resendText: '重新获取',
        seconds: 60,
        onPress: () => {
        },
    }
    constructor(props) {
        super(props)
        this.state = {
            isTiming: false,
            disabled: false,
            isFirst: true,
            seconds: this.props.seconds,
        }
    }
    componentWillUnmount() {
        clearInterval(this.closeTimer)
    }
    _countDown() {
        let {
            seconds,
        } = this.state
        this.setState({
            isTiming: true,
            disabled: true,
            isFirst: false,
        })
        this.closeTimer = setInterval(() => {
            seconds--
            if (seconds === 0) {
                this.setState({
                    isTiming: false,
                    disabled: false,
                    seconds: this.props.seconds,
                })
                clearInterval(this.closeTimer)
            } else {
                this.setState({
                    seconds,
                })
            }
        }, 1000)
    }
    render() {
        const {
            style,
            textStyle,
            styles,
            text,
            waitingText,
            resendText,
            onPress,
        } = this.props
        const {
            isTiming,
            disabled,
            isFirst,
            seconds,
        } = this.state
        return (
            <WithTheme themeStyles={CountDownViewStyles} styles={styles}>
                {
                    (_styles) => {
                        const backgroundStyle = [
                            _styles.wrapper,
                            _styles.defaultHeight,
                            _styles.defaultColor,
                            style,
                        ]
                        const disabledBackgroundStyle = [
                            _styles.wrapper,
                            _styles.defaultHeight,
                            _styles.disabledColor,
                            style,
                        ]
                        const fontStyle = [
                            _styles.defaultText,
                            textStyle,
                        ]
                        const disabledFontStyle = [
                            _styles.disabledText,
                            textStyle,
                        ]
                        return (
                            <TouchableOpacity
                                style={disabled ? disabledBackgroundStyle : backgroundStyle}
                                onPress={() => {
                                    this._countDown()
                                    onPress && onPress()
                                }}
                                disabled={disabled}
                            >
                                <Text style={disabled ? disabledFontStyle : fontStyle}>
                                    {isTiming ? (`${waitingText}（${seconds}s）`) : isFirst ? text : resendText}
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
