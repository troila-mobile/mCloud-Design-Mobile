import React from 'react'
import { WithTheme } from '../style'
import AvatarStyles from './style'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import { Image } from 'react-native'

const defaultImage = require('./assets/default.png')

export default class Avatar extends React.Component {
    static propTypes = {
        source: PropTypes.object,
        size: PropTypes.number,
        styles: PropTypes.object,
        type: PropTypes.string,// normal
        defaultAvatar:PropTypes.object,
        web:PropTypes.bool,
    }
    static defaultProps = {
        size:70,
        type:'normal',
        defaultAvatar:defaultImage,
        web:false,
    }
    render() {
        const {
            styles,
            size,
            source,
            type,
            defaultAvatar,
            web,
        } = this.props
        return (
            <WithTheme themeStyles={AvatarStyles} styles={styles}>
                {
                    (_styles) => {
                        const borderStyle = [
                            _styles[`${type}Border`],
                        ]
                        const ImageComponent = web ? Image : FastImage
                        return (

                            <ImageComponent
                                style={[
                                    {
                                        width: size,
                                        height: size,
                                        borderRadius: size / 2,
                                    },
                                    ...borderStyle,
                                ]}
                                source={source || defaultAvatar}
                            />

                        )
                    }
                }
            </WithTheme>
        )
    }
}
