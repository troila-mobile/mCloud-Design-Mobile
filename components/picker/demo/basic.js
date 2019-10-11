import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { List, Picker } from '../..'
import PropTypes from 'prop-types'

const dataSource = require('./data.json')

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
天
            </Text>
        </View>
    </TouchableOpacity>
)
CustomChildren.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.any,
    extra: PropTypes.any,
}

export default class extends React.Component {
    state = {
        value: [],
        data: [],
        pickerValue: [],
    }
    onChange = (value) => {
        this.setState({ value })
    };
    render() {
        const {
            value,
            data,
            pickerValue,
        } = this.state
        return (
            <View>
                <List>
                    <Picker
                        data={dataSource}
                        cols={3}
                        value={value}
                        onChange={this.onChange}
                        title="Test-Title"
                    >
                        <List.Item arrow="horizontal">省市选择</List.Item>
                    </Picker>
                    <Picker
                        data={[
                            [{
                                'label': '1',
                                'value': '1',
                            }, {
                                'label': '2',
                                'value': '2',
                            }, {
                                'label': '3',
                                'value': '3',
                            }],
                            [{
                                'label': 'a',
                                'value': 'a',
                            }, {
                                'label': 'b',
                                'value': 'b',
                            }, {
                                'label': 'c',
                                'value': 'c',
                            }],
                        ]}
                        cols={2}
                        value={data}
                        onChange={(e) => {
                            this.setState({ data:e })
                        }}
                        cascade={false}
                    >
                        <List.Item arrow="horizontal">
                            非联动，双选
                        </List.Item>
                    </Picker>
                    <Picker
                        title="选择地区"
                        data={[
                            [{
                                'label': '春',
                                'value': '春',
                            }, {
                                'label': '夏',
                                'value': '夏',
                            }, {
                                'label': '秋',
                                'value': '秋',
                            }, {
                                'label': '冬',
                                'value': '冬',
                            }],
                        ]}
                        cols={1}
                        value={pickerValue}
                        onChange={(v) => this.setState({ pickerValue: v })}
                        onOk={(v) => this.setState({ pickerValue: v })}
                        cascade={false}
                    >
                        <CustomChildren>Customized children</CustomChildren>
                    </Picker>
                </List>
            </View>
        )
    }
}
