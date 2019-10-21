---
id: Card
title: Card
sidebar_label: Card
---

Card

## Basic Example:

```SnackPlayer name=Card-simple
import React from 'react'
import { View,Dimensions } from 'react-native'
import { Card } from 'mcloud-mobile'



export default () => (
    <View
        style={{
            flex:1,
            alignItems:'center',
            backgroundColor:'#e6e6e6'
        }}
    >
        <View
            style={{
                backgroundColor:'#fff'
            }}
        >
            <View style={{
                backgroundColor:'#DEDFE0',
                width:Dimensions.get('window').width-15,
                marginLeft:15,
                height:1
            }}
            />
            <Card
                type='vertical'
                title='这是标题这是标题这是标题这是标题这是标题这是标题这是标题'
                content='这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是
              内容这是内容这是内容这是内容这是内容这是内容这是内容'
            />
            <View style={{
                backgroundColor:'#DEDFE0',
                width:Dimensions.get('window').width-15,
                marginLeft:15,
                height:1
            }}
            />
            <Card
                type='vertical'
                title='这是标题这是标题这是标题这是标题这是标题这是标题这是标题'
                titleNumberOfLines={1}
                content='这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是
              内容这是内容这是内容这是内容这是内容这是内容这是内容'
                image={{
                    uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569822013704&di=1f'
                + 'aef74531d6c1ea1ccf2962cea5b166&imgtype=0&src=http%3A%2F%2Fpic21.nipic.com%2F2012'
                + '0519%2F9975192_125719517000_2.jpg'
                }}
            />
        </View>
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
| cardOnPress    |  card的点击回调函数 | (e: Object): void |   无  |


