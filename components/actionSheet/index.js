import React from 'react'
import {
    Modal,
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Animated,
    Easing,
    Image,
    findNodeHandle,
    UIManager,
    Keyboard,
} from 'react-native'
import PropTypes from 'prop-types'
import { WithTheme } from '../style'
import ActionSheetStyle from './style/index'
import { SafeAreaView } from 'react-navigation'
// import { UIManager } from 'NativeModules'


const checkSource = require('./assets/check.png')

const MAXHEIGHT = 410

export default class ActionSheet extends React.Component {
    static propTypes = {
        options: PropTypes.array,
        showCancel: PropTypes.bool,
        cancel: PropTypes.func,
        onPress: PropTypes.func,
        disabledIndexArrary: PropTypes.array,
        styles: PropTypes.object,
        title: PropTypes.string,
        checkedIndex: PropTypes.number,
        lines: PropTypes.number,
        cellHeight: PropTypes.number,
        customColors: PropTypes.arrayOf(PropTypes.shape({
            color: PropTypes.string,
            cellIndex: PropTypes.number,
        })),
    }
    static defaultProps = {
        options: [],
        showCancel: true,
        cancel: () => { },
        disabledIndexArrary: [],
        styles: {},
        title: null,
        onPress: () => { },
        checkedIndex: -1,
        lines: 1,
        cellHeight: 50,
        customColors:[],
    }
    state = {
        visible: false,
        sheetAnim: new Animated.Value(MAXHEIGHT),
        height: MAXHEIGHT,
        scrollViewHeight: 250,
        titleHeight: 50,
        safeHeight: 0,
    }
    _styles = ActionSheetStyle
    static getDerivedStateFromProps(props, state) {
        const { cellHeight } = props
        let tempHeight = MAXHEIGHT
        if (props.options.length <= 5) {
            tempHeight = props.options.length * cellHeight + 30
            props.title && (tempHeight += 50)
            props.showCancel && (tempHeight += 50)
        }

        return state.height === tempHeight ? null : {
            height: tempHeight,
            sheetAnim: new Animated.Value(tempHeight),
            scrollViewHeight: props.options && props.options.length > 5 ? 250 : props.options.length * cellHeight,
        }
    }
    show = () => {
        Keyboard.dismiss()
        this.setState({ visible: true }, this._showSheet)
    }
    hide = (callback) => {
        this._hideSheet(() => {
            this.setState({ visible: false }, () => {
                setTimeout(callback, 500)
            })
        })
    }
    _renderCanceButton = () => {
        const {
            cancel,
        } = this.props
        return (
            <TouchableOpacity
                style={this._styles.cancelButton}
                onPress={() => {
                    this.hide(cancel)
                }}
            >
                <Text
                    style={this._styles.normalText}
                >
                    取消
                </Text>
            </TouchableOpacity>
        )
    }
    _renderTitle = (e) => {
        const {
            title,
        } = this.props
        return (
            <View
                style={this._styles.titleBox}
                ref={(o) => this.titleRef = o}
                onLayout={() => {
                    const handle = findNodeHandle(this.titleRef)
                    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
                        this.setState({ titleHeight:height })
                    })
                }}
            >
                <Text
                    style={this._styles.titleStyle}
                    numberOfLines={2}
                >
                    {title}
                </Text>
            </View>
        )
    }
    _showSheet = () => {
        Animated.timing(this.state.sheetAnim, {
            toValue: 0,
            duration: 250,
            easing: Easing.out(Easing.ease),
        }).start()
    }
    _hideSheet(callback) {
        const {
            height,
        } = this.state
        Animated.timing(this.state.sheetAnim, {
            toValue: height,
            duration: 200,
        }).start(callback)
    }
    _renderCell(item, index) {
        const {
            disabledIndexArrary,
            onPress,
            checkedIndex,
            lines,
            cellHeight,
            customColors,
        } = this.props
        const customColor = customColors && customColors.find((o) => o.cellIndex === index)
        const exitDisabled = disabledIndexArrary.find((mitem) => mitem === index)
        const textStyle = [
            this._styles.normalText,
            customColor && customColor.color ? { color: customColor.color } : {},
            exitDisabled ? this._styles.disableTextStyle : {},
            { paddingHorizontal:5 },
        ]
        return (
            <TouchableOpacity
                style={[this._styles.buttonStyle,{ height:cellHeight }]}
                disabled={exitDisabled > -1}
                key={`cell${index}`}
                onPress={() => {
                    this.hide(() => onPress(index))
                }}
            >
                <View style={this._styles.buttonViewStyle}>
                    {
                        checkedIndex !== -1 && checkedIndex === index && (
                            <Image
                                source={checkSource}
                                style={this._styles.CheckImage}
                            />
                        )
                    }
                    <Text
                        style={textStyle}
                        numberOfLines={lines}
                    >
                        {item}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    _renderOptions() {
        const {
            options,
        } = this.props
        return options.map((item, index) => this._renderCell(item, index))
    }
    render() {
        const {
            visible,
            sheetAnim,
            scrollViewHeight,
            titleHeight,
            safeHeight,
        } = this.state

        const {
            showCancel,
            styles,
            title,
            cancel,
            options,
        } = this.props
        return (
            <WithTheme themeStyles={ActionSheetStyle} styles={styles}>
                {
                    (_styles) => {
                        this._styles = _styles
                        const overlay = [
                            _styles.overlay,
                        ]
                        const cancelHeight = showCancel && _styles.cancelButton.height
                        let h = 0
                        if (title) {
                            h = scrollViewHeight + cancelHeight + titleHeight
                        } else {
                            h = scrollViewHeight + cancelHeight
                        }
                        const body = [_styles.body,{
                            height: h,
                            bottom: safeHeight,
                        }]
                        const wrapper = [_styles.wrapper]
                        return (
                            <Modal
                                visible={visible}
                                onRequestClose={() => this.hide(cancel)}
                                transparent={true}
                            >
                                <View style={wrapper}>
                                    <Text
                                        style={overlay}
                                        onPress={() => this.hide(cancel)}
                                    />
                                    <Animated.View
                                        style={[...body, { transform: [{ translateY: sheetAnim }] }]}
                                    >
                                        {!!title && this._renderTitle()}
                                        <ScrollView
                                            scrollEnabled={options && options.length > 5}
                                            style={{ height: scrollViewHeight }}
                                        >
                                            {this._renderOptions()}
                                        </ScrollView>
                                        {showCancel && this._renderCanceButton()}
                                    </Animated.View>
                                    <SafeAreaView
                                        style={_styles.SafeAreaView}
                                        ref={(o) => this.safeBottom = o}
                                        onLayout={() => {
                                            const handle = findNodeHandle(this.safeBottom)
                                            UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
                                                this.setState({ safeHeight:height })
                                            })
                                        }}
                                    />
                                </View>
                            </Modal>
                        )
                    }
                }
            </WithTheme>

        )
    }
}
