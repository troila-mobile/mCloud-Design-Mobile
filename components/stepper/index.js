import React from 'react'
import {
    ViewPropTypes, Image, TouchableOpacity, Text, View, TextInput,
} from 'react-native'
import { WithTheme } from '../style'
import StepperStyles from './style'
import PropTypes from 'prop-types'

const stepperAdd = require('./assets/stepper_add.png')
const stepperSubtract = require('./assets/stepper_subtract.png')
const defaultStepperSubtract = require('./assets/stepper_subtract_default.png')
const defaultStepperAdd = require('./assets/stepper_add_default.png')
const disableStepperSubtract = require('./assets/stepper_subtract_disable.png')
const disableStepperAdd = require('./assets/stepper_add_disable.png')

export default class Stepper extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        defaultValue: PropTypes.number,
        value: PropTypes.number,
        unit: PropTypes.string,
        disabledAdd: PropTypes.bool,
        canInput: PropTypes.bool,
        disabledSubtract: PropTypes.bool,
        onChange: PropTypes.func,

    }
    static defaultProps = {
        style: {},
        styles: {},
        min: 0,
        max: 100,
        step: 1,
        unit: '',
        defaultValue: 50,
        disabledAdd: false,
        disabledSubtract: false,
        canInput: false,
        onChange: () => {
        },

    }
    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue || props.value || 0,
        }
    }
onAddPress = () => {
    const {
        disabledAdd,
        onChange,
        step,
        max,
    } = this.props
    if (disabledAdd) return
    const { value } = this.state
    let num = value + step
    if (num > max) {
        num = max
    }
    if (onChange) {
        onChange({ value: num })
    }
    this.setState({ value: num })
}
    onSubtractPress = () => {
        const {
            disabledSubtract,
            onChange,
            step,
            min,
        } = this.props
        if (disabledSubtract) return
        const { value } = this.state
        let num = value - step
        if (num < min) {
            num = min
        }
        if (onChange) {
            onChange({ value: num })
        }
        this.setState({ value: num })
    }
    _setLimit() {
        const {
            value,
        } = this.state
        const {
            max,
            min,
            onChange,
        } = this.props
        let num = value
        if (num) num = parseInt(num)
        if (num > max) {
            num = max
        } else if (num <= min
        ) {
            num = min
        }
        if (onChange) {
            onChange({ value: num })
        }
        this.setState({ value: num })
    }
    render() {
        const {
            style,
            styles,
            min,
            max,
            unit,
            disabledSubtract,
            disabledAdd,
            canInput,
        } = this.props
        const { value } = this.state
        return (
            <WithTheme themeStyles={StepperStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        let iconAdd
                        let iconSubtract
                        if (value < max) {
                            iconAdd = (
                                <Image
                                    style={[styles.icon, style]}
                                    source={stepperAdd}
                                />
                            )
                        } else {
                            iconAdd = disabledAdd ? (
                                <Image
                                    style={[styles.icon, style]}
                                    source={defaultStepperAdd}
                                />
                            ) : (
                                <Image
                                    style={[styles.icon, style]}
                                    source={disableStepperAdd}
                                />
                            )
                        }
                        if (value > min) {
                            iconSubtract = (
                                <Image
                                    style={[styles.icon, style]}
                                    source={stepperSubtract}
                                />
                            )
                        } else {
                            iconSubtract = disabledSubtract ? (
                                <Image
                                    style={[styles.icon, style]}
                                    source={defaultStepperSubtract}
                                />
                            ) : (
                                <Image
                                    style={[styles.icon, style]}
                                    source={disableStepperSubtract}
                                />
                            )
                        }
                        return (
                            <View style={_styles.wrapper}>
                                <TouchableOpacity
                                    onPress={this.onSubtractPress}
                                    disabled={disabledSubtract}
                                >
                                    <View style={_styles.wrapper}>
                                        {iconSubtract}
                                    </View>
                                </TouchableOpacity>
                                {canInput ? (
                                    <TextInput
                                        style={_styles.radius_text}
                                        keyboardType="numeric"
                                        onChangeText={(text) => {
                                            this.setState({ value: text ? parseInt(text) : '' })
                                            clearTimeout(this.timer)
                                            this.timer = setTimeout(() => {
                                                this._setLimit()
                                            }, 2000)
                                        }}
                                        defaultValue={`${value}`}
                                    />
                                )
                                    : <Text style={_styles.radius_text}>{value}</Text>}

                                <Text style={_styles.radius_text}>{unit}</Text>
                                <TouchableOpacity
                                    onPress={this.onAddPress}
                                    disabled={disabledAdd}
                                >
                                    <View style={_styles.wrapper}>
                                        {iconAdd}
                                    </View>
                                </TouchableOpacity>
                            </View>


                        )
                    }
                }
            </WithTheme>
        )
    }
}
