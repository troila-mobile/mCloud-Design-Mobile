/**
 * Created by wy on 2019/9/30.
 */
import React from 'react'
import {
    ViewPropTypes, View,
    TouchableOpacity, Text, ScrollView, Dimensions,
} from 'react-native'
import { WithTheme } from '../style'
import TabsStyles from './style'
import PropTypes from 'prop-types'
import {  TabView } from 'react-native-tab-view'

const screenW = Dimensions.get('window').width

export default class Tabs extends React.Component {
    static propTypes = {
        styles: ViewPropTypes.style,
        tabStyle: ViewPropTypes.style,
        labelStyle: ViewPropTypes.style,
        indicatorStyle:ViewPropTypes.style,
        onIndexChange_Tabs: PropTypes.func,
        renderScene:PropTypes.func,
        navigationState:PropTypes.object,
        labelWidth:PropTypes.number,
        routesArray:PropTypes.array,
        UIColor:PropTypes.string,
        scrollEnabled:PropTypes.bool,
    }
    static defaultProps = {
        styles: {},
        tabStyle:{},
        labelStyle:{},
        indicatorStyle:{},
        UIColor:'#000',
        onIndexChange_Tabs:() => {} ,
        renderScene:() => {} ,
        navigationState:null,
        labelWidth:null,
        routesArray:[],
        scrollEnabled:false,
    };
    constructor(props) {
        super(props)
        this.state = {
            index:  0,
            screen_W:screenW || this.props.indicatorStyle.width,
            // eslint-disable-next-line react/no-unused-state
            scrollX:0,
        }
    }
    // eslint-disable-next-line react/sort-comp
    _isScroll(index) {
        const number = this.props.routesArray.length
        const  scrollView_width = number *  this.props.labelWidth
        if (scrollView_width > this.state.screen_W) {
            const  scrollView_l = (index + 1) * this.props.labelWidth
            if (scrollView_l > this.state.screen_W) {
                // eslint-disable-next-line react/no-access-state-in-setstate
                const scrollView_x = scrollView_l - this.state.screen_W
                this.scrollView.scrollTo({ x: scrollView_x, y: 0, animated: true }, 1)
                // eslint-disable-next-line react/no-unused-state
                this.setState({ scrollX:scrollView_x })
            } else {
                const scrollView_x = 0
                this.scrollView.scrollTo({ x: scrollView_x, y: 0, animated: true }, 1)
                // eslint-disable-next-line react/no-unused-state
                this.setState({ scrollX:scrollView_x })
            }
        }
    }
_renderTabBar = (props) => {
    const {
        styles,
        tabStyle,
        labelStyle,
        UIColor,
        indicatorStyle,
        labelWidth,
        scrollEnabled,
    } = this.props
    return (
        <WithTheme themeStyles={TabsStyles} styles={styles}>
            {
                (_styles,theme) => {
                    const _tabStyle = [
                        {
                            width: labelWidth  ,
                        },
                        _styles.tabStyle,
                        tabStyle,
                    ]
                    const _TabBarWrapper =  _styles.TabBarWrapper
                    const _labelStyle = [
                        _styles.labelStyle,
                        labelStyle,
                    ]
                    const  _indicatorStyle = [
                        {
                            width: labelWidth * 0.6 ,
                        },
                        _styles.indicatorStyle,
                        indicatorStyle,
                    ]
                    return (
                        <View style={_TabBarWrapper}>
                            <ScrollView
                                style={_styles.TabBarWrapperScrollView}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                scrollEnabled={scrollEnabled}
                                ref={(scrollView) => this.scrollView = scrollView}
                            >
                                {this.props.routesArray.map((route, i) => (
                                    <TouchableOpacity
                                        style={_tabStyle}
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={`${i}Tabbar`}
                                        onPress={() => {
                                            this.setState({ index:i })
                                            this._isScroll(i)
                                            this.props.onIndexChange_Tabs && this.props.onIndexChange_Tabs(i) }}
                                    >
                                        <Text style={
                                            [_labelStyle,
                                                { color: this.state.index === i ? UIColor : theme.label_textColor }]
                                        }
                                        >
                                            {route.title}
                                        </Text>
                                        <View style={_styles.wrapper} />
                                        <View style={
                                            [_indicatorStyle,{
                                                backgroundColor:this.state.index === i
                                                    ? UIColor : theme.tabs_indicator_Color,
                                            }]
                                        }
                                        />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    )
                }
            }
        </WithTheme>

    )
};
render() {
    const {
        styles,
        navigationState,
        onIndexChange_Tabs,
        renderScene,
    } = this.props
    return (
        <WithTheme themeStyles={TabsStyles} styles={styles}>
            {
                (_styles,theme) => (
                    <TabView
                        navigationState={navigationState}
                        renderScene={renderScene}
                        renderTabBar={this._renderTabBar}
                        onIndexChange={(index) => {
                            this.setState({ index })
                            this._isScroll(index)
                            onIndexChange_Tabs && onIndexChange_Tabs(index)
                        }}
                        initialLayout={_styles.initialLayout}
                    />
                )
            }
        </WithTheme>
    )
}
}
