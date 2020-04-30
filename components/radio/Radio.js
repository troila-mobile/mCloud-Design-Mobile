import React from 'react'
import {
    View,
    TouchableWithoutFeedback,
    ViewPropTypes,
    Text,
    Animated,
} from 'react-native'
import { WithTheme } from '../style'
import RadioStyles from './style'
import PropTypes from 'prop-types'

export default class Radio extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        children: PropTypes.any,
        onChange: PropTypes.func,
        circleSize: PropTypes.number,
        centerSize: PropTypes.number,
        icon: PropTypes.node,
    }
    static defaultProps = {
        style: {},
        styles: {},
        disabled: false,
        children: null,
        onChange: () => {},
        circleSize: 16,
        centerSize: 10,
    }
    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked || false,
            fade: new Animated.Value(props.checked ? 1 : 0),
            width: new Animated.Value(props.checked ? props.centerSize : 0),
            height: new Animated.Value(props.checked ? props.centerSize : 0),
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (typeof props.checked === 'boolean' && props.checked !== state.checked) {
            Animated.parallel([
                Animated.timing(state.fade, {
                    toValue: props.checked ? 1 : 0,
                    duration: 200,
                }),
                Animated.timing(state.width, {
                    toValue: props.checked ? props.centerSize : 0,
                    duration: 200,
                }),
                Animated.timing(state.height, {
                    toValue: props.checked ? props.centerSize : 0,
                    duration: 200,
                }),
            ]).start()
            return {
                checked: props.checked,
            }
        }
        return null
    }
    onPress = () => {
        const {
            checked,
            onChange,
            disabled,
        } = this.props
        if (disabled) {
            return
        }
        if (!(typeof checked === 'boolean')) {
            this.setState({
                checked: true,
            })
            this.changeAnimated(true)
        }
        if (onChange) {
            onChange({ checked: true })
        }
    }
    changeAnimated = (checked) => {
        const { centerSize } = this.props
        const { width, height, fade } = this.state
        Animated.parallel([
            Animated.timing(fade, {
                toValue: checked ? 1 : 0,
                duration: 200,
            }),
            Animated.timing(width, {
                toValue: checked ? centerSize : 0,
                duration: 200,
            }),
            Animated.timing(height, {
                toValue: checked ? centerSize : 0,
                duration: 200,
            }),
        ]).start()
    }
    render() {
        const {
            fade,
            width,
            height,
        } = this.state
        const {
            style,
            styles,
            disabled,
            children,
            circleSize,
            centerSize,
            icon,
        } = this.props
        return (
            <WithTheme themeStyles={RadioStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        const circleStyle = [
                            _styles.circleStyle,
                            {
                                width: circleSize,
                                height: circleSize,
                                borderRadius: circleSize / 2,
                            },
                            style,
                        ]
                        const centerStyle = [
                            _styles.centerStyle,
                            {
                                width,
                                height,
                                borderRadius: centerSize / 2,
                                opacity: disabled ? theme.opacity_disabled : fade,
                            },
                        ]
                        return (
                            <TouchableWithoutFeedback onPress={this.onPress}>
                                <View style={_styles.wrapper}>
                                    {
                                        icon || (
                                            <View style={circleStyle}>
                                                <Animated.View style={centerStyle} />
                                            </View>
                                        )
                                    }
                                    {
                                        typeof children === 'string' ? (
                                            <Text style={styles.iconRight}>{children}</Text>
                                        ) : (
                                            children
                                        )
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
