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
            backgroundColor:'#e6e6e6'
        }}
    >
        <SegmentedControl leftText='申请' rightText='审批' style={{ marginTop:20 }} />
        <SegmentedControl disabled leftText='申请' rightText='审批' style={{ marginTop:20 }} />
        <SegmentedControl
            leftText='今日遭到榜'
            rightText='昨日工时榜'
            type='special'
            style={{ marginTop:20,width:300,height:40 }}
        />
    </View>
)