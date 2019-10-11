import React, { Component } from 'react'
import {
    Animated,
    Easing,
    TouchableWithoutFeedback,
    Platform,
    ViewPropTypes,
} from 'react-native'
import PropTypes from 'prop-types'
import { WithTheme } from '../style'
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
        disabled: PropTypes.bool,
    }
    static defaultProps = {
        style: {},
        styles: {},
        checked: false,
        onChange: () => { },
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
            disabled,
        } = this.props
        return (
            <WithTheme themeStyles={SwitchStyles} styles={styles}>
                {
                    (_styles, theme) => (
                        <TouchableWithoutFeedback disabled={disabled} onPress={this.onToggle}>
                            <Animated.View
                                style={[
                                    _styles.switch,
                                    style,
                                    {
                                        backgroundColor: animatedColor.interpolate({
                                            inputRange: [0, 0.1, 1],
                                            outputRange: [theme.switch_tint, theme.switch_fill, theme.switch_fill],
                                        }),
                                    },
                                ]}
                            >
                                <Animated.View
                                    style={[
                                        _styles.switchBtn,
                                        {
                                            transform: [{ scale }],
                                            backgroundColor: disabled ? theme.switch_disabled_tint : theme.switch_tint,
                                        },
                                    ]}
                                />
                                <Animated.View
                                    style={[
                                        _styles.switchThumb,
                                        {
                                            transform: [{ translateX: left }],
                                            backgroundColor: disabled
                                                ? theme.switch_disabled_thumbtint : theme.fill_base,
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
