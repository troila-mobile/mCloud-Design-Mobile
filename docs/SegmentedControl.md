---
id: SegmentedControl
title: SegmentedControl
sidebar_label: SegmentedControl
---

SegmentedControl

## Basic Example:

```SnackPlayer name=SegmentedControl-simple
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { SegmentedControl } from "mcloud-design-mobile";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <SegmentedControl leftText='申请' rightText='审批' style={{ marginTop:20 }} />
       <SegmentedControl disabled leftText='申请' rightText='审批' style={{ marginTop:20 }} />
       <SegmentedControl
                              leftText='今日遭到榜'
                              rightText='昨日工时榜'
                              type='special'
                              style={{ marginTop:20,width:300,height:40 }}
                          />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
        alignItems:'center'
  },
});
```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | segmentedControl类型，可选值为`default`/`special`  |   string   |   `default`  |
| disabled   | 设置禁用  | boolean |    false  |
| leftText   | 左边按钮的title | string | '' |
| rightText   | 右边按钮的title | string | '' |
| onPressLeft    | 左边按钮的点击回调函数 | (e: Object): void |   无  |
| onPressRight    | 右边按钮的点击回调函数 | (e: Object): void |   无  |
| defaultSelected | 初始选中哪个按钮 | string | 'left' |
| style    | 自定义样式 |   Object  | 无 |

