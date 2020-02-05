import React from 'react'
import { View } from 'react-native'
import {
    ActionSheet,
    Button,
} from '../..'

export default class extends React.Component {
    state={
        options: ['text',
            'zhe是标题dfshdfshuhgceighbcdsbacvbvbqebdvashbjbheurvudvbehlvwdvfwet',
            'value', 'value', 'value', 'value', 'value', 'value', 'value'],
        checkedIndex: 1,
    }
    render() {
        const {
            options,
            checkedIndex,
        } = this.state
        return (
            <>
                <Button
                    onPress={() => this.actionSheet.show()}
                >
                    show
                </Button>
                <ActionSheet
                    ref={(e) => this.actionSheet = e}
                    options={options}
                    disabledIndexArrary={[5]}
                    checkedIndex={checkedIndex}
                    title="zhe是标题dfshdfshuhgceighbcdsbacvbvbqebdvashbjbheurvudvbehlvwdvfwet"
                    onPress={(index) => {
                        this.setState({
                            checkedIndex: index,
                        })
                    }}
                    numberOfLines={4}
                    styles={{ buttonStyle: { height: 90 } }}
                />
            </>
        )
    }
}
