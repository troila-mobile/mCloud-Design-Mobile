import React from 'react'
import { View, ViewPropTypes } from 'react-native'
import MultiPickerMixin from './MultiPickerMixin'
import PropTypes from 'prop-types'


const MultiPicker = (props) => {
    const {
        children, style, getValue, onValueChange,
    } = props
    const selectedValue = getValue()
    const colElements = React.Children.map(children, (col, i) => React.cloneElement(col, {
        selectedValue: selectedValue[i],
        onValueChange: (...args) => onValueChange(i, ...args),
    }))
    return <View style={style}>{colElements}</View>
}

MultiPicker.propTypes = {
    children: PropTypes.any,
    style: ViewPropTypes.style,
    getValue: PropTypes.func,
    onValueChange: PropTypes.func,
}

export default MultiPickerMixin(MultiPicker)
