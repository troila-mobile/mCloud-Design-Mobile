import defaultTheme from './light'

const brandPrimary = '#586BFB'
const brandPrimaryTap = '#3C4DCF'

export default {
    ...defaultTheme,

    // 文字色
    color_text_base: '#FFFFFF',             // 标题

    // 背景色
    fill_base: '#12162F',                           // 组件默认背景

    // 边框色
    border_color_base: '#262B48',

    // segmented_control
    sc_selected_bg_color_default: '#262B48',  // 同时应用于背景、文字颜色、边框色
    sc_unselected_bg_color_default:'#030722',  // darkMode:
    sc_selected_text_color_default:brandPrimary,
    sc_unselected_text_color_default:'#969FB5',
    sc_selected_bg_color_special:brandPrimary, // 同时应用于背景、文字颜色、边框色
    sc_selected_text_color_special:'#fff',
    sc_unselected_text_color_special:'#969FB5',
    sc_sepcial_border_color:'#262B48',

    // badge
    badge_background_color:'#12162F',
    badge_text_color:'#fff',


    // card
    card_background_color:'#12162F',
    card_title_color:'#fff',
    card_content_color: '#A5ABB1',

    // radio
    radio_circle_border_color: '#555768',

    // search_bar
    search_bar_border_color: '#262B48',

    // switch
    switch_tint: '#2C304E',
    switch_disabled_tint: '#2C304E',
    switch_disabled_thumbtint: 'rgba(255,255,255,.4)',
}
