import React from 'react'
import {
    TouchableOpacity,
    Text,
} from 'react-native'
import ActionSheet from '../index'

export default class extends React.Component {
    state={
        options:['text','value','aaaa','1','2','3','4'],
    }
    render() {
        const {
            options,
        } = this.state
        return (
            <TouchableOpacity
                style={{
                    margin:100,
                }}
                onPress={
                    () => {
                        this.setState({
                            options:['text','value'],
                        },() => this.actionSheet.show())
                    }
                }
            >
                <Text>show</Text>
                <ActionSheet
                    ref={(e) => this.actionSheet = e}
                    options={options}
                    disabledIndexArrary={[5]}
                    title="zhe是标题dfshdfshuhgiuhdubhdsfiubhdsiufhb"
                    // showCancel={false}
                />
            </TouchableOpacity>
        )
    }
}
