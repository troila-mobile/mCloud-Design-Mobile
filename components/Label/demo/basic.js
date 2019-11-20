import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Label } from '../..'

export default () => (
    <View style={styles.wrap}>
        <Text style={styles.boldTitle}>
           SmallLabel
        </Text>
        <View style={styles.cellStyle}>
            <Label type="white" size="small" textType="smallText" style={styles.defaultStyle}>
                两字
            </Label>
            <Label type="black" size="small" textType="smallText" style={styles.multiStyle}>
                这里是长度固定的两个字
            </Label>
        </View>
        <Text style={styles.boldTitle}>
            MiddleLabel
        </Text>
        <View style={styles.cellStyle}>
            <Label type="white" size="middle" textType="middleText" style={styles.defaultStyle}>
                三个字
            </Label>
            <Label type="black" size="middle" textType="middleText" style={styles.multiStyle}>
                这里是长度固定的三个字
            </Label>
        </View>
        <Text style={styles.boldTitle}>
            LargeLabel
        </Text>
        <View style={styles.cellStyle}>
            <Label
                type="white"
                size="large"
                textType="largeText"
                style={styles.defaultStyle}
                disabled={false}
                onPress={() => {}}
            >
                三个字
            </Label>
            <Label
                type="black"
                size="large"
                textType="largeText"
                style={styles.multiStyle}
                disabled={false}
                onPress={() => {}}
            >
                这里是长度固定的三个字
            </Label>
        </View>
    </View>
)
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
    multiStyle:{
        width:120,
        marginLeft:20,
    },
    defaultStyle:{
        marginLeft: 20,
        backgroundColor:'#969FB5',
    },
    cellStyle:{
        marginTop:10,
        flexDirection:'row',
    },
    boldTitle: {
        marginTop:10,
        fontSize: 16,
        color: '#1F2530',
        paddingVertical: 10,
        paddingLeft: 10,
        fontWeight: '500',
    },
})
