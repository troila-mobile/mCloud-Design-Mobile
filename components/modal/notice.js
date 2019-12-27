import React from 'react'
import { portal } from './provider'
import NoticeView from './NoticeView'

const key = 'mCloudNoticeViewKey'
let messageQueue = []
export default function notice(
    title,
    content,
    icon,
    onPress,
    onDismiss,
    action,
    id,
) {
    const noticeData = {
        title,
        content,
        icon,
        onPress,
        onDismiss,
        action,
        id,
    }
    const onDialogDismiss = (data) => {
        messageQueue = data
        if (data.length === 0) {
            portal.remove(key)
        }
    }
    const index = messageQueue.findIndex((item) => item.id === id)
    if (index > -1) return
    messageQueue.push(noticeData)
    portal.update(key, <NoticeView
        data={messageQueue}
        onDialogDismiss={onDialogDismiss}
    />)
}

export function clearMessageQueue() {
    messageQueue = []
    portal.remove(key)
}
