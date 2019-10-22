import React from 'react'
import { View, StyleSheet } from 'react-native'

export default class ModalHost extends React.Component {
    state = {
        modals: [],
    }
    mount = (key, children) => {
        this.setState((state) => ({
            modals: [...state.modals, { key, children }],
        }))
    }
    update = (key, children) => {
        this.setState((state) => ({
            modals: state.modals.map((item) => {
                if (item.key === key) {
                    return { ...item,children }
                }
                return item
            }),
        }))
    }
    unmount = (key) => {
        this.setState((state) => ({
            modals:state.modals.filter((item) => item.key !== key),
        }))
    }
    render() {
        const { modals } = this.state
        return modals.map((item, index) => (
            <View
                key={item.key}
                collapsable={false}
                pointerEvents="box-none"
                style={[StyleSheet.absoluteFill, { zIndex: 3000 + index }]}
            >
                {item.children}
            </View>
        ))
    }
}
