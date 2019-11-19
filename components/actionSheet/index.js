import React from 'react'
import {
    Modal,
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Animated,
    Easing,
    Image
} from 'react-native'
import PropTypes from 'prop-types'
import { WithTheme } from '../style'
import ActionSheetStyle from './style/index'
import { SafeAreaView } from 'react-navigation'

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
    }
    state = {
        visible: false,
        scrollEnabled: false,
        sheetAnim: new Animated.Value(MAXHEIGHT),
        height: MAXHEIGHT,
        scrollViewHeight: 250,
    }
    _styles = ActionSheetStyle
    componentDidMount() {
        const {
            options,
        } = this.props
        this.setState({
            scrollEnabled: options.length > 5,
        })
    }
    static getDerivedStateFromProps(props, state) {
        let tempHeight = MAXHEIGHT
        if (props.options.length <= 5) {
            tempHeight = props.options.length * 50 + 30
            props.title && (tempHeight += 50)
            props.showCancel && (tempHeight += 50)
        }

        return state.height === tempHeight ? null : {
            scrollEnabled: props.options && props.options.length > 5,
            height: tempHeight,
            sheetAnim: new Animated.Value(tempHeight),
            scrollViewHeight: props.options && props.options.length > 5 ? 250 : props.options * 50,
        }
    }
    show = () => {
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
        } = this.props
        const exitDisabled = disabledIndexArrary.find((mitem) => mitem === index)
        return (
            <TouchableOpacity
                style={this._styles.buttonStyle}
                disabled={exitDisabled > -1}
                key={`cell${index}`}
                onPress={() => {
                    this.hide(() => onPress(index))
                }}
            >
                {
                    checkedIndex !== -1 && checkedIndex === index && (
                        <Image
                            source={checkSource}
                            style={this._styles.CheckImage}
                        />
                    )
                }
                <Text
                    style={exitDisabled ? this._styles.disableTextStyle : this._styles.normalText}
                >
                    {item}
                </Text>
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
            scrollEnabled,
            sheetAnim,
            scrollViewHeight,
        } = this.state

        const {
            showCancel,
            styles,
            title,
            cancel,
        } = this.props

        return (
            <WithTheme themeStyles={ActionSheetStyle} styles={styles}>
                {
                    (_styles) => {
                        this._styles = _styles
                        const overlay = [
                            _styles.overlay,
                        ]
                        const body = [_styles.body]
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
                                        {title && this._renderTitle()}
                                        <ScrollView
                                            scrollEnabled={scrollEnabled}
                                            style={{ height: scrollViewHeight }}
                                        >
                                            {this._renderOptions()}
                                        </ScrollView>
                                        {showCancel && this._renderCanceButton()}
                                    </Animated.View>
                                    <SafeAreaView style={_styles.SafeAreaView} />
                                </View>
                            </Modal>
                        )
                    }
                }
            </WithTheme>

        )
    }
}
