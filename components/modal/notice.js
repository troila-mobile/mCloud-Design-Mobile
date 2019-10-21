import React from 'react'
import { portal } from './provider'
import NoticeView from './NoticeView'

let key = null
let messageQueue = []
export default function notice(
    title,
    content,
    icon,
    onPress,
    onDismiss,
    action,
) {
    const noticeData = {
        title,
        content,
        icon,
        onPress,
        onDismiss,
        action,
    }
    const onDialogDismiss = (data) => {
        messageQueue = data
        if (data.length === 0) {
            portal.remove(key)
            key = null
        }
    }
    messageQueue.push(noticeData)
    if (key) {
        portal.update(key, <NoticeView
            data={messageQueue}
            onDialogDismiss={onDialogDismiss}
        />)
    } else {
        key = portal.add(
            <NoticeView
                data={messageQueue}
                onDialogDismiss={onDialogDismiss}
            />,
        )
    }
}
