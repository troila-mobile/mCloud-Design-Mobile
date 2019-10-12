import React from 'react'
import {
    ViewPropTypes, Image, Text, View,
} from 'react-native'
import { WithTheme } from '../style'
import StepsStyles from './style'
import PropTypes from 'prop-types'

export default class Steps extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        current: PropTypes.number,
        size: PropTypes.string,
        direction: PropTypes.string,
        children: PropTypes.any,
    }

    static defaultProps = {
        style: {},
        styles: {},
        current: 0,
        size: 'large',
        direction: 'vertical',
        children: null,
    }

    constructor(props) {
        super(props)
        this.state = {
            value: 1,
        }
    }

    render() {
        const {
            style,
            styles,
            current,
            size,
            direction,
            children,
        } = this.props
        const { value } = this.state
        return (
            <WithTheme themeStyles={StepsStyles} styles={styles}>
                {

                }
            </WithTheme>
        )
    }
}
