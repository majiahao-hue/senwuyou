森无忧 Senwuyou 网站 — 部署说明
=================================

文件结构：
  index.html              — 主页面（含SEO meta标签）
  images/                 — 9张产品图片
  CNAME                   — 自定义域名配置
  robots.txt              — 搜索引擎爬虫规则
  sitemap.xml             — 站点地图（帮助搜索引擎收录）
  baidu_verify_*.html     — 百度站长验证文件

GitHub Pages 部署方式：
  当前部署在 https://senwuyou.com
  Git仓库: github.com/majiahao-hue/senwuyou.git

如你修改后要重新部署：
  方案一（推荐）：git push 到仓库即可自动触发 GitHub Pages 更新
    1. cd 到该目录
    2. git add -A
    3. git commit -m "你的修改说明"
    4. git push

  方案二：手动上传到 GitHub
    1. 打开 github.com/majiahao-hue/senwuyou
    2. 手动上传替换 index.html 和 images/ 中的文件

修改注意事项：
  • 不要删除 <head> 中的搜索引擎验证标签（百度/Bing）
  • 产品图片建议保持在 images/ 目录下，文件命名不要改变
  • 如需添加新页面，请在 sitemap.xml 中补充链接
  • 如需新增产品图片，请同时在 IMG 对象中注册路径
