import { Link, useParams } from 'react-router-dom'
import { worksRepository } from '../api/worksRepository'
import { statusLabel, statusClass } from '../lib/labels'

export function WorkDetail() {
  const { id } = useParams()
  const work = id ? worksRepository.get(id) : null

  if (!work) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-slate-600">作品が見つかりませんでした。</p>
        <Link to="/" className="mt-4 inline-block text-sm text-sky-700 hover:underline">← 一覧へ戻る</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link to="/" className="text-sm text-slate-500 hover:text-slate-900">← 一覧へ戻る</Link>

      <div className="mt-3 flex items-center gap-2">
        <h1 className="text-2xl font-bold text-slate-900">{work.title}</h1>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusClass[work.status]}`}>
          {statusLabel[work.status]}
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-500 font-mono">{work.name}</p>
      <p className="mt-3 text-slate-700 leading-relaxed">{work.tagline}</p>

      {/* メタ情報 */}
      <dl className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2 text-sm">
        <Meta label="担当" value={work.role} />
        <Meta label="期間" value={work.period} />
        <Meta label="領域" value={work.domain.join(' / ')} />
        <Meta label="技術" value={work.tech.join(' / ')} />
      </dl>

      {/* リンク */}
      <div className="mt-5 flex flex-wrap gap-2">
        {work.links.live && <LinkButton href={work.links.live} label="🔗 公開ページ" primary />}
        {work.links.repo && <LinkButton href={work.links.repo} label="コード（GitHub）" />}
        {work.links.docs && <LinkButton href={work.links.docs} label="設計・運用ドキュメント" />}
      </div>
      {work.liveNote && <p className="mt-2 text-xs text-slate-500">{work.liveNote}</p>}

      {/* 解きたかった課題 */}
      <section className="mt-8">
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide">解きたかった課題</h2>
        <p className="mt-2 text-slate-700 leading-relaxed">{work.problem}</p>
      </section>

      {/* 強み */}
      <section className="mt-8">
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide">このアプリの強み</h2>
        <ul className="mt-3 space-y-3">
          {work.strengths.map((s, i) => (
            <li key={i} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 学び */}
      {work.learned.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide">学び</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-slate-700">
            {work.learned.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </section>
      )}
    </div>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="text-slate-400 shrink-0">{label}</dt>
      <dd className="text-slate-700">{value}</dd>
    </div>
  )
}

function LinkButton({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
        primary ? 'bg-slate-900 text-white hover:bg-slate-700' : 'border border-slate-300 text-slate-700 hover:border-slate-500'
      }`}
    >
      {label}
    </a>
  )
}
