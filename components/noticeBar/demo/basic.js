import React from 'react'
import { View } from 'react-native'
import { NoticeBar } from '../..'

const apiText = 'Some very long text needed scroll to view all of them and loop over.'

export default class NoticeBarDemo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NoticeBar text={apiText} />
                <NoticeBar
                    text={apiText}
                    style={{ marginTop: 20 }}
                    closeType="close"
                />
                <NoticeBar
                    text={apiText}
                    style={{ marginTop: 20 }}
                    closeType="never"
                    neverShowKey="neverShowApiText"
                />
                <NoticeBar
                    text={apiText}
                    marquee={true}
                    style={{ marginTop: 20 }}
                    closeType="close"
                />
            </View>
        )
    }
}
