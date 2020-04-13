import React from 'react'
import { WithTheme } from '../style'
import AvatarStyles from './style'
import PropTypes from 'prop-types'
import Image from './Avatar'
import { View } from 'react-native'

const defaultImage = require('./assets/default.png')

export default class Avatar extends React.Component {
    static propTypes = {
        source: PropTypes.oneOfType([PropTypes.object,PropTypes.number]).isRequired,
        size: PropTypes.number,
        styles: PropTypes.object,
        type: PropTypes.string,// normal
        defaultAvatar:PropTypes.any,
        style: PropTypes.object,
    }
    static defaultProps = {
        size:70,
        type:'normal',
        defaultAvatar:defaultImage,
        style:{},
    }
    render() {
        const {
            styles,
            size,
            type,
            defaultAvatar,
            style,
            source,
        } = this.props
        return (
            <WithTheme themeStyles={AvatarStyles} styles={styles}>
                {
                    (_styles) => {
                        const borderStyle = [
                            _styles[`${type}Border`],style,
                        ]
                        const imageStyle = [
                            {
                                width: size,
                                height: size,
                                borderRadius: size / 2,
                            },
                            ...borderStyle,
                        ]
                        const defaultStyle = [...imageStyle, { position: 'absolute' }]
                        return (
                            <View>
                                <Image style={defaultStyle} source={defaultAvatar} />
                                <Image style={imageStyle} source={source} />
                            </View>
                        )
                    }
                }
            </WithTheme>
        )
    }
}
