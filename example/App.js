import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ComponentList from './componentList'
import Home from './home'
import Provider from '../components/modal/provider'

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

const AppNavigator = createStackNavigator(scenes)

export default class App extends React.Component {
    render() {
        const App = createAppContainer(AppNavigator)
        return(
            <Provider>
                <App/>
            </Provider>
        )
    }
}

//export default createAppContainer(AppNavigator)
