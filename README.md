# Real Estate - Landing Page

<div align="center" width="100%">
   <img src="/public/realestate-page.png" alt="Real Estate">
</div>

## Introduction

Real Estate is a comprehensive platform dedicated to facilitating real estate transactions for both residential and commercial clients. From luxurious homes to prime commercial spaces, we cater to a diverse range of property needs, serving individuals, businesses, and investors alike.

Click [_here_](https://realestate-landingpage.vercel.app/) for result.

## Features

- **Modern Stack**: Built with Next.js, a powerful framework, TailwindCSS and Ant Design for responsive and elegant styling.
- **Responsive Design**: Ensure a seamless experience across various devices and screen sizes.
- **Huge selections of Property**: Discover your dream property with our extensive network of real estate partners spanning across the globe.

## ⚙️ Tech Stack

- Next Js
- Tailwind CSS
- Ant Design
- Redux Toolkit

## Getting Started

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your system. Familiarity with Netx.js, Tailwind CSS, Ant Design, and Redux Toolkit will be beneficial for customization.

## Installation

1. Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/abdurrozaqf/real-estate-landing-page.git
   ```

2. Navigate to the project directory:

   ```bash
   cd real-estate-landing-page
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Configure your database settings in the .env file.
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Access the application in your browser at http://localhost:3000.

## Deployment to GitHub Pages

由于 Next.js 应用默认是服务端渲染的，而 GitHub Pages 只支持静态文件，所以我们需要将应用导出为静态站点。

### 手动部署步骤：

1. 构建并导出静态版本：
   ```bash
   npm run deploy
   ```
   
2. 这将在 `out` 目录中生成静态文件。

3. 将 `out` 目录中的内容上传到 GitHub Pages 分支。

### 自动部署步骤（使用 GitHub Actions）：

1. 在仓库根目录创建 `.github/workflows/deploy.yml` 文件：

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install Dependencies
           run: npm install

         - name: Build and Export
           run: |
             npm run build
             npm run export

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
             enable_jekyll: false
   ```

2. 提交并推送代码到 GitHub：
   ```bash
   git add .
   git commit -m "Add GitHub Actions workflow for deployment"
   git push origin main
   ```

3. 前往 GitHub 仓库的 Settings > Pages，在 Source 部分选择 "GitHub Actions"。

4. 您的网站将在 `https://<your-username>.github.io/<repository-name>` 上可用。

注意：如果您希望将站点部署在子路径下，请在 next.config.js 中设置 `assetPrefix` 和 `basePath`。