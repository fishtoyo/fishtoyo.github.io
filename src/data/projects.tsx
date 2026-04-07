import React from 'react';
import { project01 } from './projects/project01';
import { project02 } from './projects/project02';
import { project03 } from './projects/project03';
// import { project04 } from './projects/project04';

// 定義專案支援的兩種模式
export type ProjectMode = 'case-study' | 'code-demo';

export interface ProjectTranslations {
  title: string;
  desc: string;
  content?: string; // 模式 2 或 3 專用：詳細內容的 HTML 結構
}

export interface ProjectSlide {
  media: string; // 圖片或 .mp4 影片網址
  desc?: {       // 輪播下方顯示的簡短描述
    en: string;
    zh: string;
  };
}

export interface ProjectItem {
  id: number;
  mode: ProjectMode;
  coverImage: string; // 列表顯示的封面路徑 (支援圖片或 .mp4 影片)
  link?: string; // 選擇性：若有值，則會在列表中多顯示「前往網站」按鈕
  caseStudyList?: ProjectSlide[]; // 模式 2 專用：圖文輪播的媒體與描述列表
  caseStudyBg?: string; // 模式 2 專用：右側輪播區塊的自訂背景 (支援顏色代碼或 CSS background 語法)
  caseStudyRightBg?: string; // 模式 2 專用：右側輪播區塊的獨立背景
  codeDemo?: {  // 模式 3 專用：程式碼實作資料
    html?: string;
    css?: string;
    tsx?: string;
    vue?: string;
  };
  demoComponent?: React.ReactNode; // 模式 3 專用：真實要渲染的 React 實作元件
  translations: {
    en: ProjectTranslations;
    zh: ProjectTranslations;
  };
}

// 定義專案列表與模式
export const worksList: ProjectItem[] = [
  project01,
  project02,
  project03
  // project04
];