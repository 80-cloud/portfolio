import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span aria-hidden>🐬</span>
          <span>hideharu / 制作物ポートフォリオ</span>
        </Link>
        <a
          href="https://github.com/80-cloud"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
