import React from 'react'
import { View } from 'react-native'
import { Button, Modal } from '../..'

const testIcon = require('../assets/icon_modal_success.png')

export default class ModalDemo extends React.Component {
    count = 0
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button
                    onPress={() => {
                        Modal.alert('Title','Some Content Text', 'none',[{
                            text:'Confirm',
                            onPress:() => console.log('Pressed'),
                            color: 'red',
                        }])
                    }}
                    type="primary"
                >
                    Alert
                </Button>
                <Button
                    onPress={() => {
                        Modal.toast('Toast', 'warning')
                    }}
                    type="primary"
                    style={{ marginTop: 20 }}
                >
                    Toast
                </Button>
                <Button
                    onPress={() => {
                        Modal.prompt('Title', '', 'default', (input) => console.log(input),
                            {
                                errorHint: (input) => {
                                    if (input.length < 6) return 'Too Short'
                                    return false
                                },
                            })
                    }}
                    type="primary"
                    style={{ marginTop: 20 }}
                >
                    Prompt
                </Button>
                <Button
                    onPress={() => {
                        Modal.showLoading()
                        setTimeout(() => Modal.hideLoading(), 2000)
                    }}
                    type="primary"
                    style={{ marginTop: 20 }}
                >
                    Loading
                </Button>
                <Button
                    onPress={() => {
                        Modal.notice(`${this.count} Item`,`This is the ${this.count}th item`,
                            testIcon, () => console.log('Item Pressed'), () => console.log('Item Dismiss'))
                        this.count++
                    }}
                    type="primary"
                    style={{ marginTop: 20 }}
                >
                    Notice
                </Button>
            </View>
        )
    }
}
