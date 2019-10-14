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
            </View>
        )
    }
}
