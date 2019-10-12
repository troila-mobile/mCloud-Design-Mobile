import React from 'react'
import { View } from 'react-native'
import { DatePicker, List } from '../..'


export default class extends React.Component {
    state = {
        value: undefined,
    }
    onChange = (value) => {
        this.setState({ value })
    }
    render() {
        const {
            value,
        } = this.state
        return (
            <View>
                <List>
                    <DatePicker
                        value={value}
                        mode="date"
                        defaultDate={new Date()}
                        minDate={new Date(2015, 7, 6)}
                        maxDate={new Date(2026, 11, 3)}
                        onChange={this.onChange}
                        format="YYYY-MM-DD"
                        title="请选择日期"
                    >
                        <List.Item arrow="horizontal">Select Date</List.Item>
                    </DatePicker>
                </List>
            </View>
        )
    }
}
