/* eslint-disable react/prop-types */
import deepmerge from 'deepmerge'
import React from 'react'
import defaultTheme from './themes/default'

export const ThemeContext = React.createContext(defaultTheme)
export const Theme = defaultTheme
export class WithTheme extends React.Component {
  static defaultProps = {
      themeStyles: () => {},
  };
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
