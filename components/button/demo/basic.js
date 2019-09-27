import React from 'react'
import { View } from 'react-native'
import { Button } from '../..'

const ViewTop = () => (
    <View style={{ marginTop: 10 }} />
)

export default () => (
    <View style={{ flex: 1 }}>
        <Button>default</Button>
        <Button disabled>default disabled</Button>

        <Button type="primary">primary</Button>
        <Button type="primary" disabled>
            primary disabled
        </Button>

        <Button type="warning">warning</Button>
        <Button type="warning" disabled>
            warning disabled
        </Button>

        <Button loading>loading button</Button>

        <Button activeStyle={false}>无点击反馈</Button>
        <Button activeStyle={{ backgroundColor: 'red' }}>
            custom feedback style
        </Button>


        <Button type="ghost">ghost</Button>
        <Button type="ghost" disabled>
            ghost disabled
        </Button>
        <Button type="ghost" size="small">
            ghost
        </Button>
        <ViewTop />
        <Button
            layout="radius"
            style={{ marginHorizontal: 15 }}
        >
            default
        </Button>
    </View>
)
