import React from 'react'
import { View, StyleSheet } from 'react-native'
import { EmptyView } from '../..'

const network_failedSource = require('../assets/empty_network_failed.png')

export default () => (
    <View style={styles.wrap}>
        <EmptyView type='custom' emptyImage={network_failedSource} onRefresh={() => { }}>
            暂无数据
        </EmptyView>
    </View>
)

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
})
