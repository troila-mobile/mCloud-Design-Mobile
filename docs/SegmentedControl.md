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
| disabled   |   设置禁用   |   boolean   |    false  |
| segments   |   按钮的个数  |   number   |   2    |
| titles   |   按钮的title   |   元素为string类型的数组    |    无    |
| onPressMethods   |  按钮点击的回调函数   |   元素为函数类型的数组   |   无  |
| selectedIndex   |   初始选中哪个按钮    |   number   |   0   |
| style    | 自定义样式 |   Object  | 无 |

