# Taro简介
Taro 是由凹凸实验室打造的一套遵循 React 语法规范的多端统一开发框架。

我们只用书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信小程序、H5、App 端，RN和支付宝小程序等）运行的代码。

Quick start

[Taro](https://taro-docs.jd.com/taro/docs/GETTING-STARTED.html)

## 安装

安装 Taro 开发工具 @tarojs/cli

使用 npm 或者 yarn 全局安装

```
npm install -g @tarojs/cli
// 或
yarn global add @tarojs/cli
```

## 前言

**Taro** 是一套遵循 [React](https://reactjs.org/) 语法规范的 **多端开发** 解决方案。现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

使用 **Taro**，我们可以只书写一套代码，再通过 **Taro** 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动小程序、H5、React-Native 等）运行的代码。

基于Taro，构建了此demo.可基于此demo构建项目。

## 技术栈

Taro + TypeScript + dva

[ts https://www.typescriptlang.org/](https://www.typescriptlang.org/)

[dva](https://github.com/dvajs/dva)

## 介绍

文件目录如下：

```
├── dist                    编译结果目录
├── config                  配置目录
|   ├── dev.js              开发时配置
|   ├── index.js            默认配置
|   └── prod.js             打包时配置
├── src                     源码目录
|   ├── assets              静态资源目录
|   |   ├── fonts           fonts
|   |   ├── images          图片目录
|   |   ├── styles          样式目录
|   ├── config              配置文件目录
|   ├── constants           常量管理目录
|   ├── models              dva models目录
|   ├── pages               页面文件目录
|   |   ├── demo            demo页面目录
|   |   |   ├── index.tsx   demo页面逻辑
|   |   |   └── index.scss  demo页面样式
|   |   |   └── model.ts    demo页model
|   |   |   └── service.ts  demo页service
|   ├── services            http相关目录
|   ├── typings             类型声明环境目录
|   ├── utils               utils
|   |   |   ├── dva.ts      引用dva
|   └── app.tsx             项目入口文件
└── package.json
```
