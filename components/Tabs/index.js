/**
 * Created by wy on 2019/9/30.
 */
import React from 'react'
import {
    ViewPropTypes,
} from 'react-native'
import { WithTheme } from '../style'
import TabsStyles from './style'
import PropTypes from 'prop-types'
import { TabBar, TabView } from 'react-native-tab-view'

export default class Tabs extends React.Component {
    static propTypes = {
        styles: ViewPropTypes.style,
        tabStyle: ViewPropTypes.style,
        labelStyle: ViewPropTypes.style,
        tabBarStyle:ViewPropTypes.style,
        indicatorStyle:ViewPropTypes.style,
        initialLayout:ViewPropTypes.style,
        onIndexChange_Tabs: PropTypes.func,
        renderScene:PropTypes.func,
        navigationState:PropTypes.object,
        labelWidth:PropTypes.number,
        scrollEnabled:PropTypes.bool,
    }
    static defaultProps = {
        styles: {},
        tabStyle:{},
        labelStyle:{},
        tabBarStyle:{},
        indicatorStyle:{},
        initialLayout:{},
        onIndexChange_Tabs:() => {} ,
        renderScene:() => {},
        navigationState:null,
        labelWidth:null,
        scrollEnabled:true,
    };
    render() {
        const {
            styles,
            tabStyle,
            labelStyle,
            tabBarStyle,
            indicatorStyle,
            initialLayout,
            navigationState,
            renderScene,
            onIndexChange_Tabs,
            labelWidth,
            scrollEnabled,
        } = this.props
        return (
            <WithTheme themeStyles={TabsStyles} styles={styles}>
                {
                    (_styles,theme) => {
                        const _tabStyle = [
                            { width:labelWidth },
                            _styles.tabStyle,
                            tabStyle,
                        ]
                        const _labelStyle = [
                            _styles.labelStyle,
                            labelStyle,
                        ]
                        const _tabBarStyle = [
                            _styles.style_type,
                            tabBarStyle,
                        ]
                        const _indicatorStyle = [
                            {
                                width: labelWidth * 0.6 ,
                                left: labelWidth * 0.2 ,
                            },
                            _styles.indicatorStyle,
                            indicatorStyle,
                        ]
                        return (
                            <TabView
                                navigationState={navigationState}
                                renderScene={renderScene}
                                renderTabBar={(props) =>  (
                                    <TabBar
                                        /* eslint-disable-next-line react/jsx-props-no-spreading */
                                        {...props}
                                        tabStyle={_tabStyle}
                                        labelStyle={_labelStyle}
                                        style={_tabBarStyle}
                                        indicatorStyle={_indicatorStyle}
                                        scrollEnabled={scrollEnabled}
                                    />
                                )}
                                onIndexChange={onIndexChange_Tabs}
                                initialLayout={initialLayout || _styles.initialLayout}
                            />
                        )
                    }
                }
            </WithTheme>
        )
    }
}
