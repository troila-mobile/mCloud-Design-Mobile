import React from 'react'
import {
    View,
    ViewPropTypes,
    TouchableHighlight,
    Image,
    Text,
} from 'react-native'
import { WithTheme } from '../style'
import ItemStyles from './style'
import PropTypes from 'prop-types'

const horizontalSource = require('./assets/arrow_horizontal.png')
const downSource = require('./assets/arrow_down.png')
const upSource = require('./assets/arrow_up.png')

export default class Item extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        onPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
        onLongPress: PropTypes.func,
        delayLongPress: PropTypes.func,
        arrow: PropTypes.oneOf(['horizontal', 'down', 'up']),
        thumb: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        hideLine: PropTypes.bool,
        numberOfLines: PropTypes.number,
        extra: PropTypes.node,
        children: PropTypes.any,
    }
    static defaultProps = {
        style: {},
        styles: {},
        hideLine: false,
        numberOfLines: 1,
    }
    render() {
        const {
            style,
            styles,
            onPress,
            onPressIn,
            onPressOut,
            onLongPress,
            delayLongPress,
            arrow,
            thumb,
            hideLine,
            numberOfLines,
            extra,
            children,
        } = this.props
        return (
            <WithTheme themeStyles={ItemStyles} styles={styles}>
                {
                    (_styles) => {
                        let renderThumb
                        if (thumb) {
                            typeof thumb === 'string' ? renderThumb = (
                                <Image
                                    source={{ uri: thumb }}
                                    style={_styles.Thumb}
                                />
                            ) : (
                                renderThumb = thumb
                            )
                        }
                        let renderContent
                        if (Array.isArray(children)) {
                            const temprenderContent = []
                            children.forEach((el, index) => {
                                if (React.isValidElement(el)) {
                                    temprenderContent.push(el)
                                } else {
                                    temprenderContent.push(
                                        <Text
                                            style={[_styles.Content]}
                                            numberOfLines={numberOfLines}
                                            key={String(index)}
                                        >
                                            {el}
                                        </Text>,
                                    )
                                }
                            })
                            renderContent = (
                                <View style={[_styles.column]}>{temprenderContent}</View>
                            )
                        } else {
                            if (children && React.isValidElement(children)) {
                                renderContent = <View style={[_styles.column]}>{children}</View>
                            } else {
                                renderContent = (
                                    <View style={[_styles.column]}>
                                        <Text style={[_styles.Content]} numberOfLines={numberOfLines}>
                                            {children}
                                        </Text>
                                    </View>
                                )
                            }
                        }
                        const arrowList = {
                            'horizontal': <Image
                                source={horizontalSource}
                                style={_styles.Arrow}
                                resizeMode="contain"
                            />,
                            'down': <Image source={downSource} style={_styles.Arrow} resizeMode="contain" />,
                            'up': <Image source={upSource} style={_styles.Arrow} resizeMode="contain" />,
                        }
                        let renderExtra
                        if (extra) {
                            renderExtra = (
                                <View style={[_styles.column]}>
                                    <Text style={_styles.Extra} numberOfLines={numberOfLines}>
                                        {extra}
                                    </Text>
                                </View>
                            )
                            if (React.isValidElement(extra)) {
                                renderExtra = extra
                            }
                        }
                        return (
                            <TouchableHighlight
                                onPress={onPress}
                                onPressIn={onPressIn}
                                onPressOut={onPressOut}
                                onLongPress={onLongPress}
                                delayLongPress={delayLongPress}
                            >
                                <View style={[_styles.Item, style]}>
                                    {
                                        renderThumb
                                    }
                                    <View style={_styles.RightView}>
                                        {
                                            renderContent
                                        }
                                        {
                                            renderExtra
                                        }
                                        {
                                            arrow && arrowList[arrow]
                                        }
                                    </View>
                                    {
                                        !hideLine && (
                                            <View style={_styles.Line} />
                                        )
                                    }
                                </View>
                            </TouchableHighlight>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
