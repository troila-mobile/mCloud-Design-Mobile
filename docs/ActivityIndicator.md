---
id: ActivityIndicator
title: ActivityIndicator
sidebar_label: ActivityIndicator
---

ActivityIndicator

## Basic Example:

```SnackPlayer name=activity-indicator-simple
import React from 'react'
import { View,ScrollView } from 'react-native'
import { ActivityIndicator } from "mcloud-mobile";

const ViewTop = () => (
    <View style={{ marginTop: 10 }} />
)

export default () => (
    <ScrollView style={{ flex: 1 }}>
        <ViewTop />
        <ActivityIndicator />
        <ViewTop />
        <View style={{alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center',
            width: 89,
            height: 89,
            backgroundColor: '#2B2F42',}}>
            <ActivityIndicator color="white" />
        </View>
        <ViewTop />
        <ActivityIndicator size="large" />
        <ViewTop />
        <ActivityIndicator text="正在加载" />
        <ViewTop />
        <ActivityIndicator toast text="正在加载" textStyle={{color:'gray'}}/>
        <ViewTop />
        <View style={{height:300}}>
            <ActivityIndicator toast style={{width:120,height:120,borderRadius:10}} size={'large'}/>
        </View>
    </ScrollView>
)
```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| size    | 指示器大小，可选值为`large`、`small` | string | `small`|
| color    | 指示器颜色，可选值为`gray`、`white`、`颜色值` | string | `gray`|
| animating | 是否显示 | boolean | `true`|
| toast  | 是否是toast模式，true为浮层toast模式，阻塞  下层控件操作，false为占位模式 | boolean | `fase`|
| text   | 指示器显示文字  | string |    无  |
| textStyle    | 自定义指示器文字样式 |   Object  | 无 |
| style    | 自定义样式 |   Object  | 无 |
