---
id: ShareSheet
title: ShareSheet
sidebar_label: ShareSheet
---

ShareSheet

## Basic Example:
```SnackPlayer name=ShareSheet-simple
import React from 'react'
import {
    ShareSheet,
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
                            this.actionSheet.show()
                        }
                    }
                >
                    show
                </Button>
                <ShareSheet
                    ref={(e) => this.actionSheet = e}
                    options={['qq','qzone']}
                    disabledIndexArrary={[5]}
                    title="zhe是标题dfshdfshuhgiuhdubhdsfiubhdsiufhb"
                    onPress={(key) => console.log(key)}
                />
            </>
        )
    }
}


```
## Props:

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| options    | 选项可选项['qq','qzone','friend','wechat','weibo']|   array   |   无  |
| customItem   |   自定义分享类型，遵循格式：[{ image:'', title:'', key:'' }]   |   array   |    无  |
| cancel   |   取消点击事件  |   func   |   无    |
| onPress   |  按钮选中事件(key)=>{}  ,key为分享类型 |   func    |    无    |
| styles    | 自定义样式 |   Object  | 无 |