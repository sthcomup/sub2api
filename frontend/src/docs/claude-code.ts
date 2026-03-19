import type { DocItem } from './types'

export const claudeCodeDoc: DocItem = {
  id: 'claude-code',
  title: 'Claude Code',
  groupId: 'config',
  headings: [
    { id: 'windows', text: 'Windows 配置' },
    { id: 'macos', text: 'macOS 配置' },
    { id: 'linux', text: 'Linux / WSL2 配置' }
  ],
  content: `
    <h1>Claude Code 配置教程</h1>
    <p class="text-lg text-gray-400 mb-10">Anthropic 官方 AI 编程助手，通过 Pingjoku 一键接入，支持 Windows / macOS / Linux 全平台。</p>

    <h2 id="windows">Windows 配置</h2>

    <h3>安装 Node.js</h3>
    <p>Claude Code 依赖 Node.js 运行环境，最低要求 <strong>Node.js >= 18</strong>（建议 LTS 版本）。</p>
    <p><strong>方式一：官网安装（推荐）</strong></p>
    <ul>
      <li>访问 <a href="https://nodejs.org" target="_blank">nodejs.org</a> 下载 LTS 版本</li>
      <li>双击安装包，按向导完成安装</li>
    </ul>
    <p><strong>方式二：包管理器</strong></p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code># Chocolatey
choco install nodejs

# Scoop
scoop install nodejs</code></pre>
    </div>
    <p>验证安装：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>node --version
npm --version</code></pre>
    </div>
    <div class="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-500/10 p-4">
      <p class="font-semibold text-blue-300">TIP</p>
      <p class="text-blue-200/80">建议使用 PowerShell。如遇权限问题可尝试以管理员身份运行。</p>
    </div>

    <h3>安装 Claude Code</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>npm install -g @anthropic-ai/claude-code</code></pre>
    </div>
    <p>验证安装：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>claude --version</code></pre>
    </div>

    <h3>配置 API 连接</h3>
    <p><strong>方式一：配置文件（推荐）</strong></p>
    <p>在用户目录创建配置文件：</p>
    <div class="my-2 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>C:\\Users\\&lt;你的用户名&gt;\\.claude\\settings.json</code></pre>
    </div>
    <p>写入以下内容：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的API密钥",
    "ANTHROPIC_BASE_URL": "https://your-domain.com"
  }
}</code></pre>
    </div>
    <p>创建步骤：</p>
    <ol>
      <li>打开文件资源管理器，进入 <code>C:\\Users\\&lt;你的用户名&gt;\\</code> 目录</li>
      <li>新建文件夹 <code>.claude</code>（如已存在则跳过）</li>
      <li>在 <code>.claude</code> 文件夹中新建文件 <code>settings.json</code></li>
      <li>粘贴上述配置内容并保存</li>
    </ol>

    <p><strong>方式二：环境变量</strong></p>
    <p>PowerShell 临时设置（当前会话）：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>$env:ANTHROPIC_BASE_URL = "https://your-domain.com"
$env:ANTHROPIC_AUTH_TOKEN = "你的API密钥"</code></pre>
    </div>
    <p>永久设置（用户级）：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>[System.Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://your-domain.com", [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "你的API密钥", [System.EnvironmentVariableTarget]::User)</code></pre>
    </div>
    <div class="my-6 rounded-lg border-l-4 border-yellow-500 bg-yellow-500/10 p-4">
      <p class="font-semibold text-yellow-300">WARNING</p>
      <p class="text-yellow-200/80">请将 <code>你的API密钥</code> 替换为仪表盘中生成的实际密钥。</p>
    </div>

    <h3>VSCode 插件（可选）</h3>
    <p>如果使用 VSCode 的 Claude 插件，还需额外创建 <code>config.json</code>：</p>
    <p>路径：<code>C:\\Users\\&lt;你的用户名&gt;\\.claude\\config.json</code></p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>{
  "primaryApiKey": "any"
}</code></pre>
    </div>
    <div class="my-6 rounded-lg border-l-4 border-yellow-500 bg-yellow-500/10 p-4">
      <p class="font-semibold text-yellow-300">WARNING</p>
      <p class="text-yellow-200/80"><code>config.json</code> 是 VSCode 插件专用，与 Claude Code 的 <code>settings.json</code> 是两个不同的文件。</p>
    </div>

    <h3>启动</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>claude</code></pre>
    </div>
    <p>运行 <code>claude --help</code> 查看全部可用命令。</p>

    <h3>常见问题</h3>
    <p><strong>Unable to connect to Anthropic services</strong></p>
    <p>在用户根目录创建 <code>.claude.json</code> 文件跳过引导流程：</p>
    <div class="my-2 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>C:\\Users\\&lt;你的用户名&gt;\\.claude.json</code></pre>
    </div>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>{
  "hasCompletedOnboarding": true
}</code></pre>
    </div>

    <hr class="my-12 border-white/10">

    <h2 id="macos">macOS 配置</h2>

    <h3>安装依赖与 Claude Code</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>brew install node
npm install -g @anthropic-ai/claude-code</code></pre>
    </div>

    <h3>配置 API</h3>
    <p>配置文件路径：<code>~/.claude/settings.json</code></p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的API密钥",
    "ANTHROPIC_BASE_URL": "https://your-domain.com"
  }
}</code></pre>
    </div>
    <p>或者在 <code>~/.zshrc</code> 中添加环境变量：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>export ANTHROPIC_BASE_URL="https://your-domain.com"
export ANTHROPIC_AUTH_TOKEN="你的API密钥"</code></pre>
    </div>

    <h3>VSCode 插件（可选）</h3>
    <p>路径：<code>~/.claude/config.json</code>，内容同 Windows。</p>

    <h3>常见问题</h3>
    <p>若提示 <em>Unable to connect</em>，创建 <code>~/.claude.json</code>：</p>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>cat > ~/.claude.json << 'EOF'
{"hasCompletedOnboarding": true}
EOF</code></pre>
    </div>

    <hr class="my-12 border-white/10">

    <h2 id="linux">Linux / WSL2 配置</h2>

    <h3>安装依赖与 Claude Code</h3>
    <div class="my-4 rounded-xl bg-white/5 border border-white/10 p-4 font-mono text-sm overflow-x-auto">
<pre><code>sudo apt update && sudo apt install -y nodejs npm
npm install -g @anthropic-ai/claude-code</code></pre>
    </div>

    <h3>配置 API</h3>
    <p>配置文件路径：<code>~/.claude/settings.json</code>，内容与 macOS 相同。</p>
    <p>环境变量可写入 <code>~/.bashrc</code>。</p>

    <h3>VSCode 插件（可选）</h3>
    <p>路径：<code>~/.claude/config.json</code></p>

    <h3>常见问题</h3>
    <p>同 macOS，创建 <code>~/.claude.json</code> 跳过引导流程。</p>
  `
}
