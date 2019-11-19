---
id: ActionSheet
title: ActionSheet
sidebar_label: ActionSheet
---

ActionSheet

## Basic Example:
```SnackPlayer name=ActionSheet-simple
import React from 'react'
import {
    ActionSheet,
    Button,
} from 'mcloud-mobile'

export default class extends React.Component {
    state={
        options:['text','value'],
    }
    render() {
        const {
            options,
        } = this.state
        return (
            <>
                <Button
                    onPress={
                        () => {
                            this.setState({
                                options:['text','value'],
                            },() => this.actionSheet.show())
                        }
                    }
                >
                    show
                </Button>
                <ActionSheet
                    ref={(e) => this.actionSheet = e}
                    options={options}
                    disabledIndexArrary={[5]}
                    title="zhe是标题dfshdfshuhgiuhdubhdsfiubhdsiufhb"
                />
            </>
        )
    }
}


```
## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| options    | 选项 |   array   |   无  |
| showCancel   |   是否显示cancel选项   |   bool   |    true  |
| cancel   |   取消点击事件  |   func   |   无    |
| onPress   |  按钮选中事件   |   func    |    无    |
| disabledIndexArrary   |  不可选择选项数组   |   array   |   无  |
| styles    | 自定义样式 |   Object  | 无 |
| title    | 标题，最多显示两行 | string |   无  |
| checkedIndex    | 选中的索引(-1即为不带选中样式) | number |   -1  |