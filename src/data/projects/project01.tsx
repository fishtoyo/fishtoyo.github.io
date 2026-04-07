import type { ProjectItem } from '../projects';

export const project01: ProjectItem = {
  id: 1, 
  mode: 'case-study',
  link: 'https://www.wordhero.tw',
  coverImage: '/assets/videos/project01.mp4',
  caseStudyList: [
    {
      media: '/assets/videos/project01.mp4',
      desc: {
        en: 'Vocabulary challenge interface',
        zh: '雙風格切換畫面'
      }
    },
    {
      media: '/assets/works/01.png',
      desc: {
        en: 'Product catalog scrolling effect',
        zh: '單字測驗畫面'
      }
    }
  ],
  caseStudyBg: 'linear-gradient(111.25deg, #082642 0%, #164E81 100%)',
  caseStudyRightBg: 'transparent',
  translations: {
    en: {
      title: 'Word Hero',
      desc: 'To help children easily practice English vocabulary, I built a learning platform using Vue and AI. It features a complete authentication system, allowing kids to learn through interactive level-based challenges.',
      content: "Website: <a href='https://www.wordhero.tw' target='_blank' rel='noopener noreferrer' class='text-blue-400 underline hover:text-blue-300 transition-colors'>www.wordhero.tw</a><br /><br />An interactive English vocabulary learning platform designed specifically for children, built entirely from scratch. From initial UI/UX design and system architecture to functional flow and database schema design, the entire project was developed independently with AI assistance, demonstrating full-stack application development capabilities.<br /><br /><strong>Comprehensive & Scalable Architecture:</strong><br />Implemented a complete authentication and role-based access control (RBAC) system. The platform features interactive vocabulary challenges, performance tracking, personalized vocabulary management, and dynamic level creation, forming a complete learning ecosystem.<br /><br /><strong>Modern Frontend Tech & AI Empowerment:</strong><br />Built with Vue 3 and Vite to ensure blazing-fast rendering and an optimal developer experience. Leveraged AI to generate quiz content and optimize logic, making the application not only highly interactive but also a smart learning assistant.<br /><br /><strong>Custom Dual-Theme Interface:</strong><br />Designed an engaging dual-theme interface tailored for children's learning scenarios, significantly boosting learning motivation and user retention."
    },
    zh: {
      title: '單字英雄',
      desc: '為了讓孩子能隨手練習英文單字，使用Vue框架與AI協助，建立一個英文單字的測驗平台，目前規劃完整的登入系統與權限設計、成績紀錄、單字管理與關卡建立。',
      content: "線上網址：<a href='https://www.wordhero.tw' target='_blank' rel='noopener noreferrer' class='text-blue-400 underline hover:text-blue-300 transition-colors'>www.wordhero.tw</a><br /><br />這是一個專為兒童設計的互動式英文單字學習平台，從零開始獨立完成。包含前期的 UI/UX 畫面風格設計、系統架構規劃，到後期的功能流程制定與資料庫關聯設計，全程結合 AI 輔助開發，展現了獨立建置全端應用的能力。<br /><br /><strong>完整且具擴充性的系統架構：</strong><br />實作了完整的會員登入系統與權限控管機制。平台涵蓋了單字闖關測驗、學習成績追蹤、個人化單字庫管理，以及彈性的關卡建立功能，打造出閉環的學習生態系。<br /><br /><strong>現代化前端技術與 AI 賦能：</strong><br />採用 Vue 3 與 Vite 作為核心開發框架，提供極致的渲染效能與開發體驗。透過 AI 協作生成測驗內容與優化邏輯，讓應用不僅具備高互動性，更能聰明地輔助學習。<br /><br /><strong>客製化雙風格介面：</strong><br />針對兒童學習情境，精心設計了活潑且具吸引力的雙風格切換介面，提升學習動機與留存率。"
    }
  }
};