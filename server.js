/* 
  使用express搭建一个后台服务器
*/

const express = require('express')
const axios = require('axios')
const { response } = require('express')

const app = express()

// 注册后台路由转发请求
app.get('/repositories/:q', (req, res) => {
  setTimeout(() => {
    res.send({
      status: 0,
      data: {name:'vue', html_url:'https://github.com/vue'}
    })
  }, 1000);
  // const q = req.params.q
  // axios({
  //   method: 'GET',
  //   url: 'https://api.github.com/search/repositories',
  //   params: {
  //     q,
  //     sort: 'stars'
  //   }
  // }).then(response => {
  //   const { name, html_url } = response.data.items[0]
  //   res.send({
  //     status: 0,
  //     data: {name, html_url}
  //   })
  // })
})

app.listen('4000', () => {
  console.log('server started: http://localhost:4000')
})