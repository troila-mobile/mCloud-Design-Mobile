import React from 'react'
import { View } from 'react-native'
import { Badge } from '../..'

export default () => (
    <View
        style={{
            flex:1,
            alignItems:'center',
            backgroundColor:'#e6e6e6'
        }}
    >
        <Badge text="文本" style={{ marginBottom:4 }} />
        <Badge text="文本" type="redPoint" style={{ marginBottom:4 }} />
        <Badge text="文本" type="number" count={10} style={{ marginBottom:4 }} />
        <Badge text="文本" type="number" count={100} style={{ marginBottom:4 }} />
        <Badge text="文本" type="new" style={{ marginBottom:4 }} />

    </View>
)