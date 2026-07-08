import { useMemo, useState } from 'react'
import { worksRepository } from '../api/worksRepository'
import { WorkCard } from './WorkCard'

export function Home() {
  const works = worksRepository.list()
  const featured = worksRepository.featured()
  const allTech = worksRepository.allTech()
  const [techFilter, setTechFilter] = useState<string | null>(null)

  const filtered = useMemo(
    () => (techFilter ? works.filter(w => w.tech.includes(techFilter)) : works),
    [works, techFilter],
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* 自己紹介 */}
      <section className="mb-10">
        <h1 className="text-2xl font-bold text-slate-900">
          未経験からエンジニアを目指して、Web アプリを作っています
        </h1>
        <p className="mt-3 text-slate-700 leading-relaxed">
          中心に使う技術は <strong>Java / Spring Boot / React / PostgreSQL</strong>。
          とくに <strong>アプリの「認可・安全性」の設計</strong> と、<strong>AWS 上での運用（無料枠・IaC）</strong> に力を入れています。
          作ったものは「動くところまで」を大事にし、本番デプロイ・自動テスト・CI/CD まで一通り自分で回しています。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <SkillCard title="認可・権限の設計" body="ロールごとの操作制御、閲覧できない範囲の扱い方を一貫した方針で。" />
          <SkillCard title="AWS 運用 / IaC" body="Terraform で構成をコード化し、EC2 / S3 / RDS を無料枠で運用。" />
          <SkillCard title="Web アプリ開発" body="Spring Boot + React + PostgreSQL で設計・実装・デプロイ。" />
        </div>
      </section>

      {/* 主な制作物 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-slate-900 mb-3">主な制作物</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map(w => <WorkCard key={w.id} work={w} />)}
        </div>
      </section>

      {/* すべての制作物（技術で絞り込み） */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-slate-900">すべての制作物</h2>
        </div>
        <div className="mb-4 flex flex-wrap gap-1.5">
          <FilterChip label="すべて" active={techFilter === null} onClick={() => setTechFilter(null)} />
          {allTech.map(t => (
            <FilterChip key={t} label={t} active={techFilter === t} onClick={() => setTechFilter(t)} />
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map(w => <WorkCard key={w.id} work={w} />)}
        </div>
      </section>
    </div>
  )
}

function SkillCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
      <p className="mt-1 text-xs text-slate-600 leading-relaxed">{body}</p>
    </div>
  )
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs font-medium transition ${
        active ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
      }`}
    >
      {label}
    </button>
  )
}
