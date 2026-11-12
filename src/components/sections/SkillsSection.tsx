import { sectionWrapperClass, type SectionProps } from './types';

// 3. Core Skills 區塊
export const SkillsSection = ({ isHorizontal, t }: SectionProps) => (
  <div className={sectionWrapperClass(isHorizontal)}>
    <section
      className="content-wrapper"
      style={{ background: 'linear-gradient(111.25deg, #004965 27.45%, #1C658A 46.05%, #4490BC 61.47%, #3881B0 72.81%)' }}
    >
      <div className="content-container">
        <h2 className="section-title"><span>{t.skills.title}</span></h2>
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
  </div>
);
