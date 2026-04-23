# 胡英杰 POI产品经理作品集

基于 Docsify 构建的静态作品集网站，采用字节跳动风格设计。

## 📁 项目结构

```
作品集网站/
├── index.html              # 主页入口（Docsify配置）
├── README.md               # 首页内容
├── _sidebar.md            # 侧边栏导航
├── GITHUB_DEPLOY.md        # GitHub Pages部署指南
├── .gitignore              # Git忽略文件
├── assets/                 # 资源目录
│   └── style.css          # 字节跳动风格样式
└── projects/               # 项目页面目录
    ├── part1.md            # 体验环境与分析目的
    ├── part2.md            # POI维度竞品分析
    ├── part3.md            # 多维拆解
    ├── part4.md            # 空间数据能力案例
    ├── part5.md            # 产品优化方案
    └── part6.md            # 总结与展望
```

## 🚀 快速预览

### 本地预览（无需安装）

双击 `index.html` 文件，使用以下任一方式预览：

1. **方式一**：使用 VS Code 的 Live Server 插件
2. **方式二**：使用 Python 启动简易服务器：
   ```bash
   cd 作品集网站
   python -m http.server 8080
   ```
   然后访问 http://localhost:8080

### 预览效果

- ✅ 响应式设计，适配手机/平板/桌面
- ✅ 字节跳动风格配色（深蓝#1F2329、蓝紫#3370FF）
- ✅ 全文搜索功能
- ✅ 上下翻页导航

## 🌐 部署到GitHub Pages

详细步骤请查看 [GITHUB_DEPLOY.md](GITHUB_DEPLOY.md)

### 快速部署

1. 创建 GitHub 仓库
2. 上传所有文件（不含README说明文件）
3. 进入 Settings > Pages
4. Source 选择 main branch + / (root)
5. 等待部署完成即可访问

## ✨ 特色功能

| 功能 | 说明 |
|-----|------|
| 全文搜索 | 支持中文搜索 |
| 响应式布局 | 完美适配各种设备 |
| 字节风格 | 深蓝+蓝紫配色 |
| 键盘快捷键 | `/` 搜索、`←` `→` 翻页 |

## 📝 自定义修改

### 修改个人信息

1. 修改 `README.md` 中的个人信息
2. 修改 `index.html` 中的 `<title>` 和 `repo` 链接
3. 修改 `_sidebar.md` 中的联系方式

### 修改样式

编辑 `assets/style.css` 文件，自定义CSS变量：

```css
:root {
  --bytedance-primary: #3370FF;   /* 主色调 */
  --bytedance-dark: #1F2329;      /* 深色 */
  --bytedance-bg: #FFFFFF;        /* 背景色 */
}
```

## 🔧 技术栈

- **框架**：Docsify
- **样式**：原生CSS（字节跳动风格）
- **字体**：Inter + Noto Sans SC

## 📧 联系方式

- GitHub: https://github.com/your-username
- 邮箱: your.email@example.com

---

© 2026 胡英杰 | 仅供求职参考
