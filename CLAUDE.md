# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 **Astro** 和 **Fuwari** 主题构建的技术博客，部署在 GitHub Pages 上。博客用于记录学习笔记、研究知识和个人思考。

**作者**: Wenry6 (magical857)
**平台**: GitHub Pages (https://magical857.github.io)
**包管理器**: pnpm

## 常用命令

### 开发
```bash
pnpm dev              # 启动开发服务器 (http://localhost:4321)
pnpm build            # 构建生产版本 + 生成 Pagefind 搜索索引
pnpm preview          # 预览生产构建
```

### 内容管理
```bash
pnpm new-post -- <filename> [--title <title>] [--tags <tag1,tag2>] [--category <category>] [--lang <lang>]
# 示例: pnpm new-post -- my-post --title "我的文章" --tags "astro,markdown" --category "tech" --lang "zh"
```

### 代码质量
```bash
pnpm lint             # 运行 Biome 代码检查并自动修复
pnpm format           # 使用 Biome 格式化代码
pnpm type-check       # 运行 TypeScript 类型检查
```

## 内容结构

### 博客文章
文章存储在 `src/content/posts/` 中，可以采用两种结构：
- **扁平结构**: `src/content/posts/post-name.md`
- **带资源**: `src/content/posts/post-name/index.md`，图片放在同一目录下

### Front Matter 架构
所有文章必须包含以下 front matter（定义在 `src/content/config.ts`）：
```yaml
---
title: "文章标题"
published: YYYY-MM-DD
description: "简短描述"
image: "path/to/cover.jpg"  # 可选
tags: [标签1, 标签2]
category: "分类名称"   # 可选
draft: false          # 设为 true 则不会在构建时显示
lang: "zh"            # zh, en 等
---
```

## 架构说明

### 自定义 Markdown 插件
博客在 `src/plugins/` 中使用了自定义的 remark/rehype 插件：
- **remark-reading-time.mjs**: 计算阅读时间
- **remark-excerpt.js**: 生成文章摘要
- **remark-github-admonitions-to-directives**: 将 GitHub 风格的提示框转换为自定义指令
- **rehype-component-admonition.mjs**: 渲染提示块 (note, tip, important, caution, warning)
- **rehype-component-github-card.mjs**: 嵌入 GitHub 仓库卡片

### GitHub 风格提示框
在 Markdown 中使用这些语法创建样式化的提示块：
```markdown
> [!NOTE]
> 有用的信息

> [!TIP]
> 有用的建议

> [!IMPORTANT]
> 需要记住的重点

> [!CAUTION]
> 潜在问题警告

> [!WARNING]
> 重要警告
```

### 页面路由
- **动态捕获**: `src/pages/[...page].astro` - 处理大部分页面路由
- **文章页面**: `src/pages/posts/[...slug].astro` - 单篇文章页面
- **归档页面**: `src/pages/archive/` - 分类和标签列表

### 核心组件
- `src/layouts/Layout.astro` - 主布局包装器
- `src/layouts/MainGridLayout.astro` - 带侧边栏的网格布局
- `src/components/PostPage.astro` - 文章内容渲染器
- `src/components/PostCard.astro` - 文章预览卡片
- `src/components/PostMeta.astro` - 文章元数据显示

### 交互组件 (Svelte)
- `src/components/Search.svelte` - 基于 Pagefind 的搜索功能
- `src/components/LightDarkSwitch.svelte` - 主题切换
- `src/components/widget/DisplaySettings.svelte` - 显示偏好设置

### 配置文件
- `src/config.ts` - 站点配置（标题、主题、横幅等）
- `src/content/config.ts` - Astro 内容集合架构定义
- `src/i18n/` - 多语言翻译文件（zh_CN, en, ja, ko, es, zh_TW）
- `biome.json` - 代码检查和格式化规则（忽略 `src/config.ts`）

## 代码风格

- **格式化工具**: Biome（2 空格缩进，单引号，80 字符行宽）
- **检查工具**: Biome，启用所有推荐规则
- **注意**: `src/config.ts` 被排除在格式化之外，以保持其结构

## 构建流程

构建管道（`astro build`）：
1. 从 Astro 组件生成静态 HTML
2. 在 `dist` 输出上运行 Pagefind 索引生成
3. 输出到 `dist/` 目录

搜索功能依赖于构建时的 Pagefind 索引。

## AI 写作助手相关

仓库根目录包含博客写作指导文件：
- **`.cursorrules`**: AI 写作助手规则，用于博客内容创作
- **`BLOG_GUIDE.md`**: 完整的博客写作指南
- **`BLOG_AI_SYSTEM.md`**: AI 辅助写作系统的文档

协助创作博客内容时：
1. 遵循 front matter 架构要求
2. 使用合适的标签和分类
3. 包含描述性摘要
4. 未发布内容设置 `draft: true`
5. 考虑使用提示框（admonitions）来组织结构化内容
