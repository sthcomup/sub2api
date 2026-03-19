import type { DocItem } from './types'

export const cherryStudioDoc: DocItem = {
  id: 'cherry-studio',
  title: 'Cherry Studio',
  groupId: 'config',
  headings: [
    { id: 'download', text: '下载安装' },
    { id: 'config', text: '配置模型服务' }
  ],
  content: `
    <h1>Cherry Studio 配置教程</h1>
    <p class="text-lg text-gray-400 mb-10">跨平台 AI 对话客户端，支持多种模型服务，提供图形化操作界面。</p>

    <h2 id="download">下载安装</h2>
    <p>从 <a href="https://www.cherry-ai.com/" target="_blank" rel="noopener">cherry-ai.com</a> 下载对应平台安装包：</p>
    <ul>
      <li><strong>Windows</strong> — <code>.exe</code> 安装包</li>
      <li><strong>macOS</strong> — <code>.dmg</code> 镜像</li>
      <li><strong>Linux</strong> — <code>.AppImage</code></li>
    </ul>

    <h2 id="config">配置模型服务</h2>
    <ol>
      <li>打开 Cherry Studio，进入 <strong>设置</strong> → <strong>模型服务</strong> → <strong>Gemini</strong></li>
      <li>API URL 填写：<code>https://your-domain.com</code></li>
      <li>输入你的 API Key（从 Pingjoku 仪表盘获取）</li>
    </ol>
    <div class="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-500/10 p-4">
      <p class="font-semibold text-blue-300">TIP</p>
      <p class="text-blue-200/80">Pingjoku 支持 Claude、OpenAI 等多种服务，可在 Cherry Studio 中分别配置对应入口。</p>
    </div>
  `
}
