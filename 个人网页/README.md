# 郭俊宇个人网站

一个现代、专业的个人网站，具有星光宇宙背景和流畅的交互效果。

## 特性

### 🎨 视觉设计
- **星光宇宙背景**: 动态的星空背景，带有闪烁和流动效果
- **现代化UI**: 采用深色主题，具有玻璃态效果和渐变色彩
- **响应式设计**: 完美适配桌面端和移动端设备

### ✨ 交互效果
- **流畅页面切换**: 引导页到简历页的平滑过渡动画
- **滚动动画**: 内容卡片在滚动时的渐入效果
- **技能星级动画**: 技能条目的动态加载效果
- **视差滚动**: 背景星光的视差移动效果
- **鼠标跟随**: 优雅的光标跟随效果

### 🚀 技术特性
- **纯前端实现**: 使用HTML5、CSS3和原生JavaScript
- **性能优化**: 使用Intersection Observer API和节流技术
- **无障碍支持**: 键盘导航和触摸手势支持
- **现代CSS**: 使用Grid布局、Flexbox和CSS变量

## 文件结构

```
个人网页/
├── index.html          # 主HTML文件
├── styles.css          # 样式文件
├── script.js           # JavaScript交互文件
├── images/             # 项目截图文件夹
│   ├── rl-website.png  # 强化学习网站截图
│   ├── github-profile.png # GitHub主页截图
│   └── README.md       # 图片说明文件
└── README.md           # 项目说明文件
```

## 页面结构

### 引导页 (Landing Page)
- 个人姓名和简介
- 渐入动画效果
- 向下滚动指示器

### 简历页 (Resume Page)
- 固定导航头部
- 双栏布局设计
- 个人简介、技能栈、项目展示

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或者使用本地服务器运行项目

### 本地服务器运行
```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx serve .

# 使用Live Server (VS Code扩展)
# 右键index.html -> Open with Live Server
```

## 自定义配置

### 修改个人信息
在 `index.html` 中修改相应的文本内容：
- 姓名和职位
- 个人简介
- 技能列表
- 项目信息

### 添加项目截图
1. 将项目截图文件重命名为：
   - `rl-website.png` - 强化学习学习网站截图
   - `github-profile.png` - GitHub个人主页截图
2. 将文件放置在 `images/` 文件夹中
3. 网站会自动加载这些截图，如果图片加载失败会显示占位符

### 调整样式
在 `styles.css` 中可以修改：
- 颜色主题
- 字体大小
- 动画效果
- 布局参数

### 添加新功能
在 `script.js` 中可以添加：
- 新的交互效果
- 动画功能
- 数据加载

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 技术栈

- **HTML5**: 语义化标签和现代HTML特性
- **CSS3**: Grid布局、Flexbox、动画、渐变
- **JavaScript ES6+**: 模块化、异步编程、DOM操作
- **Font Awesome**: 图标库
- **Google Fonts**: 字体服务

## 性能优化

- 使用CSS3硬件加速
- 图片懒加载
- 事件节流
- 代码分割和压缩
- 浏览器缓存优化

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱: contact@example.com
- GitHub: [个人GitHub链接]

---

**注意**: 这是一个静态网站项目，所有功能都在前端实现，无需后端服务器支持。 