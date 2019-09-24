---
id: Switch
title: Switch
sidebar_label: Switch
---

滑动开关

## Basic Example:

```SnackPlayer name=switch-simple
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Switch } from 'mCloud-mobile';

export default () => {
    const [value, onChange] = useState('打卡助手')
    return (
        <View style={styles.warp}>
            <Text style={styles.boldTitle}>
                圆角搜索框
            </Text>
            <Text style={styles.title}>
                未输入状态
            </Text>
            <Switch type="radius" placeholder="搜索" />
        </View>
    )
}

const styles = StyleSheet.create({
    warp: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    title: {
        fontSize: 14,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 15,
    },
    boldTitle: {
        fontSize: 16,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 10,
        fontWeight: '500',
    },
})

```



## Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultValue | 默认值 | String   |  无 |




