---
id: Steps
title: Steps
sidebar_label: Steps
---

步骤进度条

## Basic Example:

```SnackPlayer name=Steps-simple
export default () => (
    <View style={{
        flex: 1,
        alignItems: 'center',
    }}
    >
        <Steps></Steps>
        <Steps/>
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
| renderIcon | 自定义步骤图标(可选) | String | 无 |
