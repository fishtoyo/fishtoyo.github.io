import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import en from './locales/en.json'
import zh from './locales/zh.json'
import { worksList, type ProjectItem } from './data/projects'
import { ContactModal } from './components/ContactModal'
import { ProjectModal } from './components/ProjectModal'
import { WelcomeSection } from './components/sections/WelcomeSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { WorksSection, type WorksCategory } from './components/sections/WorksSection'
import { ArchiveSection } from './components/sections/ArchiveSection'

// 純 CSS 實作的 Scroll 浮動滑鼠圖示
function ScrollMouse({ isLast = false, arrowState }: { isLast?: boolean, arrowState: { scale: number, rotate: number } }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })
  
  // 透過旋轉狀態來判斷箭頭是否要呈現為橫式 (與 Welcome 動畫時序完全同步)
  const isArrowHorizontal = arrowState.rotate === -90;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  // 根據排版模式決定位移方向：
  // 直式 (!isArrowHorizontal): 隱藏下箭頭時，整體往下 (bottom) 位移
  // 橫式 (isArrowHorizontal):  因為右箭頭會突出，所以平時先往左移一點 (加大 right 留出空間)；隱藏右箭頭時，再整體往右 (right) 位移補回空間
  const positionClasses = isArrowHorizontal
    ? `bottom-12.5 min-[744px]:bottom-20 ${isLast ? 'right-7.5 min-[744px]:right-16.25' : 'right-12.5 min-[744px]:right-20'}`
    : `right-7.5 min-[744px]:right-16.25 ${isLast ? 'bottom-7.5 min-[744px]:bottom-17.5' : 'bottom-12.5 min-[744px]:bottom-20'}`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: arrowState.scale }}
      exit={{ opacity: 0 }}
      transition={{ scale: { duration: 0.2 } }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      className={`fixed z-50 ${positionClasses} w-7 h-9.5 border-2 border-white rounded-[100px] flex justify-center pt-2.5 cursor-pointer transition-all duration-300`}
    >
      {/* 上/左箭頭 */}
      <span className={`absolute w-3 h-3 border-t-2 border-l-2 border-white transition-all duration-300 ${isArrowHorizontal ? 'top-[calc(50%-6px)] -left-4 -rotate-45' : '-top-4 left-[calc(50%-6px)] rotate-45'}`}></span>
      
      {/* 下/右箭頭 (如果是最後一個區塊則隱藏) */}
      {!isLast && (
        <span className={`absolute w-3 h-3 border-b-2 border-r-2 border-white transition-all duration-300 ${isArrowHorizontal ? 'top-[calc(50%-6px)] -right-4 -rotate-45' : '-bottom-4 left-[calc(50%-6px)] rotate-45'}`}></span>
      )}

      {/* 滾輪 */}
      <span className="w-1 h-1.5 bg-white rounded-[10px] animate-[scrollWheel_2.5s_ease-in-out_infinite]"></span>
    </motion.div>
  );
}

