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
        segments: PropTypes.number,
        titles: PropTypes.arrayOf(PropTypes.string),
        onPressMethods: PropTypes.arrayOf(PropTypes.func),
        selectedIndex:PropTypes.number,
        style: ViewPropTypes.style,
        styles: PropTypes.object,
    }
    static defaultProps = {
        type: 'default',
        disabled: false,
        segments: 2,
        titles: ['',''],
        onPressMethods:[() => {},() => {}] ,
        selectedIndex:0,
        style:{},
        styles:{},
    };
    // 构造
    constructor(props) {
        super(props)
        // 初始状态
        this.state = {
            selectedIndex:this.props.selectedIndex,
        }
    }
    render() {
        const {
            style,
            styles,
            type,
            disabled,
            segments,
            titles,
            onPressMethods,
        } = this.props
        const {
            selectedIndex,
        } = this.state
        return (
            <WithTheme themeStyles={SegmentedControlStyles} styles={styles}>
                {
                    (_styles) => {
                        const viewStyle = [
                            _styles[`${type}Container`],
                            disabled && _styles.disabled,
                            style,
                            _styles.containerHeight
                        ]
                        const unselectedTextStyle = [
                            _styles[`${type}UnselectedText`],
                        ]
                        const selectedTextStyle = [
                            _styles[`${type}SelectedText`],
                        ]
                        const leftButtonStyle = [
                            _styles.wrapperStyle,
                            _styles.borderRadiusLeft,
                            selectedIndex === 0
                                ? _styles[`${type}ButtonBGSelected`]
                                : _styles[`${type}ButtonBGUnselected`],
                            selectedIndex === 0
                                ? _styles[`${type}BorderRight`]
                                : _styles[`${type}BorderRight`],
                        ]
                        const rightButtonStyle = [
                            _styles.wrapperStyle,
                            _styles.borderRadiusRight,
                            selectedIndex === segments - 1
                                ? _styles[`${type}ButtonBGSelected`]
                                : _styles[`${type}ButtonBGUnselected`],
                        ]
                        const centerButtonStyleSelected = [
                            _styles.wrapperStyle,
                            _styles[`${type}ButtonBGSelected`],
                        ]
                        const centerButtonStyleUnselected = [
                            _styles.wrapperStyle,
                            _styles[`${type}ButtonBGUnselected`],
                        ]
                        const borderRight = [
                            _styles[`${type}BorderRight`]
                        ]
                        return (
                            <View style={[viewStyle]}>
                                {
                                    titles.map((text,i)=>(
                                        <TouchableOpacity
                                            style={
                                                [i === 0
                                                    ? leftButtonStyle
                                                    : i === segments-1
                                                        ? rightButtonStyle
                                                        : i === selectedIndex
                                                            ? centerButtonStyleSelected
                                                            : [centerButtonStyleUnselected,borderRight]
                                                ]}
                                            onPress={(e) => {
                                                this.setState({
                                                    selectedIndex:i,
                                                })
                                                let onPress = onPressMethods[i]
                                                onPress && onPress(e)
                                            }}
                                            disabled={disabled}
                                        >
                                            <Text
                                                style={selectedIndex === i
                                                    ? selectedTextStyle
                                                    : unselectedTextStyle}
                                            >
                                                {text}
                                            </Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
