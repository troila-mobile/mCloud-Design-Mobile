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
        onPress: PropTypes.func,
        disabled: PropTypes.bool,
        children: PropTypes.any,
        hideLine: PropTypes.bool,
    }
    static defaultProps = {
        style: {},
        styles: {},
        checked: false,
        onChange: () => { },
        onPress: () => { },
        disabled: false,
        children: null,
        hideLine: false,
    }
    onPress = () => {
        const { onPress } = this.props
        if (this.Switch) {
            this.Switch.onToggle()
        }
        if (onPress) {
            onPress()
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
            onChange,
        } = this.props
        return (
            <WithTheme themeStyles={SwitchStyles} styles={styles}>
                {
                    (_styles) => {
                        const itemText = [
                            _styles.itemText,
                            disabled && _styles.disabledItemText,
                        ]
                        return (
                            <TouchableWithoutFeedback disabled={disabled} onPress={this.onPress}>
                                <View style={[_styles.wrapper, style]}>
                                    {
                                        children ? (
                                            typeof children === 'string'
                                                ? <Text style={itemText}>{children}</Text>
                                                : children
                                        ) : null
                                    }
                                    <Switch
                                        ref={(e) => {
                                            this.Switch = e
                                        }}
                                        disabled={disabled}
                                        checked={checked}
                                        onChange={onChange}
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
                }
            </WithTheme>
        )
    }
}
