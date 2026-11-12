import { sectionWrapperClass, type SectionProps } from './types';

interface ArchiveSectionProps extends SectionProps {
  lang: 'en' | 'zh';
}

// 5. Archive 區塊
export const ArchiveSection = ({ isHorizontal, t, lang }: ArchiveSectionProps) => (
  <div className={sectionWrapperClass(isHorizontal)}>
    <section
      className="content-wrapper text-white/80"
      style={{ background: 'linear-gradient(111.25deg, #286594 27.45%, #157EB3 45.54%, #49B3E4 61.47%, #0293D1 72.81%)' }}
    >
      <div className="content-container">
        <h2 className="section-title"><span>{t.archive.title}</span></h2>
        <div className="text-[18px] lg:text-[clamp(18px,3vh,24px)] font-bold leading-(--lh-lg) text-white/80 mb-10 lg:mb-[clamp(1.5rem,4vh,2.5rem)]"
          dangerouslySetInnerHTML={{ __html: t.archive.desc }}
        />
        <a
          href={`/resume/cases.html?lang=${lang}`}
          className="inline-block px-4 py-3 lg:py-[clamp(0.75rem,2vh,1rem)] lg:px-[clamp(1.5rem,3vh,2rem)] bg-[#082642] text-white text-[16px] lg:text-[clamp(18px,2.5vh,22px)] font-bold rounded-md hover:bg-[#0c3862] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
        >
          {t.archive.btn}
        </a>
      </div>
    </section>
  </div>
);
