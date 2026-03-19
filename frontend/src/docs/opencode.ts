import type { DocItem } from './types'

export const opencodeDoc: DocItem = {
  id: 'opencode',
  title: 'OpenCode',
  groupId: 'config',
  headings: [
    { id: 'prereq', text: '前置要求' },
    { id: 'install', text: '安装' },
    { id: 'keys', text: '获取 API 密钥' },
    { id: 'windows', text: 'Windows 配置' },
    { id: 'macos', text: 'macOS 配置' },
    { id: 'linux', text: 'Linux 配置' }
  ],
  content: `
    <h1>OpenCode 配置教程</h1>
    <p class="text-lg text-gray-400 mb-10">支持 Claude、OpenAI、Google 多模型的编码助手，需为每个 Provider 分别配置。</p>

    <h2 id="prereq">前置要求</h2>
    <p><strong>Node.js 18+</strong></p>

    <h2 id="install">安装</h2>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>npm install -g opencode</code></pre>
    </div>

    <h2 id="keys">获取 API 密钥</h2>
    <p>在 Pingjoku 仪表盘中，为 Claude、OpenAI、Google 分别创建或获取 API Key。</p>

    <h2 id="windows">Windows 配置</h2>
    <p>配置文件路径：<code>C:\\Users\\&lt;你的用户名&gt;\\.opencode\\config.json</code></p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>{
  "providers": {
    "Google": {
      "baseUrl": "https://your-domain.com",
      "apiKey": "你的Gemini API密钥"
    },
    "ClaudeCode": {
      "baseUrl": "https://your-domain.com",
      "apiKey": "你的Claude API密钥"
    },
    "OpenAI": {
      "baseUrl": "https://your-domain.com",
      "apiKey": "你的OpenAI API密钥"
    }
  }
}</code></pre>
    </div>

    <hr class="my-12 border-white/10">

    <h2 id="macos">macOS 配置</h2>
    <p>配置文件路径：<code>~/.opencode/config.json</code>，内容与 Windows 相同。</p>

    <hr class="my-12 border-white/10">

    <h2 id="linux">Linux 配置</h2>
    <p>配置文件路径：<code>~/.opencode/config.json</code>，内容与 Windows 相同。</p>

    <h2>启动</h2>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>opencode</code></pre>
    </div>
  `
}
