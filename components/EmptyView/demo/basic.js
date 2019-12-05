import React from 'react'
import { View, StyleSheet } from 'react-native'
import { EmptyView } from '../..'

const network_failedSource = require('../assets/empty_network_failed.png')

export default () => (
    <View style={styles.wrap}>
        <EmptyView type='network_failed' emptyImage={network_failedSource} onRefresh={() => { }}>
            很抱歉，加载失败了~
        </EmptyView>
    </View>
)

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#F3F5F8',
    },
})
