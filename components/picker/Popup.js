import React from 'react'
import {
    Text, TouchableOpacity, View, Modal,
} from 'react-native'
import PopupMixin from './PopupMixin'
import PropTypes from 'prop-types'

const getModal = (props, visible, {
    getContent, hide, onDismiss, onOk,
}) => {
    const {
        styles, title, okText, dismissText,
    } = props

    const titleEl = typeof title === 'string' ? (
        <Text style={[styles.title]}>{title}</Text>
    ) : (
        title
    )
    const okEl = typeof okText === 'string' ? (
        <Text style={[styles.actionText, styles.okText]}>{okText}</Text>
    ) : (
        okText
    )
    const dismissEl = typeof dismissText === 'string' ? (
        <Text style={[styles.actionText, styles.dismissText]}>{dismissText}</Text>
    ) : (
        dismissText
    )
    const {
        actionTextActiveOpacity,
    } = props
    return (
        <Modal
            animationType="fade"
            wrapStyle={styles.modal}
            visible={visible}
            onClose={hide}
            transparent={true}
        >
            <View style={styles.modelContainer}>
                <Text
                    style={styles.topView}
                    onPress={onDismiss}
                />
                <View style={[styles.header]}>
                    <TouchableOpacity
                        onPress={onDismiss}
                        style={[styles.headerItem, styles.leftHeaderItem]}
                        activeOpacity={actionTextActiveOpacity}
                    >
                        {dismissEl}
                    </TouchableOpacity>
                    <View style={[styles.headerItem, styles.centerHeaderItem]}>{titleEl}</View>
                    <TouchableOpacity
                        onPress={onOk}
                        style={[styles.headerItem, styles.rightHeaderItem]}
                        activeOpacity={actionTextActiveOpacity}
                    >
                        {okEl}
                    </TouchableOpacity>
                </View>
                {getContent()}
            </View>
        </Modal>
    )
}

getModal.propTypes = {
    styles: PropTypes.object,
    title: PropTypes.string,
    okText: PropTypes.string,
    dismissText: PropTypes.string,
    actionTextActiveOpacity: PropTypes.number,
}

export default PopupMixin(getModal, {
    actionTextActiveOpacity: 0.7,
    triggerType: 'onPress',
    styles: {},
    WrapComponent: View,
})
