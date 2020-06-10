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
        styles: PropTypes.object,
        tabStyle: ViewPropTypes.style,
        labelStyle: ViewPropTypes.style,
        indicatorStyle:ViewPropTypes.style,
        TabBarWrapperStyle: ViewPropTypes.style,
        onIndexChange_Tabs: PropTypes.func,
        renderScene:PropTypes.func,
        navigationState:PropTypes.object,
        labelWidth:PropTypes.number,
        UIColor:PropTypes.string,
        scrollEnabled:PropTypes.bool,
    }
    static defaultProps = {
        styles: {},
        tabStyle:{},
        labelStyle:{},
        indicatorStyle:{},
        TabBarWrapperStyle: {},
        UIColor:'#000',
        onIndexChange_Tabs:() => {} ,
        renderScene:() => {} ,
        navigationState:null,
        labelWidth:null,
        scrollEnabled:false,
    };
    constructor(props) {
        super(props)
        const {
            TabBarWrapperStyle,
            indicatorStyle,
        } = this.props
        this.state = {
            screen_W: (TabBarWrapperStyle && TabBarWrapperStyle.width)
                || (indicatorStyle && indicatorStyle.width) || screenW,
        }
    }
    componentDidMount() {
        const { navigationState } = this.props
        setTimeout(() => {
            this._isScroll(navigationState.index)
        }, 500)
    }
    componentWillReceiveProps(nextProps) {
        const { navigationState } = this.props
        const nextNavigationState = nextProps.navigationState
        if (navigationState.index !== nextNavigationState.index) {
            this._isScroll(nextNavigationState.index)
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
            onIndexChange_Tabs,
            TabBarWrapperStyle,
        } = this.props
        const {
            navigationState:{
                index,
                routes,
            },
        } = props
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
                        const _TabBarWrapper =  [_styles.TabBarWrapper , TabBarWrapperStyle]
                        const _labelStyle = [
                            _styles.labelStyle,
                            labelStyle,
                        ]
                        const  _indicatorStyle = [
                            {
                                width: labelWidth *0.6  ,
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
                                    {routes.map((route, i) => (
                                        <TouchableOpacity
                                            style={_tabStyle}
                                            // eslint-disable-next-line react/no-array-index-key
                                            key={`${i}Tabbar`}
                                            onPress={() => {
                                                this._isScroll(i)
                                                onIndexChange_Tabs(i) }}
                                        >
                                            <Text
                                                style={
                                                    [
                                                        {
                                                            paddingHorizontal: 5,
                                                            textAlign: 'center',
                                                            color: index === i
                                                                ? UIColor : theme.label_textColor,
                                                        },
                                                        _labelStyle]
                                                }
                                                numberOfLines={1}
                                            >
                                                {route.title}
                                            </Text>
                                            <View style={_styles.wrapper} />
                                            <View style={
                                                [_indicatorStyle,{
                                                    backgroundColor:index === i
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
    _isScroll(index) {
        const {
            screen_W,
        } = this.state
        const {
            navigationState,
            labelWidth,
        } = this.props
        const number = navigationState.routes.length
        const  scrollView_width = number *  labelWidth
        if (scrollView_width > screen_W) {
            const  scrollView_l = (index + 1) * labelWidth
            if (scrollView_l > (screen_W / 2)) {
                const scrollView_x = scrollView_l - ((screen_W ) / 2 )
                if ((scrollView_x + (screen_W ) / 2  < scrollView_width - (screen_W ) / 2 )) {
                    if (this.scrollView) {
                        this.scrollView.scrollTo({ x: scrollView_x, y: 0, animated: true }, 1)
                    } else {
                        setTimeout(() => {
                            this.scrollView.scrollTo({ x: scrollView_x, y: 0, animated: true }, 1)
                        }, 1000)
                    }
                } else {
                    if (this.scrollView) {
                        this.scrollView.scrollTo({ x: scrollView_width - screen_W, y: 0, animated: true }, 1)
                    } else {
                        setTimeout(() => {
                            this.scrollView.scrollTo({ x: scrollView_width - screen_W, y: 0, animated: true }, 1)
                        }, 1000)
                    }
                }
            } else {
                const scrollView_x = 0
                if (this.scrollView) {
                    this.scrollView.scrollTo({ x: scrollView_x, y: 0, animated: true }, 1)
                } else {
                    setTimeout(() => {
                        this.scrollView.scrollTo({ x: scrollView_x, y: 0, animated: true }, 1)
                    }, 1000)
                }
            }
        }
    }
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
                                onIndexChange_Tabs(index)
                            }}
                            initialLayout={_styles.initialLayout}
                        />
                    )
                }
            </WithTheme>
        )
    }
}
