import React from 'react'
import {
    View, ViewPropTypes, Text, Animated, Easing,
} from 'react-native'
import { WithTheme } from '../style'
import MarqueeStyles from './style'
import PropTypes from 'prop-types'

export default class Marquee extends React.Component {
    static propTypes = {
        speed: PropTypes.number,
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        text: PropTypes.string,
        maxWidth: PropTypes.number,
        loop: PropTypes.bool,
        startDelay: PropTypes.number,
        resetDelay: PropTypes.number,
    }
    static defaultProps = {
        speed: 80,
        style: {},
        styles: {},
        text: '',
        maxWidth: 1200,
        loop: true,
        startDelay: 1000,
        resetDelay: 800,
    }
    constructor(props) {
        super(props)
        this.containerWidth = 0
        this.textWidth = 0
        this.state = {
            left: new Animated.Value(0),
        }
    }
    shouldComponentUpdate(nextProps) {
        const { text } = this.props
        if (nextProps.text !== text) {
            this.textWidth = 0
            this.movingAnimate && this.movingAnimate.stop()
        }
        return true
    }
    _onLayoutContainer = (e) => {
        if (!this.containerWidth) {
            this.containerWidth = e.nativeEvent.layout.width
            this.setState({ left: new Animated.Value(0) }, () => {
                this.startMove()
            })
        }
    }
    _onLayoutText = (e) => {
        if (this.textWidth) return
        this.textWidth = e.nativeEvent.layout.width
        this.startMove()
    }
    startMove() {
        if (this.containerWidth && this.textWidth > this.containerWidth) {
            const { speed, loop, startDelay } = this.props
            const { left } = this.state
            const { containerWidth, textWidth } = this
            this.movingAnimate = Animated.timing(left, {
                toValue: containerWidth - textWidth,
                duration: (1000 * containerWidth) / speed,
                easing: Easing.linear,
                delay: startDelay,
                isInteraction: false,
            })
            this.movingAnimate.start(() => {
                if (loop) {
                    this.resetMove()
                }
            })
        }
    }
    resetMove() {
        const { left } = this.state
        const { resetDelay } = this.props
        Animated.timing(left, {
            toValue: 0,
            duration: 0,
            delay: resetDelay,
            isInteraction: false,
        }).start(() => {
            this.startMove()
        })
    }
    render() {
        const {
            style,
            styles,
            text,
            maxWidth,
        } = this.props
        const {
            left,
        } = this.state
        return (
            <WithTheme themeStyles={MarqueeStyles} styles={styles}>
                {
                    (_styles) => {
                        const textStyle = { ..._styles.textStyle, ...style }
                        const textChildren = (
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={textStyle}
                                onLayout={this._onLayoutText}
                            >
                                {text}
                            </Text>
                        )
                        const animatedStyle = {
                            left,
                            flexDirection: 'row',
                            width: maxWidth,
                        }
                        return (
                            <View
                                style={_styles.container}
                                onLayout={this._onLayoutContainer}
                            >
                                <Animated.View style={animatedStyle}>
                                    {textChildren}
                                </Animated.View>
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
