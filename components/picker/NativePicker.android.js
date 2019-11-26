import React from 'react'
import {
    ScrollView, StyleSheet, Text, View,
} from 'react-native'
import PickerMixin from './PickerMixin'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        left: 0,
        top: -99,
        borderColor: '#586BFB',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },

    scrollView: {
        height: 0,
    },

    selectedItemText: {
        fontSize: 20,
        fontWeight: '300',
        color: '#333',
    },

    itemText: {
        fontSize: 18,
        color: '#aaa',
        textAlign: 'center',
        height: 20,
    },
})


class Picker extends React.Component {
    static propTypes = {
        select: PropTypes.func,
        selectedValue: PropTypes.any,
        onValueChange: PropTypes.func,
        doScrollingComplete: PropTypes.func,
        children: PropTypes.any,
        itemStyle: PropTypes.object,
        style: PropTypes.object,
        styles: PropTypes.object,
    }
    itemHeight = 35;
    itemWidth;
    scrollBuffer;
    scrollerRef;
    contentRef;
    indicatorRef;
    componentDidMount() {
        setTimeout(() => {
            const {
                select,
                selectedValue,
            } = this.props
            select(
                selectedValue,
                this.itemHeight,
                this.scrollTo,
            )
        }, 1)
    }
    componentDidUpdate() {
        const {
            select,
            selectedValue,
        } = this.props
        select(
            selectedValue,
            this.itemHeight,
            this.scrollTo,
        )
    }
    componentWillUnmount() {
        this.clearScrollBuffer()
    }
    scrollTo = (y) => {
        if (this.scrollerRef) {
            this.scrollerRef.scrollTo({
                y,
                animated: false,
            })
        }
    };
    fireValueChange = (selectedValue) => {
        const {
            selectedValue: oldselectedValue,
            onValueChange,
        } = this.props
        if (
            oldselectedValue !== selectedValue
            && onValueChange
        ) {
            onValueChange(selectedValue)
        }
    };
    onScroll = (e) => {
        const { y } = e.nativeEvent.contentOffset
        const { doScrollingComplete } = this.props
        this.clearScrollBuffer()
        this.scrollBuffer = setTimeout(() => {
            this.clearScrollBuffer()
            doScrollingComplete(y, this.itemHeight, this.fireValueChange)
        }, 50)
    };
    clearScrollBuffer() {
        if (this.scrollBuffer) {
            clearTimeout(this.scrollBuffer)
        }
    }
    render() {
        const {
            children, itemStyle, selectedValue, style, styles: _styles,
        } = this.props
        const items = React.Children.map(children, (item, index) => {
            const totalStyle = [_styles.pickerAndroidItemText]
            if (selectedValue === item.props.value) {
                totalStyle.push(_styles.pickerAndroidSelectedItemText)
            }
            return (
                <View
                    ref={(el) => ((this)[`item${index}`] = el)}
                    key={item.key}
                    style={{
                        height: 35,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={[{ includeFontPadding: false }, totalStyle, itemStyle]}
                        numberOfLines={1}
                    >
                        {item.props.label}
                    </Text>
                </View>
            )
        })
        return (
            <View style={style}>
                <ScrollView
                    style={[
                        styles.scrollView,
                        {
                            height: this.itemHeight * 7,
                        },
                    ]}
                    ref={(el) => (this.scrollerRef = el)}
                    onScroll={this.onScroll}
                    showsVerticalScrollIndicator={false}
                    overScrollMode="never"
                    renderToHardwareTextureAndroid
                    scrollEventThrottle={10}
                    needsOffscreenAlphaCompositing
                    collapsable
                    horizontal={false}
                    removeClippedSubviews
                >
                    <View
                        ref={(el) => (this.contentRef = el)}
                        style={{
                            paddingTop: this.itemHeight * 3,
                            paddingBottom: this.itemHeight * 3,
                        }}
                    >
                        {items}
                    </View>
                </ScrollView>
                <View
                    ref={(el) => (this.indicatorRef = el)}
                    style={[styles.indicator, {
                        top: this.itemHeight * 3,
                        height: this.itemHeight + 2,
                        right: 0,
                    }]}
                    pointerEvents="none"
                />
            </View>
        )
    }
}

export default PickerMixin(Picker)
