const { serve } = require('NeteaseCloudMusicApi')

// 启动网易云音乐 API 服务
serve({
  port: process.env.PORT || 3000
}).then(() => {
  console.log('JRmusic 后端 API 服务已成功启动！')
})
