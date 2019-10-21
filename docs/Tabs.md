---
id: Tabs
title: Tabs
sidebar_label: Tabs
---

Label

## Basic Example:

```SnackPlayer name=tabs-simple
import React  from 'react'
import {
    View,  StyleSheet ,
} from 'react-native'
import { Label } from 'mcloud-mobile';

export default class TabViewExample extends React.Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        index: 0,
        routes: [
            { key: '1', title: '新闻' },
            { key: '2', title: '视频' },
            { key: '3', title: '篮球' },
            { key: '4', title: '综艺' },
            { key: '5', title: '电影' },
        ],
    };
    _renderScene = ({ route }) => {
        switch (route.key) {
        case '1':
            return  (<View style={[styles.container, { backgroundColor: '#ff4081' }]} />)
        case '2':
            return  (<View style={[styles.container, { backgroundColor: '#673ab7' }]} />)
        case '3':
            return  (<View style={[styles.container, { backgroundColor: 'red' }]} />)
        case '4':
            return  (<View style={[styles.container, { backgroundColor: 'blue' }]} />)
        case '5':
            return  (<View style={[styles.container, { backgroundColor: 'black' }]} />)
        default:
            return null
        }
    }
    render() {
        return (
            <Tabs
                navigationState={this.state}
                UIColor="#586BFB"
                labelWidth={60}
                routesArray={this.state.routes}
                renderScene={this._renderScene}
                onIndexChange_Tabs={(index) => {
                    // eslint-disable-next-line react/no-unused-state
                    this.setState({ index })
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})


```
## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| labelWidth    | 标签长度  |   number   |   -  |
| UIColor    | 标题和下划线选中颜色  |   string   |   -  |
| scrollEnabled    | 标题栏是否滑动,默认为false  |   bool   |   -  |
| navigationState    | 获取当前state |   object   |   -  |
| renderScene    |回调，返回一个react元素以呈现为分页的页面。接收包含路由作为参数的对象： |   func  |   -  |
| onIndexChange_Tabs    |回调，返回当前页面的index： |   func  |   -  |
| tabStyle    | tab自定义样式 |   Object  | 无 |
| labelStyle    | label自定义样式 |   Object  | 无 |
| indicatorStyle    | indicator自定义样式 |   Object  | 无 |
