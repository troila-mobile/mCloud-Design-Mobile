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
        icon: PropTypes.string,
        renderIcon: PropTypes.string,

        width: PropTypes.number,
        size: PropTypes.string,
        current: PropTypes.number,
        index: PropTypes.number,
        last: PropTypes.bool,
        direction: PropTypes.string,
        errorTail: PropTypes.number,

        finish: PropTypes.bool,
        error: PropTypes.bool,
        wait: PropTypes.bool,
    }

    static defaultProps = {
        style: {},
        styles: {},
        status: 'wait',
        title: '',
        description: '',
        icon: null,
        renderIcon: null,

        width: 60,
        size: 'large',
        current: 0,
        index: 0,
        last: false,
        direction: 'vertical',
        errorTail: 0,

        finish: false,
        error: false,
        wait: false,
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {
            style,
            styles,
            status,
            title,
            description,
            icon,
            renderIcon,

            width,
            size,
            current,
            index,
            last,
            direction,
            errorTail,

            finish = index < current || status === 'finish' || index === current || status === 'process',
            error = status === 'error',
            wait = index > current || status === 'wait',
        } = this.props
        return (
            <WithTheme themeStyles={StepsStyles} styles={styles}>
                {
                    (_styles) => {
                        let headStepColor: string = ''
                        let topStepColor: string = ''
                        let bottomStepColor: string = ''
                        const size: string = size === 'large' ? '_large' : '_small'

                        if (index < current || status === 'finish') {
                            headStepColor = `head_blue${size}`
                            topStepColor = 'tail_blue'
                            bottomStepColor = 'tail_blue'
                        } else if (index === current || status === 'process') {
                            headStepColor = `head_blue${size}`
                            topStepColor = 'tail_blue'
                            bottomStepColor = 'tail_gray'
                        } else if (index > current || status === 'wait') {
                            headStepColor = `head_gray${size}`
                            topStepColor = 'tail_gray'
                            bottomStepColor = 'tail_gray'
                        } else if (status === 'error') {
                            headStepColor = `head_red${size}`
                            topStepColor = 'tail_gray'
                            bottomStepColor = 'tail_gray'
                        }

                        if (last) {
                            topStepColor = 'tail_last'
                            bottomStepColor = 'tail_last'
                        }

                        if (errorTail > -1) {
                            bottomStepColor = 'tail_error'
                        }

                        let imageSource
                        if (renderIcon) {
                            imageSource = renderIcon({
                                finish,
                                wait,
                                error,
                            })
                        } else {
                            if (finish) {
                                imageSource = (
                                    <Image source={steps_finish}/>
                                )
                            } else if (wait) {
                                imageSource = (
                                    <Image source={steps_wait}/>
                                )
                                if (!!icon) {
                                    imageSource = icon
                                }
                            } else if (error) {
                                imageSource = (
                                    <Image source={steps_error}/>
                                )
                            }
                        }

                        const isHorizontal = direction === 'horizontal'
                        const parentStyle: ViewStyle = isHorizontal ? {
                            flexDirection: 'row',
                        } : { flexDirection: 'column' }
                        const childStyle: ViewStyle = isHorizontal ? {
                            flexDirection: 'row',
                            flex: 1,
                        } : { flexDirection: 'column' }

                        let styleSuffix: string = ''
                        if (isHorizontal) {
                            styleSuffix = '_horizontal'
                        }

                        return (
                            <View style={parentStyle}>
                                <View style={childStyle}>
                                    <View style={[_styles[`steps_head${size}`], _styles[headStepColor]]}>
                                        {React.isValidElement(imageSource) ? imageSource : null}
                                    </View>
                                    {
                                        <View>
                                            {
                                                <View
                                                    style={[
                                                        _styles[`tail_default${size}${styleSuffix}`],
                                                        _styles[topStepColor],
                                                    ]}
                                                />
                                            }
                                            {
                                                <View
                                                    style={[
                                                        _styles[`tail_default${size}${styleSuffix}`],
                                                        _styles[bottomStepColor],
                                                    ]}
                                                />
                                            }
                                        </View>
                                    }
                                </View>
                                <View style={_styles[`content${size}${styleSuffix}`]}>
                                    {typeof title !== 'object' ? (
                                        <Text style={[_styles[`title_style${size}`]]}>{title}</Text>
                                    ) : (
                                        <View>{title}</View>
                                    )}
                                    {typeof description !== 'object' ? (
                                        <Text style={[_styles[`description_style${size}`]]}>
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
