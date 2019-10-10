import React from 'react'
import {
    View, TouchableWithoutFeedback, ViewPropTypes, Image, Text,
} from 'react-native'
import { WithTheme } from '../style'
import RadioStyles from './style'
import PropTypes from 'prop-types'

const checkSource = require('./assets/check-circle.png')
const checkOSource = require('./assets/check-circle-o.png')

export default class Radio extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        disabled: PropTypes.bool,
        children: PropTypes.any,
        onChange: PropTypes.func,
    }
    static defaultProps = {
        style: {},
        styles: {},
        disabled: false,
        children: null,
        onChange: () => {},
    }
    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked || props.defaultChecked || false,
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (typeof props.checked === 'boolean' && props.checked !== state.checked) {
            return {
                checked: props.checked,
            }
        }
        return null
    }
    onPress = () => {
        const {
            checked,
            onChange,
            disabled,
        } = this.props
        if (disabled) {
            return
        }
        if (!(typeof checked === 'boolean')) {
            this.setState({
                checked: true,
            })
        }
        if (onChange) {
            onChange({ checked: true })
        }
    }
    render() {
        const { checked } = this.state
        const {
            style,
            styles,
            children,
        } = this.props
        return (
            <WithTheme themeStyles={RadioStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        const icon = checked ? (
                            <Image
                                style={[styles.icon, style]}
                                source={checkSource}
                            />
                        ) : (
                            <Image
                                style={[styles.icon, style]}
                                source={checkOSource}
                            />
                        )
                        return (
                            <TouchableWithoutFeedback onPress={this.onPress}>
                                <View style={_styles.wrapper}>
                                    {icon}
                                    {
                                        typeof children === 'string' ? (
                                            <Text style={styles.iconRight}>{children}</Text>
                                        ) : (
                                            children
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
