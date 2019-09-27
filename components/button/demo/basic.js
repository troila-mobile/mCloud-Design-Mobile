import React from 'react'
import { View,ScrollView } from 'react-native'
import { Button } from '../..'

const ViewTop = () => (
    <View style={{ marginTop: 10 }} />
)

const margin = { marginHorizontal: 15 }

export default () => (
    <ScrollView style={{ flex: 1 }}>
        <ViewTop />
        <Button
            layout="radius"
            type="primary"
            style={margin}
        >
            primary
        </Button>
        <ViewTop />
        <Button
            layout="radius"
            type="primary"
            style={margin}
            disabled
        >
            disabled primary
        </Button>
        <ViewTop />
        <Button
            type="ghost"
            style={margin}
            layout="radius"
        >
            ghost
        </Button>
        <ViewTop />
        <Button
            type="ghost"
            style={margin}
            layout="radius"
            disabled
        >
            disabled ghost
        </Button>
        <ViewTop />
        <Button
            layout="radius"
            type="primary"
            style={margin}
            styles={{
                primaryRaw:{
                    backgroundColor: '#00C482',
                    borderColor:'#00C482',
                },
                primaryHighlight: {
                    backgroundColor: '#0BA15C',
                    borderColor: '#0BA15C',
                },
            }}
        >
            primary custom color
        </Button>
        <ViewTop />
        <Button
            type="warning"
            style={margin}
            layout="radius"
        >
            warning
        </Button>
        <ViewTop />
        <Button
            type="warning"
            style={margin}
            layout="radius"
            disabled
        >
            disabled warning
        </Button>
        <ViewTop />
        <Button disabled>default disabled</Button>
        <ViewTop />
        <Button type="primary">primary</Button>
        <ViewTop />
        <Button type="primary" disabled>
            primary disabled
        </Button>
        <ViewTop />
        <Button type="warning" disabled>
            warning disabled
        </Button>
        <ViewTop />
        <Button loading>loading button</Button>
        <ViewTop />
        <Button activeStyle={false}>无点击反馈</Button>
        <ViewTop />
        <Button activeStyle={{ backgroundColor: 'red' }}>
            custom feedback style
        </Button>
        <ViewTop />
        <Button type="ghost" disabled>
            ghost disabled
        </Button>
        <ViewTop />
        <Button type="ghost" size="small">
            ghost
        </Button>
        <ViewTop />
        <Button
            layout="radius"
            style={margin}
        >
            default
        </Button>
    </ScrollView>
)
