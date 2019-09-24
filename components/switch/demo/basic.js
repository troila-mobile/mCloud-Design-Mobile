import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Switch } from '../..'

export default () => (
    <View style={styles.warp}>
        <Text style={styles.title}>
            Switch
        </Text>
        <Switch
            checked
            style={styles.switch}
        />
    </View>
)

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
    switch: {
        marginLeft: 15,
    },
})
