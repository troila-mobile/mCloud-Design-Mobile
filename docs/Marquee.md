---
id: Marquee
title: Marquee
sidebar_label: Marquee
---

滚动文字组件

## Basic Example:

```SnackPlayer name=marquee-simple
import React from 'react'
import { View } from 'react-native'
import { Marquee } from 'mcloud-mobile'

export default class MarqueeDemo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Marquee text='Some very long text needed scroll to view all of them and loop over.' />
            </View>
        )
    }
}
```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| speed    | 文字滚动速度  |   number   |   80  |
| text    | 滚动文字内容 | string | ''|
| maxWidth  | 文字区域最大长度 | number | 1200 |
| loop   | 是否滚动  | boolean |    true  |
| startDelay    | 开始滚动前延时时间ms | number |   1000  |
| resetDelay    | 返回开始位置前延时时间ms |   number  | 800 |
