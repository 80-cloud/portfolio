import type { WorkStatus } from '../api/types'

// ステータスの表示ラベルと色（データの status を人が読める形に変換する）。
export const statusLabel: Record<WorkStatus, string> = {
  deployed: '本番デプロイ済み',
  live: '公開中',
  repo: 'コード公開',
}

export const statusClass: Record<WorkStatus, string> = {
  deployed: 'bg-emerald-100 text-emerald-800',
  live: 'bg-sky-100 text-sky-800',
  repo: 'bg-slate-100 text-slate-700',
}
