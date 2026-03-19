import type { DocItem } from './types'

export const droidCliDoc: DocItem = {
  id: 'droid-cli',
  title: 'Droid CLI',
  groupId: 'config',
  headings: [
    { id: 'windows', text: 'Windows 配置' },
    { id: 'macos-linux', text: 'macOS / Linux 配置' }
  ],
  content: `
    <h1>Droid CLI 配置教程</h1>
    <p class="text-lg text-gray-400 mb-10">Factory.ai 推出的 AI 编码助手，支持 Sonnet、GPT 等模型。</p>

    <h2 id="windows">Windows 配置</h2>

    <h3>安装</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>irm https://app.factory.ai/cli/windows | iex</code></pre>
    </div>

    <h3>注册账号</h3>
    <p>前往 <a href="https://app.factory.ai" target="_blank" rel="noopener">app.factory.ai</a> 注册账号。</p>

    <h3>配置</h3>
    <p>配置文件路径：<code>%USERPROFILE%\\.factory\\config.json</code></p>
    <p>在 <code>custom_models</code> 数组中添加 Pingjoku 提供的模型：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>{
  "custom_models": [
    {
      "id": "sonnet-4.5",
      "provider": "anthropic",
      "baseUrl": "https://your-domain.com"
    },
    {
      "id": "gpt-5.2",
      "provider": "openai",
      "baseUrl": "https://your-domain.com"
    }
  ]
}</code></pre>
    </div>

    <hr class="my-12 border-white/10">

    <h2 id="macos-linux">macOS / Linux 配置</h2>

    <h3>安装</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>curl -fsSL https://app.factory.ai/cli | sh</code></pre>
    </div>

    <h3>配置</h3>
    <p>配置文件路径：<code>~/.factory/config.json</code>，内容与 Windows 相同。</p>
  `
}
