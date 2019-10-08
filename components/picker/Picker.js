import React from 'react'
// eslint-disable-next-line import/no-unresolved
import NativePicker from './NativePicker'
import PropTypes from 'prop-types'

const { Item } = NativePicker

class Picker extends React.Component {
    static defaultProps = {
        children: [],
    };
    static Item = () => { };
    static propTypes = {
        selectedValue: PropTypes.any,
        children: PropTypes.any,
    }
    shouldComponentUpdate(nextProps) {
        return (
            this.props.selectedValue !== nextProps.selectedValue
            || this.props.children !== nextProps.children
        )
    }
    getValue() {
        if ('selectedValue' in this.props) {
            return this.props.selectedValue
        }
        const children = React.Children.toArray(this.props.children)
        return children && children[0] && children[0].props.value
    }
    render() {
        const children = React.Children.map(this.props.children, (c) => (
            <Item
                label={`${c.props.children}`}
                value={c.props.value}
                key={c.key}
            />
        ))
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <NativePicker {...this.props}>{children}</NativePicker>
    }
}

export default Picker
