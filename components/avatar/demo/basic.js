import React from 'react'
import {
    View,
} from 'react-native'
import { Avatar, Button } from '../..'

export default class AvatarDemo extends React.Component {
    state={
        image:{ uri:null },
    }
    render() {
        const { image } = this.state
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
                    source={{ uri:'http://wx3.sinaimg.cn/orj360/006Ja9Ymuj30j60j6q3n.jpg' }}
                    type="white"
                />
                <Avatar
                    source={{ uri:'http://wx3.sinaimg.cn/orj360/006Ja9YYly1fy5iqie8muj30j60j6q3n.jpg' }}
                />
                <Avatar
                    type="white"
                    style={{ marginTop:20 , borderRadius:20 }}
                    source={image}
                />
                <Button
                    onPress={() => {
                        this.setState({
                            image:{ uri:'http://wx3.sinaimg.cn/orj360/006Ja9YYly1fy5iqie8muj30j60j6q3n.jpg' },
                        })
                    }}
                >
onPress

                </Button>
            </View>
        )
    }
}
