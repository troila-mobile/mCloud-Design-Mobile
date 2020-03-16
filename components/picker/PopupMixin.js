import React from 'react'
import PropTypes from 'prop-types'
import { Keyboard } from 'react-native'

export default function PopupMixin(
    getModal,
    platformProps,
) {
    return class extends React.Component {
        static defaultProps = {
            onVisibleChange(_) { },
            okText: 'Ok',
            dismissText: 'Dismiss',
            title: '',
            onOk(_) { },
            onDismiss() { },
            ...platformProps,
        };
        static propTypes = {
            value: PropTypes.any,
            visible: PropTypes.bool,
            picker: PropTypes.object,
            pickerValueChangeProp: PropTypes.string,
            children: PropTypes.any,
            WrapComponent: PropTypes.any,
            disabled: PropTypes.bool,
            triggerType: PropTypes.string,
            wrapStyle: PropTypes.object,
            onDismiss: PropTypes.func,
            onVisibleChange: PropTypes.func,
            pickerValueProp: PropTypes.any,
            onOk: PropTypes.func,
            content: PropTypes.any,
        }
        picker;
        state = {
            pickerValue: 'value' in this.props ? this.props.value : null,
            visible: this.props.visible || false,
        }
        componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    pickerValue: nextProps.value,
                })
            }
            if ('visible' in nextProps) {
                this.setVisibleState(nextProps.visible)
            }
        }
        onPickerChange = (pickerValue) => {
            const {
                pickerValue: oldpickerValue,
            } = this.state
            if (oldpickerValue !== pickerValue) {
                this.setState({
                    pickerValue,
                })
                const { picker, pickerValueChangeProp } = this.props
                if (picker && picker.props[pickerValueChangeProp]) {
                    picker.props[pickerValueChangeProp](pickerValue)
                }
            }
        };
        setVisibleState(visible) {
            this.setState({
                visible,
            })
            if (!visible) {
                this.setState({
                    pickerValue: null,
                })
            }
        }
        getRender() {
            const { props,state } = this
            const { children } = props
            const { visible } = state
            if (!children) {
                return getModal(props, visible, {
                    getContent: this.getContent,
                    onOk: this.onOk,
                    hide: this.hide,
                    onDismiss: this.onDismiss,
                })
            }
            const { WrapComponent, disabled } = this.props
            const child = children
            const newChildProps = {}
            if (!disabled) {
                (newChildProps)[props.triggerType] = this.onTriggerClick
            }
            return (
                <WrapComponent style={props.wrapStyle}>
                    {React.cloneElement(child, newChildProps)}
                    {getModal(props, visible, {
                        getContent: this.getContent,
                        onOk: this.onOk,
                        hide: this.hide,
                        onDismiss: this.onDismiss,
                    })}
                </WrapComponent>
            )
        }
        saveRef = (picker) => {
            this.picker = picker
        };
        onTriggerClick = (e) => {
            const {
                children,
                triggerType,
            } = this.props
            const {
                visible,
            } = this.state
            const child = children
            const childProps = child.props || {}
            if (childProps[triggerType]) {
                childProps[triggerType](e)
            }
            this.fireVisibleChange(!visible)
            Keyboard.dismiss()
        };
        onOk = () => {
            const {
                onOk,
            } = this.props
            onOk(this.picker && this.picker.getValue())
            this.fireVisibleChange(false)
        };
        getContent = () => {
            const {
                picker,
                value,
                pickerValueProp,
                pickerValueChangeProp,
                content,
            } = this.props
            if (picker) {
                let { pickerValue } = this.state
                if (pickerValue === null) {
                    pickerValue = value
                }
                return React.cloneElement(picker, {
                    [pickerValueProp]: pickerValue,
                    [pickerValueChangeProp]: this.onPickerChange,
                    ref: this.saveRef,
                })
            } else {
                return content
            }
        };
        onDismiss = () => {
            const {
                onDismiss,
            } = this.props
            onDismiss()
            this.fireVisibleChange(false)
        };
        hide = () => {
            this.fireVisibleChange(false)
        };
        fireVisibleChange(visible) {
            const {
                visible: oldvisible,
            } = this.state
            const {
                onVisibleChange,
            } = this.props
            if (oldvisible !== visible) {
                if (!('visible' in this.props)) {
                    this.setVisibleState(visible)
                }
                onVisibleChange(visible)
            }
        }
        render() {
            return this.getRender()
        }
    }
}
