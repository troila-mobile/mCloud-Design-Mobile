import React from 'react'
import {
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
import { keyboardTypeArray } from '../utils/KeyboardType'

const func = () => { }
const clearImage = require('../searchBar/assets/clear.png')

export default class InputItem extends React.Component {
    static propTypes = {
        styles: PropTypes.object,
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
        allowFontScaling: PropTypes.bool,
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
        allowFontScaling:false,
    }
    constructor(props) {
        super(props)
        this.state = {
            focus: props.focus || false,
        }
    }
    componentDidMount() {
        const { focus } = this.props
        if (this.inputRef && focus) {
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
    clear = () => {
        if (this.inputRef) {
            this.inputRef.clear()
        }
        this.onChange('')
    }
    // 供外部使用的实例方法
    focus = () => {
        if (this.inputRef) {
            this.inputRef.focus()
        }
    }
    blur = () => {
        if (this.inputRef) {
            this.inputRef.blur()
        }
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
            maxLength,
            autoFocus,
            allowFontScaling,
        } = this.props
        const { focus } = this.state
        return (
            <WithTheme themeStyles={InputItemStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        const textStyle = labelNumber > 0 ? {
                            width: theme.font_size_heading * labelNumber * 1.05,
                        } : {}
                        const RequiredText = [
                            _styles.RequiredText,
                            {
                                color: required ? 'red' : 'rgba(0,0,0,0)',
                            },
                        ]
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
                                <View style={_styles.container}>
                                    <View style={_styles.ContentView}>
                                        <Text style={RequiredText}>*</Text>
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
                                        autoFocus={autoFocus}
                                        maxLength={maxLength}
                                        keyboardType={keyboardType}
                                        onChange={(event) => this.onChange(event.nativeEvent.text)}
                                        secureTextEntry={type === 'password'}
                                        onBlur={this.onInputBlur}
                                        onFocus={this.onInputFocus}
                                        allowFontScaling={allowFontScaling}
                                    />
                                    {
                                        editable && clear && value && focus ? (
                                            <TouchableOpacity
                                                style={[_styles.clear]}
                                                onPress={this.clear}
                                            >
                                                <Image source={clearImage} />
                                            </TouchableOpacity>
                                        ) : null
                                    }
                                    {
                                        !last && (
                                            <View style={_styles.Line} />
                                        )
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
