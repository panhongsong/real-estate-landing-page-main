/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 添加此行以启用静态导出
  trailingSlash: true, // 添加此行以确保页面有尾随斜杠
}

module.exports = nextConfig