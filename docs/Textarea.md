---
id: Textarea
title: Textarea
sidebar_label: Textarea
---

多行文本输入

## Basic Example

```SnackPlayer name=textarea-simple
import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native'
import { Textarea } from 'mcloud-mobile'

export default () => {
    const [leftValue, onLeftChange] = useState('')
    const [topValue, onTopChange] = useState('')
    return (
        <View style={styles.wrap}>
            <ScrollView>
                <Text style={styles.boldTitle}>
                    Textarea
                </Text>
                <Text style={styles.title}>
                    标题在左
                </Text>
                <Textarea
                    label="标题"
                    autoHeight={true}
                    textAlign="right"
                    labelPosition="left"
                    placeholder="请输入标题"
                    value={leftValue}
                    onChange={(text) => {
                        onLeftChange(text)
                    }}
                />
                <Text style={styles.title}>
                    标题在上
                </Text>
                <Textarea
                    label="标题"
                    placeholder="请输入标题"
                    value={topValue}
                    onChange={(text) => {
                        onTopChange(text)
                    }}
                />
                <Text style={styles.title}>
                    规定行数
                </Text>
                <Textarea
                    label="标题"
                    rows={4}
                    placeholder="请输入标题"
                />
                <Text style={styles.title}>
                    高度自适应
                </Text>
                <Textarea
                    label="标题"
                    autoHeight={true}
                    placeholder="请输入标题"
                />
                <Text style={styles.title}>
                    多行计数
                </Text>
                <Textarea
                    label="标题"
                    rows={4}
                    count={80}
                    value="输入后文字显示很多很多很多很多很多很多很多很多输入后文字显示很多很多"
                    placeholder="请输入标题"
                />
                <Text style={styles.title}>
                    不可编辑
                </Text>
                <Textarea
                    label="标题"
                    value="输入后文字显示很多很多很多很多"
                    placeholder="请输入标题"
                    disabled={true}
                />
            </ScrollView>
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
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| placeholderTextColor      | placeholderTextColor        | String | theme.color_text_placeholder  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  true  |
| autoFocus    | 是否禁用        | bool |  true  |
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效)。在 Android 中, 处于编辑状态(focus)时 icon 才会出现, 且此组件被`ScrollView`包裹时, 设置`ScrollView`的`keyboardShouldPersistTaps`属性为`handled`或`always`时, icon才会正确响应点击事件 | bool | false  |
| count      |  最大长度      | number |  无  |
| textAlign      |  输入框的位置，可选值有 `left` 和 `right`      | string |  right  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| labelNumber  | 标签的文字个数，可用`2-7`之间的数字 | number | `5` |
| last      |  如果是最后一项，则将移除`borderBottom`（默认拥有`borderBottom`）  | bool | false  |
| rows      |  显示几行  | number | 1  |
| autoHeight  |  高度自适应, autoHeight 和 rows 请二选一  |  bool |	false|
| label      |  title  | string | 无 |
| labelPosition      |  title 的位置 ，可选值有 `top` `left`  | string | top  |
| onContentSizeChange      |  count变化的时候触发的方法  | (event: object): void | 无  |
