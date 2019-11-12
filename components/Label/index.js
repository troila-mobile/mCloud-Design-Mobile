/**
 * Created by wy on 2019/9/30.
 */
import React from 'react'
import { Text, ViewPropTypes, TouchableOpacity } from 'react-native'
import { WithTheme } from '../style'
import LabelStyles from './style'
import PropTypes from 'prop-types'

export default class Label extends React.Component {
  static propTypes = {
      styles: ViewPropTypes.style,
      style: ViewPropTypes.style,
      children: PropTypes.any,
      size: PropTypes.string,
      type: PropTypes.string,
      textType: PropTypes.string,
      onPress: PropTypes.func,
      disabled: PropTypes.bool,
  };
  static defaultProps = {
      styles: {},
      style: {},
      onPress: () => {},
      children: null,
      size: PropTypes.string,
      type: PropTypes.string,
      textType: PropTypes.string,
      disabled: true,
  };
  render() {
      const {
          styles, style, children, size, type, textType, onPress,disabled,
      } = this.props
      return (
          <WithTheme themeStyles={LabelStyles} styles={styles}>
              {(_styles, theme) => {
                  const textStyle = [
                      _styles.text,
                      _styles[`${type}RawText`],
                      _styles[`${textType}`],
                  ]
                  const LabelStyle = [_styles.wrapper, _styles[`${size}Label`], style]
                  return (
                      <TouchableOpacity style={LabelStyle} onPress={onPress} disabled={disabled}>
                          <Text style={textStyle} numberOfLines={1}>
                              {children}
                          </Text>
                      </TouchableOpacity>
                  )
              }}
          </WithTheme>
      )
  }
}
