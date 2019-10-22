---
id: EmptyView
title: EmptyView
sidebar_label: EmptyView
---

EmptyView

## Basic Example:

```SnackPlayer name=empty-simple
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { EmptyView } from 'mcloud-mobile';

const network_failedSource = require('../assets/empty_network_failed.png')

export default () => (
    <View style={styles.wrap}>
        <EmptyView type='custom' emptyImage={network_failedSource} onRefresh={() => { }}>
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
| type    | 缺省页类型，可选值为 `'no_image'(无image)` 、 `'network_failed'(网络加载失败)` 、 `'no_data'(暂无数据)` 或者 `'custom'(手动传image)`|   string   |   -  |
| emptyImage    | image可选，可不传 |   Object   |   -  |
| onRefresh    | 刷新方法,可选,不传则没有重新加载按钮 |   func   |   -  |
| style    | 自定义样式 |   Object  | 无 |
