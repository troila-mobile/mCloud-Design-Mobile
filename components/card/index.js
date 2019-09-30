import React from 'react'
import {
    View,
    Text,
    Image,
    ViewPropTypes,
    TouchableOpacity,
} from "react-native"
import { WithTheme } from '../style'
import CardStyles from './style'
import PropTypes from 'prop-types'

export default class Card extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        title: PropTypes.string,
        titleStyle: ViewPropTypes.style,
        titleNumberOfLines: PropTypes.number,
        content: PropTypes.string,
        contentStyle: ViewPropTypes.style,
        contentNumberOfLines: PropTypes.number,
        image: PropTypes.object,
        imageStyle: PropTypes.object,
        imageOnPress: PropTypes.func,
        showBorderLine: PropTypes.bool,
        cardOnPress: PropTypes.func,
        style: ViewPropTypes.style,
        styles: PropTypes.object,
    }
    static defaultProps = {
        type: 'horizontal',
        title: '标题',
        titleStyle: {},
        titleNumberOfLines: 0,
        content: '内容',
        contentStyle: {},
        contentNumberOfLines: 2,
        image: {},
        imageStyle: {},
        imageOnPress: () => {},
        showBorderLine: true,
        cardOnPress: () => {},
        style: {},
        styles: {},
    }
    render() {
        const{
            type,
            title,
            titleStyle,
            titleNumberOfLines,
            content,
            contentStyle,
            contentNumberOfLines,
            image,
            imageStyle,
            imageOnPress,
            showBorderLine,
            cardOnPress,
            style,
            styles,
        } = this.props
        return(
            <WithTheme themeStyles={CardStyles} styles={styles}>
                {
                    (_styles) => {
                        const containerStyle = [
                            _styles[`${type}Style`],
                            _styles.containerPaddingRight,
                            style,
                        ]
                        const titleStyle = [
                            _styles.titleStyle,
                            titleStyle
                        ]
                        const contentStyle = [
                            _styles.contentStyle,
                            contentStyle,
                        ]
                        const imageButtonStyle = [
                            _styles.imageStyle,
                            _styles.card_image_BG_color
                        ]
                        const imageStyle = [
                            _styles.imageStyle
                        ]
                        return (
                            <TouchableOpacity style={containerStyle}>
                                {type==='vertical'&&JSON.stringify(image) !== "{}"
                                    // eslint-disable-next-line max-len
                                    ?<TouchableOpacity style={imageButtonStyle} onPress={() => { cardOnPress && cardOnPress }}><Image source={image} /></TouchableOpacity> : null}
                                <View style={{ flex:1 }}>
                                    <Text style={titleStyle}>{title}</Text>
                                    <Text style={contentStyle}>{content}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            </WithTheme>
        )
    }
}