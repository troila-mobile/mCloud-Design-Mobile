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
        onTintColor: PropTypes.string,
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
    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.onToggle()
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
                onChange(this.state.checked)
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
                onChange(this.state.checked)
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
            onTintColor,
        } = this.props
        return (
            <WithTheme themeStyles={SwitchStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        const tintColor = !!onTintColor ? onTintColor : theme.switch_tint
                        return (
                            <TouchableWithoutFeedback disabled={disabled} onPress={this.onToggle}>
                                <Animated.View
                                    style={[
                                        {
                                            backgroundColor: animatedColor.interpolate({
                                                inputRange: [0, 0.1, 1],
                                                outputRange: [tintColor, theme.switch_fill, theme.switch_fill],
                                            }),
                                        },
                                        _styles.switch,
                                        style,
                                    ]}
                                >
                                    <Animated.View
                                        style={[
                                            {
                                                transform: [{ scale }],
                                                backgroundColor: disabled
                                                    ? theme.switch_disabled_tint : tintColor,
                                            },
                                            _styles.switchBtn,
                                        ]}
                                    />
                                    <Animated.View
                                        style={[
                                            {
                                                transform: [{ translateX: left }],
                                                backgroundColor: disabled
                                                    ? theme.switch_disabled_thumbtint : theme.switch_thumbtint,
                                            },
                                            getPlatformElevation(4),
                                            _styles.switchThumb,
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
