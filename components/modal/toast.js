import React from 'react'
import { portal } from './provider'
import ToastView from './ToastView'

let showing = false
export default function toast(
    text,
    icon,
    duration,
) {
    if (showing) return
    showing = true
    const key = portal.add(
        <ToastView
            text={text}
            duration={duration}
            icon={icon}
            onDismiss={() => {
                portal.remove(key)
                showing = false
            }}
        />
    )
}
