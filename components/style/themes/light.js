import { Dimensions } from 'react-native'

export const brandPrimary = '#586BFB'
export const brandPrimaryTap = '#3C4DCF'
const screenW = Dimensions.get('window').width
const screenH = Dimensions.get('window').height
export default {
    // 文字色
    color_text_base: '#1F2530',                  // 基本
    color_text_base_inverse: '#ffffff',          // 基本 _ 反色
    color_text_secondary: '#a4a9b0',          // 辅助色
    color_text_placeholder: '#A5ABB1',           // 文本框提示
    color_text_disabled: '#bbbbbb',              // 失效
    color_text_caption: '#888888',               // 辅助描述
    color_text_paragraph: '#333333',             // 段落
    color_link: brandPrimary,                 // 链接
    color_text_info: '#A5ABB1',             // 信息文字

    // 背景色
    fill_base: '#ffffff',                           // 组件默认背景
    fill_body: '#f5f5f9',                        // 页面背景
    fill_tap: '#dddddd',                            // 组件默认背景 _ 按下
    fill_disabled: '#dddddd',                       // 通用失效背景
    fill_mask: 'rgba(0, 0, 0, .4)',              // 遮罩背景
    color_icon_base: '#cccccc',                     // 许多小图标的背景，比如一些小圆点，加减号
    fill_grey: '#f7f7f7',
    fill_black: '#000',

    // 透明度
    opacity_disabled: 0.3,   // switch checkbox radio 等组件禁用的透明度

    // 全局/品牌色
    brand_primary: brandPrimary,
    brand_primary_tap: brandPrimaryTap,
    brand_success: '#6abf47',
    brand_warning: '#f4333c',
    brand_error: '#f4333c',
    brand_important: '#ff5b05',  // 用于小红点
    brand_wait: '#108ee9',

    // 边框色
    border_color_base: '#DEDFE0',
    border_color_white: '#f1f1f1',

    // 字体尺寸
    // ---
    font_size_icontext: 10,
    font_size_caption_sm: 12,
    font_size_base: 14,
    font_size_subhead: 15,
    font_size_caption: 16,
    font_size_heading: 17,

    // 圆角
    // ---
    radius_xs: 2,
    radius_sm: 3,
    radius_md: 5,
    radius_lg: 7,
    radius_slg: 20,

    // 边框尺寸
    // ---
    border_width_sm: 0.5,
    border_width_md: 1,
    border_width_lg: 2,

    // 间距
    // ---
    // 水平间距
    h_spacing_sm: 12,
    h_spacing_md: 8,
    h_spacing_lg: 15,

    // 垂直间距
    v_spacing_xs: 3,
    v_spacing_sm: 6,
    v_spacing_md: 9,
    v_spacing_lg: 15,
    v_spacing_xl: 21,

    // 高度
    // ---
    line_height_base: 1,           // 单行行高
    line_height_paragraph: 1.5,    // 多行行高

    // 图标尺寸
    // ---
    icon_size_xxs: 15,
    icon_size_xs: 18,
    icon_size_sm: 21,
    icon_size_md: 22,       // 导航条上的图标
    icon_size_lg: 36,

    // 动画缓动
    // ---
    ease_in_out_quint: 'cubic_bezier(0.86, 0, 0.07, 1)',

    // 组件变量
    // ---

    actionsheet_item_height: 50,
    actionsheet_item_font_size: 18,
    screen_W:screenW,
    screen_H:screenH,
    // button
    button_height: 48,
    button_font_size: 18,

    button_height_de: 40,

    button_height_sm: 30,
    button_font_size_sm: 12,

    primary_button_fill: brandPrimary,
    primary_button_fill_tap: brandPrimaryTap,

    ghost_button_color: brandPrimary,    // 同时应用于背景、文字颜色、边框色
    ghost_button_fill_tap: `${brandPrimary}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
    ghost_button_background_color: 'transparent',

    warning_button_fill: '#F85858',
    warning_button_fill_tap: '#DF2F2F',

    link_button_fill_tap: '#dddddd',
    link_button_font_size: 16,

    // modal
    modal_font_size_heading: 18,
    modal_font_size_content: 14,
    modal_font_size_small: 12,
    modal_button_font_size: 16, // 按钮字号
    modal_button_height: 46, // 按钮高度
    toast_background_color: 'rgba(0,0,0,.7)',
    positive_text_color: brandPrimary,
    invalid_text_color: '#DEDFE0',
    error_hint_color: '#F85858',
    error_hint_font_size: 11,

    // list
    list_item_height: 50,

    // checkbox
    checkbox_item_height: 60,

    // radio
    radio_circle_border_color: '#DEDFE0',

    // input
    input_label_width: 17,       // InputItem、TextareaItem 文字长度基础值
    input_item_height: 50,
    input_font_size: 17,
    input_color_icon: '#cccccc',
    input_color_icon_tap: brandPrimary,
    // Label
    small_font_size: 12,
    small_label_height: 20,
    small_label_width: 60,
    middle_font_size: 15,
    middle_label_height: 30,
    middle_label_width: 90,
    large_font_size: 18,
    large_label_height: 40,
    large_label_width:120,
    label_bg_color:'#00C482',
    // EmptyView
    emptyView_height:500,
    emptyView_text_color:'#666',
    emptyView_touchable_marginTop:100,
    // tabs
    tabs_color: brandPrimary,
    label_textColor:'#A5ABB1',
    tabs_indicator_height: 4,
    tabs_indicator_borderRadius: 4,
    tabs_font_size_heading: 15,
    tabs_height:42,
    tabs_elevation:0,
    tabs_label_paddingTop:16,
    tabs_initialLayout_height:40,
    tabs_indicator_Color:'#FFF',
    labelBackgroundColor:'#FFF',
    // segmented_control
    sc_selected_bg_color_default: brandPrimary,  // 同时应用于背景、文字颜色、边框色
    segmented_control_height: 30,
    segmented_control_width: 190,
    sc_unselected_bg_color_default:'#e6e6e6',  // darkMode: #030722
    sc_selected_text_color_default:'#fff',
    sc_unselected_text_color_default:brandPrimary,
    sc_selected_bg_color_special:'#fff', // 同时应用于背景、文字颜色、边框色
    sc_selected_text_color_special:brandPrimary,
    sc_unselected_text_color_special:'#fff',
    sc_sepcial_border_color:'#fff',

    // tab_bar
    tab_bar_fill: '#ebeeef',
    tab_bar_height: 50,

    // toast
    toast_fill: 'rgba(0, 0, 0, .8)',

    // search_bar
    search_bar_height: 50,
    search_bar_input_height: 30,
    search_bar_border_color: '#ffffff',

    // notice_bar
    notice_bar_fill: '#fffada',
    notice_bar_height: 36,

    // switch
    switch_fill: brandPrimary,
    switch_tint: '#D8D8D8',
    switch_thumbtint: '#ffffff',
    switch_disabled_tint: '#EEEEEE',
    switch_disabled_thumbtint: '#F5F5F5',

    // tag
    tag_height: 25,
    tag_small_height: 15,

    // picker
    option_height: 42,            // picker 标题的高度
    picker_background_color: '#ffffff',
    picker_header_background_color: '#F3F5F8',
    picker_title_text_color: '#1F2530',
    picker_dismiss_text_color: '#1F2530',
    picker_android_selected_item_text_color: '#333',
    picker_android_item_text_color:'#aaa',

    toast_zindex: 1999,
    action_sheet_zindex: 1000,
    popup_zindex: 999,
    modal_zindex: 999,

    // list
    v_spacing: 19,

    // badge
    badge_background_color:'#fff',
    badge_item_height: 50,
    badge_paddingHorizontal:15,
    badge_color: '#F85858',
    badge_text_color:'#1F2530',

    // card
    card_background_color:'#fff',
    card_title_color:'#1F2530',
    card_content_color: '#a9a9a9',
    card_lineHeight: 23,
    card_imageWidth: 101,
    card_imageHeight: 78,
    card_image_BG_color: '#efefef',

    // actionSheet
    sheet_title_backgroundcolor:'#F3F5F8',
    sheet_backgroundColor:'#fff',
    sheet_title_color:'#1F2530',
    sheet_item_title_color:'#1F2530',
    sheet_spre_color:'#DEDFE0',
    sheet_item_backgroundColor:'#F3F5F8',

    // activityIndicator
    activity_indicator_size:89,

    // steps
    steps_paddingHorizontal:20,
    steps_text_normal_color: '#1F2530',
    steps_text_black_color: '#000000',
}
