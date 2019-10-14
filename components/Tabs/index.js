/**
 * Created by wy on 2019/9/30.
 */
import React from 'react'
import {
    ViewPropTypes,View,
    TouchableOpacity,Text,
} from 'react-native'
import { WithTheme } from '../style'
import TabsStyles from './style'
import PropTypes from 'prop-types'
import {  TabView } from 'react-native-tab-view'

export default class Tabs extends React.Component {
    static propTypes = {
        styles: ViewPropTypes.style,
        tabStyle: ViewPropTypes.style,
        labelStyle: ViewPropTypes.style,
        indicatorStyle:ViewPropTypes.style,
        initialLayout:ViewPropTypes.style,
        onIndexChange_Tabs: PropTypes.func,
        renderScene:PropTypes.func,
        navigationState:PropTypes.object,
        labelWidth:PropTypes.number,
        routesArray:PropTypes.array,
        UIColor:PropTypes.string,
    }
    static defaultProps = {
        styles: {},
        tabStyle:{},
        labelStyle:{},
        indicatorStyle:{},
        UIColor:'#000',
        initialLayout:{},
        onIndexChange_Tabs:() => {} ,
        renderScene:() => {} ,
        navigationState:null,
        labelWidth:null,
        routesArray:[],
    };
    constructor(props) {
        super(props)
        this.state = {
            index:  0,
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
                            {this.props.routesArray.map((route, i) => (
                                <TouchableOpacity
                                    style={_tabStyle}
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={`${i}Tabbar`}
                                    onPress={() => {
                                        this.setState({ index:i })
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
        initialLayout,
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
                            onIndexChange_Tabs && onIndexChange_Tabs(index)
                        }}
                        initialLayout={initialLayout || _styles.initialLayout}
                    />
                )
            }
        </WithTheme>
    )
}
}
