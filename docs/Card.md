---
id: Card
title: Card
sidebar_label: Card
---

Card

## Basic Example:

```SnackPlayer name=Card-simple
import React from 'react'
import { View } from 'react-native'
import { Badge } from '../..'

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
| type    | Card类型，可选值为`horizontal`/`vertical` |   string   |   `redPoint`  |
| title   |   标题   |   string   |    '标题'  |
| titleStyle   |   标题样式  |   object   |   -    |
| titleNumberOfLines  |  标题行数   |  number  |  -  |
| content   |   内容   |   string    |    '内容'    |
| contentStyle   |  内容样式   |   object   |   -  |
| contentNumberOfLines  |  内容行数   |   number  |    2  | 
| image     |   图片   |   object  |   无  |
| imageStyle  |   图片样式  |  object   |   -  |
| imageOnPress   |    图片的点击回调函数   |   (e: Object): void |   无  |
| showBorderLine    | 是否显示下划线 |   bool  | true | 
| cardOnPress    |  card的点击回调函数 | (e: Object): void |   无  |


