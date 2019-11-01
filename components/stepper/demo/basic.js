import React from 'react'
import { View } from 'react-native'
import { Stepper } from '../..'

export default () => (
    <View style={{
        flex: 1,
        alignItems: 'center'
    }}
    >
        <Stepper></Stepper>
        <Stepper
            max={200}
            min={0}
            unit="米"
            step={2}
            defaultValue={60}
            onChange={(e) => {}}
            canInput={true}
        />
    </View>
)
