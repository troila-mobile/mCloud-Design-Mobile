import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { List, Picker } from '../..'
import PropTypes from 'prop-types'

const data = require('./data.json')

const CustomChildren = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <View
            style={{
                height: 36,
                paddingLeft: 15,
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <Text style={{ flex: 1 }}>{props.children}</Text>
            <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>
                {props.extra}
            </Text>
        </View>
    </TouchableOpacity>
)
CustomChildren.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.any,
    extra: PropTypes.any,
}

export default class PopupExample extends React.Component {
    state = {
        data: [],
        value: [],
        pickerValue: [],
    }
    onPress = () => {
        setTimeout(() => {
            this.setState({
                data: [],
            })
        }, 500)
    };
    onChange = (value) => {
        this.setState({ value })
    };
    render() {
        return (
            <View style={{ marginTop: 30 }}>
                <List>
                    <Picker
                        data={data}
                        cols={3}
                        value={this.state.value}
                        onChange={this.onChange}
                    >
                        <List.Item arrow="horizontal">省市选择</List.Item>
                    </Picker>
                    <Picker
                        data={this.state.data}
                        cols={2}
                        value={this.state.value}
                        onChange={this.onChange}
                    >
                        <List.Item arrow="horizontal" onPress={this.onPress}>
                            省市选择(异步加载)
                        </List.Item>
                    </Picker>
                    <Picker
                        title="选择地区"
                        data={[]}
                        cols={2}
                        value={this.state.pickerValue}
                        onChange={(v) => this.setState({ pickerValue: v })}
                        onOk={(v) => this.setState({ pickerValue: v })}
                    >
                        <CustomChildren>Customized children</CustomChildren>
                    </Picker>
                </List>
            </View>
        )
    }
}
