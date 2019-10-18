import React from 'react'
import {
    Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, BackHandler,
} from 'react-native'
import MaskView from './MaskView'
import PropTypes from 'prop-types'
import ModalStyles from './style'
import { WithTheme } from '../style'

const inputDeleteIcon = require('./assets/icon_input_delete.png')

export default class PromptView extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        defaultValue: PropTypes.string,
        onDialogDismiss: PropTypes.func,
        onConfirm: PropTypes.func,
        negativeText: PropTypes.string,
        positiveText: PropTypes.string,
        invalidCondition: PropTypes.func,
        maxLength: PropTypes.number,
        placeholder: PropTypes.string,
        errorHint: PropTypes.func,
    }
    static defaultProps = {
        title: '',
        content: '',
        defaultValue: '',
        onDialogDismiss: null,
        onConfirm: null,
        negativeText: '取消',
        positiveText: '确定',
        invalidCondition: (result) => result.length === 0,
        maxLength: 50,
        placeholder: '请输入',
        errorHint: null,
    }
    constructor(props) {
        super(props)
        const { defaultValue } = this.props
        this.state = {
            result: defaultValue,
            error: '',
        }
    }
    componentDidMount() {
        this.modal.show()
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid)
    }
    onBackAndroid = () => {
        this.modal.hide(() => this.onDismiss())
        return true
    }
    onAction = (action) => {
        if (action) {
            const { onConfirm, errorHint } = this.props
            const { result } = this.state
            if (errorHint) {
                const error = errorHint(result)
                if (error && error !== '') {
                    this.setState({
                        error,
                    })
                } else {
                    this.setState({
                        error: '',
                    }, () => {
                        this.modal.hide(() => this.onDismiss())
                        onConfirm && onConfirm(result)
                    })
                }
            } else {
                this.modal.hide(() => this.onDismiss())
                onConfirm && onConfirm(result)
            }
        } else {
            this.modal.hide(() => this.onDismiss())
        }
    }
    onDismiss() {
        const { onDialogDismiss } = this.props
        onDialogDismiss && onDialogDismiss()
    }
    renderContent = (_styles) => {
        const {
            title,
            content,
            maxLength,
            placeholder,
        } = this.props
        const {
            result,
            error,
        } = this.state
        return (
            <View style={[_styles.contentContainer, { paddingBottom: 0 }]}>
                {
                    title === ''
                        ? null
                        : (
                            <Text style={[_styles.title,_styles.space]} allowFontScaling={false}>
                                {title}
                            </Text>
                        )
                }
                {
                    content === ''
                        ? null
                        : (
                            <Text style={[_styles.content,_styles.space]} allowFontScaling={false}>
                                {content}
                            </Text>
                        )
                }
                <View style={[_styles.inputContainer,_styles.space, { marginBottom: 0 }]}>
                    <TextInput
                        style={_styles.inputStyle}
                        defaultValue={result}
                        onChangeText={(input) => this.setState({ result: input })}
                        maxLength={maxLength}
                        underlineColorAndroid="transparent"
                        placeholder={placeholder}
                        placeholderTextColor="#A5ABB1"
                        autoFocus={true}
                        ref={(inputView) => this.input = inputView}
                    />
                    {
                        result.length === 0
                            ? null
                            : (
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            result: '',
                                        })
                                        this.input.clear()
                                    }}
                                >
                                    <Image source={inputDeleteIcon} />
                                </TouchableOpacity>
                            )
                    }
                </View>
                <Text
                    style={_styles.errorHint}
                    numberOfLines={1}
                    allowFontScaling={false}
                >
                    {error}
                </Text>
            </View>
        )
    }
    renderActions = (_styles) => {
        const {
            negativeText,
            positiveText,
            invalidCondition,
        } = this.props
        const {
            result,
        } = this.state
        const containerStyles = { flexDirection: 'row' }
        const buttonStyles = [_styles.buttonContainer, { flex:1 }]
        const buttonDisable = invalidCondition && invalidCondition(result)
        return (
            <View style={containerStyles}>
                <TouchableOpacity
                    style={buttonStyles}
                    onPress={() => this.onAction(false)}
                >
                    <Text
                        style={_styles.action}
                        allowFontScaling={false}
                    >
                        {negativeText}
                    </Text>
                </TouchableOpacity>
                <View style={_styles.verticalLine} />
                <TouchableOpacity
                    style={buttonStyles}
                    onPress={() => this.onAction(true)}
                    disabled={buttonDisable}
                >
                    <Text
                        style={[_styles.action, buttonDisable ? _styles.invalidColor : _styles.positiveColor]}
                        allowFontScaling={false}
                    >
                        {positiveText}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <WithTheme themeStyles={ModalStyles}>
                {
                    (_styles) => (
                        <MaskView
                            ref={(view) => this.modal = view}
                            onDismiss={() => this.onDismiss()}
                            maskCloseable={false}
                        >
                            <KeyboardAvoidingView behavior="padding">
                                <View style={_styles.dialogContainer}>
                                    {this.renderContent(_styles)}
                                    <View style={_styles.horizontalLine} />
                                    {this.renderActions(_styles)}
                                </View>
                            </KeyboardAvoidingView>
                        </MaskView>
                    )
                }
            </WithTheme>
        )
    }
}
