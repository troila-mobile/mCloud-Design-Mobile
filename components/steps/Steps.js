import React from 'react'
import {
    ViewPropTypes, View,
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
        direction: PropTypes.oneOf(['vertical', 'horizontal']),
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
    render() {
        const {
            style,
            styles,
            size,
            direction,
            current,
            children,
        } = this.props
        const stepDirection = direction === 'vertical' ? 'column' : 'row'
        return (
            <WithTheme themeStyles={StepsStyles} styles={styles}>
                {
                    (_styles) => {
                        const container = [
                            _styles.stepsContainer,
                            style,
                        ]

                        return (
                            <View style={[container, { flexDirection: stepDirection }]}>
                                {
                                    React.Children.map(children, (item, index) => {
                                        let errorTail = -1
                                        if (index < children.length - 1) {
                                            const { status } = children[index + 1].props
                                            if (status === 'error') {
                                                errorTail = index
                                            }
                                        }
                                        return React.cloneElement(item, {
                                            index,
                                            last: index === children.length - 1,
                                            direction,
                                            current,
                                            size,
                                            errorTail,
                                            styles,
                                            style,
                                        })
                                    })
                                }
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
