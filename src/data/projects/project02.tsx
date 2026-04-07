import type { ProjectItem } from '../projects';

export const project02: ProjectItem = {
  id: 2, 
  mode: 'case-study',
  coverImage: '/assets/works/02.png',
  caseStudyList: [
    {
      media: '/assets/works/02.png',
      desc: {
        en: 'B2B platform dashboard',
        zh: 'B2B 平台管理介面'
      }
    }
  ],
  caseStudyBg: 'linear-gradient(111.25deg, #082642 0%, #1A3C5A 100%)',
  caseStudyRightBg: '#f1f5f9',
  translations: {
    en: {
      title: 'Major B2B Project',
      desc: 'Comprehensive E-commerce Ecosystem',
      content: "Website：<a href='https://www.taiwanbm.com.tw' target='_blank' rel='noopener noreferrer' class='text-blue-400 underline hover:text-blue-300 transition-colors'>www.taiwanbm.com.tw</a><br /><br /><strong>Large-Scale System Implementation:</strong><br />Independently architected and developed 150+ unique pages for a complex B2B e-commerce platform, including sophisticated interfaces for user, member, and merchant management.<br /><br /><strong>Modular Architecture:</strong><br />Established a custom SCSS component library within an SSR environment. Applied component-based thinking to maintain strict visual consistency and maximize development efficiency across a massive volume of pages.<br /><br /><strong>Complex UI Challenge (Multi-Level Navigation):</strong><br />Successfully engineered a 5-tier vertical category menu. Collaborated deeply with PMs and engineers to balance intuitive user flow with high-performance information hierarchy.<br /><br /><strong>Performance & SEO Optimization:</strong><br />Managed lightweight JavaScript/jQuery integrations and rich-text editor functionality. Optimized the site’s semantic structure to enhance SEO performance and organic search visibility.<br /><br /><strong>Pixel-Perfect RWD Calibration:</strong><br />Executed meticulous, pixel-level adjustments for 150+ pages to ensure a seamless and high-precision browsing experience across all device screen sizes."
    },
    zh: {
      title: '大型 B2B 專案實績',
      desc: '台灣商業媒合平台',
      content: "線上網址：<a href='https://www.taiwanbm.com.tw' target='_blank' rel='noopener noreferrer' class='text-blue-400 underline hover:text-blue-300 transition-colors'>www.taiwanbm.com.tw</a><br /><br />於 2024 年獨自操刀超過 150 頁規模的大型 B2B 電商系統。在高度複雜度的使用者、會員及商家管理介面中，展現了表單邏輯整合與 UI 實作能力。<br /><br /><strong>技術架構與模組化</strong><br />採用 HTML5 / CSS3 (SSR 架構) 為核心，並自定義 SCSS 模組化元件庫。透過組件化思維，在面對龐大頁面量時仍能維持一致的視覺規範，並大幅提升開發效率與後續維護的便利性。<br /><br /><strong>高複雜度介面挑戰</strong><br />成功克服 「五層垂直分類主選單」 的實作難題。在確保導覽結構清晰的前提下，與企劃及工程師深度溝通，規劃出兼具操作直覺與效能的選單功能，完美呈現龐大的資訊階層。<br /><br /><strong>效能與搜尋優化</strong><br />精準管理 JavaScript / jQuery 輕量化套件，整合文字編輯器功能，並針對全站進行 SEO 關鍵字結構優化。<br /><br /><strong>極致 RWD 校正：</strong><br />針對不同裝置尺寸進行像素級的仔細校正，確保在 150 頁的繁雜資訊下，用戶在任何載具皆能獲得最精準、流暢的瀏覽體驗。"
    }
  }
};