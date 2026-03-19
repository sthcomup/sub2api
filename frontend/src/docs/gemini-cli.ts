import type { DocItem } from './types'

export const geminiCliDoc: DocItem = {
  id: 'gemini-cli',
  title: 'Gemini CLI',
  groupId: 'config',
  headings: [
    { id: 'windows', text: 'Windows 配置' },
    { id: 'macos-linux', text: 'macOS / Linux 配置' }
  ],
  content: `
    <h1>Gemini CLI 配置教程</h1>
    <p class="text-lg text-gray-400 mb-10">Google 官方命令行 AI 助手，通过 Pingjoku 接入，需要 Node.js >= 20。</p>

    <h2 id="windows">Windows 配置</h2>

    <h3>安装</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>npm install -g @google/gemini-cli</code></pre>
    </div>

    <h3>配置</h3>
    <p>创建配置文件 <code>C:\\Users\\&lt;你的用户名&gt;\\.gemini\\.env</code>：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>GOOGLE_GEMINI_BASE_URL=https://your-domain.com
GEMINI_API_KEY=你的API密钥
GEMINI_MODEL=gemini-3-pro-preview</code></pre>
    </div>
    <p>或通过 PowerShell 设置环境变量：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>$env:GOOGLE_GEMINI_BASE_URL = "https://your-domain.com"
$env:GEMINI_API_KEY = "你的API密钥"</code></pre>
    </div>

    <h3>启动</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>gemini</code></pre>
    </div>

    <hr class="my-12 border-white/10">

    <h2 id="macos-linux">macOS / Linux 配置</h2>

    <h3>安装</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>npm install -g @google/gemini-cli</code></pre>
    </div>

    <h3>配置</h3>
    <p>创建配置文件 <code>~/.gemini/.env</code>：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>GOOGLE_GEMINI_BASE_URL=https://your-domain.com
GEMINI_API_KEY=你的API密钥
GEMINI_MODEL=gemini-3-pro-preview</code></pre>
    </div>
    <p>或 export 到 <code>~/.zshrc</code> / <code>~/.bashrc</code>。</p>

    <h3>启动</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>gemini</code></pre>
    </div>
  `
}
