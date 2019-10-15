import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    ViewPropTypes,
} from 'react-native'
import PropTypes from 'prop-types'
import { WithTheme } from '../style'
import Switch from './Switch'
import SwitchStyles from './style'

export default class SwitchButton extends Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        checked: PropTypes.bool,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        children: PropTypes.any,
        hideLine: PropTypes.bool,
    }
    static defaultProps = {
        style: {},
        styles: {},
        checked: false,
        onChange: () => { },
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
            checked,
            disabled,
            children,
            hideLine,
        } = this.props
        return (
            <WithTheme themeStyles={SwitchStyles} styles={styles}>
                {
                    (_styles, theme) => (
                        <TouchableWithoutFeedback disabled={disabled} onPress={this.onPress}>
                            <View style={[_styles.wrapper, style]}>
                                {
                                    children ? (
                                        typeof children === 'string'
                                            ? (
                                                <Text
                                                    style={[
                                                        _styles.itemText,
                                                        disabled ? {
                                                            color: theme.color_text_info,
                                                        } : null,
                                                    ]}
                                                >
                                                    {children}
                                                </Text>
                                            )
                                            : children
                                    ) : null
                                }
                                <Switch
                                    ref={(e) => {
                                        this.Switch = e
                                    }}
                                    disabled={disabled}
                                    checked={checked}
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
