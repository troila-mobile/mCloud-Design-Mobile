---
id: Radio
title: Radio
sidebar_label: Radio
---

单选框

## Basic Example

```SnackPlayer name=radio-simple
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Radio } from 'mcloud-mobile'

const { RadioItem } = Radio
const list = [
    {
        value: 1,
        label: '所有人可见',
    }, {
        value: 2,
        label: '仅主管可见',
    }, {
        value: 3,
        label: '仅管理员可见',
    }, {
        value: 4,
        disabled: true,
        label: '仅部分员工可见(不可选)',
    },
]

export default () => {
    const [checked, onChange] = useState(false)
    const [typeChecked, onItemChange] = useState(3)
    return (
        <View style={styles.wrap}>
            <Text style={styles.boldTitle}>
                Radio
            </Text>
            <Text style={styles.title}>
                受控
            </Text>
            <Radio
                checked={checked}
                style={styles.checkbox}
                onChange={() => {
                    onChange(!checked)
                }}
            >
                <Text style={styles.desc}>
                    已阅读并同意
                    <Text style={styles.descHignlight}>
                        《打卡助手会员协议》
                    </Text>
                </Text>
            </Radio>
            <Text style={styles.title}>
                不可点击状态
            </Text>
            <Radio style={styles.checkbox} disabled />
            <Text style={styles.title}>
                选中不可点击状态
            </Text>
            <Radio style={styles.checkbox} checked disabled />
            <Text style={styles.boldTitle}>
                RadioItem
            </Text>
            {
                list.map((item,index) => {
                    const color = item.disabled ? '#999' : '#1F2530'
                    return (
                        <RadioItem
                            key={item.value}
                            disabled={item.disabled}
                            checked={typeChecked === item.value}
                            hideLine={index === (list.length - 1)}
                            onChange={() => {
                                onItemChange(item.value)
                            }}
                        >
                            <Text style={[styles.text, { color }]}>
                                {
                                    item.label
                                }
                            </Text>
                        </RadioItem>
                    )
                })
            }
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
    text: {
        marginLeft: 15,
        fontSize: 16,
    },
    desc: {
        fontSize: 12,
        color: '#999999',
    },
    descHignlight: {
        color: '#5268F0',
    },
})
```



## Radio Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| checked | 当前是否选中 | Boolean   |  无 |
| disabled | 禁用 | Boolean   |  false |
| onChange | change事件触发的回调函数 | (e: Object): void | 无 |
| circleSize | Radio 大小 | Number | 16 |
| centerSize | Radio 选中部分大小 | Number | 10 |
| icon | 自定义 Radio 样式 | ReactNode | 无 |

## RadioItem Props

有 Radio 的所有 props 属性，另外还有

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| hideLine | 是否隐藏下面的线 | Boolean   |  false |
