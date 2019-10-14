import React from 'react'
import { ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import treeFilter from 'array-tree-filter'
import { WithTheme } from '../style'
import RMCCascader from './cascader'
import RMCPopupCascader from './cascader/Popup'
import MultiPicker from './MultiPicker'
import RMCPicker from './Picker'
import PickerStyles from './style'


export function getDefaultProps() {
    const defaultFormat = (values) => values.join(',')
    return {
        triggerType: 'onPress',
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-col',
        popupPrefixCls: 'am-picker-popup',
        format: defaultFormat,
        cols: 3,
        cascade: true,
        title: '',
        itemStyle:{},
    }
}

export default class Picker extends React.Component {
    static propTypes = {
        data: PropTypes.array,
        itemStyle: ViewPropTypes.style,
        indicatorStyle: ViewPropTypes.style,
        value: PropTypes.array,
        cascade: PropTypes.bool,
        format: PropTypes.func,
        onChange: PropTypes.func,
        onOk: PropTypes.func,
        onPickerChange: PropTypes.func,
        onVisibleChange: PropTypes.func,
        children: PropTypes.any,
        popupPrefixCls: PropTypes.string,
        okText: PropTypes.string,
        dismissText: PropTypes.string,
        extra: PropTypes.string,
        cols: PropTypes.number,

    }
    static defaultProps = getDefaultProps();
    popupProps={};
    scrollValue;
    getSel = () => {
        // eslint-disable-next-line react/destructuring-assignment
        const value = this.props.value || []
        let treeChildren
        const { data, cascade, format } = this.props
        if (cascade) {
            treeChildren = treeFilter(data, (c, level) => c.value === value[level])
        } else {
            treeChildren = value.map((v, i) => data[i].filter((d) => d.value === v)[0])
        }
        return (
            format
            && format(
                treeChildren.map((v) => v.label),
            )
        )
    };
    getPickerCol = ({ _styles }) => {
        const { data, itemStyle, indicatorStyle } = this.props
        return data.map((col, index) => (
            <RMCPicker
                // eslint-disable-next-line react/no-array-index-key
                key={`picker-${index}`}
                style={[{ flex: 1 }, _styles.pickerContainer]}
                itemStyle={itemStyle}
                indicatorStyle={indicatorStyle}
            >
                {col.map((item) => (
                    <RMCPicker.Item
                        key={item.value}
                        value={item.value}
                        color={_styles.pickerItem.color}
                    >
                        {item.label}
                    </RMCPicker.Item>
                ))}
            </RMCPicker>
        ))
    };
    onOk = (v) => {
        const {
            onChange,
            onOk,
        } = this.props
        if (this.scrollValue !== undefined) {
            // eslint-disable-next-line no-param-reassign
            v = this.scrollValue
        }
        if (onChange) {
            onChange(v)
        }
        if (onOk) {
            onOk(v)
        }
    };
    setScrollValue = (v) => {
        this.scrollValue = v
    };
    setCasecadeScrollValue = (v) => {
        // 级联情况下保证数据正确性，滚动过程中只有当最后一级变化时才变更数据
        if (v && this.scrollValue) {
            const { length } = this.scrollValue
            if (
                length === v.length
                && this.scrollValue[length - 1] === v[length - 1]
            ) {
                return
            }
        }
        this.setScrollValue(v)
    };
    fixOnOk = (cascader) => {
        if (cascader && cascader.onOk !== this.onOk) {
            // eslint-disable-next-line no-param-reassign
            cascader.onOk = this.onOk
            cascader.forceUpdate()
        }
    };
    onPickerChange = (v) => {
        const {
            onPickerChange,
        } = this.props
        this.setScrollValue(v)
        if (onPickerChange) {
            onPickerChange(v)
        }
    };
    onVisibleChange = (visible) => {
        const {
            onVisibleChange,
        } = this.props
        this.setScrollValue(undefined)
        if (onVisibleChange) {
            onVisibleChange(visible)
        }
    };
    getCascade = (
        cascade,
        data,
        cols,
        itemStyle,
        indicatorStyle,
        _styles
    ) => {
        let cascader
        let popupMoreProps = {}
        if (cascade) {
            cascader = (
                <RMCCascader
                    data={data}
                    cols={cols}
                    onChange={this.onPickerChange}
                    onScrollChange={this.setCasecadeScrollValue}
                    pickerItemStyle={itemStyle}
                    indicatorStyle={indicatorStyle}
                    style={_styles.pickerContainer}
                    styles={_styles}
                />
            )
        } else {
            cascader = (
                <MultiPicker
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onScrollChange={this.setScrollValue}
                >
                    {this.getPickerCol({ _styles })}
                </MultiPicker>
            )
            popupMoreProps = {
                pickerValueProp: 'selectedValue',
                pickerValueChangeProp: 'onValueChange',
            }
        }
        return { cascader, popupMoreProps }
    };
    render() {
        const {
            children,
            value = [],
            popupPrefixCls,
            itemStyle,
            indicatorStyle,
            okText,
            dismissText,
            extra,
            cascade,
            data,
            cols,
            onOk,
            ...restProps
        } = this.props
        return (
            <WithTheme styles={restProps.styles} themeStyles={PickerStyles}>
                {
                    (_styles) => {
                        const {
                            cascader,
                            popupMoreProps,
                        } = this.getCascade(
                            cascade,
                            data,
                            cols,
                            itemStyle,
                            indicatorStyle,
                            _styles
                        )
                        return (
                            <RMCPopupCascader
                                cascader={cascader}
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...this.popupProps}
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...restProps}
                                styles={_styles}
                                value={value}
                                dismissText={dismissText || '取消'}
                                okText={okText || '确定'}
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...popupMoreProps}
                                ref={this.fixOnOk}
                                onVisibleChange={this.onVisibleChange}
                            >
                                {children
                                    && typeof children !== 'string'
                                    && React.isValidElement(children)
                                    && React.cloneElement(children, {
                                        extra: this.getSel() || extra || '请选择',
                                    })}
                            </RMCPopupCascader>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
