---
id: index
title: mCloud-Design-Mobile
---

`mCloud-Design-Mobile` 是 [Daka](https://idaka.vip) 的8.0风格的 React 实现，服务于打卡助手。

<div class="pic-plus">
  <img width="160" src="/mCloud-Design-Mobile/img/daka_logo.png">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block;
  vertical-align: middle;
}
.pic-plus {
  margin: 40px 0;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 40px;
}
</style>

## Install

```bash
npm install mcloud-mobile react-native-fast-image --save
```

or

```bash
yarn add mcloud-mobile react-native-fast-image
```

### 链接原生模块

```bash
react-native link @react-native-community/async-storage
react-native link react-native-fast-image
```

## Use

组件使用实例：

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Button } from 'mcloud-mobile';

class HelloWorldApp extends Component {
  render() {
    return <Button>Start</Button>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

**如果需要使用`Modal`以及`dark mode`还需要在 App 的入口处加上`Provider`**

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Button, Provider } from '@ant-design/react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <Provider theme="dark">
        <Button>
          Start
        </Button>
      </Provider>
    );
  }
}
```


## 链接

- [首页](https://troila-mobile.github.io/mCloud-Design-Mobile/)
- [开发者文档](https://troila-mobile.github.io/mCloud-Design-Mobile/docs/Contributing)
- [React 模块](http://github.com/react-component)

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](https://troila-mobile.github.io/mCloud-Design-Mobile/docs/Contributing)。有任何建议或意见您可以 [Pull Request](https://github.com/troila-mobile/mCloud-Design-Mobile/pulls)，给我们 [报告 Bug](https://github.com/troila-mobile/mCloud-Design-Mobile/issues)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

## 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 `mcloud-mobile` 标签。

1. [Stack Overflow](http://stackoverflow.com/questions/tagged/mcloud-mobile)（推荐）
2. [Segment Fault](https://segmentfault.com/t/mcloud-mobile)