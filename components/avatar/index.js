import React from 'react'
import { WithTheme } from '../style'
import AvatarStyles from './style'
import PropTypes from 'prop-types'
import Image from './Avatar'

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
    state={
        source: this.props.source,
        error:false,
    }
    static getDerivedStateFromProps(props, state) {
        const { source } = props
        const error = Avatar.getSourceValid(source)
        if (error) {
            return {
                error,
            }
        }
        return null
    }
    static getSourceValid = (source) => {
        let error = false
        if (source) {
            if (typeof (source) === 'object' && !source.uri) {
                error = true
            }
        } else {
            error = true
        }
        return error
    }
    render() {
        const {
            styles,
            size,
            type,
            defaultAvatar,
            style,
        } = this.props
        const { source,error } = this.state
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
                                source={error ? defaultAvatar : source}
                                onError={() => {
                                    this.setState({
                                        error: true,
                                    })
                                }}
                            />

                        )
                    }
                }
            </WithTheme>
        )
    }
}
