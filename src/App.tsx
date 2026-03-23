import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import en from './locales/en.json'
import zh from './locales/zh.json'
import { worksList, type ProjectItem } from './data/projects'

function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en')
  const [isContactOpen, setIsContactOpen] = useState(false)
  const worksRef = useRef<HTMLDivElement>(null)
  
  // 管理彈出視窗狀態
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [codeTab, setCodeTab] = useState<'html' | 'css' | 'tsx' | 'vue'>('tsx'); // 模式 3 的程式碼頁籤

  const t = lang === 'en' ? en : zh

  // 根據當前語系決定要使用的字型
  const currentFontFamily = lang === 'en' 
    ? '"Quicksand", sans-serif' 
    : '"Quicksand", "Noto Sans TC", sans-serif';

  // 根據語系動態設定行高變數 (中文結構較密，通常需要比英文多 20% 的行高來呼吸)
  const currentStyle = {
    fontFamily: currentFontFamily,
    '--lh-sm': lang === 'en' ? '140%' : '150%',
    '--lh-md': lang === 'en' ? '160%' : '170%',
    '--lh-lg': lang === 'en' ? '180%' : '190%',
  } as React.CSSProperties;

  // 處理點擊專案卡片
  const handleProjectClick = (project: ProjectItem) => {
    if (project.mode === 'link' && project.url) {
      window.open(project.url, '_blank');
    } else {
      setActiveProject(project);
      // 如果是程式碼模式，自動選取第一個有資料的頁籤
      if (project.mode === 'code-demo' && project.codeDemo) {
        const firstTab = Object.keys(project.codeDemo)[0] as 'html' | 'css' | 'tsx' | 'vue';
        setCodeTab(firstTab);
      }
    }
  };

  // 處理 Works 區塊的左右滑動
  const scrollWorks = (direction: 'left' | 'right') => {
    if (worksRef.current) {
      // 以容器的一半作為滾動基準，配合 CSS 的 snap-mandatory 會自動完美對齊
      const scrollAmount = worksRef.current.offsetWidth / 2;
      worksRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div 
      lang={lang} // 加上 lang 屬性是良好的網頁無障礙 (a11y) 與 SEO 習慣
      className="relative text-white bg-[#082642] before:content-[''] before:fixed before:inset-0 before:z-0 before:bg-[linear-gradient(24.82deg,_#164E81_8.66%,_#082642_64.19%)] before:[transform:matrix(1,0,0,-1,0,0)]"
      style={currentStyle}
    >

      {/* Header 區塊 (改為全透明與包含 Material Icon) */}
      <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center pt-[20px] px-[30px] min-[744px]:pt-[70px] min-[744px]:px-[65px] bg-transparent">
        <div className="font-black tracking-widest text-2xl text-white cursor-pointer drop-shadow-md">
          FISH
        </div>
        <div className="flex gap-6 text-sm font-bold text-white/90 drop-shadow-md">
          <button onClick={() => setIsContactOpen(true)} className="flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider">
            <span className="material-symbols-outlined text-[20px]">mail</span>
            {t.header.contact}
          </button>
          <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider">
            <span className="material-symbols-outlined text-[20px]">language</span>
            {t.header.language}
          </button>
        </div>
      </header>

      {/* Contact 彈出視窗 (Modal) */}
      {/* 加入一層穩定的 div 作為邊界，隔離 React 條件渲染與 GSAP DOM 操作的衝突 */}
      <div>
        <AnimatePresence>
          {/* 1. Contact 聯絡我彈出視窗 */}
          {isContactOpen && !activeProject && (
            <motion.div 
              className="fixed inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4" 
              style={{ zIndex: 9999 }} // 強制最高層級，避免被 GSAP 覆蓋
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
            >
              <motion.div 
                className="bg-white w-full max-w-md p-8 md:p-10 rounded-3xl shadow-2xl text-center relative" 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={e => e.stopPropagation()}
              >
              
              {/* 右上角關閉按鈕 */}
              <button 
                onClick={() => setIsContactOpen(false)} 
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-[#082642] text-white hover:bg-[#0c3862] opacity-100 rounded-full transition-colors cursor-pointer shadow-md"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              {/* 圓形照片區塊 */}
              <div className="w-28 h-28 mx-auto bg-slate-100 rounded-full overflow-hidden mb-5 border-4 border-slate-50 shadow-sm">
                <img src="/archive/assets/images/author.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              
              {/* 中英文名字區塊 */}
              <h3 className="text-3xl font-bold text-slate-900 mb-1">鄭于庭</h3>
              <p className="text-sm font-medium text-slate-400 tracking-widest uppercase">Yu-Ting, Cheng</p>
              
              {/* 聯絡連結按鈕 (垂直排列) */}
              <div className="flex flex-col gap-4 mt-8">
                <a href="mailto:fishtoyo@gmail.com" className="block w-full py-4 bg-white text-[#082642] border-2 border-[#082642] text-[22px] font-bold text-center rounded-[6px] hover:bg-[#082642] hover:text-white hover:scale-105 transition-all duration-300 shadow-sm">
                  Gmail
                </a>
                <a href="https://www.linkedin.com/in/fishtoyo" target="_blank" rel="noreferrer" className="block w-full py-4 bg-white text-[#082642] border-2 border-[#082642] text-[22px] font-bold text-center rounded-[6px] hover:bg-[#082642] hover:text-white hover:scale-105 transition-all duration-300 shadow-sm">
                  LinkedIn
                </a>
                <a href="https://facebook.com/fishtoyo/" target="_blank" rel="noreferrer" className="block w-full py-4 bg-white text-[#082642] border-2 border-[#082642] text-[22px] font-bold text-center rounded-[6px] hover:bg-[#082642] hover:text-white hover:scale-105 transition-all duration-300 shadow-sm">
                  Facebook
                </a>
              </div>
              </motion.div>
            </motion.div>
          )}

          {/* 2. 專案滿版視窗 (支援 Mode 2: Case Study 與 Mode 3: Code Demo) */}
          {activeProject && (
            <motion.div 
              className="fixed inset-0 z-[9999] bg-[#082642] flex flex-col lg:flex-row overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* 共用右上角關閉按鈕 */}
              <button 
                onClick={() => setActiveProject(null)} 
                className="absolute top-6 right-6 z-[10000] w-12 h-12 flex items-center justify-center bg-[#082642] text-white border border-white/10 hover:bg-[#0c3862] opacity-100 rounded-full transition-colors cursor-pointer shadow-xl"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              {/* ========== Mode 2: 圖文輪播模式 ========== */}
              {activeProject.mode === 'case-study' && activeProject.caseStudyMedia && (
                <>
                  {/* 左側：文案區塊 */}
                  <div className="w-full lg:w-[40%] h-[50vh] lg:h-full p-8 lg:p-16 flex flex-col bg-[#082642] border-r border-white/10 overflow-y-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                      {t.works[`project${activeProject.id}Title` as keyof typeof t.works]}
                    </h2>
                    
                    <div 
                      className="text-lg text-white/80 leading-[180%]"
                      dangerouslySetInnerHTML={{ __html: t.works[`project${activeProject.id}Content` as keyof typeof t.works] || '' }}
                    />
                  </div>
                  
                  {/* 右側：照片/影片輪播 */}
                  <div className="w-full lg:w-[60%] h-[50vh] lg:h-full bg-white flex items-center justify-center relative overflow-hidden">
                    <Swiper
                      modules={[Navigation, Pagination, A11y]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      className="w-full h-full"
                    >
                      {activeProject.caseStudyMedia.map((media, index) => (
                        <SwiperSlide key={index}>
                          {media.endsWith('.mp4') ? (
                            <video src={media} className="w-full h-full object-cover opacity-80" autoPlay muted loop playsInline />
                          ) : (
                            <img src={media} alt={`Case Study Media ${index + 1}`} className="w-full h-full object-none" onError={(e) => { e.currentTarget.src = '/archive/assets/images/works/300.png'; }} />
                          )}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </>
              )}

              {/* ========== Mode 3: 程式碼實作模式 ========== */}
              {activeProject.mode === 'code-demo' && activeProject.codeDemo && (
                <>
                  {/* 左側：程式碼高亮與頁籤 */}
                  <div className="w-full lg:w-[50%] h-[50vh] lg:h-full p-8 lg:p-12 flex flex-col bg-[#1e1e1e] border-r border-white/10">
                    <div className="flex gap-4 mb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                      {Object.keys(activeProject.codeDemo).map((lang) => (
                        <button 
                          key={lang}
                          onClick={() => setCodeTab(lang as any)} 
                          className={`px-4 py-2 rounded uppercase text-sm font-bold tracking-wider transition-colors ${codeTab === lang ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                    <div className="flex-1 overflow-auto rounded-lg rounded-tl-none border border-white/10 bg-black/30">
                      <SyntaxHighlighter 
                        language={codeTab === 'vue' ? 'html' : codeTab} 
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent', fontSize: '15px', lineHeight: '1.6' }}
                      >
                        {activeProject.codeDemo[codeTab] || '// No code available'}
                      </SyntaxHighlighter>
                    </div>
                  </div>

                  {/* 右側：範例實作預覽區 */}
                  <div className="w-full lg:w-[50%] h-[50vh] lg:h-full bg-slate-50 flex flex-col">
                    <div className="h-12 bg-slate-200 border-b border-slate-300 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="ml-4 text-xs text-slate-500 font-medium uppercase tracking-widest">Live Preview</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-8">
                      <div className="text-center">
                        {/* 直接渲染設定在 worksList 裡面的真實 React 元素 */}
                        {activeProject.demoComponent || <p className="text-slate-400">Preview not available</p>}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
        
      {/* 1. Welcome 區塊 (背景已移至最外層) */}
      <section className="relative z-[1] min-h-screen lg:min-h-0 lg:h-screen w-full flex flex-col justify-center p-6 py-[80px] md:p-12 md:pt-12 lg:p-[clamp(2rem,5vh,6rem)] lg:pt-[clamp(2rem,5vh,6rem)] overflow-hidden snap-start">
        <div className="content-container">
          <h1 className="hero-title">
            {t.welcome.title}
          </h1>
          <div className="text-[24px] lg:text-[clamp(20px,4vh,38px)] font-bold leading-[var(--lh-sm)] text-white/80 max-w-[1200px]"
          dangerouslySetInnerHTML={{ __html: t.welcome.desc }} 
          />
        </div>
      </section>

      {/* 2. About 區塊 */}
      <section 
        className="relative z-[1] min-h-[calc(100vh-20px)] min-[744px]:min-h-[calc(100vh-80px)] lg:min-h-0 lg:h-[calc(100vh-80px)] w-[calc(100%-20px)] min-[744px]:w-[calc(100%-80px)] mx-auto my-[10px] min-[744px]:my-[40px] rounded-[10px] flex flex-col justify-center p-6 py-[80px] md:p-12 md:pt-12 lg:p-[clamp(2rem,5vh,6rem)] lg:pt-[clamp(2rem,5vh,6rem)] overflow-hidden shadow-2xl snap-start scroll-mt-[10px] min-[744px]:scroll-mt-[40px]" 
        style={{ background: 'linear-gradient(111.69deg, #066786 23.19%, #0381AB 40.23%, #28AAD6 59.07%, #009BD0 72.98%)' }}
      >
        <div className="content-container">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="content-grid">
            <div className="content-left">
              <ul className="space-y-2 lg:space-y-[clamp(0.25rem,calc(1vh+2vw),0.5rem)]">
                {t.about.info.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div 
              className="content-right" 
              dangerouslySetInnerHTML={{ __html: t.about.desc }} 
            />
          </div>
        </div>
      </section>

      {/* 3. Core Skills 區塊 */}
      <section 
        className="relative z-[1] min-h-[calc(100vh-20px)] min-[744px]:min-h-[calc(100vh-80px)] lg:min-h-0 lg:h-[calc(100vh-80px)] w-[calc(100%-20px)] min-[744px]:w-[calc(100%-80px)] mx-auto my-[10px] min-[744px]:my-[40px] rounded-[10px] flex flex-col justify-center p-6 py-[80px] md:p-12 md:pt-12 lg:p-[clamp(2rem,5vh,6rem)] lg:pt-[clamp(2rem,5vh,6rem)] overflow-hidden shadow-2xl snap-start scroll-mt-[10px] min-[744px]:scroll-mt-[40px]" 
        style={{ background: 'linear-gradient(111.25deg, #004965 27.45%, #1C658A 46.05%, #4490BC 61.47%, #3881B0 72.81%)' }}
      >
        <div className="content-container">
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="content-grid">
            <div className="content-left">
              <ul className="space-y-2 lg:space-y-[clamp(0.25rem,1vh,0.5rem)]">
                {t.skills.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div 
              className="content-right" 
              dangerouslySetInnerHTML={{ __html: t.skills.desc }} 
            />
          </div>
        </div>
      </section>
        
      {/* 4. Selected Works 區塊 (橫向輪播) */}
      <section 
        className="relative z-[1] min-h-[calc(100vh-20px)] min-[744px]:min-h-[calc(100vh-80px)] lg:min-h-0 lg:h-[calc(100vh-80px)] w-[calc(100%-20px)] min-[744px]:w-[calc(100%-80px)] mx-auto my-[10px] min-[744px]:my-[40px] rounded-[10px] flex flex-col justify-center p-6 py-[80px] md:p-12 md:pt-12 lg:p-[clamp(2rem,5vh,6rem)] lg:pt-[clamp(2rem,5vh,6rem)] shadow-2xl snap-start scroll-mt-[10px] min-[744px]:scroll-mt-[40px] overflow-hidden" 
        style={{ background: 'linear-gradient(111.25deg, #287E94 27.45%, #1593B3 45.54%, #49C5E4 61.47%, #02A7D1 72.81%)' }}
      >
        <div className="content-container">
          {/* 標題與切換按鈕 */}
          <div className="flex justify-between items-center mb-8 lg:mb-[clamp(1.5rem,3vh,3rem)]">
            <h2 className="section-title !mb-0">{t.works.title}</h2>
            {/* 當項目大於 2 個時才顯示左右箭頭 */}
            {worksList.length > 2 && (
              <div className="flex gap-2 md:gap-4">
                <button onClick={() => scrollWorks('left')} className="w-12 h-12 lg:w-[clamp(2.5rem,5vh,3rem)] lg:h-[clamp(2.5rem,5vh,3rem)] flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white backdrop-blur-sm cursor-pointer">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button onClick={() => scrollWorks('right')} className="w-12 h-12 lg:w-[clamp(2.5rem,5vh,3rem)] lg:h-[clamp(2.5rem,5vh,3rem)] flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white backdrop-blur-sm cursor-pointer">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            )}
          </div>

          {/* 輪播內容區塊 */}
          <div 
            ref={worksRef} 
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {worksList.map((work) => (
              <div key={work.id} onClick={() => handleProjectClick(work)} className="group cursor-pointer shrink-0 snap-start w-full md:w-[calc(50%-16px)]">
                <div className="aspect-[640/400] bg-white rounded-[20px] shadow-[4px_4px_30px_rgba(0,0,0,0.2)] mb-5 lg:mb-[clamp(0.5rem,1.5vh,1.25rem)] overflow-hidden group-hover:border-white/50 transition-colors relative">
                  <img 
                    src={`/archive/assets/images/works/${String(work.id).padStart(2, '0')}.png`} 
                    alt={`Project ${work.id}`} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => { e.currentTarget.src = '/archive/assets/images/works/default.png'; }}
                  />
                  <div className="absolute inset-0 bg-[#082642]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                    <span className="text-white font-medium tracking-widest uppercase text-[14px] lg:text-[clamp(12px,1.5vh,14px)]">VIEW MORE</span>
                  </div>
                </div>
                <div className="px-[10px]">
                  <h3 className="text-[24px] lg:text-[clamp(18px,2.6vh,24px)] font-bold leading-[var(--lh-lg)] text-white mb-2 lg:mb-[clamp(0.25rem,1vh,0.5rem)]">{t.works[`project${work.id}Title` as keyof typeof t.works]}</h3>
                  <p className="text-[22px] lg:text-[clamp(16px,2.4vh,22px)] font-bold leading-[var(--lh-lg)] text-white/80">{t.works[`project${work.id}Desc` as keyof typeof t.works]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Archive 區塊 (包含舊版按鈕) */}
      <section 
        className="relative z-[1] min-h-[calc(100vh-20px)] min-[744px]:min-h-[calc(100vh-80px)] lg:min-h-0 lg:h-[calc(100vh-80px)] w-[calc(100%-20px)] min-[744px]:w-[calc(100%-80px)] mx-auto my-[10px] min-[744px]:my-[40px] rounded-[10px] flex flex-col justify-center p-6 py-[80px] md:p-12 md:pt-12 lg:p-[clamp(2rem,5vh,6rem)] lg:pt-[clamp(2rem,5vh,6rem)] overflow-hidden shadow-2xl text-white/80 snap-start scroll-mt-[10px] min-[744px]:scroll-mt-[40px]" 
        style={{ background: 'linear-gradient(111.25deg, #286594 27.45%, #157EB3 45.54%, #49B3E4 61.47%, #0293D1 72.81%)' }}
      >
        <div className="content-container">
          <h2 className="section-title">{t.archive.title}</h2>
          <div className="text-[18px] lg:text-[clamp(18px,3vh,24px)] font-bold leading-[var(--lh-lg)] text-white/80 mb-10 lg:mb-[clamp(1.5rem,4vh,2.5rem)]"
          dangerouslySetInnerHTML={{ __html: t.archive.desc }} 
          />
          <a 
            href="/archive/index.html" 
            className="inline-block px-8 py-4 lg:py-[clamp(0.75rem,2vh,1rem)] lg:px-[clamp(1.5rem,3vh,2rem)] bg-[#082642] text-white text-[16px] lg:text-[clamp(18px,2.5vh,22px)] font-bold rounded-[6px] hover:bg-[#0c3862] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            {t.archive.btn}
          </a>
        </div>
      </section>

    </div>
  )
}

export default App