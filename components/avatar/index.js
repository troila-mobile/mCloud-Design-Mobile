import React from 'react'
import { WithTheme } from '../style'
import AvatarStyles from './style'
import PropTypes from 'prop-types'
import Image from './Avatar'

const defaultImage = require('./assets/default.png')

export default class Avatar extends React.Component {
    static propTypes = {
        source: PropTypes.any,
        size: PropTypes.number,
        styles: PropTypes.object,
        type: PropTypes.string,// normal
        defaultAvatar:PropTypes.any,
    }
    static defaultProps = {
        size:70,
        type:'normal',
        defaultAvatar:defaultImage,
    }
    render() {
        const {
            styles,
            size,
            source,
            type,
            defaultAvatar,
        } = this.props
        return (
            <WithTheme themeStyles={AvatarStyles} styles={styles}>
                {
                    (_styles) => {
                        const borderStyle = [
                            _styles[`${type}Border`],
                        ]

                        return (

                            <Image
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
