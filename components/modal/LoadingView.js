import React from 'react'
import {
    View, Text, ActivityIndicator, Platform, StatusBar,
} from 'react-native'
import { WithTheme } from '../style'
import ModalStyles from './style'
import PropTypes from 'prop-types'

export default class LoadingView extends React.Component {
    static propTypes = {
        text: PropTypes.string,
    }
    static defaultProps = {
        text: '数据加载中',
    }
    componentDidMount() {
        if (Platform.OS === 'ios') StatusBar.setNetworkActivityIndicatorVisible(true)
    }
    componentWillUnmount() {
        if (Platform.OS === 'ios') StatusBar.setNetworkActivityIndicatorVisible(false)
    }
    render() {
        return (
            <WithTheme themeStyles={ModalStyles}>
                {
                    (_styles) => {
                        const {
                            text,
                        } = this.props
                        return (
                            <View
                                style={_styles.center}
                                collapsable={false}
                            >
                                <View style={_styles.loadingContainer}>
                                    <ActivityIndicator
                                        style={_styles.loadingMargin}
                                        color="#fff"
                                    />
                                    <Text
                                        style={_styles.toastText}
                                        allowFontScaling={false}
                                    >
                                        {text}
                                    </Text>
                                </View>
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
