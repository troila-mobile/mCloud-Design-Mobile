---
id: Label
title: Label
sidebar_label: Label
---

Label

## Basic Example:

```SnackPlayer name=label-simple
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Label } from 'mcloud-mobile';

export default () => (
    <View style={styles.wrap}>
        <Text style={styles.boldTitle}>
           SmallLabel
        </Text>
        <View style={styles.cellStyle}>
            <Label type="white" size="small" textType="smallText" style={styles.defaultStyle}>
                两字
            </Label>
            <Label type="black" size="small" textType="smallText" style={styles.multiStyle}>
                这里是可变的两个字
            </Label>
        </View>
        <Text style={styles.boldTitle}>
            MiddleLabel
        </Text>
        <View style={styles.cellStyle}>
            <Label type="white" size="middle" textType="middleText" style={styles.defaultStyle}>
                三个字
            </Label>
            <Label type="black" size="middle" textType="middleText" style={styles.multiStyle}>
                这里是可变的三个字
            </Label>
        </View>
        <Text style={styles.boldTitle}>
            LargeLabel
        </Text>
        <View style={styles.cellStyle}>
              <Label
                    type="white"
                    size="large"
                    textType="largeText"
                    style={styles.defaultStyle}
                    disabled={false}
                     onPress={() => {}}
              >
              三个字
              </Label>
              <Label
               type="black"
               size="large"
               textType="largeText"
               style={styles.multiStyle}
               disabled={false}
               onPress={() => {}}
               >
               这里是长度固定的三个字
               </Label>
        </View>
    </View>
)
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    multiStyle:{
        width:120,
        marginLeft:20,
    },
    defaultStyle:{
        marginLeft: 20,
    },
    cellStyle:{
        marginTop:10,
        flexDirection:'row',
    },
    boldTitle: {
        marginTop:10,
        fontSize: 16,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 10,
        fontWeight: '500',
    },
})
```
## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 标签文本颜色，可选值为 `white(白色)` 或者 `black(黑色)`  |   string   |   -  |
| textType    | 标签文本大小，可选值为 `smallText(小)` 或者 `middleText(中)` 或者 `largeText(大)` |   string   |   -  |
| disabled    | 标签是否可点击, 不可点击 (true),  可设置点击(false) |   bool   |  不可点击(true)  |
| onPress    | 点击事件  |   func   |   -  |
| size    | 标签大小，可选值为 `small(小)` 或者 `middle(中)` 或者 `large(大)` |   string   |   -  |
| style    | 自定义样式 |   Object  | 无 |
