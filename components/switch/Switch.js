import React, { Component } from 'react'
import {
    Animated,
    Easing,
    TouchableWithoutFeedback,
    Platform,
    ViewPropTypes,
} from 'react-native'
import PropTypes from 'prop-types'
import { WithTheme, Theme } from '../style'
import SwitchStyles from './style'

const getPlatformElevation = Platform.OS === 'ios' ? (elevation) => {
    if (elevation !== 0) {
        return {
            shadowColor: 'black',
            shadowOpacity: 0.3,
            shadowRadius: elevation,
            shadowOffset: {
                height: 2,
                width: 0,
            },
            zIndex: 1,
        }
    }
    return {}
} : (elevation) => ({ elevation })

export default class SwitchButton extends Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        checked: PropTypes.bool,
        onChange: PropTypes.func,
        onTintColor: PropTypes.string,   // 开启时的背景颜色
        thumbTintColor: PropTypes.string,   // 原型按钮的背景颜色
        tintColor: PropTypes.string,   // 背景颜色
        disabledThumbTintColor: PropTypes.string,   // disabled 原型按钮的背景颜色
        disabledTintColor: PropTypes.string,   // disabled 的背景颜色
        disabled: PropTypes.bool,
    }
    static defaultProps = {
        style: {},
        styles: {},
        checked: false,
        onChange: () => { },
        onTintColor: Theme.brand_primary,
        thumbTintColor: '#fff',
        tintColor: '#D8D8D8',
        disabledThumbTintColor: '#F5F5F5',
        disabledTintColor: '#EEEEEE',
        disabled: false,
    }
    constructor(props) {
        super(props)
        const { checked } = props
        this.state = {
            scale: new Animated.Value(checked ? 0.01 : 1),
            left: new Animated.Value(checked ? 21 : 2),
            animatedColor: new Animated.Value(checked ? 1 : 0),
            checked,
        }
    }
    onToggle = () => {
        const {
            checked,
            scale,
            left,
            animatedColor,
        } = this.state
        const { onChange } = this.props
        if (!checked) {
            this.setState((preState) => ({
                checked: !preState.checked,
            }), () => {
                onChange(checked)
                Animated.parallel([
                    Animated.timing(scale, {
                        toValue: 0.01,
                        duration: 375,
                        easing: Easing.bezier(0.0, 0.0, 0, 1),
                    }),
                    Animated.spring(left, {
                        toValue: 21,
                        duration: 375,
                        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                        bounciness: 10,
                        speed: 10,
                    }),
                    Animated.timing(animatedColor, {
                        toValue: 1,
                        duration: 375,
                        easing: Easing.bezier(0.0, 0.0, 0, 1),
                    }),
                ]).start()
            })
        } else {
            this.setState((preState) => ({
                checked: !preState.checked,
            }), () => {
                onChange(checked)
                Animated.parallel([
                    Animated.timing(scale, {
                        toValue: 1,
                        duration: 375,
                        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                    }),
                    Animated.spring(left, {
                        toValue: 2,
                        duration: 375,
                        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                        bounciness: 10,
                        speed: 10,
                    }),
                    Animated.timing(animatedColor, {
                        toValue: 0,
                        duration: 375,
                        easing: Easing.bezier(0.0, 0.0, 0, 1),
                    }),
                ]).start()
            })
        }
    }
    render() {
        const { animatedColor, scale, left } = this.state
        const {
            style,
            styles,
            onTintColor,
            tintColor,
            thumbTintColor,
            disabledThumbTintColor,
            disabledTintColor,
            disabled,
        } = this.props
        return (
            <WithTheme themeStyles={SwitchStyles} styles={styles}>
                {
                    (_styles) => (
                        <TouchableWithoutFeedback disabled={disabled} onPress={this.onToggle}>
                            <Animated.View
                                style={[
                                    _styles.switch,
                                    style,
                                    {
                                        backgroundColor: animatedColor.interpolate({
                                            inputRange: [0, 0.1, 1],
                                            outputRange: [tintColor, onTintColor, onTintColor],
                                        }),
                                    },
                                ]}
                            >
                                <Animated.View
                                    style={[
                                        _styles.switchBtn,
                                        {
                                            transform: [{ scale }],
                                            backgroundColor: disabled ? disabledTintColor : tintColor,
                                        },
                                    ]}
                                />
                                <Animated.View
                                    style={[
                                        _styles.switchThumb,
                                        {
                                            transform: [{ translateX: left }],
                                            backgroundColor: disabled ? disabledThumbTintColor : thumbTintColor,
                                        },
                                        getPlatformElevation(4),
                                    ]}
                                />
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    )
                }
            </WithTheme>
        )
    }
}
