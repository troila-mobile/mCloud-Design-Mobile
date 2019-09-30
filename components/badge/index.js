import React from 'react'
import {
    View,
    Text,
    Image,
    ViewPropTypes,
    TouchableOpacity,
} from "react-native"
import { WithTheme } from '../style'
import BadgeStyles from './style'
import PropTypes from 'prop-types'

const nextIcon = require('./assets/badge_next.png')

export default class Badge extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        text: PropTypes.string,
        textStyle: ViewPropTypes.style,
        count: PropTypes.number,
        showBadge: PropTypes.bool,
        onPress: PropTypes.func,
        style: ViewPropTypes.style,
        styles: PropTypes.object,
    }
    static defaultProps = {
        type: 'redPoint',
        text: '',
        textStyle: {},
        count:0,
        showBadge: true,
        onPress: () => {},
        style: {},
        styles: {},
    }
    render() {
        const{
            type,
            text,
            textStyle,
            count,
            showBadge,
            onPress,
            style,
            styles,
        } = this.props
        return(
            <WithTheme themeStyles={BadgeStyles} styles={styles}>
                {
                    (_styles) => {
                        const containerStyle = [
                            _styles.badgeContainer,
                            style,
                        ]
                        const textStyle = [
                            _styles.textStyle,
                            textStyle
                        ]
                        const badgeStyle = [
                            _styles[`${type}Style`],
                            _styles.badge_marginRight
                        ]
                        const numberStyle = [
                            _styles.numberFont
                        ]
                        const newStyle = [
                            _styles.newStyle,
                            _styles.badge_marginRight
                        ]
                        const rightView = [
                            _styles.rightView
                        ]

                        const countTxt = count>99?'99+':count

                        return (
                            <TouchableOpacity style={[containerStyle]} onPress={onPress&&onPress()}>
                                <Text style={[textStyle]}>
                                    {text}
                                </Text>
                                <View style={rightView}>
                                    {type==='new'
                                        ?<Text style={[newStyle]}>NEW</Text>
                                        : null}
                                    {type==='number'
                                        ? <View style={badgeStyle}><Text style={numberStyle}>{countTxt}</Text></View>
                                        :null}
                                    {type==='redPoint'
                                        ? <View style={badgeStyle}></View>
                                        :null}
                                    <Image source={nextIcon} />
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            </WithTheme>
        )
    }
}