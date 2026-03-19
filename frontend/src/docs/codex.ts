import type { DocItem } from './types'

export const codexDoc: DocItem = {
  id: 'codex',
  title: 'Codex CLI',
  groupId: 'config',
  headings: [
    { id: 'windows', text: 'Windows 配置' },
    { id: 'macos-linux', text: 'macOS / Linux 配置' }
  ],
  content: `
    <h1>Codex CLI 配置教程</h1>
    <p class="text-lg text-gray-400 mb-10">OpenAI 官方 AI 编码助手，通过 Pingjoku 接入，需要 Node.js >= 16。</p>

    <h2 id="windows">Windows 配置</h2>

    <h3>安装</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>npm install -g @openai/codex</code></pre>
    </div>

    <h3>配置</h3>
    <p>在用户目录创建 <code>.codex</code> 文件夹，路径：<code>C:\\Users\\&lt;你的用户名&gt;\\.codex</code></p>

    <p><strong>config.toml</strong></p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>model_provider = "acc"
model = "gpt-5.3-codex"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.acc]
name = "acc"
base_url = "https://your-domain.com"
wire_api = "responses"
requires_openai_auth = true</code></pre>
    </div>

    <p><strong>auth.json</strong></p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>{"OPENAI_API_KEY": "你的API密钥"}</code></pre>
    </div>

    <h3>启动</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>codex</code></pre>
    </div>

    <hr class="my-12 border-white/10">

    <h2 id="macos-linux">macOS / Linux 配置</h2>

    <h3>安装</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>npm install -g @openai/codex</code></pre>
    </div>

    <h3>配置</h3>
    <p>创建配置目录并编辑文件：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>mkdir -p ~/.codex && nano ~/.codex/config.toml</code></pre>
    </div>
    <p><code>config.toml</code> 和 <code>auth.json</code> 内容与 Windows 相同，路径为 <code>~/.codex/</code>。</p>

    <h3>启动</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>codex</code></pre>
    </div>
  `
}
