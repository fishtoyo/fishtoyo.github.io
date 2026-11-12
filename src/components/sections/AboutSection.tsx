import { sectionWrapperClass, type SectionProps } from './types';

// 2. About 區塊
export const AboutSection = ({ isHorizontal, t }: SectionProps) => (
  <div className={sectionWrapperClass(isHorizontal)}>
    <section
      className="content-wrapper"
      style={{ background: 'linear-gradient(111.69deg, #066786 23.19%, #0381AB 40.23%, #28AAD6 59.07%, #009BD0 72.98%)' }}
    >
      <div className="content-container">
        <h2 className="section-title"><span>{t.about.title}</span></h2>
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
  </div>
);
