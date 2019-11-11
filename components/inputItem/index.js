import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Image,
    ViewPropTypes,
} from 'react-native'
import { WithTheme } from '../style'
import InputItemStyles from './style'
import PropTypes from 'prop-types'

const func = () => { }
const keyboardTypeArray = [
    'default',
    'email-address',
    'numeric',
    'phone-pad',
    'ascii-capable',
    'numbers-and-punctuation',
    'url',
    'number-pad',
    'name-phone-pad',
    'decimal-pad',
    'twitter',
    'web-search',
]
const clearImage = require('../searchBar/assets/clear.png')

export default class InputItem extends React.Component {
    static propTypes = {
        styles: ViewPropTypes.style,
        style: ViewPropTypes.style,
        type: PropTypes.oneOf(['text', 'bankCard', 'phone', 'password', 'number', 'digit', ...keyboardTypeArray]),
        editable: PropTypes.bool,
        disabled: PropTypes.bool,
        value: PropTypes.string,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        clear: PropTypes.bool,
        maxLength: PropTypes.number,
        labelNumber: PropTypes.number,
        textAlign: PropTypes.oneOf(['left', 'right']),
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        last: PropTypes.bool,
        children: PropTypes.any,
        autoFocus: PropTypes.bool,
        focus: PropTypes.bool,
        placeholderTextColor: PropTypes.string,
        required: PropTypes.bool,
    }
    static defaultProps = {
        styles: {},
        style: {},
        type: 'text',
        editable: true,
        clear: false,
        onChange: func,
        onBlur: func,
        onFocus: func,
        labelNumber: 4,
        textAlign: 'right',
        last: false,
        children: null,
        required: false,
    }
    constructor(props) {
        super(props)
        this.state = {
            focus: props.focus || false,
        }
    }
    componentDidMount() {
        const { autoFocus, focus } = this.props
        if (this.inputRef && (autoFocus || focus)) {
            this.inputRef.focus()
        }
    }
    componentDidUpdate() {
        const { focus } = this.props
        if (this.inputRef && focus) {
            this.inputRef.focus()
        }
    }
    onChange = (text) => {
        const { onChange, type, maxLength } = this.props
        let newText = text
        switch (type) {
        case 'bankCard':
            newText = newText.replace(/\D/g, '')
            if (maxLength > 0) {
                newText = newText.substring(0, maxLength)
            }
            newText = newText.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ')
            break
        case 'phone':
            newText = newText.replace(/\D/g, '').substring(0, 11)
            if (newText.length > 3 && newText.length < 8) {
                newText = `${newText.substr(0, 3)} ${newText.substr(3)}`
            } else if (newText.length >= 8) {
                newText = `${newText.substr(0, 3)} ${newText.substr(3, 4)} ${newText.substr(7)}`
            }
            break
        case 'password':
            break
        default:
            break
        }
        if (onChange) {
            onChange(newText)
        }
    }
    onInputBlur = () => {
        const { onBlur, value } = this.props
        this.setState({ focus: false }, () => {
            if (onBlur) {
                onBlur(value)
            }
        })
    }
    onInputFocus = () => {
        const { onFocus, value } = this.props
        this.setState({ focus: true }, () => {
            if (onFocus) {
                onFocus(value)
            }
        })
    }
    onInputClear = () => {
        if (this.inputRef) {
            this.inputRef.clear()
        }
        this.onChange('')
    }
    render() {
        const {
            type,
            editable,
            clear,
            children,
            labelNumber,
            last,
            styles,
            disabled,
            value,
            defaultValue,
            style,
            textAlign,
            placeholder,
            placeholderTextColor,
            required,
        } = this.props
        const { focus } = this.state
        return (
            <WithTheme themeStyles={InputItemStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        const containerStyle = {
                            borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth,
                        }
                        const textStyle = {
                            width: theme.font_size_heading * labelNumber * 1.05,
                        }
                        let keyboardType = 'default'
                        if (type === 'number') {
                            keyboardType = 'numeric'
                        } else if (type === 'bankCard') {
                            keyboardType = 'number-pad' // 不带小数点
                        } else if (type === 'phone') {
                            keyboardType = 'phone-pad'
                        } else if (type && keyboardTypeArray.indexOf(type) > -1) {
                            keyboardType = type
                        }
                        const disabledStyle = (disabled || !editable) ? _styles.inputDisabled : {}
                        return (
                            <View style={[_styles.wrapper]}>
                                <View style={[_styles.container, containerStyle]}>
                                    <View style={_styles.ContentView}>
                                        {
                                            required && <Text style={_styles.RequiredText}>*</Text>
                                        }
                                        {
                                            children ? (
                                                typeof children === 'string' ? (
                                                    <Text style={[_styles.text, textStyle]}>{children}</Text>
                                                ) : (
                                                    <View style={textStyle}>{children}</View>
                                                )
                                            ) : null
                                        }
                                    </View>
                                    <TextInput
                                        editable={!disabled && editable}
                                        underlineColorAndroid="transparent"
                                        ref={(e) => {
                                            this.inputRef = e
                                        }}
                                        value={value}
                                        defaultValue={defaultValue}
                                        placeholder={placeholder}
                                        placeholderTextColor={placeholderTextColor || theme.color_text_placeholder}
                                        style={[
                                            _styles.input,
                                            disabledStyle,
                                            style,
                                            {
                                                textAlign,
                                            },
                                        ]}
                                        keyboardType={keyboardType}
                                        onChange={(event) => this.onChange(event.nativeEvent.text)}
                                        secureTextEntry={type === 'password'}
                                        onBlur={this.onInputBlur}
                                        onFocus={this.onInputFocus}
                                    />
                                    {
                                        editable && clear && value && focus ? (
                                            <TouchableOpacity
                                                style={[_styles.clear]}
                                                onPress={this.onInputClear}
                                            >
                                                <Image source={clearImage} />
                                            </TouchableOpacity>
                                        ) : null
                                    }
                                </View>
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
