import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Animated,
    PanResponder,
    Dimensions,
    InteractionManager,
    Image,
    TouchableOpacity,
} from 'react-native'
import { WithTheme } from '../style'
import ModalStyles from './style'
import PropTypes from 'prop-types'

export default class NoticeView extends React.Component {
    static propTypes = {
        data: PropTypes.array,
        onDialogDismiss: PropTypes.func,
    }
    static defaultProps = {
        data: [],
        onDialogDismiss: null,
    }
    constructor(props) {
        super(props)
        const { data } = this.props
        this.state = {
            horizontalOffset : new Animated.Value(0),
            verticalOffset: new Animated.Value(10),
            scale: new Animated.Value(0.95),
            data,
        }
        this.animating = false
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                const { dy, dx } = gestureState
                return !this.animating && Math.abs(dx) > 10 && Math.abs(dy) < 20
            },
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

            onPanResponderGrant: (evt, gestureState) => {
                this.animating = true
            },
            onPanResponderMove: (evt, gestureState) => {
                const { dx } = gestureState
                this.panMove(dx)
            },
            onPanResponderTerminate: (evt, gestureState) => {
                const { dx } = gestureState
                this.panEnd(dx)
            },
            onPanResponderRelease: (evt, gestureState) => {
                const { dx } = gestureState
                this.panEnd(dx)
            },
        })
    }
    onDismiss(callback) {
        callback && callback()
    }
    onItemChanged() {
        const { data } = this.state
        const { onDialogDismiss } = this.props
        onDialogDismiss && onDialogDismiss(data)
    }
    onPress(callback) {
        callback && callback()
        const { data } = this.state
        data.shift()
        this.setState({
            data,
        }, () => this.onItemChanged())
    }
    panMove(dx) {
        const { horizontalOffset } = this.state
        horizontalOffset.setValue(dx)
    }
    panEnd(dx) {
        const {
            horizontalOffset, verticalOffset, scale, data,
        } = this.state
        const { width } = Dimensions.get('window')
        const toValue = dx > 80 ? width : ( dx < -80 ? -width : 0)
        if (dx > 80 || dx < -80) {
            Animated.parallel([
                Animated.timing(horizontalOffset,{
                    toValue,
                    duration: 300,
                }),
                Animated.parallel([
                    Animated.timing(verticalOffset,{
                        toValue: 0,
                        duration: 200,
                    }),
                    Animated.timing(scale,{
                        toValue: 1,
                        duration: 200,
                    }),
                ]),
            ]).start(() => {
                InteractionManager.runAfterInteractions(() => {
                    const dismissItem = data.shift()
                    this.onDismiss(dismissItem.onDismiss)
                    this.setState({
                        data,
                    }, () => {
                        horizontalOffset.setValue(0)
                        verticalOffset.setValue(10)
                        scale.setValue(0.95)
                        this.animating = false
                        this.onItemChanged()
                    })
                })
            })
        } else {
            Animated.timing(horizontalOffset,{
                toValue,
                duration: 300,
            }).start(() => {
                this.animating = false
            })
        }
    }
    renderContent = (item, _styles) => {
        const {
            title,
            content,
            icon,
            onPress,
            action,
        } = item
        const actionName = action || '查看'
        return (
            <View style={_styles.noticeContent}>
                <View style={_styles.noticeTopView}>
                    {
                        icon ? <Image style={_styles.noticeIcon} source={icon} /> : null
                    }
                    <Text
                        style={_styles.noticeTitle}
                        numberOfLines={1}
                        allowFontScaling={false}
                    >
                        {title}
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.onPress(onPress)}
                        hitSlop={{
                            top:20,bottom:20,right:20,left:20,
                        }}
                    >
                        <Text style={_styles.actionTitle} allowFontScaling={false}>{`${actionName} >`}</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={_styles.noticeText}
                    numberOfLines={1}
                    allowFontScaling={false}
                >
                    {content}
                </Text>
            </View>
        )
    }
    render() {
        const {
            horizontalOffset,
            verticalOffset,
            scale,
            data,
        } = this.state
        if (data.length === 0) return null
        return (
            <WithTheme themeStyles={ModalStyles}>
                {
                    (_styles) => {
                        const containerStyles = [
                            _styles.noticeContainer,
                            { transform: [{ translateX: horizontalOffset }], zIndex:5 },
                        ]
                        const subContainerStyles = [
                            _styles.noticeContainer,
                            {
                                transform: [
                                    { translateY: verticalOffset },
                                    { scaleX: scale },
                                    { scaleY: scale },
                                ],
                                zIndex: 2,
                                elevation: 2,
                            },
                        ]
                        return (
                            <SafeAreaView pointerEvents="box-none">
                                <View pointerEvents="box-none">
                                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                                    <Animated.View {...this._panResponder.panHandlers} style={containerStyles}>
                                        {
                                            this.renderContent(data[0], _styles)
                                        }
                                    </Animated.View>
                                    {
                                        data.length > 1
                                            ? (
                                                <Animated.View style={subContainerStyles}>
                                                    {
                                                        this.renderContent(data[1], _styles)
                                                    }
                                                </Animated.View>
                                            ) : null
                                    }
                                </View>
                            </SafeAreaView>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
