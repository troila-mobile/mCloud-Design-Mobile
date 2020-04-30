import React from 'react'
import {
    View, TouchableWithoutFeedback, ViewPropTypes, Image, Text,
} from 'react-native'
import { WithTheme } from '../style'
import CheckboxStyles from './style'
import PropTypes from 'prop-types'

export default class Checkbox extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: PropTypes.object,
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
            disabled,
            checked,
            onChange,
        } = this.props
        if (disabled) {
            return
        }
        const {
            checked: oldchecked,
        } = this.state
        if (!(typeof checked === 'boolean')) {
            this.setState({
                checked: !oldchecked,
            })
        }
        if (onChange) {
            onChange({ checked: !oldchecked })
        }
    }
    render() {
        const { checked } = this.state
        const {
            style,
            styles,
            children,
            disabled,
        } = this.props
        return (
            <WithTheme themeStyles={CheckboxStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        const checkSource = theme.dark ? (
                            disabled ? (
                                checked
                                    ? require('./assets/check_disabled_dark.png')
                                    : require('./assets/no_check_disabled_dark.png')
                            ) : (
                                checked
                                    ? require('./assets/check_dark.png')
                                    : require('./assets/no_check_dark.png')
                            )
                        ) : (
                            disabled ? (
                                checked
                                    ? require('./assets/check_disabled.png')
                                    : require('./assets/no_check_disabled.png')
                            ) : (
                                checked
                                    ? require('./assets/check.png')
                                    : require('./assets/no_check.png')
                            )
                        )
                        return (
                            <TouchableWithoutFeedback disabled={disabled} onPress={this.onPress}>
                                <View style={_styles.wrapper}>
                                    <Image
                                        style={[styles.icon, style]}
                                        source={checkSource}
                                    />
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
