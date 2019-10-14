import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Steps } from '../..'

const Step = Steps.StepsItem
const stepsOne = [
    {
        title: 'Finished',
        description: 'Finished',
    },
    {
        title: 'In Progress',
        description: 'In Progress',
    },
    {
        title: 'Waiting',
        description: 'Waiting',
    },
]
const stepsTwo = [
    {
        title: 'Finished',
        description: 'Finished',
        status: 'finish',
    },
    {
        title: 'In Progress',
        description: 'In Progress',
        status: 'process',
    },
    {
        title: 'Waiting',
        description: 'Waiting',
        status: 'error',
    },
    {
        title: 'Waiting',
        description: 'Waiting',
        status: 'wait',
    },
]

export default () => (
    <View style={{
        flex: 1,
    }}>
        <ScrollView
            style={{ flex: 1 }}
            automaticallyAdjustContentInsets={false}
            showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 60 }}>
                <Steps size='small' current={1} direction="horizontal">
                    {stepsOne.map((item, index) => (
                        <Step
                            key={index}
                            title={
                                <View>
                                    <Text>
                                        {item.title}
                                    </Text>
                                </View>
                            }
                            status={item.status}
                        />
                    ))}
                </Steps>
            </View>
            <View style={{ marginTop: 60 }}>
                <Steps size="small" current={1}>
                    {stepsOne.map((item, index) => (
                        <Step
                            key={index}
                            title={
                                <View>
                                    <Text>title:{item.title}</Text>
                                </View>
                            }
                            description={
                                <View>
                                    <Text>desc:{item.description}</Text>
                                </View>
                            }
                            status={item.status}
                        />
                    ))}
                </Steps>
            </View>
            <View style={{ marginTop: 60 }}>
                <Steps size="small">
                    {stepsTwo.map((item, index) => (
                        <Step
                            key={index}
                            title={item.title}
                            description={item.description}
                            status={item.status}
                        />
                    ))}
                </Steps>
            </View>
            <View style={{ marginTop: 60 }}>
                <Steps current={1}>
                    {stepsOne.map((item, index) => (
                        <Step
                            key={index}
                            title={item.title}
                            description={item.description}
                            status={item.status}
                        />
                    ))}
                </Steps>
            </View>
            <View style={{ marginTop: 60 }}>
                <Steps>
                    {stepsTwo.map((item, index) => (
                        <Step
                            key={index}
                            title={item.title}
                            description={item.description}
                            status={item.status}
                        />
                    ))}
                </Steps>
            </View>
        </ScrollView>
    </View>
)
