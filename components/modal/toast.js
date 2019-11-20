import React from 'react'
import { portal } from './provider'
import ToastView from './ToastView'

export default function toast(
    text,
    icon,
    duration,
) {
    const key = portal.add(
        <ToastView
            text={text}
            duration={duration}
            icon={icon}
            onDismiss={() => {
                portal.remove(key)
            }}
        />
    )
}
