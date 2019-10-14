---
id: Steps
title: Steps
sidebar_label: Steps
---

步骤进度条

## Basic Example:

```SnackPlayer name=Steps-simple
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Steps } from '../..'

const Step = Steps.StepsItem
const stepsOne = [
    {
        title: 'Finished',
        description: 'Finished',
    },
    {
        title: 'In Progress',
        description: 'In Progress',
    },
    {
        title: 'Waiting',
        description: 'Waiting',
    },
]
const stepsTwo = [
    {
        title: 'Finished',
        description: 'Finished',
        status: 'finish',
    },
    {
        title: 'In Progress',
        description: 'In Progress',
        status: 'process',
    },
    {
        title: 'Waiting',
        description: 'Waiting',
        status: 'error',
    },
    {
        title: 'Waiting',
        description: 'Waiting',
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
            <View style={{ marginTop: 60 }}>
                <Steps size='small' current={1} direction="horizontal">
                    {stepsOne.map((item, index) => (
                        <Step
                            key={index}
                            title={
                                <View>
                                    <Text>
                                        {item.title}
                                    </Text>
                                </View>
                            }
                            status={item.status}
                        />
                    ))}
                </Steps>
            </View>
            <View style={{ marginTop: 60 }}>
                <Steps size="small" current={1}>
                    {stepsOne.map((item, index) => (
                        <Step
                            key={index}
                            title={
                                <View>
                                    <Text>title:{item.title}</Text>
                                </View>
                            }
                            description={
                                <View>
                                    <Text>desc:{item.description}</Text>
                                </View>
                            }
                            status={item.status}
                        />
                    ))}
                </Steps>
            </View>
            <View style={{ marginTop: 60 }}>
                <Steps size="small">
                    {stepsTwo.map((item, index) => (
                        <Step
                            key={index}
                            title={item.title}
                            description={item.description}
                            status={item.status}
                        />
                    ))}
                </Steps>
            </View>
            <View style={{ marginTop: 60 }}>
                <Steps>
                    {stepsTwo.map((item, index) => (
                        <Step
                            key={index}
                            title={item.title}
                            description={item.description}
                            status={item.status}
                        />
                    ))}
                </Steps>
            </View>
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
| icon | 图标(可选) | String   |  无 |
| renderIcon | 自定义步骤图标(可选) | (params: { finish: boolean; error: boolean; wait: boolean}) | 无 |
