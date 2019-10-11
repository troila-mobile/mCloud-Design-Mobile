import React from 'react'
import PropTypes from 'prop-types'


const Item = (_props) => null

export default function (ComposedComponent) {
    return class extends React.Component {
        static Item = Item;
        static propTypes = {
            children: PropTypes.any,
        }
        select = (value, itemHeight, scrollTo) => {
            const {
                children: oldChildren,
            } = this.props
            const children = React.Children.toArray(oldChildren)
            for (let i = 0, len = children.length; i < len; i++) {
                if (children[i].props.value === value) {
                    this.selectByIndex(i, itemHeight, scrollTo)
                    return
                }
            }
            this.selectByIndex(0, itemHeight, scrollTo)
        };
        doScrollingComplete = (top, itemHeight, fireValueChange) => {
            const {
                children: oldChildren,
            } = this.props
            const children = React.Children.toArray(oldChildren)
            const index = this.computeChildIndex(top, itemHeight, children.length)
            const child = children[index]
            if (child) {
                fireValueChange(child.props.value)
            } else if (console.warn) {
                console.warn('child not found', children, index)
            }
        };
        computeChildIndex(top, itemHeight, childrenLength) {
            const index = Math.round(top / itemHeight)
            return Math.min(index, childrenLength - 1)
        }
        selectByIndex(index, itemHeight, zscrollTo) {
            const {
                children: oldChildren,
            } = this.props
            if (
                index < 0
                || index >= React.Children.count(oldChildren)
                || !itemHeight
            ) {
                return
            }
            zscrollTo(index * itemHeight)
        }
        render() {
            return (
                <ComposedComponent
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...this.props}
                    doScrollingComplete={this.doScrollingComplete}
                    computeChildIndex={this.computeChildIndex}
                    select={this.select}
                />
            )
        }
    }
}
