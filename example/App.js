import React from 'react'
import {TouchableOpacity,StyleSheet,Text} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ComponentList from './componentList'
import Home from './home'
import {Provider} from '../components'

const scenes = {
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
}

ComponentList.map((item) => {
    scenes[item.title] = {
        screen: item.example.default,
        navigationOptions: {
            title: item.title
        }
    }
})

const AppNavigator = createStackNavigator(scenes,{
    defaultNavigationOptions: ({ screenProps:{theme} })=>{
        return {
            headerTintColor: theme==='dark'?'#fff':'#000',
            headerStyle:{
                backgroundColor: theme === 'dark' ? '#000' : '#fff',
            }
        }
    },
    cardStyle:{
        // backgroundColor:'red'
    }
})

const AppContainer = createAppContainer(AppNavigator)

export default class extends React.Component{
    state = {
        theme: 'light'
    }
    
    render(){
        const {
            theme
        } = this.state
        const buttonColor = theme === 'light' ? '#fff' : '#000'
        const textColor = theme ==='light'?'#000':'#fff'
        return (
            <Provider theme={theme}>
                <AppContainer 
                    screenProps={{
                        theme
                    }}
                />
                <TouchableOpacity 
                    style={[styles.themeButton, { backgroundColor: buttonColor, borderColor: textColor}]}
                    onPress={this.toggleTheme}
                >
                    <Text style={[styles.themeText, { color: textColor}]}>
                        {theme}
                    </Text>
                </TouchableOpacity>
            </Provider>
        )
    }
    toggleTheme=()=>{
        this.setState((state)=>({
            theme: state.theme === 'light' ? 'dark' : 'light'
        }))
    }
}

const styles = StyleSheet.create({
    themeButton:{
        position:'absolute',
        bottom:100,
        right:15,
        height:50,
        width:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1
    },
    themeText:{
        fontSize:20
    },
})