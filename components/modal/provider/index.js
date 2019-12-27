import React from 'react'
import { View, DeviceEventEmitter, NativeEventEmitter } from 'react-native'
import PropTypes from 'prop-types'
import ModalHost from './ModalHost'

const TopViewEventEmitter = DeviceEventEmitter || new NativeEventEmitter()
const addType = 'MODALS_ADD_TO_TOP_CONTAINER'
const removeType = 'MODALS_REMOVE_FROM_TOP_CONTAINER'
const updateType = 'MODALS_UPDATE_ON_TOP_CONTAINER'
class Portal {
    nextKey = 10000
    add = (children, _key) => {
        const key = _key || this.nextKey++
        TopViewEventEmitter.emit(addType, children, key)
        return key
    }
    update = (key, children) => {
        TopViewEventEmitter.emit(updateType, key, children)
    }
    remove = (key) => {
        TopViewEventEmitter.emit(removeType, key)
    }
}
export const portal = new Portal()
export default class Provider extends React.Component {
    static propTypes = {
        children: PropTypes.any,
    }
    static defaultProps = {
        children: null,
    }
    _nextKey = 0
    _queue = []
    componentDidMount() {
        TopViewEventEmitter.addListener(addType, this._mount)
        TopViewEventEmitter.addListener(removeType, this._unmount)
        TopViewEventEmitter.addListener(updateType, this._update)
        while (this._queue.length && this._host) {
            const action = this._queue.pop()
            if (action) {
                switch (action.type) {
                case 'mount':
                    this._host.mount(action.key, action.children)
                    break
                case 'update':
                    this._host.update(action.key,action.children)
                    break
                case 'unmount':
                    this._host.unmount(action.key)
                    break
                default:
                }
            }
        }
    }
    componentWillUnmount() {
        TopViewEventEmitter.removeListener(addType, this._mount)
        TopViewEventEmitter.removeListener(removeType, this._unmount)
        TopViewEventEmitter.removeListener(updateType, this._update)
    }
    _setHost = (view) => {
        this._host = view
    }
    _mount = (children, _key) => {
        const key = _key || this._nextKey++
        if (this._host) {
            this._host.mount(key, children)
        } else {
            this._queue.push({ type:'mount', key , children })
        }
    }
    _update = (key, children) => {
        if (this._host) {
            this._host.update(key, children)
        } else {
            const update = { type:'mount', key, children }
            const index = this._queue.findIndex((item) => item.key === key )
            if (index > -1) {
                this._queue[index] = update
            } else {
                this._queue.push(update)
            }
        }
    }
    _unmount = (key) => {
        if (this._host) {
            this._host.unmount(key)
        } else {
            this._queue.push({ type:'unmount', key })
        }
    }
    render() {
        const { children } = this.props
        return (
            <View style={{ flex:1 }}>
                {children}
                <ModalHost ref={this._setHost} />
            </View>
        )
    }
}
