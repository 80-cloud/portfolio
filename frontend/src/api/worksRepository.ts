import type { Work } from './types'
import worksJson from '@data/works.json'

// データの読み取りはこの 1 箇所に隔離する（UI から直接 JSON を触らない）。
const works = (worksJson as Work[]).slice().sort((a, b) => a.order - b.order)

export const worksRepository = {
  list: (): Work[] => works,
  get: (id: string): Work | null => works.find(w => w.id === id) ?? null,
  featured: (): Work[] => works.filter(w => w.featured),
  // タグの逆引き（技術・領域）は派生ビューとしてルールベースで生成する。
  allTech: (): string[] => Array.from(new Set(works.flatMap(w => w.tech))).sort(),
  allDomains: (): string[] => Array.from(new Set(works.flatMap(w => w.domain))).sort(),
}
