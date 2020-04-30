import React from 'react'
import {
    View, Text, TouchableOpacity, ViewPropTypes,
} from 'react-native'
import Checkbox from './Checkbox'
import { WithTheme } from '../style'
import CheckboxStyles from './style'
import PropTypes from 'prop-types'

export default class CheckboxItem extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        disabled: PropTypes.bool,
        children: PropTypes.any,
        onChange: PropTypes.func,
        onPress: PropTypes.func,
        hideLine: PropTypes.bool,
    }
    static defaultProps = {
        style: {},
        styles: {},
        disabled: false,
        children: null,
        onChange: () => { },
        onPress: () => { },
        hideLine: false,
    }
    onPress = () => {
        const { onPress } = this.props
        if (this.Checkbox) {
            this.Checkbox.onPress()
        }
        if (onPress) {
            onPress()
        }
    }
    render() {
        const {
            style,
            styles,
            defaultChecked,
            checked,
            disabled,
            onChange,
            children,
            hideLine,
        } = this.props
        return (
            <WithTheme themeStyles={CheckboxStyles} styles={styles}>
                {
                    (_styles) => {
                        const itemText = [
                            _styles.itemText,
                            disabled && _styles.disabledItemText,
                        ]
                        return (
                            <TouchableOpacity
                                activeOpacity={disabled ? 1 : 0.8}
                                onPress={this.onPress}
                            >
                                <View style={[_styles.itemWrapper, style]}>
                                    <Checkbox
                                        ref={(e) => {
                                            this.Checkbox = e
                                        }}
                                        defaultChecked={defaultChecked}
                                        checked={checked}
                                        onChange={onChange}
                                        disabled={disabled}
                                    />
                                    {
                                        children ? (
                                            typeof children === 'string'
                                                ? <Text style={itemText}>{children}</Text>
                                                : children
                                        ) : null
                                    }
                                    {
                                        !hideLine && (
                                            <View style={_styles.line} />
                                        )
                                    }
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
