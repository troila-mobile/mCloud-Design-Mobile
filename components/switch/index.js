import React from 'react'
import {
    TouchableWithoutFeedback,
    ViewPropTypes,
    Animated,
    Easing,
} from 'react-native'
import { WithTheme, Theme } from '../style'
import SwitchStyles from './style'
import PropTypes from 'prop-types'

export default class Switch extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        onTintColor: PropTypes.string, // 开启时的背景颜色
        thumbTintColor: PropTypes.string, // 原型按钮的背景颜色
        tintColor: PropTypes.string, // 关闭时的背景颜色
    }
    static defaultProps = {
        style: {},
        styles: {},
        disabled: false,
        onChange: () => {},
        onTintColor: Theme.brand_primary,
        thumbTintColor: '#fff',
        tintColor: '#DDD',
    }
    constructor(props) {
        super(props)
        const { checked } = props
        this.state = {
            checked: checked || false,
            scale: new Animated.Value(checked ? 0.01 : 1),
            left: new Animated.Value(checked ? 21 : 1),
            animatedColor: new Animated.Value(checked ? 1 : 0),
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (typeof props.checked === 'boolean' && props.checked !== state.checked) {
            return {
                checked: props.checked,
            }
        }
        return null
    }
    onPress = () => {
        const {
            checked,
            scale,
            left,
            animatedColor,
        } = this.state
        const { onChange } = this.props
        const easing1 = Easing.bezier(0.0, 0.0, 0, 1)
        const easing2 = Easing.bezier(0.4, 0.0, 0.2, 1)
        this.setState({
            checked: !checked,
        }, () => {
            onChange && onChange(checked)
            Animated.parallel([
                Animated.timing(scale, {
                    toValue: checked ? 1 : 0.01,
                    duration: 375,
                    easing: checked ? easing2 : easing1,
                }),
                Animated.spring(left, {
                    toValue: checked ? 1 : 21,
                    duration: 375,
                    easing: easing2,
                    bounciness: 10,
                    speed: 10,
                }),
                Animated.timing(animatedColor, {
                    toValue: checked ? 0 : 1,
                    duration: 375,
                    easing: easing1,
                }),
            ]).start()
        })
    }
    render() {
        const {
            scale,
            left,
            animatedColor,
        } = this.state
        const {
            style,
            styles,
            checked,
            onTintColor,
            tintColor,
            thumbTintColor,
            disabled,
        } = this.props
        return (
            <WithTheme themeStyles={SwitchStyles} styles={styles}>
                {
                    (_styles) => {
                        const bgcStyle = {
                            backgroundColor: checked ? tintColor : onTintColor,
                        }
                        return (
                            <TouchableWithoutFeedback disabled={disabled} onPress={this.onPress}>
                                <Animated.View
                                    style={[
                                        _styles.wrapper,
                                        {
                                            backgroundColor: animatedColor.interpolate({
                                                inputRange: [0, 0.1, 1],
                                                outputRange: [tintColor, onTintColor, onTintColor],
                                            }),
                                        },
                                        style,
                                    ]}
                                >
                                    <Animated.View
                                        style={[
                                            _styles.switchBtn,
                                            {
                                                transform: [{ scale }],
                                                ...bgcStyle,
                                            },
                                        ]}
                                    />
                                    <Animated.View
                                        style={[
                                            _styles.switchThumb,
                                            {
                                                transform: [{ translateX: left }],
                                                backgroundColor: thumbTintColor,
                                            },
                                        ]}
                                    />
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
