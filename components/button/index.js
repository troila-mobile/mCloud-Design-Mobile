import React from 'react'
import {
    Text, TouchableHighlight, StyleSheet,ViewPropTypes,
} from 'react-native'
import { WithTheme } from '../style'
import ButtonStyles from './style'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
    static propTypes = {
        size: PropTypes.string,
        type: PropTypes.string,
        disabled: PropTypes.bool,
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        activeStyle: ViewPropTypes.style,
        children: PropTypes.any,
        onPress: PropTypes.func,
    }
    static defaultProps = {
        size:'large',
        type: 'default',
        disabled: false,
        style:{},
        styles:{},
        activeStyle:{},
        children:null,
        onPress: () => {},
    };
    render() {
        const {
            style,
            styles,
            size,
            type,
            disabled,
            activeStyle,
            children,
            onPress,
        } = this.props
        return (
            <WithTheme themeStyles={ButtonStyles} styles={styles}>
                {
                    (_styles) => {
                        const textStyle = [
                            _styles[`${size}RawText`],
                            _styles[`${type}RawText`],
                            disabled && _styles[`${type}DisabledRawText`],
                        ]
                        const buttonStyle = [
                            _styles.wrapperStyle,
                            _styles[`${size}Raw`],
                            _styles[`${type}Raw`],
                            disabled && _styles[`${type}DisabledRaw`],
                            style,
                        ]
                        const underlayColor = (StyleSheet.flatten(
                            activeStyle || _styles[`${type}Highlight`],
                        )).backgroundColor
                        return (
                            <TouchableHighlight
                                style={[buttonStyle]}
                                underlayColor={underlayColor}
                                onPress={(e) => onPress && onPress(e)}
                            >
                                <Text style={textStyle}>{children}</Text>
                            </TouchableHighlight>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
