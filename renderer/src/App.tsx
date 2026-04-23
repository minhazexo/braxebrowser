import { useState } from 'react'

function App() {
  const [ipcResult, setIpcResult] = useState<string>('ready')

  const handlePing = async () => {
    const result = await window.braxeAPI.ping('renderer-online')
    setIpcResult(result)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-14 text-slate-100">
      <section className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Braxe Browser
            </p>
            <h1 className="mt-2 text-3xl font-semibold">
              Electron + React + TypeScript Bootstrap
            </h1>
          </div>
          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
            STEP 1
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
            <p className="text-sm text-slate-300">Engine</p>
            <p className="mt-1 text-lg font-medium">Electron (Chromium)</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
            <p className="text-sm text-slate-300">Frontend</p>
            <p className="mt-1 text-lg font-medium">React + TypeScript</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
            <p className="text-sm text-slate-300">Styling</p>
            <p className="mt-1 text-lg font-medium">Tailwind CSS</p>
          </article>
        </div>

        <div className="mt-8 rounded-xl border border-cyan-400/30 bg-cyan-500/5 p-5">
          <p className="text-sm text-cyan-100">
            Secure IPC status:
            <span className="ml-2 rounded-md bg-slate-900/70 px-2 py-1 font-mono text-xs">
              {ipcResult}
            </span>
          </p>
          <button
            type="button"
            onClick={handlePing}
            className="mt-4 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Test preload bridge
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
