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
        style_tab: ViewPropTypes.style,
        style_labelText: ViewPropTypes.style,
        style_wrapper:ViewPropTypes.style,
        style_indicator:ViewPropTypes.style,
        style_initialLayout:ViewPropTypes.style,
        onIndexChange_Tabs: PropTypes.func,
        renderScene:PropTypes.func,
        navigationState:PropTypes.object,
        labelWidth:PropTypes.number,
    }
    static defaultProps = {
        styles: {},
        style_tab:{},
        style_labelText:{},
        style_wrapper:{},
        style_indicator:{},
        style_initialLayout:{},
        onIndexChange_Tabs:() => {} ,
        renderScene:() => {},
        navigationState:null,
        labelWidth:null,
    };
    render() {
        const {
            styles,
            style_tab,
            style_labelText,
            style_wrapper,
            style_indicator,
            style_initialLayout,
            navigationState,
            renderScene,
            onIndexChange_Tabs,
            labelWidth,
        } = this.props
        return (
            <WithTheme themeStyles={TabsStyles} styles={styles}>
                {
                    (_styles,theme) => {
                        const tabStyle = [
                            { width:labelWidth },
                            _styles.tabStyle,
                            style_tab,
                        ]
                        const labelStyle = [
                            _styles.labelStyle,
                            style_labelText,
                        ]
                        const style_type = [
                            _styles.style_type,
                            style_wrapper,
                        ]
                        const indicatorStyle = [
                            {
                                width: labelWidth * 0.6 ,
                                left: labelWidth * 0.2 ,
                            },
                            _styles.indicatorStyle,
                            style_indicator,
                        ]
                        return (
                            <TabView
                                navigationState={navigationState}
                                renderScene={renderScene}
                                renderTabBar={(props) =>  (
                                    <TabBar
                                        /* eslint-disable-next-line react/jsx-props-no-spreading */
                                        {...props}
                                        tabStyle={tabStyle}
                                        labelStyle={labelStyle}
                                        style={style_type}
                                        indicatorStyle={indicatorStyle}
                                        scrollEnabled={true}
                                    />
                                )}
                                onIndexChange={onIndexChange_Tabs}
                                initialLayout={style_initialLayout || _styles.initialLayout}
                            />
                        )
                    }
                }
            </WithTheme>
        )
    }
}
