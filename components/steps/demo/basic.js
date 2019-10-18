import React from 'react'
import { View, ScrollView } from 'react-native'
import { Steps } from '../..'

const { StepsItem } = Steps
const ViewTop = () => (
    <View style={{ marginTop: 20 }} />
)

const stepsOne = [
    {
        title: '第一步',
        description: '完成',
    },
    {
        title: '第二步',
        description: '进行中',
    },
    {
        title: '第三步',
        description: '等待',
    },
]
const stepsTwo = [
    {
        title: '第一步',
        description: '完成',
        status: 'finish',
    },
    {
        title: '第二步',
        description: '进行中',
        status: 'process',
    },
    {
        title: '第三步',
        description: '出错',
        status: 'error',
    },
    {
        title: '第四步',
        description: '等待',
        status: 'wait',
    },
]

export default () => (
    <View style={{
        flex: 1,
    }}
    >
        <ScrollView
            style={{ flex: 1 }}
            automaticallyAdjustContentInsets={false}
            showsVerticalScrollIndicator={false}
        >
            <ViewTop />
            <Steps size="small" current={1} direction="horizontal">
                {stepsOne.map((item, index) => (
                    <StepsItem
                        /* eslint-disable-next-line react/no-array-index-key */
                        key={index}
                        title={item.title}
                        status={item.status}
                    />
                ))}
            </Steps>
            <ViewTop />
            <Steps size="small" current={1}>
                {stepsTwo.map((item, index) => (
                    <StepsItem
                        /* eslint-disable-next-line react/no-array-index-key */
                        key={index}
                        title={item.title}
                        description={item.description}
                        status={item.status}
                    />
                ))}
            </Steps>
            <ViewTop />
            <Steps current={1}>
                {stepsOne.map((item, index) => (
                    <StepsItem
                        /* eslint-disable-next-line react/no-array-index-key */
                        key={index}
                        title={item.title}
                        description={item.description}
                        status={item.status}
                    />
                ))}
            </Steps>
            <ViewTop />
            <Steps>
                {stepsTwo.map((item, index) => (
                    <StepsItem
                        /* eslint-disable-next-line react/no-array-index-key */
                        key={index}
                        title={item.title}
                        description={item.description}
                        status={item.status}
                    />
                ))}
            </Steps>
        </ScrollView>
    </View>
)
