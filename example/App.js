import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ComponentList from './componentList'
import Home from './home'

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


export default createAppContainer(AppNavigator)