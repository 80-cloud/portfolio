// 作品カタログの型。data/works.json のスキーマと 1:1 で対応する。

export type WorkStatus = 'deployed' | 'live' | 'repo'

export interface Strength {
  title: string
  detail: string
}

export interface WorkLinks {
  repo?: string | null
  docs?: string | null
  live?: string | null
}

export interface Work {
  id: string
  name: string
  title: string
  tagline: string
  role: string
  period: string
  status: WorkStatus
  featured: boolean
  order: number
  domain: string[]
  tech: string[]
  problem: string
  strengths: Strength[]
  links: WorkLinks
  liveNote?: string | null
  screenshots: string[]
  learned: string[]
}
