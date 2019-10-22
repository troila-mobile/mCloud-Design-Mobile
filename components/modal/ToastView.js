import React from 'react'
import {
    View, Text, Image,
} from 'react-native'
import { WithTheme } from '../style'
import ModalStyles from './style'
import PropTypes from 'prop-types'

const iconError = require('./assets/icon_toast_error.png')
const iconSuccess = require('./assets/icon_toast_success.png')
const iconWarning = require('./assets/icon_toast_warning.png')

export default class ToastView extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        duration: PropTypes.number,
        icon: PropTypes.oneOf(['none','error','warning','success']),
        onDismiss: PropTypes.func,
    }
    static defaultProps = {
        text: '',
        duration: 1500,
        icon: 'none',
        onDismiss: null,
    }
    state = {
        visible: true,
    }
    componentDidMount() {
        const { duration, onDismiss } = this.props
        this.timeout = setTimeout(() => {
            this.setState({
                visible: false,
            }, () => onDismiss && onDismiss())
        }, duration)
    }
    componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout)
        this.timeout = null
    }
    getIcon(icon) {
        switch (icon) {
        case 'error':
            return iconError
        case 'warning':
            return iconWarning
        case 'success':
            return iconSuccess
        default:
            return iconSuccess
        }
    }
    render() {
        const { visible } = this.state
        if (!visible) return null
        return (
            <WithTheme themeStyles={ModalStyles}>
                {
                    (_styles) => {
                        const {
                            text,
                            icon,
                        } = this.props
                        return (
                            <View
                                style={_styles.center}
                                collapsable={false}
                                pointerEvents="box-none"
                            >
                                <View style={_styles.toastContainer}>
                                    {
                                        icon === 'none'
                                            ? null
                                            : (
                                                <Image
                                                    source={this.getIcon(icon)}
                                                    style={_styles.iconMargin}
                                                />
                                            )
                                    }
                                    <Text
                                        style={_styles.toastText}
                                        allowFontScaling={false}
                                    >
                                        {text}
                                    </Text>
                                </View>
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
