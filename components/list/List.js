import React from 'react'
import { View, ViewPropTypes, Text } from 'react-native'
import { WithTheme } from '../style'
import ListStyles from './style'
import PropTypes from 'prop-types'

export default class List extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        renderHeader: PropTypes.oneOfType([PropTypes.func,PropTypes.string,PropTypes.node]),
        renderFooter: PropTypes.oneOfType([PropTypes.func,PropTypes.string,PropTypes.node]),
        children: PropTypes.any,
    }
    static defaultProps = {
        style: {},
        styles: {},
    }
    render() {
        let {
            renderHeader,
            renderFooter,
        } = this.props
        const {
            style,
            styles,
            children,
        } = this.props
        return (
            <WithTheme themeStyles={ListStyles} styles={styles}>
                {
                    (_styles) => {
                        const renderText = (text, textStyle) => (
                            <Text style={textStyle}>{text}</Text>
                        )
                        renderHeader = typeof renderHeader === 'string'
                            ? renderText(renderHeader, _styles.Header) : typeof renderHeader === 'function'
                                ? (
                                    typeof renderHeader() === 'string'
                                        ? renderText(renderHeader, _styles.Header) : renderHeader()
                                ) : null
                        renderFooter = typeof renderFooter === 'string'
                            ? renderText(renderFooter, _styles.Footer) : typeof renderFooter === 'function'
                                ? (
                                    typeof renderFooter() === 'string'
                                        ? renderText(renderFooter, _styles.Footer) : renderFooter()
                                ) : null
                        return (
                            <View style={[_styles.ListWrapper, style]}>
                                <View style={_styles.ListView}>
                                    {
                                        renderHeader
                                    }
                                </View>
                                <View style={_styles.Body}>
                                    {
                                        children && children
                                    }
                                </View>
                                <View style={_styles.ListView}>
                                    {
                                        renderFooter
                                    }
                                </View>
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
