---
id: Button
title: Button
sidebar_label: Button
---

就是一个Button

## Basic Example:

```SnackPlayer name=button-simple
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import AwesomeButton from "react-native-really-awesome-button";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <AwesomeButton>Text</AwesomeButton>
        <AwesomeButton
        progress
        onPress={next => {
          /** Do Something **/
          next();
        }}
      >
        Text
      </AwesomeButton>
      <AwesomeButton>
        <Text>Send it</Text>
      </AwesomeButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
        alignItems:'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设  |   string   |   -  |
| size    | 按钮大小，可选值为`large`、`small` | string | `large`|
| activeStyle  | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {} |
| disabled   | 设置禁用  | boolean |    false  |
| onPress    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |