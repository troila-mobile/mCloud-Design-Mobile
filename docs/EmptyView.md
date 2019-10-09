---
id: EmptyView
title: EmptyView
sidebar_label: EmptyView
---

EmptyView

## Basic Example:

```
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { EmptyView } from 'mCloud-Design-Mobile';

const network_failedSource = require('../assets/empty_network_failed.png')

export default () => (
    <View style={styles.wrap}>
        <EmptyView type={3} emptyImage={network_failedSource} onRefresh={() => { }}>
            暂无数据
        </EmptyView>
    </View>
)
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
})

```
## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 缺省页类型，可选值为 `1(无image)` 、 `2(网络加载失败)` 、 `3(暂无数据)` 或者 `4(手动传image)`|   number   |   -  |
| emptyImage    | image可选，可不传 |   Object   |   -  |
| onRefresh    | 刷新方法,可选 |   func   |   -  |
| style    | 自定义样式 |   Object  | 无 |