function App() {
  // 初始化時讀取 URL 參數 (?lang=zh 或 ?lang=en)
  const [lang, setLang] = useState<'en' | 'zh'>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') === 'zh' ? 'zh' : 'en';
  });
  // 判斷是否為無游標(觸控)設備
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(hover: none)').matches : false);
  const [isContactOpen, setIsContactOpen] = useState(false)
  const worksRef = useRef<HTMLDivElement>(null)
  
  // 排版模式狀態與動畫狀態
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [arrowState, setArrowState] = useState({ scale: 1, rotate: 0 });
  const isFirstRender = useRef(true);

  // 管理彈出視窗狀態
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // 作品分類篩選
  const [filterCategory, setFilterCategory] = useState<WorksCategory>('all');

  // 橫向捲軸拖曳狀態
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidthRatio, setThumbWidthRatio] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  // 全域 Scroll 滑鼠視窗狀態
  const [showScrollMouse, setShowScrollMouse] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 偵測是否為觸控設備 (無 hover 行為)
  useEffect(() => {
    const mql = window.matchMedia('(hover: none)');
    const handleMatchChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handleMatchChange);
    return () => mql.removeEventListener('change', handleMatchChange);
  }, [setIsMobile]);

  // 監聽排版切換，觸發「放大再轉向」的連續動畫
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    let isCancelled = false;
    const runAnimationSequence = async () => {
       // 1. 先放大
       setArrowState(s => ({ ...s, scale: 1.3 }));
       await new Promise(r => setTimeout(r, 150));
       if(isCancelled) return;
       // 2. 接著轉向 (-90度向右 / 0度向下)
       setArrowState(s => ({ ...s, rotate: isHorizontal ? -90 : 0 }));
       await new Promise(r => setTimeout(r, 200));
       if(isCancelled) return;
       // 3. 最後縮小回原狀
       setArrowState(s => ({ ...s, scale: 1 }));
    };
    runAnimationSequence();
    return () => { isCancelled = true; };
  }, [isHorizontal]);

  // 動態修改 HTML 的滾動屬性與攔截滑鼠滾輪轉換為水平滾動
  useEffect(() => {
    const html = document.documentElement;
    if (isHorizontal) {
      html.classList.remove('snap-y');
      html.classList.add('snap-x');
    } else {
      html.classList.add('snap-y');
      html.classList.remove('snap-x');
    }

    const handleWheel = (e: WheelEvent) => {
      if (!isHorizontal) return;
      
      // 1. 如果有彈出視窗開啟 (body 被鎖定)，完全放行給原生處理，這樣 Modal 內的上下或左右捲軸都能正常運作
      if (document.body.style.overflow === 'hidden') return;

      const target = e.target as HTMLElement;
      
      // 2. 避免干擾已經有橫向滾動的內部區塊 (例如 Selected Works 的作品列表)
      const scrollContainer = target.closest('.overflow-x-auto');
      if (scrollContainer && scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        // 如果使用者用一般滑鼠「上下滾動」(deltaY)，我們幫他轉換成這個容器的「左右滾動」
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          scrollContainer.scrollBy({ left: e.deltaY, behavior: 'auto' });
        }
        return; // 無論是觸控板橫滑或滑鼠直滾，都到此為止，不觸發大頁面切換
      }

      // 只攔截「垂直方向」的滾動 (滑鼠滾輪)，保留原生的觸控板橫向滑動
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault(); // 阻擋原生上下滾動

        if (wheelTimeout.current) return; // 在冷卻時間內不重複觸發
        if (Math.abs(e.deltaY) < 10) return; // 忽略微小抖動

        const direction = e.deltaY > 0 ? 1 : -1;
        const viewportWidth = window.innerWidth;
        const currentIndex = Math.round(window.scrollX / viewportWidth);
        const maxIndex = 4; // 共有 5 個區塊 (0~4)
        const nextIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));

        // 確保平滑捲動，並滾動到下一個區塊的精準位置
        html.style.scrollBehavior = 'smooth';
        window.scrollTo({ left: nextIndex * viewportWidth, top: 0 });

        // 設定 700ms 冷卻時間，保證「一次滾動一塊」
        wheelTimeout.current = setTimeout(() => {
          wheelTimeout.current = null;
        }, 700);
      }
    };

    if (isHorizontal) window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
    };
  }, [isHorizontal, setArrowState]);

  // 監聽全域網頁滾動
  useEffect(() => {
    const handleGlobalScroll = () => {
      const scrollPos = isHorizontal ? window.scrollX : window.scrollY;
      const innerSize = isHorizontal ? window.innerWidth : window.innerHeight;
      const scrollSize = isHorizontal ? document.documentElement.scrollWidth : document.documentElement.scrollHeight;
      
      setShowScrollMouse(scrollPos > innerSize * 0.3);
      setIsAtBottom(Math.ceil(scrollPos + innerSize) >= scrollSize - 50);
    };

    window.addEventListener('scroll', handleGlobalScroll);
    window.addEventListener('resize', handleGlobalScroll);
    handleGlobalScroll(); // 初始化檢查
    return () => {
      window.removeEventListener('scroll', handleGlobalScroll);
      window.removeEventListener('resize', handleGlobalScroll);
    };
  }, [isHorizontal]);

  // 監聽滾動以更新捲軸進度條與寬度
  useEffect(() => {
    const checkScroll = () => {
      if (worksRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = worksRef.current;
        if (scrollWidth > clientWidth) {
          setThumbWidthRatio(Math.max(0.1, clientWidth / scrollWidth)); // 確保捲動條至少有 10% 寬度
          setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
        } else {
          setThumbWidthRatio(1);
          setScrollProgress(0);
        }
      }
    };

    checkScroll(); // 初始化檢查
    const currentRef = worksRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (currentRef) currentRef.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [filterCategory]); // 切換分類後作品數量改變，需重新計算捲軸

  // 當語系切換時，同步更新網址列的參數，這樣複製網址分享時也能保有語系狀態
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    // 使用 replaceState 改變網址，這樣不會產生多餘的瀏覽器「上一頁」歷史紀錄
    window.history.replaceState({}, '', url.toString());
  }, [lang]);

  // Scroll 浮動按鈕的磁吸特效 (跟隨滑鼠)
  const scrollX = useMotionValue(0)
  const scrollY = useMotionValue(0)
  const scrollSpringX = useSpring(scrollX, { stiffness: 150, damping: 15, mass: 0.1 })
  const scrollSpringY = useSpring(scrollY, { stiffness: 150, damping: 15, mass: 0.1 })

  const t = lang === 'en' ? en : zh

  // 根據當前語系決定要使用的字型
  const currentFontFamily = lang === 'en' 
    ? '"Quicksand", sans-serif' 
    : '"Quicksand", "Noto Sans TC", sans-serif';

  // 處理切換排版模式：確保切換時，畫面會順暢定位到原本在閱讀的區塊
  const toggleLayout = () => {
    const isH = isHorizontal;
    const scrollPos = isH ? window.scrollX : window.scrollY;
    const viewportSize = isH ? window.innerWidth : window.innerHeight;
    const index = Math.round(scrollPos / viewportSize);

    setIsHorizontal(!isH);

    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'auto'; // 暫停平滑捲動，瞬間定位
      if (!isH) {
        window.scrollTo({ left: index * window.innerWidth, top: 0 });
      } else {
        window.scrollTo({ left: 0, top: index * window.innerHeight });
      }
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = '';
      });
    }, 50); // 給予 React 重新渲染佈局的緩衝時間
  };

  // 根據語系動態設定行高變數 (中文結構較密，通常需要比英文多 20% 的行高來呼吸)
  const currentStyle = {
    fontFamily: currentFontFamily,
    '--lh-sm': lang === 'en' ? '140%' : '150%',
    '--lh-md': lang === 'en' ? '160%' : '170%',
    '--lh-lg': lang === 'en' ? '180%' : '190%',
    '--ls-sm': lang === 'en' ? '0px' : '1px',
    '--ls-md': lang === 'en' ? '0px' : '2px',
    '--ls-lg': lang === 'en' ? '0px' : '3px',
  } as React.CSSProperties;

  // 處理點擊專案卡片
  const handleProjectClick = (project: ProjectItem) => {
    setActiveProject(project);
  };

  // 依分類篩選作品：精選作品＝case-study、小工具＝code-demo
  const filteredWorks = worksList.filter((work) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'websites') return work.mode === 'case-study';
    if (filterCategory === 'tools') return work.mode === 'code-demo';
    return true;
  });

  // 切換分類時，作品列表捲回最前面
  const handleCategoryChange = (category: WorksCategory) => {
    setFilterCategory(category);
    worksRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

  // 處理橫式捲軸的拖曳與點擊連動
  const handleScrollDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current || !worksRef.current) return;
    const trackRect = trackRef.current.getBoundingClientRect();
    const thumbWidth = trackRect.width * thumbWidthRatio;
    const pointerX = e.clientX - trackRect.left;
    
    // 將滑鼠 X 座標轉換為 0~1 的進度比例，並扣除半個滾動條的寬度讓滑鼠保持在置中位置
    let progress = (pointerX - thumbWidth / 2) / (trackRect.width - thumbWidth);
    progress = Math.max(0, Math.min(1, progress));

    const { scrollWidth, clientWidth } = worksRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    // 判斷當前是「拖曳中」還是「單次點擊」
    const isDragging = e.type === 'pointermove';
    // 點擊時給予平滑過場，拖曳時保持即時跟手
    worksRef.current.scrollTo({ left: progress * maxScroll, behavior: isDragging ? 'auto' : 'smooth' });
  };

  // 計算滑鼠在 Scroll 圖示上的位移
  const handleScrollPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    scrollX.set((e.clientX - centerX) * 0.3); // 乘上 0.3 (30%) 控制吸附位移的幅度
    scrollY.set((e.clientY - centerY) * 0.3);
  };

  const handleScrollPointerLeave = () => {
    scrollX.set(0);
    scrollY.set(0);
  };

  return (
    <div 
      lang={lang} // 加上 lang 屬性是良好的網頁無障礙 (a11y) 與 SEO 習慣
      className="relative text-white bg-[#082642] tracking-(--ls-sm) md:tracking-(--ls-md) lg:tracking-(--ls-lg) before:content-[''] before:fixed before:inset-0 before:z-0 before:bg-[linear-gradient(24.82deg,#164E81_8.66%,#082642_64.19%)] before:transform-[matrix(1,0,0,-1,0,0)]"
      style={currentStyle}
    >
      <style>{`
        /* 注入滾輪永動動畫 */
        @keyframes scrollWheel {
          0% { transform: translateY(0); }
          50% { transform: translateY(6px); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* Header 區塊 (改為全透明與包含 Material Icon) */}
      <header className="fixed top-0 left-0 w-full z-100 flex justify-between items-center pt-5 px-7.5 min-[744px]:pt-17.5 min-[744px]:px-16.25 bg-transparent transform-gpu will-change-transform">
        <h1 onClick={() => window.location.href = '/resume/'} className="w-32.5 h-9 bg-[url('/assets/logo.png')] bg-size-[129px_auto] bg-no-repeat bg-center text-[0px] cursor-pointer drop-shadow-md title-attr" title="首頁">
          FISH - Portfolio
        </h1>
        <div className="flex gap-2 md:gap-6 text-sm font-bold text-white/90 drop-shadow-md items-center">
          <button onClick={() => setIsContactOpen(true)} className="flex items-center justify-center md:gap-1.5 h-11.5 w-11.5 md:w-auto p-0 md:pl-3 md:pr-4 border border-transparent hover:border-white/20 bg-transparent hover:bg-white/10 rounded-md transition-all text-[0px] md:text-[16px] font-medium tracking-wider cursor-pointer">
            <span className="material-symbols-outlined text-[22px]">info</span>
            <span>{t.header.contact}</span>
          </button>
          <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="flex items-center justify-center gap-1 md:gap-1.5 h-11.5 w-auto px-2 md:pl-3 md:pr-4 border border-transparent hover:border-white/20 bg-transparent hover:bg-white/10 rounded-md transition-all text-[16px] font-medium tracking-wider cursor-pointer">
            <span className="material-symbols-outlined text-[22px]">language</span>
            <span className="hidden md:inline">{lang === 'en' ? '繁體中文' : 'English'}</span>
            <span className="md:hidden">{lang === 'en' ? '繁中' : 'EN'}</span>
          </button>
          {/* 佈局切換開關 (移至最右側並縮小為精緻版本) */}
          <button 
            onClick={toggleLayout} 
            className="hidden w-6 h-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-0.5 cursor-pointer transition-colors shadow-inner shrink-0"
            title={lang === 'en' ? "Toggle Layout" : "切換排版方向"}
          >
            <div className={`w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(73,197,228,0.6)] transition-transform duration-300 ease-out ${isHorizontal ? 'translate-x-2' : 'translate-x-0'}`} />
          </button>
        </div>
      </header>

      {/* Contact 彈出視窗 (Modal) */}
      {/* 加入一層穩定的 div 作為邊界，隔離 React 條件渲染與 GSAP DOM 操作的衝突 */}
      <div>
        <AnimatePresence>
          {/* 1. Contact 聯絡我彈出視窗 */}
          {isContactOpen && !activeProject && <ContactModal onClose={() => setIsContactOpen(false)} />}

          {/* 2. 專案滿版視窗 (支援 Mode 2: Case Study 與 Mode 3: Code Demo) */}
          {activeProject && <ProjectModal project={activeProject} lang={lang} onClose={() => setActiveProject(null)} />}
        </AnimatePresence>
      </div>
        
      <main className={`relative z-1 transition-all duration-700 ease-in-out ${isHorizontal ? 'flex flex-row w-max h-screen' : 'flex flex-col w-full'}`}>
        
        <WelcomeSection
          isHorizontal={isHorizontal}
          t={t}
          handleScrollPointerMove={handleScrollPointerMove}
          handleScrollPointerLeave={handleScrollPointerLeave}
          arrowState={arrowState}
          scrollSpringX={scrollSpringX}
          scrollSpringY={scrollSpringY}
        />
        <AboutSection isHorizontal={isHorizontal} t={t} />
        <SkillsSection isHorizontal={isHorizontal} t={t} />
        <WorksSection
          isHorizontal={isHorizontal}
          t={t}
          worksRef={worksRef}
          filteredWorks={filteredWorks}
          handleProjectClick={handleProjectClick}
          isMobile={isMobile}
          lang={lang}
          handleCategoryChange={handleCategoryChange}
          filterCategory={filterCategory}
          thumbWidthRatio={thumbWidthRatio}
          trackRef={trackRef}
          handleScrollDrag={handleScrollDrag}
          scrollProgress={scrollProgress}
        />
        <ArchiveSection isHorizontal={isHorizontal} t={t} />
      </main>

      {/* Global Fixed Scroll Mouse */}
      <AnimatePresence>
        {showScrollMouse && <ScrollMouse isLast={isAtBottom} arrowState={arrowState} />}
      </AnimatePresence>

    </div>
  )
}

export default App