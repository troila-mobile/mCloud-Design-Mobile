import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native'
import { List, Switch, Checkbox } from '../..'

const { Item } = List
const { Brief } = Item
const uri = 'https://github.com/troila-mobile/mCloud-Design-Mobile/blob/master/example/logo.png'

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
                            <Image
                                style={styles.logo}
                                source={{
                                    uri,
                                }}
                            />
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
