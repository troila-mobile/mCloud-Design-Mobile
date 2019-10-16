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
        height:20,
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
    itemHeight;
    itemWidth;
    scrollBuffer;
    scrollerRef;
    contentRef;
    indicatorRef;
    componentDidUpdate() {
        const {
            select,
            selectedValue,
        } = this.props
        select(selectedValue, this.itemHeight, this.scrollTo)
    }
    componentWillUnmount() {
        this.clearScrollBuffer()
    }
    onItemLayout = (e) => {
        const { height, width } = e.nativeEvent.layout
        // console.log('onItemLayout', height);
        if (this.itemHeight !== height || this.itemWidth !== width) {
            this.itemWidth = width
            if (this.indicatorRef) {
                this.indicatorRef.setNativeProps({
                    style: [
                        styles.indicator,
                        {
                            top: height * 3,
                            height: height + 2,
                            width,
                        },
                    ],
                })
            }
        }
        if (this.itemHeight !== height) {
            this.itemHeight = height
            if (this.scrollerRef) {
                (this.scrollerRef).setNativeProps({
                    style: {
                        height: height * 7,
                    },
                })
            }
            if (this.contentRef) {
                this.contentRef.setNativeProps({
                    style: {
                        paddingTop: height * 3,
                        paddingBottom: height * 3,
                    },
                })
            }

            // i do no know why!...
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
            }, 0)
        }
    };
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
            selectedValue : oldselectedValue,
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
                    onLayout={index === 0 ? this.onItemLayout : undefined}
                    key={item.key}
                    style={{
                        paddingVertical:7,
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
                    style={styles.scrollView}
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
                    <View ref={(el) => (this.contentRef = el)}>{items}</View>
                </ScrollView>
                <View ref={(el) => (this.indicatorRef = el)} style={styles.indicator} pointerEvents="none" />
            </View>
        )
    }
}

export default PickerMixin(Picker)
