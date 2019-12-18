import React from 'react'
import { portal } from './provider'
import LoadingView from './LoadingView'

const loadingKey = 'mCloudLoadingViewKey'
export function showLoading(
    text,
) {
    portal.update(
        loadingKey,
        <LoadingView
            text={text}
        />
    )
}

export function hideLoading() {
    portal.remove(loadingKey)
}
