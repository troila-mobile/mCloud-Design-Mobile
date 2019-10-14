import React from 'react'
import {
    View,
    Text,
    ViewPropTypes,
    ActivityIndicator,
} from 'react-native'
import { WithTheme } from '../style'
import ActivityIndicatorStyles from './style'
import PropTypes from 'prop-types'

export default class ZLActivityIndicator extends React.Component {
    static propTypes = {
        size: PropTypes.string,
        color: PropTypes.string,
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        animating: PropTypes.bool,
        toast: PropTypes.bool,
        text: PropTypes.string,
        textStyle: ViewPropTypes.style,
    }
    static defaultProps = {
        size: 'small',
        color: 'gray',
        style: {},
        styles: {},
        animating: true,
        toast: false,
        text: '',
        textStyle: {},
    }
    _renderToast() {
        const {
            style,
            styles,
            size,
            color,
            text,
            textStyle,
        } = this.props

        return (
            <WithTheme themeStyles={ActivityIndicatorStyles} styles={styles}>
                {
                    (_styles) => {
                        const container = [
                            _styles.container,
                        ]
                        const innerContainer = [
                            _styles.innerContainer,
                        ]
                        const backgroundStyle = [
                            _styles.wrapper,
                            style,
                        ]
                        const fontStyle = [
                            _styles.toast,
                            textStyle,
                        ]
                        return (
                            <View style={container}>
                                <View style={innerContainer}>
                                    <View style={backgroundStyle}>
                                        <ActivityIndicator color={color} size={size} />
                                        {!!text && (
                                            <Text style={fontStyle}>{text}</Text>
                                        )}
                                    </View>
                                </View>
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
    _renderSpinner() {
        const {
            style,
            styles,
            size,
            color,
            text,
            textStyle,
        } = this.props

        return (
            <WithTheme themeStyles={ActivityIndicatorStyles} styles={styles}>
                {
                    (_styles) => {
                        const container = [
                            _styles.spinner,
                            style,
                        ]
                        const fontStyle = [
                            _styles.tip,
                            textStyle,
                        ]
                        return (
                            <View style={container}>
                                <ActivityIndicator color={color} size={size} />
                                {!!text && <Text style={fontStyle}>{text}</Text>}
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
    render() {
        const {
            animating,
            toast,
        } = this.props
        if (animating) {
            return toast ? this._renderToast() : this._renderSpinner()
        }
        return null
    }
}
