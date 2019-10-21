---
id: NoticeBar
title: NoticeBar
sidebar_label: NoticeBar
---

提示信息组件

## Basic Example:

```SnackPlayer name=notice-simple
import React from 'react'
import { View } from 'react-native'
import { NoticeBar } from 'mcloud-mobile'

const apiText = 'Some very long text needed scroll to view all of them and loop over.'

export default class NoticeBarDemo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NoticeBar text={apiText} />
                <NoticeBar
                    text={apiText}
                    style={{ marginTop: 20 }}
                    closeType="close"
                />
                <NoticeBar
                    text={apiText}
                    style={{ marginTop: 20 }}
                    closeType="never"
                    neverShowKey="neverShowApiText"
                />
                <NoticeBar
                    text={apiText}
                    marquee={true}
                    style={{ marginTop: 20 }}
                    closeType="close"
                />
            </View>
        )
    }
}
```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| textStyle    | 文字样式  |   object   |     |
| iconLeft    | 是否显示左侧图标 | boolean | true |
| iconSource  | 图标资源 | any |   |
| numberOfLines   | 行数  | number |    1  |
| marquee    | 是否单行滚动 | boolean |   false  |
| marqueeProps    | 滚动属性 |   object  |  |
| closeType    | 关闭方式'none','close','never' |   string  | 'none' |
| closeStyle    | 关闭按钮样式 |   object  |  |
| text    | 提示信息内容 |   string  | '' |
| onDismiss    | 关闭回调 |   function  | null |
| neverShowKey    | 不再提示的本地存储Key值 |   string  | 'NeverShow' |
