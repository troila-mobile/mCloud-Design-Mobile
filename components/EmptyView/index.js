/**
 * Created by wy on 2019/9/30.
 */
import React from 'react'
import {
    Text,
    ViewPropTypes,
    View,Image,
    TouchableOpacity,
} from 'react-native'
import { WithTheme } from '../style'
import EmptyViewStyles from './style'
import PropTypes from 'prop-types'

const network_failedSource = require('./assets/empty_network_failed.png')
const no_dataSource = require('./assets/empty_no_data.png')

export default class EmptyView extends React.Component {
    static propTypes = {
        styles: ViewPropTypes.style,
        style: ViewPropTypes.style,
        children: PropTypes.any,
        type: PropTypes.number,
        emptyImage: PropTypes.any,
        onRefresh: PropTypes.func,
    }
    static defaultProps = {
        styles: {},
        style: {},
        children: null,
        type: 0,
        emptyImage: null,
        onRefresh: null,
    }
    constructor(props) {
        super(props)
        this.state = {
            emptyImageView: props.emptyImage,
        }
    }
    render() {
        const {
            styles,
            style,
            children,
            type,
            emptyImage,
            onRefresh,
        } = this.props
        return (
            <WithTheme themeStyles={EmptyViewStyles} styles={styles}>
                {
                    (_styles, theme) => {
                        if (type === 0) {
                            this.state = {
                                emptyImageView : emptyImage,
                            }
                        } else if ( type === 1) {
                            this.state = {
                                emptyImageView : network_failedSource,
                            }
                        }
                        else if ( type === 2) {
                            this.state = {
                                emptyImageView : no_dataSource,
                            }
                        } else {
                            this.state = {
                                emptyImageView : emptyImage,
                            }
                        }
                        const textStyle = [
                            _styles.text,
                        ]
                        const EmptyViewStyle = [
                            _styles.wrapper,
                            style,
                        ]
                        const TouchableStyle = [
                            _styles.touchable,
                        ]
                        const TouchableTextStyle = [
                            _styles.touchableText,
                        ]
                        return (
                            <View style={EmptyViewStyle}>
                                {
                                    type === 0 ? null : <Image source={this.state.emptyImageView} />
                                }
                                <Text style={textStyle}>
                                    {children}
                                </Text>
                                {
                                    onRefresh
                                        ? (
                                            <TouchableOpacity
                                                style={TouchableStyle}
                                                onPress={() => onRefresh && onRefresh()}
                                            >
                                                <Text style={TouchableTextStyle}>重新加载</Text>
                                            </TouchableOpacity>
                                        )
                                        : null
                                }
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
