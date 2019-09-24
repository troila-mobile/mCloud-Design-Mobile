/**
 * Created by sml on 2019/9/23.
 */
import React from 'react'
import {
    Text,
    TouchableOpacity,
    ViewPropTypes,
    View,
} from 'react-native'
import { WithTheme } from '../style'
import SegmentedControlStyles from './style'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        disabled: PropTypes.bool,
        leftText:PropTypes.string,
        rightText:PropTypes.string,
        onPressLeft: PropTypes.func,
        onPressRight: PropTypes.func,
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        defaultSelected:PropTypes.string,
    }
    static defaultProps = {
        type: 'default',
        disabled: false,
        leftText:'',
        rightText:'',
        onPressLeft: () => {},
        onPressRight:() => {},
        defaultSelected:'left',
        style:{},
        styles:{},
    };
    // 构造
    constructor(props) {
        super(props)
        // 初始状态
        this.state = {
            selectedPosition:this.props.defaultSelected === 'left' ? 0 : 1,
        }
    }
    render() {
        const {
            style,
            styles,
            type,
            disabled,
            leftText,
            rightText,
            onPressLeft,
            onPressRight,
        } = this.props
        const {
            selectedPosition,
        } = this.state
        return (
            <WithTheme themeStyles={SegmentedControlStyles} styles={styles}>
                {
                    (_styles) => {
                        const viewStyle = [
                            _styles[`${type}Container`],
                            disabled && _styles.disabled,
                            style,
                        ]
                        const unselectedTextStyle = [
                            _styles[`${type}UnselectedText`],
                        ]
                        const selectedTextStyle = [
                            _styles[`${type}SelectedText`],
                        ]
                        const leftButtonStyle = [
                            _styles.wrapperStyleLeft,
                            selectedPosition === 0
                                ? _styles[`${type}ButtonBGSelected`]
                                : _styles[`${type}ButtonBGUnselected`],
                        ]
                        const rightButtonStyle = [
                            _styles.wrapperStyleRight,
                            selectedPosition === 1
                                ? _styles[`${type}ButtonBGSelected`]
                                : _styles[`${type}ButtonBGUnselected`],
                        ]
                        return (
                            <View style={[viewStyle]}>
                                <TouchableOpacity
                                    style={[leftButtonStyle]}
                                    onPress={(e) => {
                                        if ( selectedPosition === 1 ) {
                                            this.setState({
                                                selectedPosition:0,
                                            })
                                            onPressLeft && onPressLeft(e)
                                        }
                                    }}
                                    disabled={disabled}
                                >
                                    <Text
                                        style={selectedPosition === 0
                                            ? selectedTextStyle
                                            : unselectedTextStyle}
                                    >
                                        {leftText}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[rightButtonStyle]}
                                    onPress={(e) => {
                                        if (selectedPosition === 0) {
                                            this.setState({
                                                selectedPosition:1,
                                            })
                                            onPressRight && onPressRight(e)
                                        }
                                    }}
                                    disabled={disabled}
                                >
                                    <Text
                                        style={selectedPosition === 1
                                            ? selectedTextStyle
                                            : unselectedTextStyle}
                                    >
                                        {rightText}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
