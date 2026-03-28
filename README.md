

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

## 部署到 Gitee Pages

如果 GitHub 访问受限，您可以使用 Gitee Pages 来部署您的项目。Gitee 是国内的一个代码托管平台，提供类似 GitHub 的功能，并且支持 Pages 服务。

### 部署步骤：

1. 在 Gitee 上创建一个新仓库并推送您的代码：
   - 访问 [Gitee 官网](https://gitee.com/)
   - 登录后创建一个新的仓库
   - 将本地代码推送到 Gitee 仓库

2. 构建并导出静态版本：
   ```bash
   npm run deploy
   ```
   
3. 这将在 `out` 目录中生成静态文件。

### 如何在 Gitee 上启用 Pages 服务：

如果在仓库页面找不到 "Gitee Pages" 选项，可能是因为：

1. 您的仓库类型是私有的，需要改为公开仓库
2. Gitee 可能对 Pages 服务进行了界面调整，目前可能叫 "静态网页" 或 "Web 服务"

请按以下步骤操作：

#### 方法一：
1. 在 Gitee 仓库页面，点击 "服务" 菜单（通常在左侧导航栏）
2. 查找 "静态网页"、"Pages" 或 "Web 服务" 相关选项
3. 如果没有在侧边栏显示，可以尝试在顶部搜索框搜索 "Pages"

#### 方法二：
1. 进入您的 Gitee 仓库
2. 点击 "管理" 或 "仓库设置"
3. 在设置页面中查找 "静态网页服务" 或 "Gitee Pages" 选项
4. 启用服务并选择您用于部署的分支（如 main 或 gh-pages）
5. 选择部署目录（通常选择根目录 "/"）
6. 点击保存或部署按钮

#### 方法三（如果以上方法都找不到）：
如果您确实无法找到 Gitee Pages 服务，可以考虑以下替代方案：

1. 使用第三方静态网站托管服务：
   - Vercel（支持直接从 Gitee 仓库部署）
   - Netlify（可以通过拖拽上传部署）
   - Surge
   - Firebase Hosting

2. 手动部署：
   - 构建项目：`npm run deploy`
   - 将 `out` 目录中的文件上传到您自己的服务器或云存储服务

注意：Gitee Pages 提供的服务在国内访问速度更快，且不受网络限制影响。
