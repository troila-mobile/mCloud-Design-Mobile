import React from 'react'
import { portal } from './provider'
import LoadingView from './LoadingView'

let loadingKey = null
export function showLoading(
    text,
) {
    if (loadingKey) return
    loadingKey = portal.add(
        <LoadingView
            text={text}
        />
    )
}

export function hideLoading() {
    if (loadingKey) {
        portal.remove(loadingKey)
        loadingKey = null
    }
}
