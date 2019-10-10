import React from 'react'
import {
    View,
    Text,
    ViewPropTypes,
    TouchableHighlight,
} from 'react-native'
import { WithTheme } from '../style'
import ButtonStyles from './style'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class extends React.Component {
    static propTypes = {
        style: ViewPropTypes.style,
        styles: PropTypes.object,
        children: PropTypes.any,
        numberOfLines:PropTypes.number,
    }
    static defaultProps = {
        style: {},
        styles: {},
        children: null,
        numberOfLines:1,
    };
    render() {
        const {
            style,
            styles,
            children,
            numberOfLines,
        } = this.props
        return (
            <WithTheme themeStyles={ButtonStyles} styles={styles}>
                {
                    (_styles) => {
                        const itemStyle = [
                            _styles.itemContainer,
                            style,
                        ]
                        let content
                        if (children && React.isValidElement(children)) {
                            content = <View style={_styles.column}>{children}</View>
                        } else {
                            content = (
                                <View style={_styles.column}>
                                    <Text style={_styles.content} numberOfLines={numberOfLines}>
                                        {children}
                                    </Text>
                                </View>
                            )
                        }
                        // let extraElement
                        // if (_.isString(extra)) {
                        //     extraElement = (
                        //         <View style={[itemStyles.column]}>
                        //             <Text style={itemStyles.extra} numberOfLines={numberOfLines}>
                        //                 {extra}
                        //             </Text>
                        //         </View>
                        //     )
                        // } else if (React.isValidElement(extra)) {
                        //     const extraChildren = extra.props.children
                        //     if (Array.isArray(extraChildren)) {
                        //         const tempExtraDom = []
                        //         extraChildren.forEach((el, index) => {
                        //             if (typeof el === 'string') {
                        //                 tempExtraDom.push(
                        //                     <Text
                        //                         {...numberOfLines}
                        //                         style={[itemStyles.Extra]}
                        //                         key={`${index}-children`}
                        //                     >
                        //                         {el}
                        //                     </Text>,
                        //                 )
                        //             } else {
                        //                 tempExtraDom.push(el)
                        //             }
                        //         })
                        //         extraDom = (
                        //             <View style={[itemStyles.column]}>{tempExtraDom}</View>
                        //         )
                        //     } else {
                        //         extraDom = extra
                        //     }
                        // }
                        return (
                            <TouchableHighlight
                                style={itemStyle}
                            >
                                {content}
                                <View style={_styles.bottomLiner} />
                            </TouchableHighlight>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
