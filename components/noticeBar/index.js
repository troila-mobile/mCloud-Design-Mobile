import React from 'react'
import {
    View, ViewPropTypes, Text, Image, TouchableOpacity,
} from 'react-native'
import { WithTheme } from '../style'
import NoticeBarStyles from './style'
import PropTypes from 'prop-types'
import AsyncStorage from '../utils/AsyncStorage'
import Marquee from '../marquee'

const defaultIconSource = require('./assets/notice_hint.png')

export default class NoticeBar extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        textStyle: PropTypes.object,
        iconLeft: PropTypes.bool,
        iconSource: PropTypes.any,
        numberOfLines: PropTypes.number,
        marquee: PropTypes.bool,
        marqueeProps: PropTypes.object,
        closeType: PropTypes.oneOf(['none','close','never']),
        closeStyle: PropTypes.object,
        text: PropTypes.string,
        onDismiss: PropTypes.func,
        neverShowKey: PropTypes.string,
    }
    static defaultProps = {
        style: {},
        styles: {},
        textStyle: {},
        iconLeft: true,
        iconSource: defaultIconSource,
        numberOfLines: 1,
        marquee: false,
        marqueeProps: {},
        closeType: 'none',
        closeStyle: {},
        text: '',
        onDismiss: null,
        neverShowKey: 'NeverShow',
    }
    constructor(props) {
        super(props)
        const { closeType } = this.props
        this.state = {
            visible: closeType !== 'never',
        }
    }
    componentDidMount() {
        const { closeType } = this.props
        if (closeType === 'never') {
            this.getReadState()
        }
    }
    onDismiss() {
        const { closeType, neverShowKey, onDismiss } = this.props
        this.setState({
            visible: false,
        }, () => {
            if (closeType === 'never') {
                AsyncStorage.setItem(neverShowKey, true)
            }
            onDismiss && onDismiss()
        })
    }
    async getReadState() {
        try {
            const { neverShowKey } = this.props
            const readState = await AsyncStorage.getItem(neverShowKey)
            if (!readState) {
                this.setState({
                    visible: true,
                })
            }
        } catch (e) {
            this.setState({
                visible: true,
            })
        }
    }
    renderClose(_styles) {
        const { closeType, closeStyle } = this.props
        if (closeType === 'close') {
            const closeStyles = { ..._styles.closeStyle, ...closeStyle, ..._styles.closeMargin }
            return (
                <TouchableOpacity onPress={() => this.onDismiss()}>
                    <Text style={closeStyles}>
                        ×
                    </Text>
                </TouchableOpacity>
            )
        }
        if (closeType === 'never') {
            const neverStyles = { ..._styles.neverStyle, ...closeStyle, ..._styles.closeMargin }
            return (
                <TouchableOpacity onPress={() => this.onDismiss()}>
                    <Text style={neverStyles}>
                        不再提示
                    </Text>
                </TouchableOpacity>
            )
        }
        return null
    }
    render() {
        const {
            style,
            styles,
            textStyle,
            iconLeft,
            iconSource,
            numberOfLines,
            marquee,
            marqueeProps,
            text,
        } = this.props
        const {
            visible,
        } = this.state
        if (!visible) return null
        return (
            <WithTheme themeStyles={NoticeBarStyles} styles={styles}>
                {
                    (_styles) => {
                        const containerStyles = { ..._styles.containerStyle, ...style }
                        const textStyles = { ..._styles.textStyle, ...textStyle }
                        const iconStyles = _styles.iconStyle
                        const textContainerStyles = _styles.textContainer
                        return (
                            <View
                                style={containerStyles}
                            >
                                {
                                    iconLeft ? <Image style={iconStyles} source={iconSource} /> : null
                                }
                                <View style={textContainerStyles}>
                                    {
                                        marquee
                                            ? (
                                                <Marquee
                                                    speed={40}
                                                    // eslint-disable-next-line react/jsx-props-no-spreading
                                                    {...marqueeProps}
                                                    text={text}
                                                    styles={{ textStyle:textStyles }}
                                                />
                                            )
                                            : (
                                                <Text style={textStyles} numberOfLines={numberOfLines}>
                                                    {text}
                                                </Text>
                                            )
                                    }
                                </View>
                                {
                                    this.renderClose(_styles)
                                }
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
