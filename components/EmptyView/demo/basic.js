import React from 'react'
import { EmptyView } from '../..'

export default () => (
    <EmptyView type="network_failed" onRefresh={() => {}}>
            很抱歉，加载失败了
    </EmptyView>

    // <EmptyView type="no_data">
    // 暂无数据
    // </EmptyView>
)

