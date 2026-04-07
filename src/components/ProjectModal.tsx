import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem;
  lang: 'en' | 'zh';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  // 將狀態初始化直接寫入 useState，取代 useEffect。效能更好且能 100% 避開型別報錯
  const [codeTab, setCodeTab] = useState<string>(() => {
    if (project.mode === 'code-demo' && project.codeDemo) {
      const keys = Object.keys(project.codeDemo);
      if (keys[0]) return String(keys[0]);
    }
    return 'tsx';
  });

  // 鎖定背景捲軸
  useEffect(() => {
    const scrollY = window.scrollY;
    const scrollX = window.scrollX; // 同時記錄橫向滾動位置

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = `-${scrollX}px`; // 鎖定時也需要把背景往左拉，避免背景在橫向模式時瞬間跳回原點
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      
      // 暫時關閉 html 的平滑捲動，確保能「瞬間」回到原本的座標
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(scrollX, scrollY); // 還原時，把 X 跟 Y 都精準還原
      
      // 等待畫面確實跳回原位後，再把平滑捲動恢復
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = '';
      });
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-9999 w-full h-full flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]"
      style={{ background: project.caseStudyBg || '#082642' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <button onClick={onClose} className="hidden md:flex fixed lg:absolute top-6 right-6 z-10000 w-12 h-12 items-center justify-center bg-[#082642] text-white border border-white/10 hover:bg-[#0c3862] opacity-100 rounded-full transition-colors cursor-pointer shadow-xl">
        <span className="material-symbols-outlined">close</span>
      </button>

      {project.mode === 'case-study' && project.caseStudyList && (
        <>
          <div className="w-full lg:w-[40%] h-auto lg:h-full shrink-0 lg:shrink px-8 py-8 md:px-12 md:py-14 lg:px-10 lg:py-12 xl:px-16 xl:py-20 flex flex-col border-r border-white/10 overflow-visible lg:overflow-y-auto order-2 lg:order-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]">
            {/* 頂部推擠空間：空間足夠時發揮置中作用，內容過長時壓縮為 0 避免截斷 */}
            <div className="flex-1 shrink-0 min-h-0"></div>
            
            <div className="w-full max-w-200 mx-auto shrink-0">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">{project.translations[lang].title}</h2>
              <p className="text-lg font-medium text-[#49C5E4] mb-8 leading-relaxed">{project.translations[lang].desc}</p>
              <div className="text-lg text-white/80 leading-[180%]" dangerouslySetInnerHTML={{ __html: project.translations[lang].content || '' }} />
            </div>

            {/* 底部推擠空間：設為 1.5 讓文字視覺重心稍微偏上，更符合閱讀人體工學 */}
            <div className="flex-[1.5] shrink-0 min-h-0"></div>
          </div>
          <div className="w-full lg:w-[60%] h-auto lg:h-full shrink-0 lg:shrink flex flex-col justify-center relative overflow-visible lg:overflow-y-auto p-6 lg:p-15 order-1 lg:order-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]" style={{ background: project.caseStudyRightBg || 'transparent' }}>
            <div className="relative w-full max-w-250 mx-auto my-auto">
              <Swiper 
                modules={[Navigation, Pagination, A11y]} 
                spaceBetween={30} 
                slidesPerView={1} 
                navigation={{ prevEl: '.modal-swiper-prev', nextEl: '.modal-swiper-next' }} 
                pagination={{ el: '.modal-swiper-pagination', clickable: true }} 
                autoHeight={true} 
                className="w-full rounded-2xl overflow-hidden transform-gpu"
              >
              {project.caseStudyList.map((slide, index) => (
                <SwiperSlide key={index} className="box-border pb-2">
                  <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full aspect-733/540 flex items-center justify-center rounded-2xl overflow-hidden bg-black/5 transform-gpu">
                      {slide.media.endsWith('.mp4') ? (
                          <video src={slide.media} className="w-full h-full object-cover rounded-2xl" autoPlay muted loop playsInline />
                      ) : (
                          <img src={slide.media} alt={`Case Study Media ${index + 1}`} className="w-full h-full object-cover rounded-2xl block" onError={(e) => { e.currentTarget.src = '/assets/works/300.png'; }} />
                      )}
                    </div>
                    {slide.desc && (
                      <div className="shrink-0 mt-6 flex items-center justify-center">
                        <span className="px-5 py-2.5 bg-[#082642]/80 text-white text-sm md:text-base font-medium rounded-full drop-shadow-md">
                          {slide.desc[lang]}
                        </span>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* 把原本精美的自訂按鈕與圓點加回來，自然排在描述區塊下方 */}
            <div className="shrink-0 mt-6 lg:mt-8 flex justify-center items-center gap-6">
              <button className="modal-swiper-prev flex items-center justify-center text-[#49C5E4] hover:opacity-70 transition-opacity cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
                <span className="material-symbols-outlined text-[36px]">chevron_left</span>
              </button>
              <div className="modal-swiper-pagination w-auto! flex items-center justify-center gap-3 [&_.swiper-pagination-bullet]:m-0! [&_.swiper-pagination-bullet]:bg-[#49C5E4]! [&_.swiper-pagination-bullet]:opacity-40! [&_.swiper-pagination-bullet-active]:opacity-100! [&_.swiper-pagination-bullet]:w-2.5! [&_.swiper-pagination-bullet]:h-2.5!"></div>
              <button className="modal-swiper-next flex items-center justify-center text-[#49C5E4] hover:opacity-70 transition-opacity cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
                <span className="material-symbols-outlined text-[36px]">chevron_right</span>
              </button>
            </div>
            </div>
          </div>
        </>
      )}

      {project.mode === 'code-demo' && project.codeDemo && (
        <>
          <div className="w-full lg:w-[50%] h-[50vh] lg:h-full p-8 lg:p-12 flex flex-col bg-[#1e1e1e] border-r border-white/10 order-2 lg:order-1">
            <div className="flex gap-4 mb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {Object.keys(project.codeDemo).map((langKey) => (
              <button key={langKey} onClick={() => setCodeTab(langKey)} className={`px-4 py-2 rounded uppercase text-sm font-bold tracking-wider transition-colors ${codeTab === langKey ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}>
                  {langKey}
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-auto rounded-lg rounded-tl-none border border-white/10 bg-black/30 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]">
              <SyntaxHighlighter language={codeTab === 'vue' ? 'html' : codeTab} style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent', fontSize: '15px', lineHeight: '1.6' }}>
                {(project.codeDemo as Record<string, string>)[codeTab] || '// No code available'}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-full lg:w-[50%] h-[50vh] lg:h-full bg-slate-50 flex flex-col order-1 lg:order-2">
            <div className="h-12 bg-slate-200 border-b border-slate-300 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-amber-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-4 text-xs text-slate-500 font-medium uppercase tracking-widest">Live Preview</span>
            </div>
            <div className="flex-1 flex items-center justify-center p-8 text-center">
              {project.demoComponent || <p className="text-slate-400">Preview not available</p>}
            </div>
          </div>
        </>
      )}

      {/* 手機版專屬：底部返回按鈕 */}
      <div className="md:hidden w-full p-6 pt-0 order-3 shrink-0">
        <button onClick={onClose} className="w-full flex items-center justify-center gap-2 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-bold tracking-wider transition-colors cursor-pointer shadow-sm">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          {lang === 'en' ? 'Back' : '返回'}
        </button>
      </div>
    </motion.div>
  );
};