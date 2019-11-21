import React from 'react'
import { View, ViewPropTypes, Text } from 'react-native'
import { WithTheme } from '../style'
import BriefStyles from './style'
import PropTypes from 'prop-types'

export default class Brief extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        children: PropTypes.any,
        numberOfLines: PropTypes.number,
    }
    static defaultProps = {
        style: {},
        styles: {},
        numberOfLines: 1,
    }
    render() {
        const {
            style,
            styles,
            children,
            numberOfLines,
        } = this.props
        if (!children) {
            return null
        }
        return (
            <WithTheme themeStyles={BriefStyles} styles={styles}>
                {
                    (_styles) => (
                        <View style={[_styles.Brief, style]}>
                            <Text style={_styles.BriefText} numberOfLines={numberOfLines}>
                                {
                                    children
                                }
                            </Text>
                        </View>
                    )
                }
            </WithTheme>
        )
    }
}
