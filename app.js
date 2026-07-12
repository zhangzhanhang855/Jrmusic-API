const { startCmd } = require('netease-cloud-music-api')

// 启动网易云音乐 API 服务，Render 会自动分配端口
startCmd({
  port: process.env.PORT || 3000
})
