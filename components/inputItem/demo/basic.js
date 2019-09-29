import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { InputItem } from '../..'

export default () => {
    const [value, onChange] = useState('')
    const [title, onTitleChange] = useState('打卡助手')
    const [bankcard, bankcardChange] = useState('')
    const [phone, phoneChange] = useState('')
    const [password, passwordChange] = useState('')
    const [number, numberChange] = useState('')
    const [leftValue, leftValueChange] = useState('')
    return (
        <View style={styles.wrap}>
            <Text style={styles.boldTitle}>
                InputItem
            </Text>
            <Text style={styles.title}>
                默认
            </Text>
            <InputItem
                value={value}
                onChange={(text) => {
                    onChange(text)
                }}
                placeholder="请输入标题"
            >
                标题
            </InputItem>
            <InputItem
                value={title}
                onChange={(text) => {
                    onTitleChange(text)
                }}
                placeholder="请输入标题"
            >
                标题
            </InputItem>
            <Text style={styles.title}>
                格式
            </Text>
            <InputItem
                type="bankCard"
                value={bankcard}
                onChange={(text) => {
                    bankcardChange(text)
                }}
                placeholder="bankCard"
            >
                银行卡
            </InputItem>
            <InputItem
                type="phone"
                value={phone}
                onChange={(text) => {
                    phoneChange(text)
                }}
                placeholder="phone"
            >
                手机号
            </InputItem>
            <InputItem
                type="password"
                value={password}
                onChange={(text) => {
                    passwordChange(text)
                }}
                placeholder="password"
            >
                密码
            </InputItem>
            <InputItem
                type="number"
                value={number}
                onChange={(text) => {
                    numberChange(text)
                }}
                placeholder="number"
            >
                数字
            </InputItem>
            <Text style={styles.title}>
                输入内容在左侧的显示效果
            </Text>
            <InputItem
                clear
                textAlign="left"
                placeholder="请输入内容"
                value={leftValue}
                onChange={(text) => {
                    leftValueChange(text)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    title: {
        fontSize: 14,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 15,
    },
    boldTitle: {
        fontSize: 16,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 10,
        fontWeight: '500',
    },
})
