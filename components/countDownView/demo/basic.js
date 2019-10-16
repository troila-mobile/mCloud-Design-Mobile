import React from 'react'
import { View, ScrollView } from 'react-native'
import CountDownView from '../index'

const ViewTop = () => (
    <View style={{ marginTop: 10 }} />
)

export default () => (
    <ScrollView style={{ flex: 1 }}>
        <ViewTop />
        <CountDownView />
        <ViewTop />
    </ScrollView>
)
