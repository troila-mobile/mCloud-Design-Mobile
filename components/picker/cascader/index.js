/* eslint-disable react/prop-types */
import arrayTreeFilter from 'array-tree-filter'
import React from 'react'
import MultiPicker from '../MultiPicker'
import Picker from '../Picker'

class Cascader extends React.Component {
    static defaultProps = {
        cols: 3,
        data: [],
        disabled: false,
    };
    state = {
        value: this.getValue(
            this.props.data,
            this.props.defaultValue || this.props.value,
        ),
    };
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: this.getValue(nextProps.data, nextProps.value),
            })
        }
    }
    onValueChange = (value, index) => {
        const {
            data: oldData,
            cols,
            onChange,
        } = this.props
        const children = arrayTreeFilter(oldData, (c, level) => level <= index && c.value === value[level])
        let data = children[index]
        let i
        for (
            i = index + 1;
            data && data.children && data.children.length && i < cols;
            i++
        ) {
            // eslint-disable-next-line prefer-destructuring
            data = data.children[0]
            // eslint-disable-next-line no-param-reassign
            value[i] = data.value
        }
        // eslint-disable-next-line no-param-reassign
        value.length = i
        if (!('value' in this.props)) {
            this.setState({
                value,
            })
        }
        if (onChange) {
            onChange(value)
        }
    };
    getValue(d, val) {
        const {
            data: oldData,
            value: oldValue,
            defaultValue,
            cols,
        } = this.props
        let data = d || oldData
        const value = val || oldValue || defaultValue
        let level = 0
        const nextValue = []

        if (value && value.length) {
            do {
                const index = data.findIndex((item) => item.value === value[level])

                if (index < 0) {
                    break
                }

                nextValue[level] = value[level]
                level += 1
                data = data[index].children || []
            } while (data.length > 0)
        }

        for (let i = level; i < cols; i++) {
            if (data && data.length) {
                nextValue[i] = data[0].value
                data = data[0].children
            } else {
                break
            }
        }

        return nextValue
    }
    getCols() {
        const {
            data,
            cols,
            disabled,
            pickerItemStyle,
            indicatorStyle,
            styles,
        } = this.props
        const { value } = this.state
        const childrenTree = arrayTreeFilter(data, (c, level) => c.value === value[level]).map((c) => c.children)

        // in case the users data is async get when select change
        const needPad = cols - childrenTree.length
        if (needPad > 0) {
            for (let i = 0; i < needPad; i++) {
                childrenTree.push([])
            }
        }
        childrenTree.length = cols - 1
        childrenTree.unshift(data)
        return childrenTree.map((children = [], level) => (
            <Picker
                // eslint-disable-next-line react/no-array-index-key
                key={level}
                style={{ flex: 1 }}
                disabled={disabled}
                itemStyle={pickerItemStyle}
                indicatorStyle={indicatorStyle}
                styles={styles}
            >
                {children.map((item) => (
                    <Picker.Item
                        value={item.value}
                        key={item.value}
                        color={styles.pickerItem.color}
                    >
                        {item.label}
                    </Picker.Item>
                ))}
            </Picker>
        ))
    }
    render() {
        const { props,state } = this
        const { rootNativeProps, style } = props
        const { value } = state
        const cols = this.getCols()

        return (
            <MultiPicker
                style={[
                    {
                        flexDirection: 'row',
                        alignItems: 'center',
                    },
                    style,
                ]}
                selectedValue={value}
                rootNativeProps={rootNativeProps}
                onValueChange={this.onValueChange}
                onScrollChange={props.onScrollChange}
            >
                {cols}
            </MultiPicker>
        )
    }
}

export default Cascader
