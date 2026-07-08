import { Link } from 'react-router-dom'
import type { Work } from '../api/types'
import { statusLabel, statusClass } from '../lib/labels'

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      to={`/works/${work.id}`}
      className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-400 hover:shadow-sm transition"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold text-slate-900">{work.title}</h3>
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${statusClass[work.status]}`}>
          {statusLabel[work.status]}
        </span>
      </div>
      <p className="mt-1 text-xs text-slate-500 font-mono">{work.name}</p>
      <p className="mt-2 text-sm text-slate-700 leading-relaxed">{work.tagline}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {work.tech.slice(0, 5).map(t => (
          <span key={t} className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600">{t}</span>
        ))}
      </div>
    </Link>
  )
}
