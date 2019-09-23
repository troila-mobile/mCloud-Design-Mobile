import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from '../..'

export default () => {
    const [value, onChange] = useState('打卡助手')
    return (
        <View style={styles.warp}>
            <Text style={styles.boldTitle}>
                圆角搜索框
            </Text>
            <Text style={styles.title}>
                未输入状态
            </Text>
            <SearchBar type="radius" placeholder="搜索" />
            <Text style={styles.title}>
                初始值
            </Text>
            <SearchBar type="radius" defaultValue="打卡助手" />
            <Text style={styles.boldTitle}>
                通栏搜索框
            </Text>
            <Text style={styles.title}>
                初始值
            </Text>
            <SearchBar defaultValue="打卡助手" />
            <Text style={styles.title}>
                受控
            </Text>
            <SearchBar
                value={value}
                placeholder="搜索"
                onSubmit={(val) => console.log(val)}
                onClear={() => onChange('')}
                onChange={(val) => onChange(val)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    warp: {
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
