# GitHub Pages 部署指南

> 本指南将帮助您将作品集网站部署到GitHub Pages，实现全球可访问的个人作品集展示。

---

## 📋 目录

- [准备工作](#准备工作)
- [Step 1：创建GitHub仓库](#step-1创建github仓库)
- [Step 2：上传网站文件](#step-2上传网站文件)
- [Step 3：配置GitHub Pages](#step-3配置github-pages)
- [Step 4：绑定自定义域名（可选）](#step-4绑定自定义域名可选)
- [常见问题解答](#常见问题解答)

---

## 准备工作

### ✅ 所需条件

1. **GitHub账号** - 如果没有，请前往 [github.com](https://github.com) 注册
2. **Git工具** - 用于上传代码（可选，也可使用网页上传）
3. **网站文件** - 已准备好的 `作品集网站` 文件夹

### 📥 克隆项目到本地（可选）

如果您需要在本地编辑后再上传：

```bash
# 克隆仓库
git clone https://github.com/your-username/portfolio.git

# 进入目录
cd portfolio

# 查看文件
ls -la
```

---

## Step 1：创建GitHub仓库

### 方法一：使用GitHub网页（推荐新手）

1. 登录 [GitHub](https://github.com)
2. 点击右上角 **+** 图标，选择 **New repository**

![创建仓库入口](assets/images/create_repo_1.png)

3. 填写仓库信息：

| 配置项 | 建议值 |
|-------|-------|
| **Repository name** | `portfolio` 或 `hu-yingjie` |
| **Description** | `胡英杰 POI产品经理作品集` |
| **Visibility** | Public（公开） |
| **Initialize** | ❌ 不勾选 Add a README file |

4. 点击 **Create repository**

![仓库配置](assets/images/create_repo_2.png)

---

## Step 2：上传网站文件

### 方法A：使用GitHub网页上传（最简单）

1. 进入刚刚创建的仓库页面
2. 点击 **uploading an existing file**

![上传入口](assets/images/upload_1.png)

3. 将 `作品集网站` 文件夹中的**所有内容**拖拽到上传区域：

```
作品集网站/
├── index.html          ✅ 上传
├── README.md           ✅ 上传
├── _sidebar.md        ✅ 上传
├── assets/            ✅ 上传整个文件夹
│   └── style.css
└── projects/         ✅ 上传整个文件夹
    ├── part1.md
    ├── part2.md
    ├── part3.md
    ├── part4.md
    ├── part5.md
    └── part6.md
```

4. 在 "Commit changes" 区域填写：
   ```
   commit message: feat: initial portfolio website
   ```

5. 点击 **Commit changes**

![提交上传](assets/images/upload_2.png)

---

### 方法B：使用Git命令上传

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "feat: initial portfolio website"

# 添加远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/your-username/portfolio.git

# 推送到GitHub
git push -u origin main
```

> **注意**：如果是首次使用Git，可能需要配置用户名和邮箱：
> ```bash
> git config --global user.name "Your Name"
> git config --global user.email "your.email@example.com"
> ```

---

## Step 3：配置GitHub Pages

1. 进入仓库页面，点击 **Settings**（设置）

![Settings入口](assets/images/pages_1.png)

2. 在左侧菜单中找到 **Pages**

3. 配置构建和部署：

| 配置项 | 选择值 |
|-------|-------|
| **Source** | Deploy from a branch |
| **Branch** | main |
| **/ (root)** | ✅ 选中 |
| **Custom domain** | （可选，详见下文） |

4. 点击 **Save**

![Pages配置](assets/images/pages_2.png)

5. 等待约1-2分钟，页面顶部会显示：

```
✅ Your site is live at https://your-username.github.io/portfolio/
```

---

## Step 4：绑定自定义域名（可选）

如果您有自己的域名，可以绑定到GitHub Pages：

### 4.1 配置DNS

在您的域名服务商处添加以下DNS记录：

| 记录类型 | 主机记录 | 记录值 |
|---------|---------|-------|
| CNAME | www | `your-username.github.io` |
| A | @ | `185.199.108.153` |

> **提示**：GitHub Pages 使用以下IP地址：
> - `185.199.108.153`
> - `185.199.109.153`
> - `185.199.110.153`
> - `185.199.111.153`

### 4.2 在GitHub配置自定义域名

1. 在仓库 **Settings > Pages** 中
2. 在 **Custom domain** 输入框填入您的域名
3. 勾选 **Enforce HTTPS**（强制HTTPS）
4. 点击 **Save**

### 4.3 添加CNAME文件

在仓库根目录添加 `CNAME` 文件（无扩展名），内容为您的域名：

```
portfolio.your-domain.com
```

---

## 🎉 恭喜！

您的作品集网站现在已经上线！

| 项目 | 地址 |
|-----|------|
| GitHub Pages | `https://your-username.github.io/portfolio/` |
| 仓库地址 | `https://github.com/your-username/portfolio` |

---

## 常见问题解答

### Q1：页面显示404错误？

**原因**：可能是文件路径问题

**解决方案**：
- 确保 `index.html` 在仓库根目录
- 检查文件命名是否正确（注意大小写）
- 等待几分钟后重试（DNS传播需要时间）

### Q2：CSS样式不生效？

**解决方案**：
- 检查浏览器缓存，按 `Ctrl+Shift+R` 强制刷新
- 确认 `index.html` 中样式文件路径正确
- GitHub Pages 对大小写敏感，检查文件名大小写

### Q3：如何更新网站内容？

**方法**：
1. 直接在GitHub网页编辑文件
2. 修改后会自动重新部署
3. 或使用Git命令推送更新：
   ```bash
   git add .
   git commit -m "update: 修复xxx问题"
   git push
   ```

### Q4：部署需要收费吗？

**答案**：GitHub Pages **免费**对所有公开仓库开放，私有仓库需升级到GitHub Pro。

### Q5：网站加载很慢？

**优化建议**：
- 使用CDN加速的外部资源
- 压缩图片文件
- 考虑使用Cloudflare等CDN服务

---

## 📚 相关资源

- [GitHub Pages 官方文档](https://docs.github.com/cn/pages)
- [Docsify 官方文档](https://docsify.js.org/)
- [Markdown 语法指南](https://www.markdownguide.org/)

---

## 🔄 后续维护建议

1. **定期更新内容** - 保持作品集的时效性
2. **监控访问数据** - 使用GitHub Pages自带的分析功能
3. **备份源代码** - 保留本地副本防止意外丢失
4. **关注安全更新** - 定期更新依赖库版本

---

*本指南由胡英杰作品集网站生成器创建 | 最后更新：2026年4月*
