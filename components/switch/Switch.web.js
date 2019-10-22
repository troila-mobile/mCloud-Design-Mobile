import React, { Component } from 'react'
import {
    Switch,
    ViewPropTypes,
} from 'react-native'
import PropTypes from 'prop-types'
import { WithTheme } from '../style'
import SwitchStyles from './style'

export default class SwitchButton extends Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        checked: PropTypes.bool,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        onTintColor: PropTypes.string,
    }
    static defaultProps = {
        style: {},
        styles: {},
        checked: false,
        onChange: () => { },
        disabled: false,
    }
    render() {
        const {
            style,
            styles,
            disabled,
            checked,
            onChange,
            onTintColor,
        } = this.props
        return (
            <WithTheme themeStyles={SwitchStyles} styles={styles}>
                {
                    (_styles, theme) => (
                        <Switch
                            style={style}
                            onValueChange={onChange}
                            value={checked}
                            disabled={disabled}
                            onTintColor={!!onTintColor ? onTintColor : theme.switch_tint}
                        />
                    )
                }
            </WithTheme>
        )
    }
}
