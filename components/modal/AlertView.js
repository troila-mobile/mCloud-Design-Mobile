import React from 'react'
import {
    Text, View, TouchableOpacity, Image, BackHandler,
} from 'react-native'
import MaskView from './MaskView'
import PropTypes from 'prop-types'
import ModalStyles from './style'
import { WithTheme } from '../style'
import AsyncStorage from '../utils/AsyncStorage'

const modalCloseIcon = require('./assets/icon_modal_close.png')
const modalNeverSelected = require('./assets/icon_modal_selected.png')
const modalNeverUnselected = require('./assets/icon_modal_unselected.png')
const modalError = require('./assets/icon_modal_error.png')
const modalSuccess = require('./assets/icon_modal_success.png')
const modalWarning = require('./assets/icon_modal_warning.png')

export default class AlertView extends React.Component {
  static propTypes = {
      title: PropTypes.string,
      content: PropTypes.string,
      icon: PropTypes.oneOf(['none', 'error', 'success', 'warning', 'custom']),
      actions: PropTypes.array,
      closeable: PropTypes.bool,
      onDialogDismiss: PropTypes.func,
      buttonDirection: PropTypes.oneOf(['row', 'column', 'auto']),
      alertType: PropTypes.oneOf(['default', 'close', 'never']),
      customIcon: PropTypes.any,
      iconStyle: PropTypes.object,
      neverText: PropTypes.string,
      defaultNeverState: PropTypes.bool,
      neverKey: PropTypes.string,
  };
  static defaultProps = {
      title: '',
      content: '',
      icon: 'none',
      actions: [{ text: '确认' }],
      closeable: true,
      onDialogDismiss: null,
      buttonDirection: 'auto',
      alertType: 'default',
      customIcon: null,
      iconStyle: {},
      neverText: '不再提示',
      defaultNeverState: false,
      neverKey: 'NeverShowModal',
  };
  constructor(props) {
      super(props)
      const { defaultNeverState } = this.props
      this.state = {
          neverState: defaultNeverState,
      }
  }
  componentDidMount() {
      this.getReadState()
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid)
  }
  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid)
  }
  onBackAndroid = () => {
      this.modal.hide(() => {
          const { onDialogDismiss } = this.props
          onDialogDismiss && onDialogDismiss()
      })
      return true
  };
  onAction = (item) => {
      this.modal.hide(() => {
          this.onDismiss()
          item.onPress && item.onPress()
      })
  };
  onDismiss() {
      const { onDialogDismiss, alertType, neverKey } = this.props
      const { neverState } = this.state
      if (alertType === 'never' && neverState) {
          AsyncStorage.setItem(neverKey, true)
      }
      onDialogDismiss && onDialogDismiss()
  }
  async getReadState() {
      const { alertType } = this.props
      if (alertType === 'never') {
          try {
              const { neverKey } = this.props
              const readState = await AsyncStorage.getItem(neverKey)
              if (!readState) {
                  this.show()
              }
          } catch (e) {
              this.show()
          }
      } else {
          this.show()
      }
  }
  show() {
      this.modal.show()
  }
  renderModalIcon = (_styles) => {
      const { icon, customIcon, iconStyle } = this.props
      if (icon === 'none' || (icon === 'custom' && !customIcon)) return null
      const iconSource = () => {
          switch (icon) {
          case 'error':
              return modalError
          case 'warning':
              return modalWarning
          case 'success':
              return modalSuccess
          case 'custom':
              return customIcon
          default:
              return modalWarning
          }
      }
      const iconStyles = [_styles.icon, iconStyle]
      return <Image source={iconSource()} style={iconStyles} />
  };
  renderContent = (_styles) => {
      const {
          title, content, alertType, neverText,
      } = this.props
      const { neverState } = this.state
      return (
          <View style={_styles.contentContainer}>
              {alertType === 'close' ? (
                  <TouchableOpacity
                      style={_styles.close}
                      hitSlop={{
                          top: 20,
                          bottom: 20,
                          right: 20,
                          left: 20,
                      }}
                  >
                      <Image source={modalCloseIcon} />
                  </TouchableOpacity>
              ) : null}
              {this.renderModalIcon(_styles)}
              {title === '' ? null : (
                  <Text style={[_styles.title, _styles.space]} allowFontScaling={false}>
                      {title}
                  </Text>
              )}
              {content === '' ? null : (
                  <Text
                      style={[_styles.content, _styles.space]}
                      allowFontScaling={false}
                  >
                      {content}
                  </Text>
              )}
              {alertType === 'never' ? (
                  <TouchableOpacity
                      activeOpacity={1.0}
                      style={[_styles.neverContainer, _styles.space]}
                      onPress={() => this.setState({ neverState: !neverState })}
                  >
                      <Image
                          source={neverState ? modalNeverSelected : modalNeverUnselected}
                      />
                      <Text style={[_styles.content, { marginLeft: 8 }]}>{neverText}</Text>
                  </TouchableOpacity>
              ) : null}
          </View>
      )
  };
  renderActions = (_styles) => {
      const { actions, buttonDirection } = this.props
      const buttons = actions || [{ text: '确认' }]
      const flexDirection =      buttonDirection === 'auto'
          ? buttons.length > 2
              ? 'column'
              : 'row'
          : buttonDirection
      const containerStyles = { flexDirection }
      const buttonContainerStyles =      flexDirection === 'row'
          ? [_styles.buttonContainer, { flex: 1 }]
          : _styles.buttonContainer
      const buttonViewStyles =      flexDirection === 'row'
          ? { flex: 1, flexDirection: 'row' }
          : { flexDirection: 'column' }
      const dividerStyles =      flexDirection === 'row' ? _styles.verticalLine : _styles.horizontalLine
      return (
          <View style={containerStyles}>
              {buttons.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <View key={`Button${index}`} style={buttonViewStyles}>
                      {index > 0 ? <View style={dividerStyles} /> : null}
                      <TouchableOpacity
                          style={buttonContainerStyles}
                          onPress={() => this.onAction(item)}
                      >
                          <Text
                              style={[
                                  _styles.action,
                                  item.color ? { color: item.color } : undefined,
                              ]}
                              allowFontScaling={false}
                          >
                              {item.text}
                          </Text>
                      </TouchableOpacity>
                  </View>
              ))}
          </View>
      )
  };
  render() {
      const { actions } = this.props
      return (
          <WithTheme themeStyles={ModalStyles}>
              {(_styles) => {
                  const { closeable } = this.props
                  return (
                      <MaskView
                          ref={(view) => (this.modal = view)}
                          onDismiss={() => this.onDismiss()}
                          maskCloseable={closeable}
                      >
                          <View style={_styles.dialogContainer}>
                              {this.renderContent(_styles)}
                              {actions.length > 0 ? (
                                  <View style={_styles.horizontalLine} />
                              ) : null}
                              {this.renderActions(_styles)}
                          </View>
                      </MaskView>
                  )
              }}
          </WithTheme>
      )
  }
}
