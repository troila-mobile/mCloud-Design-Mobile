import deepmerge from 'deepmerge'
import React from 'react'
import defaultTheme from './themes/light'
import PropTypes from 'prop-types'

export const ThemeContext = React.createContext(defaultTheme)
export class WithTheme extends React.Component {
    static defaultProps = {
        themeStyles: () => { },
    };
    static propTypes = {
        themeStyles: PropTypes.func,
        styles: PropTypes.object,
        children: PropTypes.func,
    }
    static contextType = ThemeContext
    getStyles = (theme) => {
        const { themeStyles, styles } = this.props
        const defaultThemeStyles = themeStyles(theme)
        if (styles) {
            return deepmerge(defaultThemeStyles, styles)
        }
        return defaultThemeStyles
    };
    render() {
        const { children } = this.props
        return (
            <ThemeContext.Consumer>
                {(theme) => children(this.getStyles(theme), theme)}
            </ThemeContext.Consumer>
        )
    }
}
