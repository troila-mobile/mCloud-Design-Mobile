import React from 'react'
import { View } from 'react-native'
import { Button, Modal } from '../..'

export default class ModalDemo extends React.Component {
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
            </View>
        )
    }
}
