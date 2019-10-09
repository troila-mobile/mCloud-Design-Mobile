import React from 'react'
import PropTypes from 'prop-types'

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
            if (this.state.pickerValue !== pickerValue) {
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
            const { props } = this
            const { children } = props
            if (!children) {
                return getModal(props, this.state.visible, {
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
                    {getModal(props, this.state.visible, {
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
            const child = this.props.children
            const childProps = child.props || {}
            if (childProps[this.props.triggerType]) {
                childProps[this.props.triggerType](e)
            }
            this.fireVisibleChange(!this.state.visible)
        };
        onOk = () => {
            this.props.onOk(this.picker && this.picker.getValue())
            this.fireVisibleChange(false)
        };
        getContent = () => {
            if (this.props.picker) {
                let { pickerValue } = this.state
                if (pickerValue === null) {
                    pickerValue = this.props.value
                }
                return React.cloneElement(this.props.picker, {
                    [this.props.pickerValueProp]: pickerValue,
                    [this.props.pickerValueChangeProp]: this.onPickerChange,
                    ref: this.saveRef,
                })
            } else {
                return this.props.content
            }
        };
        onDismiss = () => {
            this.props.onDismiss()
            this.fireVisibleChange(false)
        };
        hide = () => {
            this.fireVisibleChange(false)
        };
        fireVisibleChange(visible) {
            if (this.state.visible !== visible) {
                if (!('visible' in this.props)) {
                    this.setVisibleState(visible)
                }
                this.props.onVisibleChange(visible)
            }
        }
        render() {
            return this.getRender()
        }
    }
}
