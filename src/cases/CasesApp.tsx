import { useEffect, useMemo, useState } from 'react'
import cases from '../data/cases.json'

interface CaseItem {
  id: string
  title: string
}

type Lang = 'en' | 'zh'

const TEXT = {
  en: {
    back: 'Resume',
    title: 'Project Archive',
    desc: 'Over 300 websites I have helped build in 16 years of front-end development — corporate sites, brand campaigns and e-commerce across many industries.',
    total: (n: number) => `${n} projects`,
    search: 'Search projects',
    empty: 'No matching projects.',
    confidential: 'Confidential',
  },
  zh: {
    back: '回履歷',
    title: '作品總覽',
    desc: '16 年來參與製作的 300+ 個網站，涵蓋企業官網、品牌活動與電商，橫跨製造、醫療、餐飲、旅遊、教育等產業。',
    total: (n: number) => `共 ${n} 件`,
    search: '搜尋作品名稱',
    empty: '找不到符合的作品。',
    confidential: '暫不公開',
  },
} as const

// 打包時已移除網址（見 vite.config.ts 的 stripCaseUrls），這裡只拿得到編號與名稱
const list = cases as CaseItem[]
const isConfidential = (c: CaseItem) => c.title === '暫不公開'

// 只展示截圖與名稱，不提供任何連結
function CaseCard({ item, lang }: { item: CaseItem; lang: Lang }) {
  const title = isConfidential(item) ? TEXT[lang].confidential : item.title

  return (
    <div className="block">
      <div className="relative aspect-4/3 bg-white rounded-lg overflow-hidden shadow-[2px_2px_5px_rgba(0,0,0,0.1)] mb-3">
        <img
          src={`/assets/cases/${item.id}.png`}
          alt={title}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = '/assets/cases/default.png' }}
        />
      </div>
      <div className="px-1">
        <p className="font-bold text-[13px] text-white/50 tabular-nums">No.{item.id}</p>
        <h2 className="mt-0.5 text-[16px] font-bold text-white leading-snug line-clamp-1" title={title}>{title}</h2>
      </div>
    </div>
  )
}

export default function CasesApp() {
  // 與履歷相同：用 ?lang=zh / ?lang=en 決定語系
  const [lang, setLang] = useState<Lang>(() =>
    new URLSearchParams(window.location.search).get('lang') === 'zh' ? 'zh' : 'en'
  )
  const [query, setQuery] = useState('')
  const t = TEXT[lang]

  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState({}, '', url.toString())
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en'
    document.title = lang === 'zh' ? 'Fish - 作品總覽' : 'Fish - Project Archive'
  }, [lang])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return list
    return list.filter((c) => c.title.toLowerCase().includes(q) || c.id === q.replace(/^no\.?/, ''))
  }, [query])

  // 字型、行高、字距與履歷一致
  const style = {
    fontFamily: lang === 'en' ? '"Quicksand", sans-serif' : '"Quicksand", "Noto Sans TC", sans-serif',
    '--lh-sm': lang === 'en' ? '140%' : '150%',
    '--lh-md': lang === 'en' ? '160%' : '170%',
    '--lh-lg': lang === 'en' ? '180%' : '190%',
    '--ls-sm': lang === 'en' ? '0px' : '1px',
    '--ls-md': lang === 'en' ? '0px' : '2px',
    '--ls-lg': lang === 'en' ? '0px' : '3px',
  } as React.CSSProperties

  const resumeHref = `/resume/?lang=${lang}`

  return (
    <div
      lang={lang}
      className="relative min-h-screen text-white bg-[#082642] tracking-(--ls-sm) md:tracking-(--ls-md) before:content-[''] before:fixed before:inset-0 before:z-0 before:bg-[linear-gradient(24.82deg,#164E81_8.66%,#082642_64.19%)] before:transform-[matrix(1,0,0,-1,0,0)]"
      style={style}
    >
      {/* Header：與履歷相同的位置與按鈕樣式 */}
      <header className="relative z-100 flex justify-between items-center pt-5 px-7.5 min-[744px]:pt-17.5 min-[744px]:px-16.25">
        <a href={resumeHref} className="block w-32.5 h-9 bg-[url('/assets/logo.png')] bg-size-[129px_auto] bg-no-repeat bg-center text-[0px] drop-shadow-md" title={t.back}>
          FISH - Portfolio
        </a>
        <div className="flex gap-2 md:gap-6 text-white/90 drop-shadow-md items-center">
          <a href={resumeHref} className="flex items-center justify-center gap-1 md:gap-1.5 h-11.5 px-2 md:pl-3 md:pr-4 border border-transparent hover:border-white/20 hover:bg-white/10 rounded-md transition-all text-[16px] font-medium tracking-wider">
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            <span className="hidden md:inline">{t.back}</span>
          </a>
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="flex items-center justify-center gap-1 md:gap-1.5 h-11.5 px-2 md:pl-3 md:pr-4 border border-transparent hover:border-white/20 hover:bg-white/10 rounded-md transition-all text-[16px] font-medium tracking-wider cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">language</span>
            <span className="hidden md:inline">{lang === 'en' ? '繁體中文' : 'English'}</span>
            <span className="md:hidden">{lang === 'en' ? '繁中' : 'EN'}</span>
          </button>
        </div>
      </header>

      <main className="relative z-1 w-[calc(100%-20px)] min-[744px]:w-[calc(100%-80px)] mx-auto my-2.5 min-[744px]:my-10 rounded-[10px] overflow-hidden shadow-2xl p-6 py-12 md:p-12 lg:p-16 bg-[linear-gradient(111.25deg,#286594_27.45%,#157EB3_45.54%,#49B3E4_61.47%,#0293D1_72.81%)]">
        <div className="content-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
            <div>
              <h1 className="section-title mb-4!"><span>{t.title}</span></h1>
              <p className="max-w-205 text-[16px] lg:text-[18px] font-bold leading-(--lh-md) text-white/80">{t.desc}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <label className="flex items-center gap-2 h-11 w-full sm:w-72 px-3 bg-white/15 border border-white/25 rounded-md focus-within:border-white/70 transition-colors">
                <span className="material-symbols-outlined text-[20px] text-white/70">search</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.search}
                  className="w-full bg-transparent text-white placeholder:text-white/55 font-medium outline-none"
                />
              </label>
              <span className="shrink-0 text-[14px] font-bold text-white/70 tabular-nums">{t.total(filtered.length)}</span>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 min-[1580px]:grid-cols-5 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-10">
              {filtered.map((item) => (
                <CaseCard key={item.id} item={item} lang={lang} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-[18px] font-bold text-white/70">{t.empty}</p>
          )}
        </div>
      </main>

      <footer className="relative z-1 pb-10 text-center text-[13px] text-white/45">© Fish</footer>
    </div>
  )
}
