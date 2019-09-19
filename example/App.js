/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import {
    Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ButtonBasic from '../components/button/demo/basic'


const App = (props) => (
    <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
        >
            <Header />
            {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                    <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
            )}
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text
                        style={styles.sectionTitle}
                        onPress={() => {
                            props.navigation.navigate('Button')
                        }}
                    >
Button

                    </Text>
                    <Text style={styles.sectionDescription}>
            Edit
                        <Text style={styles.highlight}>App.js</Text>
                        {' '}
to change this screen
            and then come back to see your edits.
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>See Your Changes</Text>
                    <Text style={styles.sectionDescription}>
                        <ReloadInstructions />
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Debug</Text>
                    <Text style={styles.sectionDescription}>
                        <DebugInstructions />
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Learn More</Text>
                    <Text style={styles.sectionDescription}>
            Read the docs to discover what to do next:
                    </Text>
                </View>
                <LearnMoreLinks />
            </View>
        </ScrollView>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
})


const AppNavigator = createStackNavigator({
    Home: {
        screen: App,
    },
    Button:{
        screen: ButtonBasic,
    },
})


export default createAppContainer(AppNavigator)
