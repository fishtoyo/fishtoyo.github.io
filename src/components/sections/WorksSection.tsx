import type { ProjectItem } from '../../data/projects';
import { sectionWrapperClass, type SectionProps } from './types';

export type WorksCategory = 'all' | 'websites' | 'tools';

interface WorksSectionProps extends SectionProps {
  worksRef: React.RefObject<HTMLDivElement | null>;
  filteredWorks: ProjectItem[];
  handleProjectClick: (project: ProjectItem) => void;
  isMobile: boolean;
  lang: 'en' | 'zh';
  handleCategoryChange: (category: WorksCategory) => void;
  filterCategory: WorksCategory;
  thumbWidthRatio: number;
  trackRef: React.RefObject<HTMLDivElement | null>;
  handleScrollDrag: (e: React.PointerEvent<HTMLDivElement>) => void;
  scrollProgress: number;
}

// 分類按鈕：精選作品＝case-study、小工具＝code-demo
const CATEGORIES: Array<{ key: WorksCategory; en: string; zh: string }> = [
  { key: 'all', en: 'All', zh: '全部' },
  { key: 'websites', en: 'Websites', zh: '精選作品' },
  { key: 'tools', en: 'Tools', zh: '小工具' },
];

// 4. Selected Works 區塊
export const WorksSection = ({
  isHorizontal, t, worksRef, filteredWorks, handleProjectClick, isMobile, lang,
  handleCategoryChange, filterCategory, thumbWidthRatio, trackRef, handleScrollDrag, scrollProgress,
}: WorksSectionProps) => (
  <div className={sectionWrapperClass(isHorizontal)}>
    <section
      className="content-wrapper"
      style={{ background: 'linear-gradient(111.25deg, #287E94 27.45%, #1593B3 45.54%, #49C5E4 61.47%, #02A7D1 72.81%)' }}
    >
      <div className="content-container">
        <div className="flex justify-between items-center mb-8 lg:mb-[clamp(1.5rem,3vh,3rem)]">
          <h2 className="section-title mb-0!"><span>{t.works.title}</span></h2>
          <div className="flex gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => handleCategoryChange(c.key)}
                className={`px-3 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-bold transition-all cursor-pointer ${filterCategory === c.key ? 'bg-white text-[#1593B3] shadow-md' : 'bg-white/20 text-white hover:bg-white/30'}`}
              >
                {lang === 'en' ? c.en : c.zh}
              </button>
            ))}
          </div>
        </div>

        {/* 輪播內容區塊 */}
        <div
          ref={worksRef}
          className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {filteredWorks.map((work) => (
            <div key={work.id} className="
                shrink-0
                snap-start
                w-full
                md:w-[calc(50%-22px)]
                xlg:w-[calc(33%-22px)]
              ">
              <div
                className="group aspect-640/480 bg-white rounded-lg mb-3 lg:mb-4 shadow-[2px_2px_5px_rgba(0,0,0,0.1)] overflow-hidden transition-colors relative cursor-pointer"
                onClick={() => handleProjectClick(work)}
                onMouseEnter={(e) => {
                  if (isMobile) return;
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) vid.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  if (isMobile) return;
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) {
                    vid.pause();
                    vid.currentTime = 0;
                  }
                }}
              >
                {work.coverImage.endsWith('.mp4') || work.coverImage.endsWith('.webm') ? (
                  <video
                    src={work.coverImage}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted loop playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={work.coverImage}
                    alt={`Project ${work.id}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = '/assets/works/default.png'; }}
                  />
                )}
                {/* 滑入時右上角出現的小圖示作為點擊提示 */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#009BD0]/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white shadow-lg pointer-events-none">
                  <span className="material-symbols-outlined text-[20px]">
                    {work.mode === 'code-demo' ? 'code' : 'visibility'}
                  </span>
                </div>
              </div>
              <div className="px-2.5">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <h3 className="text-[20px] lg:text-[22px] font-bold text-white">{work.translations[lang].title}</h3>
                  {work.link && (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 flex items-center justify-center gap-1 mt-0.5 px-2 py-0.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-colors text-white text-[12px] font-medium cursor-pointer"
                      title={lang === 'en' ? 'Visit Website' : '前往網站'}
                    >
                      <span className="material-symbols-outlined text-[14px]!">open_in_new</span>
                      <span>{lang === 'en' ? 'Visit Website' : '前往網站'}</span>
                    </a>
                  )}
                </div>
                <p className="line-clamp-2 text-[14px] lg:text-[15px] font-medium text-white/70 leading-relaxed">
                  {work.translations[lang].desc.length > 150 ? work.translations[lang].desc.substring(0, 150) + '...' : work.translations[lang].desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 全裝置共用：自訂橫向拖曳捲軸 */}
        {filteredWorks.length > 0 && thumbWidthRatio < 1 && (
          <div
            ref={trackRef}
            className="absolute left-1/2 -translate-x-1/2 bottom-6 lg:bottom-10 w-30 h-2 bg-white rounded-full p-0.5 flex items-center touch-none cursor-pointer"
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId); // 鎖定游標避免拖曳時意外滑出範圍
              handleScrollDrag(e);
            }}
            onPointerMove={(e) => {
              if (e.buttons > 0) handleScrollDrag(e); // 拖曳中同步連動
            }}
          >
            <div
              className="h-full bg-[#009BD0] rounded-full shadow-sm pointer-events-none"
              style={{
                width: `${thumbWidthRatio * 100}%`,
                transform: `translateX(${scrollProgress * ((1 - thumbWidthRatio) * 100 / thumbWidthRatio)}%)`
              }}
            />
          </div>
        )}
      </div>
    </section>
  </div>
);
