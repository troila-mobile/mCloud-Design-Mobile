---
id: Avatar
title: Avatar
sidebar_label: Avatar
---

Avatar

## Basic Example:
```SnackPlayer name=avatar-simple
import React from 'react'
import {
    View,
} from 'react-native'
import { Avatar } from 'mcloud-mobile'

export default class AvatarDemo extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex:1,
                    flexDirection:'column',
                    marginTop:20,
                    marginLeft:20,
                }}
            >
                <Avatar
                    source={{ uri:'http://wx3.sinaimg.cn/orj360/006Ja9YYly1fy5iqie8muj30j60j6q3n.jpg' }}
                    type="white"
                />
                <Avatar
                    source={{ uri:'http://wx3.sinaimg.cn/orj360/006Ja9YYly1fy5iqie8muj30j60j6q3n.jpg' }}
                />
                <Avatar
                    type="white"
                />
            </View>
        )
    }
}

```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| source    | 头像资源链接 |   object   |   无  |
| size   |   头像尺寸   |   number   |    70  |
| styles   |   样式集合  |   object   |   无    |
| type   |   头像边框样式，可选值（'normal', 'white'）   |   string    |    'normal'    |
| defaultAvatar   |  默认头像   |   object   |   require('./assets/default.png')  |
