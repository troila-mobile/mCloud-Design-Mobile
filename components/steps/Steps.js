import React from 'react'
import {
    ViewPropTypes, View,
} from 'react-native'
import { WithTheme } from '../style'
import StepsStyles from './style'
import PropTypes from 'prop-types'
import StepsItem from './StepsItem'

Steps.Step = StepsItem

export default class Steps extends React.Component {
    static Step: typeof StepsItem

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
    }

    render() {
        const {
            style,
            styles,
            current,
            size = this.props.size === 'large' ? 'large' : 'small',
            direction = this.props.direction === 'horizontal' ? 'row' : 'column',
            children,
        } = this.props
        return (
            <WithTheme themeStyles={StepsStyles} styles={styles}>
                {
                    (_styles) => {
                        <View style={[_styles.stepsContainer, { flexDirection: direction }]}>
                            {
                                React.Children.map(children, (item, index) => {
                                    let errorTail = -1
                                    if (index < children.length - 1) {
                                        const status = children[index + 1].props.status
                                        if (status === 'error') {
                                            errorTail = index
                                        }
                                    }
                                    return React.cloneElement(item as PropTypes.any, {
                                        index: index,
                                        last: index === (children as PropTypes.any).length - 1,
                                        direction: direction,
                                        current: current,
                                        size: size,
                                        errorTail: errorTail,
                                        styles: styles,
                                        style: style,
                                    })
                                })
                            }
                        </View>
                    }
                }
            </WithTheme>
        )
    }
}
