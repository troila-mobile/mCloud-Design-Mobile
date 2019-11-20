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
        style: PropTypes.object,
    }
    static defaultProps = {
        size:70,
        type:'normal',
        defaultAvatar:defaultImage,
        style:{},
    }
    state={
        imageSource: defaultImage,
    }
    componentDidMount() {
        const { source, defaultAvatar } = this.props
        this.setState({
            imageSource: source || defaultAvatar,
        })
    }
    render() {
        const {
            styles,
            size,
            type,
            defaultAvatar,
            style,
        } = this.props
        const { imageSource } = this.state
        return (
            <WithTheme themeStyles={AvatarStyles} styles={styles}>
                {
                    (_styles) => {
                        const borderStyle = [
                            _styles[`${type}Border`],style,
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
                                source={imageSource}
                                onError={() => {
                                    this.setState({
                                        imageSource: defaultAvatar,
                                    }) }}
                            />

                        )
                    }
                }
            </WithTheme>
        )
    }
}
