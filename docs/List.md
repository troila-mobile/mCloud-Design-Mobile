---
id: List
title: List
sidebar_label: List
---

列表

## Basic Example

```SnackPlayer name=list-simple
import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native'
import { List, Switch, Checkbox } from 'mcloud-mobile'

const { Item } = List
const { Brief } = Item

const data = [
    {
        value: 1,
        label: '选项A',
    },
    {
        value: 2,
        label: '选项B',
    },
]

export default () => {
    const [checkedValue, onChange] = useState([1])
    const onAllChecked = () => {
        if (checkedValue.length === data.length) {
            onChange([])
        } else {
            const newValue = []
            data.map((item) => newValue.push(item.value))
            onChange(newValue)
        }
    }
    let SwitchRef
    return (
        <View style={styles.wrap}>
            <ScrollView>
                <List
                    renderHeader="Normal Header"
                    renderFooter="Normal Footer"
                >
                    <Item>
                        标题
                    </Item>
                </List>
                <List renderHeader="Arrow Header">
                    <Item arrow="horizontal">
                        标题
                    </Item>
                    <Item arrow="up">
                        标题
                    </Item>
                    <Item arrow="down">
                        标题
                    </Item>
                    <Item extra="详细信息" arrow="horizontal">
                        标题
                    </Item>
                </List>
                <List renderHeader="Switch Header">
                    <Item
                        extra={(
                            <Switch
                                checked={true}
                                ref={(e) => {
                                    SwitchRef = e
                                }}
                            />
                        )}
                        onPress={() => SwitchRef && SwitchRef.onToggle()}
                    >
                        标题
                    </Item>
                </List>
                <List renderHeader="Extra Header">
                    <Item extra="默认暗提示">
                        标题
                    </Item>
                    <Item
                        extra="自定义提示颜色"
                        styles={{
                            Extra: {
                                color: 'red',
                            },
                        }}
                    >
                        标题
                    </Item>
                </List>
                <List renderHeader="Brief Header">
                    <Item extra="详细信息" arrow="horizontal">
                        标题
                        <Brief>副标题  副标题  副标题  副标题  副标题  副标题</Brief>
                    </Item>
                    <Item
                        extra="详细信息"
                        arrow="horizontal"
                        thumb={(
                            <Image style={styles.logo} source={{ uri: 'https://github.com/troila-mobile/mCloud-Design-Mobile/blob/master/example/logo.png' }} />
                        )}
                    >
                        标题
                        <Brief>副标题  副标题  副标题  副标题  副标题  副标题</Brief>
                    </Item>
                </List>
                <List renderHeader="List Item Checkbox Header">
                    <Item
                        thumb={(
                            <Checkbox
                                checked={checkedValue.length === data.length}
                                style={styles.thumbAll}
                                onChange={onAllChecked}
                            />
                        )}
                        onPress={onAllChecked}
                    >
                        全选
                    </Item>
                    {
                        data.map((item, index) => {
                            const onPress = () => {
                                const checked = checkedValue.indexOf(item.value)
                                if (checked > -1) {
                                    const newValue = [...checkedValue]
                                    newValue.splice(checked, 1)
                                    onChange(newValue)
                                } else {
                                    onChange([
                                        ...checkedValue,
                                        item.value,
                                    ])
                                }
                            }
                            return (
                                <Item
                                    key={item.value}
                                    thumb={(
                                        <Checkbox
                                            checked={checkedValue.includes(item.value)}
                                            style={styles.thumbStyle}
                                            onChange={onPress}
                                        />
                                    )}
                                    onPress={onPress}
                                    hideLine={index === data.length - 1}
                                >
                                    {item.label}
                                </Item>
                            )
                        })
                    }
                </List>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    thumbAll: {
        marginRight: 10,
    },
    thumbStyle: {
        marginLeft: 20,
        marginRight: 10,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
})
```


## List Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| renderHeader    | list header |   String/func/React.Element  | 无 |
| renderFooter    | list footer |   String/func/React.Element  | 无 |


## List.Item Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| arrow    | 箭头方向(右,上,下), 可选 `horizontal` `up` `down` |   String  | 无 |
| thumb    | 缩略图(当为 string 类型时作为 img src) |   String/React.Element  | 无 |
| hideLine | 是否隐藏下面的线 | Boolean   |  false |
| numberOfLines    | 行数 |   number  | 1 |
| extra    | 右边内容 |   String/React.Element  | 无 |


## Item.Brief Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| numberOfLines    | 行数 |   number  | 1 |