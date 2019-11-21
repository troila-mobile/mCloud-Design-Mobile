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
        required: PropTypes.bool,
        disabled: PropTypes.bool,
    }
    static defaultProps = {
        style: {},
        styles: {},
        hideLine: false,
        numberOfLines: 1,
        required: false,
        disabled: false,
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
            required,
            disabled,
        } = this.props
        return (
            <WithTheme themeStyles={ItemStyles} styles={styles}>
                {
                    (_styles) => {
                        let renderThumb
                        let RightViewStyle = [
                            _styles.RightView,
                        ]
                        if (thumb) {
                            RightViewStyle = [
                                _styles.RightView,
                                _styles.RightViewMargin,
                            ]
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
                                <View style={_styles.ContentView}>{temprenderContent}</View>
                            )
                        } else {
                            if (children && React.isValidElement(children)) {
                                renderContent = <View style={_styles.ContentView}>{children}</View>
                            } else {
                                renderContent = (
                                    <View style={_styles.ContentView}>
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
                                <View style={_styles.ExtraView}>
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
                                style={style}
                                onPress={onPress}
                                onPressIn={onPressIn}
                                onPressOut={onPressOut}
                                onLongPress={onLongPress}
                                delayLongPress={delayLongPress}
                                disabled={disabled}
                            >
                                <View style={_styles.Item}>
                                    {
                                        renderThumb
                                    }
                                    <View style={RightViewStyle}>
                                        <View style={_styles.ContentViewWarp}>
                                            {
                                                required && <Text style={_styles.RequiredText}>*</Text>
                                            }
                                            {
                                                renderContent
                                            }
                                        </View>
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
