# 静态版谱面下载站

## 文件结构
```
static-dist/
├── index.html          # 首页
├── charts/             # .adx 谱面文件
│   ├── 歌曲1.adx
│   └── 歌曲2.adx
├── data/
│   └── music_data.json # 歌曲数据
└── *.png               # 图标文件
```

## 部署方法

### 方法1: EdgeOne Pages
1. 登录腾讯云 EdgeOne Pages
2. 创建静态网站项目
3. 上传 static-dist/ 目录下的所有文件
4. 完成部署

### 方法2: 其他静态托管
直接上传 static-dist/ 目录到任意静态托管服务：
- GitHub Pages
- Vercel
- Netlify
- 腾讯云 COS 静态网站

## 添加新谱面

1. 将谱面文件夹放入 charts/ 目录
2. 重新运行: node build-static.js
3. 上传新的 static-dist/ 目录

## 限制

- 单个 .adx 文件不超过 25MB
- 纯静态网站，无需后端服务器
- 直接下载，无需 token/验证码
