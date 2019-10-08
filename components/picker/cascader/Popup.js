import React from 'react'
import PopupPicker from '../Popup'
import PropTypes from 'prop-types'


class PopupCascader extends React.Component {
    static defaultProps = {
        pickerValueProp: 'value',
        pickerValueChangeProp: 'onChange',
    };
    static propTypes = {
        pickerValueProp: PropTypes.string,
        pickerValueChangeProp: PropTypes.string,
        onOk: PropTypes.func,
        onChange: PropTypes.func,
        cascader: PropTypes.any,
    }
    onOk = (v) => {
        const { onChange, onOk } = this.props
        if (onChange) {
            onChange(v)
        }
        if (onOk) {
            onOk(v)
        }
    };
    render() {
        return (
            <PopupPicker
                picker={this.props.cascader}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...this.props}
                onOk={this.onOk}
            />
        )
    }
}

export default PopupCascader
