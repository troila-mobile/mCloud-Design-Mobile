import React from 'react'
import { portal } from './provider'
import AlertView from './AlertView'

type Actions = Array<{
    text?:string,
    onPress?:?Function,
    color?:?string,
}>

type Options = {
    closeable?: ?boolean,
    onDialogDismiss?: ?Function,
    buttonDirection?: ?string,
    alertType?: ?string,
    customIcon?: ?any,
    iconStyle?: ?Object,
    neverText?: ?string,
    defaultNeverState?: ?boolean,
    neverKey?: ?string,
}

export default function alert(
    title,
    content,
    icon,
    actions?:Actions,
    options?:Options,
) {
    const alertOptions = options || {}
    const key = portal.add(
        <AlertView
            title={title}
            content={content}
            icon={icon}
            actions={actions}
            closeable={alertOptions.closeable}
            onDialogDismiss={() => {
                portal.remove(key)
                alertOptions.onDialogDismiss && alertOptions.onDialogDismiss()
            }}
            buttonDirection={alertOptions.buttonDirection}
            alertType={alertOptions.alertType}
            customIcon={alertOptions.customIcon}
            iconStyle={alertOptions.iconStyle}
            neverText={alertOptions.neverText}
            defaultNeverState={alertOptions.defaultNeverState}
            neverKey={alertOptions.neverKey}
        />
    )
}
