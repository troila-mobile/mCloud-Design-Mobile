/**
 * Created by sml on 2019/9/20.
 */
import React from 'react'
import { View } from 'react-native'
import { SegmentedControl } from '../..'

export default () => (
    <View
        style={{
            flex:1,
            alignItems:'center',
        }}
    >
        <SegmentedControl style={{ marginTop:20 }} />
        <SegmentedControl
            disabled
            titles={['申请','审批']}
            segments={2}
            onPressMethods={[() => {},() => {}]}
            style={{ marginTop:20 }}
        />
        <SegmentedControl
            titles={['left','right']}
            segments={2}
            onPressMethods={[() => {},() => {}]}
            type='special'
            style={{ marginTop:20 }}
        />
        <SegmentedControl
            titles={['left','center','right']}
            segments={3}
            onPressMethods={[() => {},() => {},() => {}]}
            type='special'
            style={{ marginTop:20,width:300 }}
        />
    </View>
)