import React from 'react'
import { View } from 'react-native'
import { Marquee, Button } from '../..'

const apiLongText = '其中小米MIXAlpha5G概念手机首创“环绕屏”惊艳众人，屏占比高达180.6%！这款手机支持全网通5G双卡，1亿像素三摄像头，售价19999元！预计在12月底正式开售，目前可到小米之家体验。'
const apiShortText = '科技感给满分。'

export default class MarqueeDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }
    render() {
        const { text } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Marquee text={text} maxWidth={2000} style={{ paddingHorizontal: 10 }} />
                <Button
                    onPress={() => {
                        this.setState({
                            text: apiLongText,
                        })
                    }}
                    style={{ marginTop:20 }}
                >
                    设置为长文字
                </Button>
                <Button
                    onPress={() => {
                        this.setState({
                            text: apiShortText,
                        })
                    }}
                    style={{ marginTop:20 }}
                >
                    设置为短文字
                </Button>
            </View>
        )
    }
}
