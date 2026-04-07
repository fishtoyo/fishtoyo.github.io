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
  const [codeTab, setCodeTab] = useState<'html' | 'css' | 'tsx' | 'vue'>('tsx');

  // 如果是程式碼模式，自動選取第一個有資料的頁籤
  useEffect(() => {
    if (project.mode === 'code-demo' && project.codeDemo) {
      const firstTab = Object.keys(project.codeDemo)[0] as 'html' | 'css' | 'tsx' | 'vue';
      setCodeTab(firstTab);
    }
  }, [project]);

  // 鎖定背景捲軸
  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden"
      style={{ background: project.caseStudyBg || '#082642' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <button onClick={onClose} className="fixed lg:absolute top-6 right-6 z-10000 w-12 h-12 flex items-center justify-center bg-[#082642] text-white border border-white/10 hover:bg-[#0c3862] opacity-100 rounded-full transition-colors cursor-pointer shadow-xl">
        <span className="material-symbols-outlined">close</span>
      </button>

      {project.mode === 'case-study' && project.caseStudyList && (
        <>
          <div className="w-full lg:w-[40%] h-auto lg:h-full p-8 lg:p-16 flex flex-col border-r border-white/10 overflow-visible lg:overflow-y-auto order-2 lg:order-1">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">{project.translations[lang].title}</h2>
            <p className="text-lg font-medium text-[#49C5E4] mb-8 leading-relaxed">{project.translations[lang].desc}</p>
            <div className="text-lg text-white/80 leading-[180%]" dangerouslySetInnerHTML={{ __html: project.translations[lang].content || '' }} />
          </div>
          <div className="w-full lg:w-[60%] h-auto lg:h-full flex items-center justify-center relative overflow-visible lg:overflow-hidden p-6 lg:p-15 order-1 lg:order-2" style={{ background: project.caseStudyRightBg || 'transparent' }}>
            <div className="relative w-full max-h-none lg:max-h-[85vh] flex flex-col">
              <div className="flex-1 min-h-0 w-full overflow-visible lg:overflow-y-auto">
              <Swiper 
                modules={[Navigation, Pagination, A11y]} 
                spaceBetween={30} 
                slidesPerView={1} 
                navigation={{ prevEl: '.modal-swiper-prev', nextEl: '.modal-swiper-next' }} 
                pagination={{ el: '.modal-swiper-pagination', clickable: true }} 
                autoHeight={true} 
                className="w-full"
              >
              {project.caseStudyList.map((slide, index) => (
                <SwiperSlide key={index} className="box-border pb-2">
                  <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full aspect-733/540 flex items-center justify-center rounded-2xl overflow-hidden bg-black/5">
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
              </div>
              {/* 自訂的切換按鈕與圓點分頁器 (Flex置中排版) */}
              <div className="shrink-0 mt-2 lg:mt-8 flex justify-center items-center gap-6">
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
              <button key={langKey} onClick={() => setCodeTab(langKey as 'html' | 'css' | 'tsx' | 'vue')} className={`px-4 py-2 rounded uppercase text-sm font-bold tracking-wider transition-colors ${codeTab === langKey ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}>
                  {langKey}
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-auto rounded-lg rounded-tl-none border border-white/10 bg-black/30">
              <SyntaxHighlighter language={codeTab === 'vue' ? 'html' : codeTab} style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent', fontSize: '15px', lineHeight: '1.6' }}>
                {project.codeDemo[codeTab] || '// No code available'}
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
    </motion.div>
  );
};