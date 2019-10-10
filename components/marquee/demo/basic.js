import React from 'react'
import { View } from 'react-native'
import { Marquee, Button } from '../..'

const apiLongText = 'Some very long text needed scroll to view all of them and loop over.'
const apiShortText = 'Short text'

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
                    Long Text
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
