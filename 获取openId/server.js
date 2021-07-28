//1.引入express
const axios = require('axios');
const jwt = require('jsonwebtoken');
const express = require('express');
//2.创建应用对象
const app = express();
//创建路由规则
app.get('/getOpenId', async (req, res) => {
    const code = req.query.code;
    const appId = 'wx29039fe08c0b16b7';
    const appSecret = '810f447aafd3cc954084dd6eeea9debe';
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
    const result = await axios.get(url);
    let openId = result.data.openid;
    const token = jwt.sign(openId, 'ljj');
    var decoded = jwt.verify(token, 'ljj');
    res.send(token); //响应返回的数据 --> 只能传一个参数
})
app.listen(7788, () => { })