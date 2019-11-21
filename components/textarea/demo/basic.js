import React, { useState } from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ScrollView,
    Keyboard,
} from 'react-native'
import { Textarea } from '../..'

export default () => {
    const [leftValue, onLeftChange] = useState('')
    const [topValue, onTopChange] = useState('')
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.wrap}
            keyboardShouldPersistTaps="always"
            onPress={() => Keyboard.dismiss()}
        >
            <ScrollView keyboardShouldPersistTaps="handled">
                <Text style={styles.boldTitle}>
                    Textarea
                </Text>
                <Text style={styles.title}>
                    标题在左
                </Text>
                <Textarea
                    label="标题"
                    autoHeight
                    required
                    textAlign="right"
                    labelPosition="left"
                    placeholder="请输入标题"
                    value={leftValue}
                    onChange={(text) => {
                        onLeftChange(text)
                    }}
                />
                <Text style={styles.title}>
                    标题在上
                </Text>
                <Textarea
                    required
                    label="标题"
                    placeholder="请输入标题"
                    value={topValue}
                    onChange={(text) => {
                        onTopChange(text)
                    }}
                />
                <Text style={styles.title}>
                    规定行数
                </Text>
                <Textarea
                    label="标题"
                    rows={4}
                    placeholder="请输入标题"
                />
                <Text style={styles.title}>
                    高度自适应
                </Text>
                <Textarea
                    label="标题"
                    autoHeight={true}
                    placeholder="请输入标题"
                />
                <Text style={styles.title}>
                    多行计数
                </Text>
                <Textarea
                    label="标题"
                    rows={4}
                    count={80}
                    value="输入后文字显示很多很多很多很多很多很多很多很多输入后文字显示很多很多"
                    placeholder="请输入标题"
                />
                <Text style={styles.title}>
                    不可编辑
                </Text>
                <Textarea
                    label="标题"
                    value="输入后文字显示很多很多很多很多"
                    placeholder="请输入标题"
                    disabled={true}
                />
            </ScrollView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 14,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 15,
    },
    boldTitle: {
        fontSize: 16,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 10,
        fontWeight: '500',
    },
})
