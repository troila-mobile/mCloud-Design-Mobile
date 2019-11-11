import React from 'react'
import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ViewPropTypes,
} from 'react-native'
import { WithTheme } from '../style'
import SearchBarStyles from './style'
import PropTypes from 'prop-types'

const func = () => {}
const searchBigImage = require('./assets/search-big.png')
const searchSmallImage = require('./assets/search-small.png')
const clearImage = require('./assets/clear.png')

export default class SearchBar extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        type: PropTypes.oneOf(['default', 'radius']),
        defaultValue: PropTypes.string,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        renderSearch: PropTypes.node,
        renderClear: PropTypes.node,
        onSubmit: PropTypes.func,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onClear: PropTypes.func,
        placeholderTextColor: PropTypes.string,
        autoFocus: PropTypes.bool,
    }
    static defaultProps = {
        style: {},
        styles: {},
        type: 'default',
        placeholder: '',
        renderSearch: undefined,
        renderClear: undefined,
        onSubmit: func,
        onChange: func,
        onFocus: func,
        onBlur: func,
        onClear: func,
    }
    constructor(props) {
        super(props)
        let value
        if ('value' in props) {
            value = props.value
        } else if ('defaultValue' in props) {
            value = props.defaultValue
        } else {
            value = ''
        }
        this.state = {
            value,
            focus: false,
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.value && props.value !== state.value) {
            return {
                value: props.value,
            }
        }
        return null
    }
    componentDidMount() {
        const { autoFocus } = this.props
        if (this.inputRef && autoFocus) {
            this.inputRef.focus()
            this.onFocus()
        }
    }
    onSubmit = () => {
        const { value } = this.state
        const { onSubmit } = this.props
        if (onSubmit) {
            onSubmit(value || '')
        }
    }
    onChangeText = (value) => {
        const { onChange } = this.props
        if (!('value' in this.props)) {
            this.setState({ value })
        }
        if (onChange) {
            onChange(value)
        }
    }
    onFocus = (e) => {
        const { onFocus } = this.props
        this.setState({
            focus: true,
        })
        if (onFocus) {
            onFocus(e)
        }
    }
    onBlur = (e) => {
        this.setState({
            focus: false,
        })
        const { onBlur } = this.props
        if (onBlur) {
            onBlur(e)
        }
    }
    onClear = () => {
        this.setState({
            value: '',
        })
        const { onClear, onChange } = this.props
        onChange('')
        if (onClear) {
            onClear()
        }
    }
    render() {
        const { focus, value } = this.state
        let {
            renderSearch,
            renderClear,
        } = this.props
        const {
            style,
            styles,
            type,
            placeholder,
            placeholderTextColor,
        } = this.props
        const style_prefix = type === 'radius' ? 'radius_' : 'default_'
        const search_source = type === 'default' ? searchBigImage : searchSmallImage
        return (
            <WithTheme themeStyles={SearchBarStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        renderSearch = (
                            <View style={_styles[`${style_prefix}searchView`]}>
                                {
                                    typeof renderSearch === 'undefined' ? (
                                        <Image
                                            source={search_source}
                                        />
                                    ) : (
                                        renderSearch
                                    )
                                }
                            </View>
                        )
                        renderClear = value !== '' && focus && (
                            <TouchableOpacity
                                activeOpacity={1}
                                style={_styles[`${style_prefix}clearView`]}
                                onPress={this.onClear}
                            >
                                {
                                    typeof renderClear === 'undefined' ? (
                                        <Image
                                            source={clearImage}
                                        />
                                    ) : (
                                        renderClear
                                    )
                                }
                            </TouchableOpacity>
                        )
                        return (
                            <View style={_styles[`${style_prefix}wrapper`]}>
                                <View style={_styles[`${style_prefix}inputWrapper`]}>
                                    <TextInput
                                        style={[_styles[`${style_prefix}input`], style]}
                                        underlineColorAndroid="transparent"
                                        returnKeyType="search"
                                        placeholder={placeholder}
                                        placeholderTextColor={placeholderTextColor || theme.color_text_placeholder}
                                        value={value}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={this.onSubmit}
                                        onFocus={this.onFocus}
                                        onBlur={this.onBlur}
                                        ref={(e) => {
                                            this.inputRef = e
                                        }}
                                    />
                                </View>
                                {
                                    renderSearch
                                }
                                {
                                    renderClear
                                }
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
