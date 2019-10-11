/**
 * Created by wy on 2019/9/30.
 */
import React from 'react'
import {
    Text,
    ViewPropTypes,
    View,
} from 'react-native'
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
    }
    static defaultProps = {
        styles: {},
        style:{},
        children:null,
        size: PropTypes.string,
        type: PropTypes.string,
        textType: PropTypes.string,
    };
    render() {
        const {
            styles,
            style,
            children,
            size,
            type,
            textType,
        } = this.props
        return (
            <WithTheme themeStyles={LabelStyles} styles={styles}>
                {
                    (_styles,theme) => {
                        const textStyle = [
                            _styles.text,
                            _styles[`${type}RawText`],
                            _styles[`${textType}`],
                        ]
                        const LabelStyle = [
                            _styles.wrapper,
                            _styles[`${size}Label`],
                            style,
                        ]
                        return (
                            <View style={LabelStyle}>
                                <Text style={textStyle} numberOfLines={1}>
                                    {children}
                                </Text>
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
