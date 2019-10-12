import React from 'react'
import { ThemeContext } from '../style'
import PropTypes from 'prop-types'
import lightTheme from '../style/themes/light'
import darkTheme from '../style/themes/dark'

const themeConfig = {
    light: lightTheme,
    dark: darkTheme,
}

export default class extends React.Component {
    static defaultProps = {
        theme: 'light',
        children: null,
    };
    static propTypes = {
        theme: PropTypes.string,
        children: PropTypes.any,
    }
    render() {
        const { children, theme } = this.props
        const themeStyle = themeConfig[theme] || themeConfig.light
        return (
            <ThemeContext.Provider value={themeStyle}>
                {children}
            </ThemeContext.Provider>
        )
    }
}
