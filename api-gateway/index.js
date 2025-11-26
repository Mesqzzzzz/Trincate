const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000; // Gateway

// Configura os proxies para cada serviço

// Auth Service
app.use('/auth', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true,
  pathRewrite: {'^/auth' : ''} // remove /auth antes de enviar
}));

// Meal Service
app.use('/meals', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
  pathRewrite: {'^/meals' : ''}
}));

// Category Service
app.use('/categories', createProxyMiddleware({
  target: 'http://localhost:3003',
  changeOrigin: true,
  pathRewrite: {'^/categories' : ''}
}));

// Stats Service
app.use('/stats', createProxyMiddleware({
  target: 'http://localhost:3004',
  changeOrigin: true,
  pathRewrite: {'^/stats' : ''}
}));

// Notification Service
app.use('/notifications', createProxyMiddleware({
  target: 'http://localhost:3005',
  changeOrigin: true,
  pathRewrite: {'^/notifications' : ''}
}));

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
