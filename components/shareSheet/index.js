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
import ShareStyle from './style/index'
import Item from './item'

const MAXHEIGHT = 205
export default class ActionSheet extends React.Component {
    static propTypes = {
        options: PropTypes.array,// ['qq','qzone','friend','wechat','weibo']
        customItem: PropTypes.array, // [{ image:'', title:'', key:'' },{ image:'', title:'', key:'' }]
        cancel: PropTypes.func,
        onPress: PropTypes.func,
        styles: PropTypes.object,
    }
    static defaultProps = {
        options:[],
        cancel: () => {},
        styles:{},
        onPress:() => {},
        customItem: [],
    }
    state = {
        visible:false,
        scrollEnabled:false,
        sheetAnim: new Animated.Value(MAXHEIGHT),
        height:MAXHEIGHT,
        sources:[],
    }
    _styles = ShareStyle
    componentDidMount() {
        this._loadSources()
    }
    static getDerivedStateFromProps(props, state) {
        return  {
            scrollEnabled:props.options && props.options.length > 5,
        }
    }
    show = () => {
        this.setState({ visible: true },this._showSheet)
    }
    hide = (callback) => {
        this._hideSheet(() => {
            this.setState({ visible: false }, () => {
                setTimeout(callback,500)
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
                    style={this._styles.cancelText}
                >
                    取消
                </Text>
            </TouchableOpacity>
        )
    }
    _renderTitle = (e) => (
        <View
            style={this._styles.titleBox}
        >
            <Text
                style={this._styles.titleStyle}
                numberOfLines={2}
            >
                    分享到
            </Text>
        </View>
    )
    _showSheet = () => {
        Animated.timing(this.state.sheetAnim, {
            toValue: 0,
            duration: 250,
            easing: Easing.out(Easing.ease),
        }).start()
    }
    _loadSources() {
        const {
            options,
            customItem,
        } = this.props
        let tempSources = []
        if (customItem.length > 0) {
            tempSources = [...customItem]
        } else {
            options.forEach((element) => {
                switch (element) {
                case 'wechat':
                    tempSources.push({
                        image:require('./assets/icon-wechat.png'),
                        title:'微信好友',
                        key:'wechat',
                    })

                    break
                case 'friend':
                    tempSources.push({
                        image:require('./assets/icon-friend.png'),
                        title:'朋友圈',
                        key:'friend',
                    })

                    break
                case 'weibo':
                    tempSources.push({
                        image:require('./assets/icon-weibo.png'),
                        title:'新浪微博',
                        key:'weibo',
                    })

                    break
                case 'qzone':
                    tempSources.push({
                        image:require('./assets/icon-qzone.png'),
                        title:'QQ空间',
                        key:'qzone',
                    })

                    break
                case 'qq':
                    tempSources.push({
                        image:require('./assets/icon-qq.png'),
                        title:'QQ好友',
                        key:'qq',
                    })

                    break

                default:
                    break
                }
            })
        }
        this.setState({
            sources:[...tempSources],
            scrollEnabled:tempSources.length >= 5,
        })
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
    _renderCell() {
        const {
            sources,
        } = this.state
        const { onPress } = this.props
        return sources.map(
            (item,index) => (
                <Item
                    key={`share-${item.key}`}
                    styles={this._styles}
                    onPress={() => {
                        this.hide(() => onPress(item.key))
                    }}
                    item={item}
                />
            )
        )
    }
    render() {
        const {
            visible,
            scrollEnabled,
            sheetAnim,
            height,
        } = this.state

        const {
            styles,
            cancel,
        } = this.props

        return (
            <WithTheme themeStyles={ShareStyle} styles={styles}>
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
                        const scrollContentStyle = [_styles.scrollContent,{ flex:scrollEnabled ? 0 : 1 }]
                        const wrapper = [_styles.wrapper]
                        return (
                            <Modal
                                visible={visible}
                                onRequestClose={() => this.hide(cancel)}
                                transparent={true}
                            >
                                <SafeAreaView style={wrapper}>
                                    <Text
                                        style={overlay}
                                        onPress={() => this.hide(cancel)}
                                    />
                                    <Animated.View
                                        style={body}
                                    >
                                        {this._renderTitle()}
                                        <ScrollView
                                            contentContainerStyle={[...scrollContentStyle]}
                                            scrollEnabled={scrollEnabled}
                                            horizontal={true}
                                            style={_styles.scrollStyle}
                                        >
                                            {this._renderCell()}
                                        </ScrollView>
                                        {this._renderCanceButton()}
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
