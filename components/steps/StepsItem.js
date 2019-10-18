import React from 'react'
import {
    ViewPropTypes, View, Image, Text,
} from 'react-native'
import { WithTheme } from '../style'
import StepsStyles from './style'
import PropTypes from 'prop-types'
import type { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheet'

const steps_finish = require('./assets/steps_finish.png')
const steps_error = require('./assets/steps_error.png')
const steps_wait = require('./assets/steps_wait.png')

export default class StepsItem extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: ViewPropTypes.style,
        status: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        width: PropTypes.number,
        size: PropTypes.string,
        current: PropTypes.number,
        index: PropTypes.number,
        last: PropTypes.bool,
        direction: PropTypes.string,
        errorTail: PropTypes.number,
    }
    static defaultProps = {
        style: {},
        styles: {},
        status: 'wait',
        title: '',
        description: '',
        width: 60,
        size: 'large',
        current: 0,
        index: 0,
        last: false,
        direction: 'vertical',
        errorTail: 0,
    }
    render() {
        const {
            style,
            styles,
            status,
            title,
            description,
            width,
            size,
            current,
            index,
            last,
            direction,
            errorTail,
        } = this.props
        const finish = index < current || status === 'finish' || index === current || status === 'process'
        const error = status === 'error'
        const wait = index > current || status === 'wait'
        return (
            <WithTheme themeStyles={StepsStyles} styles={styles}>
                {
                    (_styles) => {
                        let topStepColor = ''
                        let bottomStepColor = ''
                        const itemSize = size === 'large' ? '_large' : '_small'

                        if (index < current || status === 'finish') {
                            topStepColor = 'line_blue'
                            bottomStepColor = 'line_blue'
                        } else if (index === current || status === 'process') {
                            topStepColor = 'line_blue'
                            bottomStepColor = 'line_gray'
                        } else if (index > current || status === 'wait') {
                            topStepColor = 'line_gray'
                            bottomStepColor = 'line_gray'
                        } else if (status === 'error') {
                            topStepColor = 'line_gray'
                            bottomStepColor = 'line_gray'
                        }

                        if (last) {
                            topStepColor = 'line_last'
                            bottomStepColor = 'line_last'
                        }

                        if (errorTail > -1) {
                            bottomStepColor = 'line_error'
                        }

                        const isHorizontal = direction === 'horizontal'
                        const parentStyle: ViewStyle = isHorizontal ? {
                            flexDirection: 'column',
                        } : { flexDirection: 'row' }
                        const childStyle: ViewStyle = isHorizontal ? {
                            flexDirection: 'row',
                            flew: 1,
                        } : { flexDirection: 'column' }

                        let styleSuffix: string = ''
                        if (isHorizontal) {
                            styleSuffix = '_horizontal'
                        }

                        let imageSource
                        if (finish) {
                            imageSource = (
                                <Image
                                    source={steps_finish}
                                    resizeMode="stretch"
                                />
                            )
                        } else if (error) {
                            imageSource = (
                                <Image
                                    source={steps_error}
                                    resizeMode="stretch"
                                />
                            )
                        } else if (wait) {
                            imageSource = (
                                <Image
                                    source={steps_wait}
                                    resizeMode="stretch"
                                />
                            )
                        }

                        return (
                            <View style={[parentStyle, style]}>
                                <View style={childStyle}>
                                    <View style={_styles[`image_style${itemSize}`]}>
                                        {React.isValidElement(imageSource) ? imageSource : null}
                                    </View>
                                    {
                                        <View
                                            style={[
                                                _styles[`line_default${itemSize}${styleSuffix}`],
                                                _styles[topStepColor],
                                            ]}
                                        />
                                    }
                                    {
                                        <View
                                            style={[
                                                _styles[`line_default${itemSize}${styleSuffix}`],
                                                _styles[bottomStepColor],
                                            ]}
                                        />
                                    }
                                </View>
                                <View style={_styles[`content${itemSize}${styleSuffix}`]}>
                                    {typeof title !== 'object'
                                        ? (
                                            <Text style={[_styles[`title_style${itemSize}`]]} numberOfLines={1}>
                                                {title}
                                            </Text>
                                        ) : (
                                            <View>{title}</View>
                                        )}
                                    {typeof description !== 'object' ? (
                                        <Text style={[_styles[`description_style${itemSize}`]]} numberOfLines={3}>
                                            {description}
                                        </Text>
                                    ) : (
                                        <View>{description}</View>
                                    )}
                                </View>
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
