import React from 'react'
import { ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import PickerStyles from '../picker/style/index'
import { WithTheme } from '../style'
import DatePicker from './datepicker/DatePicker'
import PopupDatePicker from './datepicker/Popup'
import { formatProps } from './utils'


export default class extends React.Component {
    static defaultProps = {
        mode: 'datetime',
        triggerType: 'onPress',
        minuteStep: 1,
    };
    static contextTypes = {
        antLocale: PropTypes.object,
    };
    static propTypes = {
        children: PropTypes.any,
        value: PropTypes.any,
        defaultDate: PropTypes.any,
        itemStyle: ViewPropTypes.style,
        minuteStep: PropTypes.number,
        mode: PropTypes.string,
        triggerType: PropTypes.string,
        minDate: PropTypes.any,
        maxDate: PropTypes.any,
        onValueChange: PropTypes.func,
        dismissText: PropTypes.string,
        okText: PropTypes.string,
        extra: PropTypes.any,
    }
    render() {
        const {
            children,
            value,
            defaultDate,
            itemStyle,
            minuteStep,
            mode,
            minDate,
            maxDate,
            onValueChange,
            dismissText,
            okText,
            extra,
            ...restProps
        } = this.props
        const selfOkText = '确定'
        const selfDismissText = '取消'
        const selfExtra = '请选择'
        return (
            <WithTheme styles={restProps.styles} themeStyles={PickerStyles}>
                {(_styles) => {
                    const dataPicker = (
                        <DatePicker
                            minuteStep={minuteStep}
                            locale={{
                                year: '年',
                                month: '月',
                                day: '日',
                                hour: '时',
                                minute: '分',
                            }}
                            mode={mode}
                            minDate={minDate}
                            maxDate={maxDate}
                            defaultDate={defaultDate}
                            date={value}
                            onValueChange={onValueChange}
                            itemStyle={itemStyle}
                            style={_styles.pickerContainer}
                            styles={_styles}
                        />
                    )
                    return (
                        <PopupDatePicker
                            datePicker={dataPicker}
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...restProps}
                            styles={_styles}
                            date={value}
                            dismissText={dismissText || selfDismissText}
                            okText={okText || selfOkText}
                        >
                            {children
                                && React.isValidElement(children)
                                && React.cloneElement(children, {
                                    extra: value
                                        ? formatProps(this.props, value)
                                        : extra || selfExtra,
                                })}
                        </PopupDatePicker>
                    )
                }}
            </WithTheme>
        )
    }
}
