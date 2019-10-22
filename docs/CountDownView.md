---
id: CountDownView
title: CountDownView
sidebar_label: CountDownView
---

CountDownView

## Basic Example:

```SnackPlayer name=activity-indicator-simple
import React from 'react'
import { View,ScrollView } from 'react-native'
import { CountDownView } from "mcloud-mobile";

const ViewTop = () => (
    <View style={{ marginTop: 10 }} />
)

export default () => (
    <ScrollView style={{ flex: 1 }}>
        <ViewTop />
        <CountDownView />
        <ViewTop />
    </ScrollView>
)
```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| text    | 初始显示文本 | string | `获取验证码`|
| waitingText    | 倒计时显示文本，不包括计数部分 | string | `已发送`|
| resendText| 倒计时结束显示文本 | string | `重新发送`|
| seconds  | 倒计时时间 | number | `60`|
| onPress    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| textStyle    | 自定义指示器文字样式 |   Object  | 无 |
| style    | 自定义样式 |   Object  | 无 |
