import React from 'react'
import {
    Modal,
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Animated,
    Easing,
    SafeAreaView,
} from 'react-native'
import PropTypes from 'prop-types'
import { WithTheme } from '../style'
import ActionSheetStyle from './style/index'

const MAXHEIGHT = 380
export default class ActionSheet extends React.Component {
    static propTypes = {
        options: PropTypes.array,
        showCancel: PropTypes.bool,
        cancel: PropTypes.func,
        onPress: PropTypes.func,
        disabledIndexArrary: PropTypes.array,
        styles: PropTypes.object,
        title: PropTypes.string,
    }
    static defaultProps = {
        options:[],
        showCancel:true,
        cancel: () => {},
        disabledIndexArrary:[],
        styles:{},
        title:null,
        onPress:() => {},
    }
    state = {
        visible:false,
        scrollEnabled:false,
        sheetAnim: new Animated.Value(MAXHEIGHT),
        height:MAXHEIGHT,
    }
    _styles = ActionSheetStyle
    componentDidMount() {
        const {
            options,
        } = this.props
        this.setState({
            scrollEnabled:options.length > 5,
        })
    }
    static getDerivedStateFromProps(props, state) {
        let tempHeight = MAXHEIGHT
        if (props.options.length <= 5) {
            tempHeight = props.options.length * 50
            props.title && (tempHeight += 50)
            props.showCancel && (tempHeight += 50)
        }

        return {
            scrollEnabled:props.options && props.options.length > 5,
            height:tempHeight,
            sheetAnim:new Animated.Value(tempHeight),
        }
    }
    show = () => {
        this.setState({ visible: true },() => this._showSheet())
    }
    hide = (index) => {
        this._hideSheet(() => {
            this.setState({ visible: false }, () => {
                // this.props.onPress(index)
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
                    cancel()
                    this.hide()
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
    _renderCell(item,index) {
        const {
            disabledIndexArrary,
            onPress,
        } = this.props
        const exitDisabled = disabledIndexArrary.find((mitem) => mitem === index)
        return (
            <TouchableOpacity
                style={this._styles.buttonStyle}
                disabled={exitDisabled > -1}
                key={`cell${index}`}
                onPress={() => {
                    onPress(index)
                    this.hide()
                }}
            >
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
        return options.map((item,index) => this._renderCell(item,index))
    }
    render() {
        const {
            visible,
            scrollEnabled,
            sheetAnim,
            height,
        } = this.state

        const {
            showCancel,
            styles,
            title,
        } = this.props

        return (
            <WithTheme themeStyles={ActionSheetStyle} styles={styles}>
                {
                    (_styles) => {
                        this._styles = _styles
                        const overlay = [
                            _styles.overlay,
                        ]
                        const body = [_styles.body,{
                            height,
                            transform: [{ translateY: sheetAnim }] ,
                        }]
                        const wrapper = [_styles.wrapper]
                        return (
                            <Modal
                                visible={visible}
                                animationType="fade"
                                onRequestClose={() => console.log('dd')}
                                transparent={true}
                            >
                                <SafeAreaView style={wrapper}>
                                    <Text
                                        style={overlay}
                                        onPress={this.hide}
                                    />
                                    <Animated.View
                                        style={body}
                                    >
                                        {title && this._renderTitle()}
                                        <ScrollView scrollEnabled={scrollEnabled}>
                                            {this._renderOptions()}
                                        </ScrollView>
                                        {showCancel && this._renderCanceButton()}
                                    </Animated.View>

                                </SafeAreaView>
                            </Modal>
                        )
                    }
                }
            </WithTheme>

        )
    }
}
