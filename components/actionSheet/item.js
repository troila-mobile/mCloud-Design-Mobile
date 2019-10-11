import React from 'react'
import {
    Text,
    TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import { WithTheme } from '../style'

export default class Item extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        textStyle: PropTypes.object,
        event: PropTypes.func,
    }
    static defaultProps = {
        text:'',
        textStyle:{},
    }
    render() {
        const {
            text,
            textStyle,
            event,
        } = this.props
        return (
            <WithTheme>
                <TouchableOpacity onPress={() => event()}>
                    <Text style={textStyle}>{text}</Text>
                </TouchableOpacity>
            </WithTheme>

        )
    }
}
