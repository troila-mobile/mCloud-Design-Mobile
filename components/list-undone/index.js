import React from 'react'
import {
    View,
    ViewPropTypes,
} from 'react-native'
import { WithTheme } from '../style'
import ButtonStyles from './style'
import PropTypes from 'prop-types'

export default class extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        children: PropTypes.any,
    }
    static defaultProps = {
        style: {},
        styles: {},
        children: null,
    };
    render() {
        const {
            style,
            styles,
            children,
        } = this.props
        return (
            <WithTheme themeStyles={ButtonStyles} styles={styles}>
                {
                    (_styles) => {
                        const listStyle = [
                            _styles.bottomLiner,
                            style,
                        ]
                        return (
                            <View
                                style={listStyle}
                            >
                                {children}
                                <View style={_styles.bottomLiner} />
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
