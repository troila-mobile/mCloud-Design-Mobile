import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    ViewPropTypes,
} from 'react-native'
import PropTypes from 'prop-types'
import { WithTheme, Theme } from '../style'
import Switch from './Switch'
import SwitchStyles from './style'

export default class SwitchButton extends Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        checked: PropTypes.bool,
        onChange: PropTypes.func,
        onTintColor: PropTypes.string,   // 开启时的背景颜色
        thumbTintColor: PropTypes.string,   // 原型按钮的背景颜色
        tintColor: PropTypes.string,   // 背景颜色
        disabledThumbTintColor: PropTypes.string,   // disabled 原型按钮的背景颜色
        disabledTintColor: PropTypes.string,   // disabled 的背景颜色
        disabled: PropTypes.bool,
        children: PropTypes.any,
        hideLine: PropTypes.bool,
    }
    static defaultProps = {
        style: {},
        styles: {},
        checked: false,
        onChange: () => { },
        onTintColor: Theme.brand_primary,
        thumbTintColor: Theme.fill_base,
        tintColor: Theme.switch_tint,
        disabledThumbTintColor: Theme.switch_disabled_thumbtint,
        disabledTintColor: Theme.switch_disabled_tint,
        disabled: false,
        children: null,
        hideLine: false,
    }
    onPress = () => {
        const { onChange } = this.props
        if (this.Switch) {
            this.Switch.onToggle()
        }
        if (onChange) {
            onChange()
        }
    }
    render() {
        const {
            style,
            styles,
            onTintColor,
            tintColor,
            thumbTintColor,
            disabledThumbTintColor,
            disabledTintColor,
            checked,
            disabled,
            children,
            hideLine,
        } = this.props
        return (
            <WithTheme themeStyles={SwitchStyles} styles={styles}>
                {
                    (_styles) => (
                        <TouchableWithoutFeedback disabled={disabled} onPress={this.onPress}>
                            <View style={[_styles.wrapper, style]}>
                                {
                                    children ? (
                                        typeof children === 'string'
                                            ? <Text style={_styles.itemText}>{children}</Text>
                                            : children
                                    ) : null
                                }
                                <Switch
                                    ref={(e) => {
                                        this.Switch = e
                                    }}
                                    disabled={disabled}
                                    checked={checked}
                                    onTintColor={onTintColor}
                                    tintColor={tintColor}
                                    thumbTintColor={thumbTintColor}
                                    disabledThumbTintColor={disabledThumbTintColor}
                                    disabledTintColor={disabledTintColor}
                                />
                                {
                                    !hideLine && (
                                        <View style={_styles.line} />
                                    )
                                }
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            </WithTheme>
        )
    }
}
