import React from 'react'
import {
    View,
} from 'react-native'
import Avatar from '../index'

export default class AvatarDemo extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex:1,
                    flexDirection:'column',
                    marginTop:20,
                    marginLeft:20,
                }}
            >
                <Avatar
                    source={{ uri:'http://wx3.sinaimg.cn/orj360/006Ja9YYly1fy5iqie8muj30j60j6q3n.jpg' }}
                    type="white"
                    web={true}
                />
                <Avatar
                    source={{ uri:'http://wx3.sinaimg.cn/orj360/006Ja9YYly1fy5iqie8muj30j60j6q3n.jpg' }}
                    web={true}
                />
                <Avatar
                    type="white"
                    web={true}
                />
            </View>
        )
    }
}
