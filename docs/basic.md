---
id: component1
title: Buttoncc
sidebar_label: Buttoncc
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.


## Example

<table>
  
</table>




## Code

```jsx
import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { Button } from 'mCloud-mobile';

export default class Example extends Component {
    render() {
        return (
            <View style={{ flex:1 }}>
                <Button>default</Button>
                <Button disabled>default disabled</Button>

                <Button type="primary">primary</Button>
                <Button type="primary" disabled>
                    primary disabled
                </Button>

                <Button type="warning">warning</Button>
                <Button type="warning" disabled>
                    warning disabled
                </Button>

                <Button loading>loading button</Button>

                <Button activeStyle={false}>无点击反馈</Button>
                <Button activeStyle={{ backgroundColor: 'red' }}>
                    custom feedback style
                </Button>


                <Button type="ghost">ghost</Button>
                <Button type="ghost" disabled>
                        ghost disabled
                </Button>
                <Button type="ghost" size="small">
                        ghost
                </Button>
            </View>
        )
    }
}

```



## `Button` Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| size | 体积 | String   |  `large` |
| type | 类型 | String   |  `default` |
| disabled | 禁用 | Boolean   |  `false` |
| onPress | 点击 | Functionn | `null` |


