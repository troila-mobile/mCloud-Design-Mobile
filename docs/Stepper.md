---
id: Stepper
title: Stepper
sidebar_label: Stepper
---

加减操作

## Basic Example:

```SnackPlayer name=stepper-simple
import { StyleSheet } from 'react-native'
import { Stepper } from 'mCloud-mobile';

export default () => {
    return (
        <View style={styles.warp}>
              <Stepper
                        max={200}
                        min={0}
                        unit="米"
                        step={2}
                        defaultValue={60}
                        onChange={(e) => {}}
                    />
        </View>
    )
}

const styles = StyleSheet.create({
    warp: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    }
})


```

## Stepper Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| min | 最小值 | number   |  0 |
| max | 最大值 | number   |  100 |
| step | 每次操作加减数 | number   |  1 |
| defaultValue | 默认值 | number | 50 |
| value | 当前值 | number | 无 |
| unit | 文字后面的单位 | String | 无 |
| onChange | change事件触发的回调函数 | (e: Object): e.value | 无 |

