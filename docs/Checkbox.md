---
id: Checkbox
title: Checkbox
sidebar_label: Checkbox
---

复选框

## Basic Example

```SnackPlayer name=checkbox-simple
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Checkbox } from 'mcloud-mobile';

const { CheckboxItem } = Checkbox

export default () => {
    const [checked, onChange] = useState(true)
    const [itemChecked, onItemChange] = useState(true)
    return (
        <View style={styles.wrap}>
            <Text style={styles.boldTitle}>
                Checkbox
            </Text>
            <Text style={styles.title}>
                默认未点击
            </Text>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.title}>
                勾选状态
            </Text>
            <Checkbox
                checked={checked}
                style={styles.checkbox}
                onChange={(e) => {
                    onChange(e.checked)
                }}
            />
            <Text style={styles.title}>
                选中不可点击状态
            </Text>
            <Checkbox style={styles.checkbox} checked disabled />
            <Text style={styles.title}>
                不可点击状态
            </Text>
            <Checkbox style={styles.checkbox} disabled />
            <Text style={styles.boldTitle}>
                CheckboxItem
            </Text>
            <CheckboxItem>
                选项1（默认未点击）
            </CheckboxItem>
            <CheckboxItem
                checked={itemChecked}
                onChange={(e) => {
                    onItemChange(e.checked)
                }}
            >
                选项2（勾选状态）
            </CheckboxItem>
            <CheckboxItem
                checked
                disabled
            >
                选项3（选中不可点状态）
            </CheckboxItem>
            <CheckboxItem
                disabled
                hideLine
            >
                选项3（不可点状态）
            </CheckboxItem>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    title: {
        fontSize: 14,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 15,
    },
    checkbox: {
        marginHorizontal: 15,
        marginVertical: 5,
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



## Checkbox Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultChecked | 是否默认选中 | Boolean   |  无 |
| checked | 当前是否选中 | Boolean   |  无 |
| disabled | 禁用 | Boolean   |  false |
| onChange | change事件触发的回调函数 | (e: Object): void | 无 |

## CheckboxItem Props

有 Checkbox 的所有 props 属性，另外还有

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| hideLine | 是否隐藏下面的线 | Boolean   |  false |
