import React from 'react'
import PropTypes from 'prop-types'

export default function (ComposedComponent) {
    return class extends React.Component {
        static defaultProps = {
            prefixCls: 'rmc-multi-picker',
            onValueChange() { },
        };
        static propTypes = {
            children: PropTypes.any,
            selectedValue: PropTypes.any,
            onValueChange: PropTypes.func,
            prefixCls: PropTypes.string,
            onScrollChange: PropTypes.func,
        }
        getValue = () => {
            const { children, selectedValue } = this.props
            if (selectedValue && selectedValue.length) {
                return selectedValue
            } else {
                if (!children) {
                    return []
                }
                return React.Children.map(children, (c) => {
                    const cc = React.Children.toArray(
                        c.children || c.props.children,
                    )
                    return cc && cc[0] && cc[0].props.value
                })
            }
        };
        onChange = (i, v, cb) => {
            const value = this.getValue().concat()
            value[i] = v
            if (cb) {
                cb(value, i)
            }
        };
        onValueChange = (i, v) => {
            const {
                onValueChange,
            } = this.props
            this.onChange(i, v, onValueChange)
        };
        onScrollChange = (i, v) => {
            const {
                onScrollChange,
            } = this.props
            this.onChange(i, v, onScrollChange)
        };
        render() {
            const {
                onScrollChange,
            } = this.props
            return (
                <ComposedComponent
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...this.props}
                    getValue={this.getValue}
                    onValueChange={this.onValueChange}
                    onScrollChange={onScrollChange && this.onScrollChange}
                />
            )
        }
    }
}
