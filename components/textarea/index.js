import React from 'react'
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    ViewPropTypes,
} from 'react-native'
import { WithTheme } from '../style'
import TextareaItemStyles from './style'
import PropTypes from 'prop-types'

const clearImage = require('../searchBar/assets/clear.png')

const func = () => { }
function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return ''
    }
    return value
}

export default class TextAreaItem extends React.Component {
    static propTypes = {
        styles: ViewPropTypes.style,
        style: ViewPropTypes.style,
        value: PropTypes.string,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        clear: PropTypes.bool,
        rows: PropTypes.number,
        count: PropTypes.number,
        autoHeight: PropTypes.bool,
        last: PropTypes.bool,
        label: PropTypes.string,
        labelPosition: PropTypes.oneOf(['top', 'left']),
        editable: PropTypes.bool,
        focus: PropTypes.bool,
        disabled: PropTypes.bool,
        autoFocus: PropTypes.bool,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        onChange: PropTypes.func,
        onContentSizeChange: PropTypes.func,
        textAlign: PropTypes.oneOf(['left', 'right']),
        placeholderTextColor: PropTypes.string,
        required: PropTypes.bool,
    }
    static defaultProps = {
        styles: {},
        style: {},
        clear: true,
        rows: 1,
        count: 0,
        autoHeight: false,
        last: false,
        label: '',
        labelPosition: 'top',
        editable: true,
        disabled: false,
        autoFocus: false,
        onBlur: func,
        onFocus: func,
        onChange: func,
        onContentSizeChange: func,
        textAlign: 'left',
        required: false,
    }
    constructor(props) {
        super(props)
        this.state = {
            focus: props.focus || false,
            inputCount: fixControlledValue(props.value || props.defaultValue).length,
        }
    }
    componentDidMount() {
        const { autoFocus, focus } = this.props
        if (this.textAreaRef && (autoFocus || focus)) {
            this.textAreaRef.focus()
        }
    }
    componentDidUpdate() {
        const { focus } = this.props
        if (this.textAreaRef && focus) {
            this.textAreaRef.focus()
        }
    }
    onChange = (text) => {
        const { onChange } = this.props
        this.setState({
            inputCount: text.length,
        })
        if (onChange) {
            onChange(text)
        }
    }
    onContentSizeChange = (theme) => (event) => {
        let height
        const { autoHeight, onContentSizeChange, rows } = this.props
        if (autoHeight) {
            height = event.nativeEvent.contentSize.height
        } else if (rows > 1) {
            height = Math.round(1.3 * theme.font_size_base) * rows
        } else {
            height = theme.list_item_height
        }
        this.setState({
            height,
        })
        if (onContentSizeChange) {
            onContentSizeChange(event)
        }
    }
    getHeight = (theme) => {
        const { height } = this.state
        const { rows } = this.props
        if (height) {
            return height
        }
        return rows !== undefined && rows > 1
            ? Math.round(1.3 * theme.font_size_base) * rows
            : theme.list_item_height
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
        if (this.textAreaRef) {
            this.textAreaRef.clear()
        }
        this.onChange('')
    }
    render() {
        const {
            last,
            rows,
            clear,
            count,
            autoHeight,
            styles,
            style,
            value,
            defaultValue,
            placeholder,
            label,
            labelPosition,
            disabled,
            editable,
            textAlign,
            placeholderTextColor,
            required,
        } = this.props
        const { inputCount, focus } = this.state
        return (
            <WithTheme themeStyles={TextareaItemStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        const containerStyle = {
                            borderBottomWidth: last ? 0 : theme.border_width_sm,
                            flexDirection: labelPosition === 'left' ? 'row' : 'column',
                        }
                        const maxLength = count > 0 ? count : undefined
                        const inputCountColor = inputCount > 0 ? theme.color_text_paragraph : theme.color_text_info
                        const inputStyle = labelPosition === 'left' ? {
                            flex: 1,
                            flexWrap: 'wrap',
                            paddingTop: theme.h_spacing_lg,
                            paddingRight: theme.h_spacing_lg,
                        } : {
                            flex: 1,
                            paddingHorizontal: theme.h_spacing_lg,
                        }
                        const disabledStyle = (disabled || !editable) ? _styles.inputDisabled : {}
                        return (
                            <View
                                style={[
                                    _styles.container,
                                    containerStyle,
                                ]}
                            >
                                {
                                    label !== '' && (
                                        <View style={_styles.labelWarp}>
                                            {
                                                required && <Text style={_styles.RequiredText}>*</Text>
                                            }
                                            <Text style={_styles.label}>
                                                {label}
                                            </Text>
                                        </View>
                                    )
                                }
                                <View style={_styles.inputWrapper}>
                                    <TextInput
                                        editable={!disabled && editable}
                                        underlineColorAndroid="transparent"
                                        style={[
                                            _styles.input,
                                            inputStyle,
                                            {
                                                height: Math.max(45, this.getHeight(theme)),
                                            },
                                            style,
                                            {
                                                textAlign,
                                            },
                                            disabledStyle,
                                        ]}
                                        value={value}
                                        defaultValue={defaultValue}
                                        placeholder={placeholder}
                                        placeholderTextColor={placeholderTextColor || theme.color_text_placeholder}
                                        onChange={(event) => this.onChange(event.nativeEvent.text)}
                                        onContentSizeChange={this.onContentSizeChange(theme)}
                                        multiline={rows > 1 || autoHeight}
                                        numberOfLines={rows}
                                        maxLength={maxLength}
                                        ref={(ref) => {
                                            this.textAreaRef = ref
                                        }}
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
                                {
                                    rows > 1 && count > 0 ? (
                                        <Text style={_styles.count}>
                                            <Text style={{ color: inputCountColor }}>{inputCount}</Text>
                                            /
                                            {count}
                                        </Text>
                                    ) : null
                                }
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
