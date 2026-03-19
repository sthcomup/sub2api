import type { DocItem, DocGroup } from './types'
import { claudeCodeDoc } from './claude-code'
import { geminiCliDoc } from './gemini-cli'
import { codexDoc } from './codex'
import { openclawDoc } from './openclaw'
import { droidCliDoc } from './droid-cli'
import { cherryStudioDoc } from './cherry-studio'
import { opencodeDoc } from './opencode'
import { whatIsClaudeCodeDoc } from './what-is-claude-code'

export type { DocItem, DocGroup }
export { type DocHeading } from './types'

export const allDocs: DocItem[] = [
  claudeCodeDoc,
  geminiCliDoc,
  codexDoc,
  openclawDoc,
  droidCliDoc,
  cherryStudioDoc,
  opencodeDoc,
  whatIsClaudeCodeDoc
]

export const documentGroups: DocGroup[] = [
  {
    name: '配置教程',
    docs: [
      claudeCodeDoc,
      geminiCliDoc,
      codexDoc,
      openclawDoc,
      droidCliDoc,
      cherryStudioDoc,
      opencodeDoc
    ]
  },
  {
    name: '入门教程',
    docs: [
      whatIsClaudeCodeDoc
    ]
  }
]

export const defaultDocId = 'claude-code'
