const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// 解析 application/json 格式的数据
app.use(bodyParser.json());

// 设置静态资源目录
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'dist')));

// 根路由返回静态页面
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// GET 请求路由
app.get('/api/getWebData/:params', (req, res) => {
    const params = req.params.params;

    // 读取本地的 json 文件
    fs.readFile(path.join(__dirname, `public/${params}.json`), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read data file.' });
        }

        try {
            const jsonData = JSON.parse(data);
            const backdata = {code:200,data:jsonData};

            // 根据参数处理数据
            // ...

            // 返回数据
            res.status(200).json(backdata);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to parse data.' });
        }
    });
});

// POST 请求路由  未来用于后台管理
// app.post('/api/setWebData', (req, res) => {
//     //
//     const webData = req.body;
//
//     // 将数据保存到本地的 json 文件
//     const jsonData = { /* 数据对象 */ };
//     fs.writeFile('data.json', JSON.stringify(jsonData), 'utf8', (err) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Failed to write data file.' });
//         }
//
//         res.json({ success: true });
//     });
// });

// 启动服务器
app.listen(8082, () => {
    console.log('Server is running on port 8082');
});