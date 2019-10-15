import React from 'react'
import { View, ScrollView } from 'react-native'
import ActivityIndicator from '../index'

const ViewTop = () => (
    <View style={{ marginTop: 10 }} />
)

export default () => (
    <ScrollView style={{ flex: 1 }}>
        <ViewTop />
        <ActivityIndicator />
        <ViewTop />
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            width: 89,
            height: 89,
            backgroundColor: '#2B2F42',
        }}
        >
            <ActivityIndicator color="white" />
        </View>
        <ViewTop />
        <ActivityIndicator size="large" />
        <ViewTop />
        <ActivityIndicator text="正在加载" />
        <ViewTop />
        <ActivityIndicator toast text="正在加载" textStyle={{ color: 'gray' }} />
        <ViewTop />
        <View style={{ height: 300 }}>
            <ActivityIndicator
                toast
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: 10,
                }}
                size="large"
            />
        </View>
    </ScrollView>
)
