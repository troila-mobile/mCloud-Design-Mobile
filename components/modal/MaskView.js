import React from 'react'
import {
    View, Animated, TouchableWithoutFeedback,
} from 'react-native'
import { WithTheme } from '../style'
import ModalStyles from './style'
import PropTypes from 'prop-types'

export default class MaskView extends React.Component {
    static propTypes = {
        styles: PropTypes.object,
        maskOpacity: PropTypes.number,
        animateDuration: PropTypes.number,
        children: PropTypes.any,
        onDismiss: PropTypes.func,
        maskCloseable: PropTypes.bool,
    }
    static defaultProps = {
        styles: {},
        maskOpacity: 0.4,
        animateDuration: 200,
        children: null,
        onDismiss: null,
        maskCloseable: true,
    }
    state = {
        opacity: new Animated.Value(0),
        visible: false,
    }
    componentWillUnmount() {
        this.stopMaskAnim()
    }
    getOpacity = (visible) => {
        const { maskOpacity } = this.props
        return visible ? maskOpacity : 0
    }
    stopMaskAnim = () => {
        if (this.animMask) {
            this.animMask.stop()
            this.animMask = null
        }
    }
    startMaskAnim(visible, callback) {
        this.stopMaskAnim()
        const { opacity } = this.state
        const { animateDuration } = this.props
        opacity.setValue(this.getOpacity(!visible))
        this.animMask = Animated.timing(opacity, {
            toValue: this.getOpacity(visible),
            duration: visible ? animateDuration : 0,
            useNativeDriver: true,
        })
        this.animMask.start(() => {
            this.animMask = null
            callback && callback()
        })
    }
    show() {
        this.setState({
            visible: true,
        }, () => {
            this.startMaskAnim(true)
        })
    }
    hide(onDismiss) {
        this.startMaskAnim(false, () => {
            this.setState({
                visible: false,
            }, () => {
                onDismiss && onDismiss()
            })
        })
    }
    maskClose() {
        const { onDismiss, maskCloseable } = this.props
        if (maskCloseable) this.hide(onDismiss)
    }
    render() {
        const {
            styles,
            children,
        } = this.props
        const {
            visible,
        } = this.state
        if (!visible) return null
        return (
            <WithTheme themeStyles={ModalStyles} styles={styles}>
                {
                    (_styles) => {
                        const { opacity } = this.state
                        const maskStyles = [
                            _styles.maskView,
                            { opacity },
                        ]
                        const dialogStyles = [
                            _styles.dialogView,
                        ]
                        return (
                            <View style={_styles.container}>
                                <TouchableWithoutFeedback onPress={() => this.maskClose()}>
                                    <Animated.View style={maskStyles}>
                                    </Animated.View>
                                </TouchableWithoutFeedback>
                                <Animated.View style={dialogStyles}>
                                    {children}
                                </Animated.View>
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
