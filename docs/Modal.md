---
id: Modal
title: Modal
sidebar_label: Modal
---

滚动文字组件

## Basic Example:

```SnackPlayer name=modal-simple
import React from 'react'
import { View } from 'react-native'
import { Button, Modal } from 'mcloud-mobile'

export default class ModalDemo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button
                    onPress={() => {
                        Modal.alert('Title','Some Content Text', 'none',[{
                            text:'Confirm',
                            onPress:() => console.log('Pressed'),
                            color: 'red',
                        }])
                    }}
                    type="primary"
                >
                    Alert
                </Button>
                <Button
                    onPress={() => {
                        Modal.toast('Toast', 'warning')
                    }}
                    type="primary"
                    style={{ marginTop: 20 }}
                >
                    Toast
                </Button>
                <Button
                    onPress={() => {
                        Modal.prompt('Title', '', 'default', (input) => console.log(input),
                            {
                                errorHint: (input) => {
                                    if (input.length < 6) return 'Too Short'
                                    return false
                                },
                            })
                    }}
                    type="primary"
                    style={{ marginTop: 20 }}
                >
                    Prompt
                </Button>
                <Button
                    onPress={() => {
                        Modal.showLoading()
                        setTimeout(() => Modal.hideLoading(), 2000)
                    }}
                    type="primary"
                    style={{ marginTop: 20 }}
                >
                    Loading
                </Button>
            </View>
        )
    }
}
```

## Method

### alert

```
static alert(title, content?, icon?, actions?, options?)
```

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| title    | 标题  |   string   |   ''  |
| content    | 内容 | string | ''|
| icon  | 图标 enum('none','error','success','warning','custom') | string | 'none' |
| actions   | 操作按钮  | array<action> |    [{text:'确定'}]  |
| options    | 可选设置 | object |   null  |

#### action

key | 说明 | 类型 | 默认值
----|-----|------|------
| text    | 文字  |   string   |   ''  |
| onPress    | 点击事件 | func | null |
| color  | 文字颜色 | string | null |

#### option

key | 说明 | 类型 | 默认值
----|-----|------|------
| closeable    | 可否点击遮罩关闭  |   boolean   |   true  |
| onDialogDismiss    | 关闭事件 | func | null |
| buttonDirection  | 按钮排列方向 enum('auto','row','column') | string | 'auto' |
| alertType  | 弹窗类型 enum('default','close','never')| string | 'default' |
| customIcon  | 自定义icon资源 | any | null |
| iconStyle  | icon的Style | object | null |
| neverText  | 不再提示的文字 | string | '不再提示' |
| defaultNeverState  | 默认不再提示勾选状态 | boolean | false |
| neverKey  | 不再提示本地存储的key值, alertType为'never'时必填 | string | '' |

### toast

```
static toast(text, icon?, duration?)
```

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| text    | 内容  |   string   |   ''  |
| icon  | 图标 enum('none','error','warning','success') | string | 'none' |
| duration   | 持续时间  | number |    1500  |

### prompt

```
static prompt(title, content?, defaultValue?, onConfirm?, options?)
```

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| title    | 标题  |   string   |   ''  |
| content    | 内容 | string | ''|
| defaultValue  | 默认输入值 | string | '' |
| onConfirm   | 确定的回调  | func |    null  |
| options    | 可选设置 | object |   null  |

#### option

key | 说明 | 类型 | 默认值
----|-----|------|------
| negativeText    | 取消文字  | string | '取消' |
| positiveText    | 确定文字 | string | '确定' |
| invalidCondition  | 确定按钮不可点击的条件 | func | (result) => result.length === 0 |
| maxLength  | 最大长度 | number | 50 |
| placeholder  | 提示文字 | string | '' |
| errorHint  | 格式校验错误文字, ''或false表示校验通过 | func | null |

### showLoading

```
static showLoading(title?)
```

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| title    | 标题  |   string   |   ''  |

### hideLoading

```
static hideLoading()
```

### notice

```
static notice(title, content?, icon?, onPress?, onDismiss?, action?)
```

参数 | 说明 | 类型 | 默认值
----|-----|------|------
| title    | 标题  |   string   |   ''  |
| content    | 内容 | string | ''|
| icon  | 图标 | any | null |
| onPress   | 点击事件  | func | null |
| onDismiss | 删除设置  | func | null |
| action | 点击位置的文字  | string | '查看' |
