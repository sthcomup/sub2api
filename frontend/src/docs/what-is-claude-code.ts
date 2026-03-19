import type { DocItem } from './types'

export const whatIsClaudeCodeDoc: DocItem = {
  id: 'what-is-claude-code',
  title: '什么是 Claude Code',
  groupId: 'tutorial',
  headings: [
    { id: 'what-is', text: 'Claude Code 是什么' },
    { id: 'why-easy', text: '为什么非程序员也能用' },
    { id: 'summary', text: '一句话总结' }
  ],
  content: `
    <h1>什么是 Claude Code（小白教程）</h1>
    <p class="text-lg text-gray-400 mb-10">零基础入门，了解 Anthropic 推出的 AI 编程助手能帮你做什么。</p>

    <h2 id="what-is">Claude Code 是什么</h2>
    <p>Claude Code 是一款 AI 助手工具，能理解你的自然语言指令，帮你：</p>
    <ul>
      <li>编写代码、修改文件</li>
      <li>运行命令、调试程序</li>
      <li>解释已有代码逻辑</li>
    </ul>
    <p>它既可以作为命令行工具使用，也可以集成到 VS Code、Cursor 等编辑器中。</p>

    <h2 id="why-easy">为什么非程序员也能轻松使用</h2>
    <ul>
      <li><strong>自然语言交互</strong> — 用日常语言描述需求，无需学习编程语法</li>
      <li><strong>支持 GUI 操作</strong> — 可配合图形界面完成文件管理、预览等</li>
      <li><strong>智能理解</strong> — 能根据上下文推断你的意图，减少重复说明</li>
      <li><strong>所见即所得</strong> — 修改结果可直接查看，便于验证</li>
    </ul>

    <h2 id="summary">一句话总结</h2>
    <p>Claude Code 就像一个会写代码的助手——你告诉它想做什么，它帮你把代码写好、改好、跑起来。</p>
  `
}
