import React from 'react'
import {
    View, Text, TouchableWithoutFeedback, ViewPropTypes,
} from 'react-native'
import Radio from './Radio'
import { WithTheme } from '../style'
import RadioStyles from './style'
import PropTypes from 'prop-types'

export default class RadioItem extends React.Component {
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
            defaultChecked,
            checked,
            disabled,
            onChange,
            children,
            hideLine,
        } = this.props
        return (
            <WithTheme themeStyles={RadioStyles} styles={styles}>
                {
                    (_styles) => (
                        <TouchableWithoutFeedback onPress={this.onPress}>
                            <View style={[_styles.itemWrapper, style]}>
                                <Radio
                                    ref={(e) => {
                                        this.Radio = e
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
