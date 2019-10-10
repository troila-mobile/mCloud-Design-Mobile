import React from 'react'
import PopupPicker from '../../picker/Popup'
import PropTypes from 'prop-types'


class PopupDatePicker extends React.Component {
    static defaultProps = {
        pickerValueProp: 'date',
        pickerValueChangeProp: 'onDateChange',
    };
    static propTypes = {
        onChange: PropTypes.func,
        onOk: PropTypes.func,
        pickerValueProp: PropTypes.string,
        pickerValueChangeProp: PropTypes.string,
        datePicker: PropTypes.any,
        date: PropTypes.any,

    }
    onOk = (v) => {
        const { onChange, onOk } = this.props
        if (onChange) {
            onChange(v)
        }
        if (onOk) {
            onOk(v)
        }
    }
    render() {
        const {
            datePicker,
            date,
        } = this.props
        return (
            <PopupPicker
                picker={datePicker}
                value={date}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...this.props}
                onOk={this.onOk}
            />
        )
    }
}

export default PopupDatePicker
