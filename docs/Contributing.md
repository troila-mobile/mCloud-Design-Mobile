---
id: Contributing
title: 贡献说明
sidebar_label: Contributing
---

> 请遵循以下规则来贡献此项目

## Directory Structure

- 组件统一在`component`目录下创建对应的Finder并实现`demo`&`style`目录以及`index.js`
- 在`docs`目录下创建对应的`.md`
- `example`下补充对应的demo用例

## Develop Rules

- 组件的统一导出入口在`compoents/index.js`，在完成组件的实现后请对应增加导出声明
- 组件业务代码不允许直接实现style，需要在对应组件目录的`style`下实现`index.js`来实现导出函数
   - style的实现必须以函数式实现，不允许直接声明style
   - style的内部样式需要以函数内的参数的属性来实现大部分属性值
- 组件必须由`WithTheme`类包裹，通过`children function return`方式实现
- git-hooks配置了提交时的eslint验证机制，如验证失败请修改后提交
- 适配`dark mode`: 在`components/style/themes`下，默认使用`light`样式，在`dark.js`内适配，`dark`默认继承自`light`，哪些属性需要变更自行编写，保持属性名和`light`内一致即可

## Doc Rules

- 每个组件必须配备`.md`说明
- doc内的id属性必须是唯一性，`title & sidebar_label`属性自行定义
- doc内由3部分组成
   - Description 描述
   - Example 示例代码(必须要保证示例代码的正确性，如果需要添加第三方依赖，请在`website/core/RemarkablePlugins.js`内的`data-snack-dependencies`属性上对应增加)
   - Props 两种形态的props描述，请参照.md
- `.md`完成后需要对应在`website/sidebars.json`中根据目录规则，添加自定义的`.md id`属性
- 调试website：`cd website & yarn start`
- 需要保证doc和component的匹配准确性，doc编辑完成后需要调试`website`来验证效果

## Example Develop
- 在`/example/componentList`内参照示例补充调试用例
- ios: `/ xcode run`
- android: `/ android studio run`

## TODO
- 配置 github commit auto build component and publish npm
- 配置 github pull request auto run website build and publish github.io