import React from 'react'
import { View,Dimensions } from 'react-native'
import { Card } from '../..'



export default () => (
    <View
        style={{
            flex:1,
            alignItems:'center',
            backgroundColor:'#e6e6e6'
        }}
    >
        <View
            style={{
                backgroundColor:'#fff'
            }}
        >
            <View style={{
                backgroundColor:'#DEDFE0',
                width:Dimensions.get('window').width-15,
                marginLeft:15,
                height:1
            }}
            />
            <Card
                type='vertical'
                title='这是标题这是标题这是标题这是标题这是标题这是标题这是标题'
                content='这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是
              内容这是内容这是内容这是内容这是内容这是内容这是内容'
            />
            <View style={{
                backgroundColor:'#DEDFE0',
                width:Dimensions.get('window').width-15,
                marginLeft:15,
                height:1
            }}
            />
            <Card
                type='vertical'
                title='这是标题这是标题这是标题这是标题这是标题这是标题这是标题'
                titleNumberOfLines={1}
                content='这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是
              内容这是内容这是内容这是内容这是内容这是内容这是内容'
                image={{
                    uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569822013704&di=1f'
                + 'aef74531d6c1ea1ccf2962cea5b166&imgtype=0&src=http%3A%2F%2Fpic21.nipic.com%2F2012'
                + '0519%2F9975192_125719517000_2.jpg'
                }}
            />
        </View>
    </View>
)