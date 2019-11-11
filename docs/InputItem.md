---
id: InputItem
title: InputItem
sidebar_label: InputItem
---

单行文本输入

## Basic Example

```SnackPlayer name=inputItem-simple
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { InputItem } from 'mcloud-mobile'

export default () => {
    const [value, onChange] = useState('')
    const [title, onTitleChange] = useState('打卡助手')
    const [bankcard, bankcardChange] = useState('')
    const [phone, phoneChange] = useState('')
    const [password, passwordChange] = useState('')
    const [number, numberChange] = useState('')
    const [leftValue, leftValueChange] = useState('')
    return (
        <View style={styles.wrap}>
            <Text style={styles.boldTitle}>
                InputItem
            </Text>
            <Text style={styles.title}>
                默认
            </Text>
            <InputItem
                value={value}
                onChange={(text) => {
                    onChange(text)
                }}
                placeholder="请输入标题"
            >
                标题
            </InputItem>
            <InputItem
                value={title}
                onChange={(text) => {
                    onTitleChange(text)
                }}
                placeholder="请输入标题"
            >
                标题
            </InputItem>
            <Text style={styles.title}>
                格式
            </Text>
            <InputItem
                type="bankCard"
                value={bankcard}
                onChange={(text) => {
                    bankcardChange(text)
                }}
                placeholder="bankCard"
            >
                银行卡
            </InputItem>
            <InputItem
                type="phone"
                value={phone}
                onChange={(text) => {
                    phoneChange(text)
                }}
                placeholder="phone"
            >
                手机号
            </InputItem>
            <InputItem
                type="password"
                value={password}
                onChange={(text) => {
                    passwordChange(text)
                }}
                placeholder="password"
            >
                密码
            </InputItem>
            <InputItem
                type="number"
                value={number}
                onChange={(text) => {
                    numberChange(text)
                }}
                placeholder="number"
            >
                数字
            </InputItem>
            <Text style={styles.title}>
                输入内容在左侧的显示效果
            </Text>
            <InputItem
                clear
                textAlign="left"
                placeholder="请输入内容"
                value={leftValue}
                onChange={(text) => {
                    leftValueChange(text)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    title: {
        fontSize: 14,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 15,
    },
    boldTitle: {
        fontSize: 16,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 10,
        fontWeight: '500',
    },
})
```



## Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 可以是银行卡`bankCard`; 手机号`phone`(此时最大长度固定为11,`maxLength`设置无效); 密码`password`; 数字`number`(为了尽量唤起`带小数点`的数字键盘，此类型并不是原生 number，而是`<input type="text" pattern="[0-9]*" />`); `digit`(表示原生的 number 类型); 以及其他标准 input type 类型 | String |  `text`  |
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| placeholderTextColor      | placeholderTextColor        | String | theme.color_text_placeholder  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  true  |
| autoFocus    | 是否自动聚焦        | bool |  true  |
| required | 是否必需（显示红点） | Boolean   |  false |
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效)。在 Android 中, 处于编辑状态(focus)时 icon 才会出现, 且此组件被`ScrollView`包裹时, 设置`ScrollView`的`keyboardShouldPersistTaps`属性为`handled`或`always`时, icon才会正确响应点击事件 | bool | false  |
| maxLength      |  最大长度      | number |  无  |
| textAlign      |  输入框的位置，可选值有 `left` 和 `right`      | string |  right  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| labelNumber  | 标签的文字个数，可用`2-7`之间的数字 | number | `5` |
| last      |  如果是最后一项，则将移除`borderBottom`（默认拥有`borderBottom`）    | bool | false  |