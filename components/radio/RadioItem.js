import React from 'react'
import {
    View, Text, TouchableOpacity, ViewPropTypes,
} from 'react-native'
import Radio from './Radio'
import { WithTheme } from '../style'
import RadioStyles from './style'
import PropTypes from 'prop-types'

export default class RadioItem extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        children: PropTypes.any,
        onChange: PropTypes.func,
        circleSize: PropTypes.number,
        centerSize: PropTypes.number,
        icon: PropTypes.node,
        onPress: PropTypes.func,
        hideLine: PropTypes.bool,
    }
    static defaultProps = {
        style: {},
        styles: {},
        disabled: false,
        children: null,
        onChange: () => { },
        circleSize: 16,
        centerSize: 10,
        onPress: () => { },
        hideLine: false,
    }
    onPress = () => {
        const { onPress } = this.props
        if (this.Radio) {
            this.Radio.onPress()
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
            onChange,
            children,
            circleSize,
            centerSize,
            icon,
            hideLine,
        } = this.props
        return (
            <WithTheme themeStyles={RadioStyles} styles={styles}>
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
                                    <Radio
                                        ref={(e) => {
                                            this.Radio = e
                                        }}
                                        checked={checked}
                                        onChange={onChange}
                                        disabled={disabled}
                                        circleSize={circleSize}
                                        centerSize={centerSize}
                                        icon={icon}
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
