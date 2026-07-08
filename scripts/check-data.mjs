import { readFileSync } from 'node:fs'

// data/works.json の整合性チェック（ID重複・必須欄・status範囲・URL形式・断定語・強み欠落）。
const works = JSON.parse(readFileSync('data/works.json', 'utf8'))

const STATUS = new Set(['deployed', 'live', 'repo'])
const ASSERTIVE = ['正解', '不正解', '一択', '最強', '完璧']
const errors = []

// ID 重複
const seen = new Set()
for (const w of works) {
  if (seen.has(w.id)) errors.push('重複 id: ' + w.id)
  seen.add(w.id)
}

// 断定語の再帰スキャン（盛りすぎ防止）
const scanAssertive = (obj, where) => {
  if (typeof obj === 'string') {
    for (const kw of ASSERTIVE) if (obj.includes(kw)) errors.push('断定語 "' + kw + '": ' + where)
  } else if (Array.isArray(obj)) {
    for (const x of obj) scanAssertive(x, where)
  } else if (obj && typeof obj === 'object') {
    for (const x of Object.values(obj)) scanAssertive(x, where)
  }
}

const isHttp = (u) => String(u).startsWith('http')

for (const w of works) {
  const w0 = 'work ' + w.id
  for (const f of ['name', 'title', 'tagline', 'role', 'period', 'status', 'problem']) {
    if (!w[f]) errors.push(w0 + ': 必須項目 "' + f + '" が欠落')
  }
  if (w.status && !STATUS.has(w.status)) errors.push(w0 + ': 未知の status "' + w.status + '"')
  if (typeof w.order !== 'number') errors.push(w0 + ': order が数値でない')
  if (!Array.isArray(w.strengths) || w.strengths.length === 0) errors.push(w0 + ': strengths が空')
  for (const s of (w.strengths || [])) {
    if (!s.title || !s.detail) errors.push(w0 + ': strength の title/detail が欠落')
  }
  // リンクは存在すれば http で始まること
  for (const k of ['repo', 'docs', 'live']) {
    const v = w.links && w.links[k]
    if (v != null && !isHttp(v)) errors.push(w0 + ': links.' + k + ' が http で始まらない')
  }
  // status:"live" は live リンクを持つべき（開けない URL を貼らない方針の裏返し）
  if (w.status === 'live' && !(w.links && w.links.live)) errors.push(w0 + ': status=live だが links.live が無い')
  scanAssertive(w, w0)
}

console.log('works=' + works.length)
if (errors.length) {
  console.error('\n❌ データ整合性エラー ' + errors.length + ' 件:')
  for (const e of errors) console.error('  - ' + e)
  process.exit(1)
}
console.log('✅ データ整合性チェック OK（ID重複・必須欄・status・URL形式・断定語・強み欠落なし）')
