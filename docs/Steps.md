---
id: Steps
title: Steps
sidebar_label: Steps
---

Steps

## Basic Example:

```SnackPlayer name=Steps-simple
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Steps } from 'mcloud-mobile';

const { StepsItem } = Steps
const ViewTop = () => (
    <View style={{ marginTop: 20 }}/>
)

const stepsOne = [
    {
        title: '第一步',
        description: '完成',
    },
    {
        title: '第二步',
        description: '进行中',
    },
    {
        title: '第三步',
        description: '等待',
    },
]
const stepsTwo = [
    {
        title: '第一步',
        description: '完成',
        status: 'finish',
    },
    {
        title: '第二步',
        description: '进行中',
        status: 'process',
    },
    {
        title: '第三步',
        description: '出错',
        status: 'error',
    },
    {
        title: '第四步',
        description: '等待',
        status: 'wait',
    },
]

export default () => (
    <View style={{
        flex: 1,
    }}>
        <ScrollView
            style={{ flex: 1 }}
            automaticallyAdjustContentInsets={false}
            showsVerticalScrollIndicator={false}>
            <ViewTop/>
            <Steps size='small' current={1} direction="horizontal">
                {stepsOne.map((item, index) => (
                    <StepsItem
                        key={index}
                        title={item.title}
                        status={item.status}
                    />
                ))}
            </Steps>
            <ViewTop/>
            <Steps size="small" current={1}>
                {stepsOne.map((item, index) => (
                    <StepsItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        status={item.status}
                    />
                ))}
            </Steps>
        </ScrollView>
    </View>
)
```

## Steps Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| current | 当前值 | number   |  0 |
| size | 步骤栏大小，可选值为`large`、`small` | String   |  `large` |
| direction | 控件的方向，可选值为`horizontal`/`vertical` | String   |  `vertical` |

## StepsItem Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| status | 状态值，可选值为`wait`/`process`/`finish`/`error` | String | `wait` |
| title | 标题 | String   |  无 |
| description | 描述(可选) | String   |  无 |
