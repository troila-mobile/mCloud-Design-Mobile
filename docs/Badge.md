---
id: Badge
title: Badge
sidebar_label: Badge
---

Badge

## Basic Example:

```SnackPlayer name=Badge-simple
import React from 'react'
import { View } from 'react-native'
import { Badge } from 'mcloud-mobile'

export default () => (
    <View
        style={{
            flex:1,
            alignItems:'center',
            backgroundColor:'#e6e6e6'
        }}
    >
        <Badge text="文本" style={{ marginBottom:4 }} />
        <Badge text="文本" type="redPoint" style={{ marginBottom:4 }} />
        <Badge text="文本" type="number" count={10} style={{ marginBottom:4 }} />
        <Badge text="文本" type="number" count={100} style={{ marginBottom:4 }} />
        <Badge text="文本" type="new" style={{ marginBottom:4 }} />

    </View>
)
```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | Badge类型，可选值为`redPoint`/`number`/`new` |   string   |   `redPoint`  |
| text   |   文本   |   string   |    ''  |
| textStyle   |   文本样式  |   object   |   无    |
| count   |   未读数，type为`number`时需要   |   number    |    0    |
| showBadge   |  是否显示红色标记   |   bool   |   true  |
| style    | 自定义样式 |   Object  | 无 |
| onPress    | 点击按钮的点击回调函数 | (e: Object): void |   无  |

