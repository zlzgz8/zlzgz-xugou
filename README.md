# XUGOU - 基于CloudFlare搭建的轻量化监控平台

<div align="center">

![XUGOU Logo](frontend/public/logo.svg)

XUGOU 是一个基于 CloudFlare 的轻量化系统监控平台，提供系统监控和状态页面功能。

[English](./README_EN.md) | 简体中文

</div>

## 📅 开发计划

目前已实现的主要功能：

- ✅ 系统监控 - 客户端资源监控与数据上报
- ✅ HTTP 监控 - API 接口健康检测
- ✅ 数据可视化 - 实时数据展示与历史趋势
- ✅ 状态页面 - 可定制的服务状态页面
- ✅ 告警通知 - 异常事件通过多渠道通知（电子邮件、Telegram等）
- ❌ 移动APP - 方便在手机查看监控状态（维护不过来，后面打算将pwa实现好，就这样吧）

## ✨ 核心特性

- 🖥️ **系统监控**
  - 实时监控 CPU、内存、磁盘、网络等系统指标
  - 支持自定义监控间隔
  - 全平台支持（agent由go编写，理论上go能编译的平台都可以支持）

- 🌐 **HTTP 监控**
  - 支持 HTTP/HTTPS 接口监控
  - 自定义请求方法、头部和请求体
  - 响应时间、状态码和内容检查

- 📊 **数据可视化**
  - 实时数据图表展示
  - 自定义仪表盘

- 🌍 **状态页面**
  - 自定义状态页面
  - 支持多监控项展示
  - 响应式设计

## 🏗️ 系统架构

XUGOU 采用现代化的系统架构，包含以下组件：

- **Agent**: 轻量级系统监控客户端
- **Backend**: 基于 Hono 开发的后端服务，支持部署在 Cloudflare Workers 上
- **Frontend**: 基于 React + TypeScript 的现代化前端界面

## 🚀 快速开始

### 部署指南

默认用户名：admin 默认密码: admin123

[XUGOU wiki 部署指南](https://github.com/zaunist/xugou/wiki)

### 视频教程

[![XUGOU 视频教程](https://img.youtube.com/vi/jisEpcqDego/0.jpg)](https://youtu.be/w2by-7jDCM0)

## 常见问题

[XUGOU wiki 常见问题](https://github.com/zaunist/xugou/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)

## ⭐ 支持一下作者

- 给项目点个 Star，分享给您的朋友
- 请作者喝点

<div align="center">
  <a href="https://buymeacoffee.com/real_zaunist" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="200" height="51">
  </a>
      <a href="https://buymeacoke.realyourdad.workers.dev/" target="_blank">
      <img src="https://img.shields.io/badge/Buy_Me_A_Coke-FF5E5B?style=for-the-badge&logo=coca-cola&logoColor=white" alt="Buy Me A Coke" width="200" height="51" style="border-radius: 8px;" />
    </a>
</div>

## 🤝 贡献

欢迎所有形式的贡献，无论是新功能、bug 修复还是文档改进。

## 🏢 赞助

感谢以下赞助商支持 XUGOU 的开发：

[![Powered by DartNode](https://dartnode.com/branding/DN-Open-Source-sm.png)](https://dartnode.com "Powered by DartNode - Free VPS for Open Source")

## 📄 开源协议

本项目采用 MIT 协议开源，详见 [LICENSE](./LICENSE) 文件。

## 🔥 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=zaunist/xugou&type=Date)](https://www.star-history.com/#zaunist/xugou&Date)
