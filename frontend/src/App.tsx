import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { WorkDetail } from './components/WorkDetail'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works/:id" element={<WorkDetail />} />
        </Routes>
      </main>
      <footer className="mx-auto max-w-5xl px-4 py-10 text-center text-xs text-slate-400">
        <p>© hideharu — 個人開発の制作物ポートフォリオ</p>
      </footer>
    </div>
  )
}
