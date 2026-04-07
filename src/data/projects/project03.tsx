import type { ProjectItem } from '../projects';

export const project03: ProjectItem = {
  id: 3, 
  mode: 'case-study',
  coverImage: '/assets/works/03.png',
  caseStudyList: [
    {
      media: '/assets/works/03.png',
      desc: {
        en: 'Product catalog scrolling effect',
        zh: '產品型錄滾動特效'
      }
    },
    {
      media: '/assets/video/01.mp4',
      desc: {
        en: 'Product catalog scrolling effect',
        zh: '產品型錄滾動特效'
      }
    }
  ],
  caseStudyBg: 'linear-gradient(111.25deg, #082642 0%, #113654 100%)',
  caseStudyRightBg: '#ffffff',
  translations: {
    en: {
      title: 'Industrial Branding Site',
      desc: 'LCS Auto & Hardware',
      content: "Website：<a href='https://www.lcsdevco.com.tw' target='_blank' rel='noopener noreferrer' class='text-blue-400 underline hover:text-blue-300 transition-colors'>www.lcsdevco.com.tw</a><br /><br /><strong>GSAP-Driven Visual Storytelling:</strong><br />Transformed rigid industrial product showcases into a fluid, high-end digital experience. Implemented a vertical scroll-triggered animation for the homepage using GSAP, creating a layered, cinematic entrance that significantly increased user engagement and dwell time.<br /><br /><strong>Seamless Navigation & UX Interaction:</strong><br />Developed an intuitive anchor-point navigation system for product catalogs. This allows clients to jump to specific products with elegant transition effects, adding a layer of sophistication to the rigorous industrial catalog while maintaining ease of use.<br /><br /><strong>Balancing Performance with High-Fidelity Visuals:</strong><br />Optimized GSAP rendering paths to ensure smooth, stutter-free performance even when handling high-resolution industrial imagery. Successfully maintained cross-browser compatibility and rapid loading speeds despite the rich interactive elements.<br /><br /><strong>Precision RWD Layouts:</strong><br />Precisely controlled the presentation of industrial product images and RWD layouts, ensuring that technical specifications remain highly readable and visually impactful across all devices."
    },
    zh: {
      title: '企業形象官網',
      desc: '工業產品形象網站',
      content: "線上網址：<a href='https://www.lcsdevco.com.tw' target='_blank' rel='noopener noreferrer' class='text-blue-400 underline hover:text-blue-300 transition-colors'>www.lcsdevco.com.tw</a><br /><br />於 2025 年末製作，精準控制工業產品影像的呈現與 RWD 佈局，確保型錄資訊在各種裝置上皆具備極佳的讀取性與載入速度。在這個專案中，我運用了大量的 GSAP (GreenSock Animation Platform) 技術，將剛硬的工業產品轉化為具備高質感與流動感的數位體驗。<br /><br /><strong>GSAP 驅動的動態交互（抓住眼球）</strong><br />首頁產品區實作垂直式動態圖文切換效果，透過 GSAP 精準控制捲動節奏，創造出層次分明的進場動態，成功提高使用者的停留時間與下滑意願，將傳統的工業產品介紹轉化為震撼的視覺敘事。<br /><br /><strong>導覽體驗優化（增加互動感）</strong><br />在產品介紹頁面中，規劃了產品項目錨點定位，讓客戶能根據需求快速跳轉至目標產品，並在定位過程中維持優雅的過場視覺，在提升操作便利性的同時，也為嚴謹的工業型錄增添了細膩的互動感。<br /><br /><strong>性能與視覺的平衡</strong><br />雖然使用了大量的動態效果，但我針對 GSAP 的渲染路徑進行了優化，確保在呈現高解析度工業影像時，依然能維持極佳的流暢度與跨瀏覽器相容性。"
    }
  }
};