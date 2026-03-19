export interface DocHeading {
  id: string
  text: string
}

export interface DocItem {
  id: string
  title: string
  groupId: string
  headings: DocHeading[]
  content: string
}

export interface DocGroup {
  name: string
  docs: DocItem[]
}
