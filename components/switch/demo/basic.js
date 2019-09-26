import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Switch } from '../..'

const { SwitchItem } = Switch

export default () => {
    const [checked, onChange] = useState(false)
    return (
        <View style={styles.wrap}>
            <Text style={styles.boldTitle}>
                Switch
            </Text>
            <Text style={styles.title}>受控</Text>
            <Switch
                checked={checked}
                onChange={() => onChange(!checked)}
                style={styles.switch}
            />
            <Text style={styles.title}>默认选中</Text>
            <Switch
                checked
                style={styles.switch}
            />
            <Text style={styles.title}>不可选状态</Text>
            <Switch
                disabled
                hideLine
                style={styles.switch}
            />
            <Text style={styles.boldTitle}>
                SwitchItem
            </Text>
            <SwitchItem
                checked={checked}
                onChange={() => onChange(!checked)}
            >
                文本1(受控)
            </SwitchItem>
            <SwitchItem
                checked
            >
                文本2(默认选中)
            </SwitchItem>
            <SwitchItem
                disabled
                hideLine
            >
                <Text style={styles.desc}>文本3(不可选状态)</Text>
            </SwitchItem>
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
    desc: {
        fontSize: 14,
        color: '#999',
    },
    switch: {
        marginBottom: 10,
        marginLeft: 15,
    },
})
