/* eslint-disable import/first */
import { ThemeColors } from 'react-navigation'

ThemeColors.light.body = 'red'

/**
 * @format
 */
import { AppRegistry } from 'react-native'
import App from './example/App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
