---
id: DatePicker
title: DatePicker
sidebar_label: DatePicker
---

Badge

## Basic Example:

```SnackPlayer name=Badge-simple
import React from 'react'
import { View } from 'react-native'
import { DatePicker, List } from 'mcloud-mobile'

export default class extends React.Component {
    state = {
        value: undefined,
    }
    onChange = (value) => {
        this.setState({ value })
    }
    render() {
        const {
            value,
        } = this.state
        return (
            <View>
                <List>
                    <DatePicker
                        value={value}
                        mode="date"
                        defaultDate={new Date()}
                        minDate={new Date(2015, 7, 6)}
                        maxDate={new Date(2026, 11, 3)}
                        onChange={this.onChange}
                        format="YYYY-MM-DD"
                        title="请选择日期"
                    >
                        <List.Item arrow="horizontal">Select Date</List.Item>
                    </DatePicker>
                </List>
            </View>
        )
    }
}

```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode  | 日期选择的类型, 可以是日期`date`,时间`time`,日期+时间`datetime`,年`year`,月`month` | String | `date` |
| value | 当前选中时间 | Date | 无 |
| defaultDate | 默认选中时间 | Date | 无 |
| minDate   | 最小可选日期 | Date  |  2000-1-1  |
| maxDate   | 最大可选日期 | Date  |  2030-1-1  |
| minuteStep |  分钟数递增步长设置   | Number | 1 |
| disabled   | 是否不可用      | Boolean |    false  |
| onChange   | 时间发生变化的回调函数  | (date: Object): void | - |
| onValueChange | 每列 picker 改变时的回调 | (vals: any, index: number) => void | - |
| format  | 格式化选中的值 | `(value: Date) => date string` / `format string`(对应 mode 下格式分别为:`YYYY-MM-DD`,`HH:mm`,`YYYY-MM-DD HH:mm`) | - |
| title  | 弹框的标题 | string/React.ReactElement |  无  |
| itemStyle  | itemStyle |   StyleProp<ViewStyle>;
 |  -  |
| extra   | 显示文案 | String  |  `请选择`  |
| onOk  | 点击选中时执行的回调 | (val): void  |  无 |
| onDismiss  | 点击取消时执行的回调 | (): void  |  无  |

注意：日期字符串在不同浏览器有不同的实现，例如 `new Date('2017-1-1')` 在 Safari 上是 Invalid Date，而在 Chrome 上是能正常解析的。

注意：`DatePicker` children 建议是 `List.Item`, 如果不是，需要是自定义组件(组件内需处理 `onClick` / `extra` / `children` 属性
