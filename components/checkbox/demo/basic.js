import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Checkbox } from '../..'

const { CheckboxItem } = Checkbox

export default () => {
    const [checked, onChange] = useState(true)
    const [itemChecked, onItemChange] = useState(true)
    return (
        <View style={styles.warp}>
            <Text style={styles.boldTitle}>
                Checkbox
            </Text>
            <Text style={styles.title}>
                默认未点击
            </Text>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.title}>
                勾选状态
            </Text>
            <Checkbox
                checked={checked}
                style={styles.checkbox}
                onChange={(e) => {
                    onChange(e.checked)
                }}
            />
            <Text style={styles.title}>
                选中不可点击状态
            </Text>
            <Checkbox style={styles.checkbox} checked disabled />
            <Text style={styles.title}>
                不可点击状态
            </Text>
            <Checkbox style={styles.checkbox} disabled />
            <Text style={styles.boldTitle}>
                CheckboxItem
            </Text>
            <CheckboxItem>
                选项1（默认未点击）
            </CheckboxItem>
            <CheckboxItem
                checked={itemChecked}
                onChange={(e) => {
                    onItemChange(e.checked)
                }}
            >
                选项2（勾选状态）
            </CheckboxItem>
            <CheckboxItem
                checked
                disabled
            >
                选项3（选中不可点状态）
            </CheckboxItem>
            <CheckboxItem
                disabled
                hideLine
            >
                选项3（不可点状态）
            </CheckboxItem>
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
    checkbox: {
        marginHorizontal: 15,
        marginVertical: 5,
    },
    boldTitle: {
        fontSize: 16,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 10,
        fontWeight: '500',
    },
})
