import type { DocItem } from './types'

export const openclawDoc: DocItem = {
  id: 'openclaw',
  title: 'OpenClaw',
  groupId: 'config',
  headings: [
    { id: 'overview', text: '概述' },
    { id: 'install', text: '安装' },
    { id: 'quick-start', text: '快速配置' },
    { id: 'manual-config', text: '手动配置' },
    { id: 'commands', text: '常用命令' },
    { id: 'advanced', text: '高级选项' },
    { id: 'faq', text: '常见问题' }
  ],
  content: `
    <h1>OpenClaw 配置教程</h1>
    <p class="text-lg text-gray-400 mb-10">支持多模型管理、扩展思考、插件系统与 MCP 的 AI 助手平台，通过 Pingjoku 统一接入 GPT、Claude、Gemini。</p>

    <h2 id="overview">概述</h2>
    <p>OpenClaw 集成了多模型管理（GPT、Claude、Gemini）、Extended Thinking、插件系统、MCP（Model Context Protocol）等能力。配合 Pingjoku 可实现一站式接入所有主流模型。</p>

    <h2 id="install">安装</h2>
    <p>系统要求：<strong>Node.js 18+</strong>，npm。</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>npm install -g openclaw@latest</code></pre>
    </div>

    <h2 id="quick-start">快速配置（约 5 分钟）</h2>
    <ol>
      <li>运行 <code>openclaw onboard --install-daemon</code></li>
      <li>通过 <code>openclaw config set</code> 配置 provider JSON</li>
      <li>设置默认模型：<code>openclaw models set 'sub2api-openai/gpt-5.3-codex'</code></li>
      <li>重启服务：<code>openclaw gateway restart && openclaw daemon restart</code></li>
      <li>测试连接：<code>openclaw agent --local -m "test" --agent main</code></li>
    </ol>

    <h2 id="manual-config">手动配置</h2>
    <p>配置文件路径：</p>
    <ul>
      <li><strong>Windows：</strong><code>C:\\Users\\&lt;你的用户名&gt;\\.openclaw\\openclaw.json</code></li>
      <li><strong>macOS / Linux：</strong><code>~/.openclaw/openclaw.json</code></li>
    </ul>

    <p>完整配置示例（将 GPT、Claude、Gemini 均指向 Pingjoku）：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>{
  "models": {
    "mode": "merge",
    "providers": {
      "sub2api-openai": {
        "baseUrl": "https://your-domain.com",
        "apiKey": "你的OpenAI API密钥",
        "api": "openai-responses",
        "authHeader": true
      },
      "sub2api-anthropic": {
        "baseUrl": "https://your-domain.com",
        "apiKey": "你的Claude API密钥",
        "api": "anthropic-messages",
        "authHeader": true
      },
      "sub2api-google": {
        "baseUrl": "https://your-domain.com",
        "apiKey": "你的Gemini API密钥",
        "api": "google-messages",
        "authHeader": true
      }
    }
  },
  "agents": {
    "defaults": {
      "workspace": "~/.openclaw/workspace",
      "model": {
        "primary": "sub2api-openai/gpt-5.3-codex",
        "fallbacks": ["sub2api-anthropic/claude-sonnet-4", "sub2api-google/gemini-2.0-flash"]
      }
    }
  }
}</code></pre>
    </div>
    <div class="my-6 rounded-lg border-l-4 border-yellow-500 bg-yellow-500/10 p-4">
      <p class="font-semibold text-yellow-300">WARNING</p>
      <p class="text-yellow-200/80">请将 <code>apiKey</code> 替换为 Pingjoku 仪表盘中生成的实际密钥，并将 <code>https://your-domain.com</code> 替换为你的部署地址。</p>
    </div>

    <h2 id="commands">常用命令</h2>
    <div class="overflow-x-auto">
      <table>
        <thead>
          <tr><th>命令</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr><td><code>openclaw --version</code></td><td>查看版本</td></tr>
          <tr><td><code>openclaw --help</code></td><td>查看帮助</td></tr>
          <tr><td><code>openclaw logs</code></td><td>查看日志</td></tr>
          <tr><td><code>openclaw gateway run</code></td><td>启动网关</td></tr>
          <tr><td><code>openclaw gateway stop</code></td><td>停止网关</td></tr>
          <tr><td><code>openclaw gateway restart</code></td><td>重启网关</td></tr>
          <tr><td><code>openclaw gateway status</code></td><td>网关状态</td></tr>
          <tr><td><code>openclaw models list</code></td><td>列出所有模型</td></tr>
          <tr><td><code>openclaw models show</code></td><td>当前模型详情</td></tr>
          <tr><td><code>openclaw models test</code></td><td>测试模型连接</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="advanced">高级选项</h2>
    <ul>
      <li><strong>推理可见性</strong> — 可在配置中调整 reasoning 相关选项</li>
      <li><strong>自定义工作区</strong> — 修改 <code>agents.defaults.workspace</code></li>
      <li><strong>并发控制</strong> — 通过 <code>maxConcurrent</code> 参数控制</li>
      <li><strong>远程网关模式</strong> — 支持通过 WebSocket 连接远程 gateway</li>
    </ul>

    <h2 id="faq">常见问题</h2>

    <h3>配置校验失败</h3>
    <p>运行 <code>openclaw doctor --fix</code> 或 <code>openclaw doctor</code> 查看具体错误。</p>

    <h3>连接失败</h3>
    <p>检查 <code>baseUrl</code> 和 <code>apiKey</code> 是否正确，网络是否可达。</p>

    <h3>模型调用失败</h3>
    <p>确认模型 ID 格式为 <code>provider/model</code>，且 provider 已在配置中定义。</p>

    <h3>推理不生效</h3>
    <p>确认模型支持 reasoning，并检查相关配置项。</p>

    <h3>切换模型</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>openclaw models set 'provider/model'</code></pre>
    </div>

    <h3>更新 OpenClaw</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>npm update -g openclaw</code></pre>
    </div>
  `
}
