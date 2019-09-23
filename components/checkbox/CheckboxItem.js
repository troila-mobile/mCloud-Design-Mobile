import React from 'react'
import {
    View, Text, TouchableWithoutFeedback, ViewPropTypes,
} from 'react-native'
import Checkbox from './Checkbox'
import { WithTheme } from '../style'
import CheckboxStyles from './style'
import PropTypes from 'prop-types'

export default class CheckboxItem extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
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
                    (_styles) => (
                        <TouchableWithoutFeedback onPress={this.onPress}>
                            <View style={[_styles.itemWarpper, style]}>
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
                                            ? <Text style={_styles.itemText}>{children}</Text>
                                            : children
                                    ) : null
                                }
                                {
                                    !hideLine && (
                                        <View style={_styles.line} />
                                    )
                                }
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            </WithTheme>
        )
    }
}
