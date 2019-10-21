---
id: Picker
title: Picker
sidebar_label: Picker
---

- 尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。
- DatePicker 是 Picker 的特定模式。

## Basic Example:

```SnackPlayer name=button-simple
import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { List, Picker } from 'mcloud-mobile'
import PropTypes from 'prop-types'

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

const dataSource = [
  {
      "label": "北京市",
      "value": "11",
      "children": [
          {
              "label": "市辖区",
              "value": "1101",
              "children": [
                  {
                      "label": "东城区",
                      "value": "110101"
                  },
                  {
                      "label": "西城区",
                      "value": "110102"
                  },
                  {
                      "label": "朝阳区",
                      "value": "110105"
                  },
                  {
                      "label": "丰台区",
                      "value": "110106"
                  },
                  {
                      "label": "石景山区",
                      "value": "110107"
                  },
                  {
                      "label": "海淀区",
                      "value": "110108"
                  },
                  {
                      "label": "门头沟区",
                      "value": "110109"
                  },
                  {
                      "label": "房山区",
                      "value": "110111"
                  },
                  {
                      "label": "通州区",
                      "value": "110112"
                  },
                  {
                      "label": "顺义区",
                      "value": "110113"
                  },
                  {
                      "label": "昌平区",
                      "value": "110114"
                  },
                  {
                      "label": "大兴区",
                      "value": "110115"
                  },
                  {
                      "label": "怀柔区",
                      "value": "110116"
                  },
                  {
                      "label": "平谷区",
                      "value": "110117"
                  },
                  {
                      "label": "密云区",
                      "value": "110118"
                  },
                  {
                      "label": "延庆区",
                      "value": "110119"
                  }
              ]
          }
      ]
  },
  {
      "label": "天津市",
      "value": "12",
      "children": [
          {
              "label": "市辖区",
              "value": "1201",
              "children": [
                  {
                      "label": "和平区",
                      "value": "120101"
                  },
                  {
                      "label": "河东区",
                      "value": "120102"
                  },
                  {
                      "label": "河西区",
                      "value": "120103"
                  },
                  {
                      "label": "南开区",
                      "value": "120104"
                  },
                  {
                      "label": "河北区",
                      "value": "120105"
                  },
                  {
                      "label": "红桥区",
                      "value": "120106"
                  },
                  {
                      "label": "东丽区",
                      "value": "120110"
                  },
                  {
                      "label": "西青区",
                      "value": "120111"
                  },
                  {
                      "label": "津南区",
                      "value": "120112"
                  },
                  {
                      "label": "北辰区",
                      "value": "120113"
                  },
                  {
                      "label": "武清区",
                      "value": "120114"
                  },
                  {
                      "label": "宝坻区",
                      "value": "120115"
                  },
                  {
                      "label": "滨海新区",
                      "value": "120116"
                  },
                  {
                      "label": "宁河区",
                      "value": "120117"
                  },
                  {
                      "label": "静海区",
                      "value": "120118"
                  },
                  {
                      "label": "蓟州区",
                      "value": "120119"
                  }
              ]
          }
      ]
  },
]

```

## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data    | 数据源        | `Array<{value, label, children: Array}>` |   -  |
| value   | 值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层value    | Array  | - |
| format  | 格式化选中值的函数  | (labels: string[]): any | `(labels) => { return labels.join(','); } ` |
| cols    | 列数        | Number |  `3`  |
| onChange | 选中后的回调 | (val): void | - |
| onPickerChange | 每列数据选择变化后的回调函数   | (val): void | - |
| onVisibleChange  | 当显隐状态变化时回调函数    | (visible: bool): void |  -   |
| itemStyle | 每列样式  |   Object   | -  |
| indicatorStyle  | indicator 样式 | Object | - |
| children| 通常是 `List.Item` | Object |  `List.Item`  |
| okText  | 选中的文案 | String |  `确定`  |
| dismissText  | 取消选中的文案 | String |  `取消`  |
| onOk  | 点击选中时执行的回调 | (val): void  |  无 |
| onDismiss  | 点击取消时执行的回调 | (): void  |  无  |
| title  | 大标题 | String | - |
| extra  | Picker children 建议是 `List.Item`, 如果不是，需要是自定义组件(组件内需处理`onClick`/`extra`属性) | String |  `请选择`  |
| disabled  | 是否不可用 | Boolean | false |
| cascade  | 是否联动 | Boolean | true |