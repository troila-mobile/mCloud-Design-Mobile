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
        style: PropTypes.any,
    }
    shouldComponentUpdate(nextProps) {
        const {
            selectedValue,
            children,
        } = this.props
        return (
            selectedValue !== nextProps.selectedValue
            || children !== nextProps.children
        )
    }
    getValue() {
        const {
            selectedValue,
            children : oldChildren,
        } = this.props
        if ('selectedValue' in this.props) {
            return selectedValue
        }
        const children = React.Children.toArray(oldChildren)
        return children && children[0] && children[0].props.value
    }
    render() {
        const {
            children: oldChildren,
        } = this.props
        const children = React.Children.map(oldChildren, (c) => (
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
