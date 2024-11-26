const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.post('/api/validate-eori', async (req, res) => {
  try {
    const { eoriNumber } = req.body;
    // 这里添加 EORI 验证逻辑
    
    res.json({ 
      valid: true,
      message: '验证成功' 
    });
  } catch (error) {
    res.status(500).json({ 
      valid: false,
      message: '验证失败：' + error.message 
    });
  }
});

module.exports = app; 