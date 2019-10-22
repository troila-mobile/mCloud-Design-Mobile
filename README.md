# mCloud-Design-Mobile
daka-v8-ui view library

**集成方式**
```
npm install mcloud-mobile
react-native link
```
**API:**[https://troila-mobile.github.io/mCloud-Design-Mobile/docs/Button](https://troila-mobile.github.io/mCloud-Design-Mobile/docs/Button)


# 背景

卓朗科技的[打卡助手](https://idaka.vip)由 react-native实现主业务开发，我们的产品即将面临 version 8.0 的产品迭代，我们面临的主要问题是_view_层的大改版和 old code 的历史包袱，我们在曾经使用很多第三方的 view library，**But** 这些都无法满足我们的全部定制化需求，**So** 经过团队内部的讨论后，我们决定由我们 **(troila-daka-mobile团队) **来自己实现一套view library

# 需求

- 独立的定制化风格（由我们的**UED同事**重新绘制的打卡助手8.0**Design**）
- 便于使用的拓展性（一些第三方组件对于属性和样式的拓展性不友好）
- 支持**iOS13**的**Dark Mode**（为了更加友好的用户体验，打卡助手8.0支持了**Dark Mode**）

# 实现

**在这样的背景和需求之下，我们的[mCloud-Design-Mobile](https://troila-mobile.github.io/mCloud-Design-Mobile/)诞生了。**
**我们的mCloud-Design-Mobile是开源的，分享给更多的开发者使用，也希望有更多的开发者和我们一起共同维护这个仓库**
* Github: [https://github.com/troila-mobile/mCloud-Design-Mobile](https://github.com/troila-mobile/mCloud-Design-Mobile)
* Npm: [https://www.npmjs.com/package/mcloud-mobile](https://www.npmjs.com/package/mcloud-mobile)
* Website: [https://troila-mobile.github.io/mCloud-Design-Mobile/](https://troila-mobile.github.io/mCloud-Design-Mobile/)

**目前实现的组件**

| 组件 | 描述 |
| ---- |---- |
| Button | 按钮|
| Modal | 弹窗 |
| Marquee |滚动文字|
| SearchBar | 搜索栏 |
| Checkbox | 复选框|
| Switch | 滑动开关 |
| SegmentedControl | 分段器|
| NoticeBar | 提示信息 |
| Radio | 单选框|
| InputItem | 单行文本输入 |
| Textarea | 多行文本输入 |
| List | 列表 |
| Badge | 徽标数 |
| Card | 卡片 |
| Label | 标签 |
| Picker | 选择器 |
| DatePicker | 日期选择器 |
| EmptyView | 空显示 |
| Tabs | 标签页 |
| ActionSheet | 动作面板 |
| Avatar | 头像 |
| Stepper | 步进器 |
| ShareSheet | 分享 |
| ActivityIndicator | 活动指标 |
| CountDownView | 倒计时 |
| Steps | 分步显示 |

# 致谢

我们在开发的初期深入思考了对于整体样式的统一性和外部样式的可拓展性，同时我们也借鉴了一些第三方组件如@ant-design/react-native的一些开发思想，并且结合了我们的**dark mode**的需求，来实现整体的效果。

在组件搭建完成后，为了方便开发者阅读和使用，我们使用了**docusaurus**来搭建website，使用**expo snack**来在web端模拟展示组件样式。

# Last

我们在最初寻找了社区内支持**dark mode**的组件，可惜并没有找到，所以我们自己开始造，我们曾经在社区内获得了非常多的资源和支持，现在我们也开始贡献给社区，尽管它可能还比较初期，一些功能还不完善，但我们会不断的维护这个仓库，帮助更多的开发者，thank。