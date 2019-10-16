import React from 'react'
import { portal } from './provider'
import PromptView from './PromptView'

type Options = {
    negativeText?: ?string,
    positiveText?: ?string,
    invalidCondition?: ?Function,
    maxLength?: ?number,
    placeholder?: ?string,
    errorHint?: ?Function,
}

export default function prompt(
    title,
    content,
    defaultValue,
    onConfirm,
    options?:Options,
) {
    const promptOptions = options || {}
    const key = portal.add(
        <PromptView
            title={title}
            content={content}
            defaultValue={defaultValue}
            onDialogDismiss={() => {
                portal.remove(key)
            }}
            onConfirm={onConfirm}
            negativeText={promptOptions.negativeText}
            positiveText={promptOptions.positiveText}
            invalidCondition={promptOptions.invalidCondition}
            maxLength={promptOptions.maxLength}
            placeholder={promptOptions.placeholder}
            errorHint={promptOptions.errorHint}
        />
    )
}
