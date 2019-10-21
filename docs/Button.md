---
id: Button
title: Button
sidebar_label: Button
---

就是一个Button

## Basic Example:

```SnackPlayer name=button-simple
import React from 'react'
import { View,ScrollView } from 'react-native'
import { Button } from 'mcloud-mobile'

const ViewTop = () => (
    <View style={{ marginTop: 10 }} />
)

const margin = { marginHorizontal: 15 }

export default () => (
    <ScrollView style={{ flex: 1 }}>
        <ViewTop />
        <Button
            layout="radius"
            type="primary"
            style={margin}
        >
            primary
        </Button>
        <ViewTop />
        <Button
            layout="radius"
            type="primary"
            style={margin}
            disabled
        >
            disabled primary
        </Button>
        <ViewTop />
        <Button
            type="ghost"
            style={margin}
            layout="radius"
        >
            ghost
        </Button>
        <ViewTop />
        <Button
            type="ghost"
            style={margin}
            layout="radius"
            disabled
        >
            disabled ghost
        </Button>
        <ViewTop />
        <Button
            layout="radius"
            type="primary"
            style={margin}
            styles={{
                primaryRaw:{
                    backgroundColor: '#00C482',
                    borderColor:'#00C482',
                },
                primaryHighlight: {
                    backgroundColor: '#0BA15C',
                    borderColor: '#0BA15C',
                },
            }}
        >
            primary custom color
        </Button>
        <ViewTop />
        <Button
            type="warning"
            style={margin}
            layout="radius"
        >
            warning
        </Button>
        <ViewTop />
        <Button
            type="warning"
            style={margin}
            layout="radius"
            disabled
        >
            disabled warning
        </Button>
        <ViewTop />
        <Button disabled>default disabled</Button>
        <ViewTop />
        <Button type="primary">primary</Button>
        <ViewTop />
        <Button type="primary" disabled>
            primary disabled
        </Button>
        <ViewTop />
        <Button type="warning" disabled>
            warning disabled
        </Button>
        <ViewTop />
        <View style={{ flexDirection:'row',paddingHorizontal:15 }}>
            <Button
                type="ghost"
                size="small"
                style={{ marginRight:15 }}
            >
                small ghost
            </Button>
            <Button
                type="primary"
                size="small"
                style={{ marginRight: 15 }}
            >
                small primary
            </Button>
            <Button
                type="warning"
                size="small"
            >
                small warning
            </Button>
        </View>
    </ScrollView>
)

```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设  |   string   |   -  |
| size    | 按钮大小，可选值为`large`、`small` | string | `large`|
| layout | 布局类型，可选值位`default`、`radius` | string |
| activeStyle  | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {} |
| disabled   | 设置禁用  | boolean |    false  |
| onPress    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |