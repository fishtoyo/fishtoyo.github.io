import React from 'react';

// 定義專案支援的三種模式
export type ProjectMode = 'link' | 'case-study' | 'code-demo';

export interface ProjectItem {
  id: number;
  mode: ProjectMode;
  url?: string; // 模式 1 專用：外部連結
  caseStudyMedia?: string[]; // 模式 2 專用：圖文輪播的媒體 (圖片或影片網址)
  codeDemo?: {  // 模式 3 專用：程式碼實作資料
    html?: string;
    css?: string;
    tsx?: string;
    vue?: string;
  };
  demoComponent?: React.ReactNode; // 模式 3 專用：真實要渲染的 React 實作元件
}

// 定義專案列表與模式
export const worksList: ProjectItem[] = [
  { 
    id: 1, 
    mode: 'link', 
    url: 'https://www.wordhero.tw' 
  },
  { 
    id: 2, 
    mode: 'case-study',
    // 直接在這裡放入媒體陣列，支援 .mp4 影片與圖片混搭 '/archive/assets/images/video/demo.mp4'
    caseStudyMedia: ['/archive/assets/images/works/02.png']
  },
  { 
    id: 3, 
    mode: 'case-study',
    caseStudyMedia: ['/archive/assets/images/works/03.png']
  },
  // { 
  //   id: 3, 
  //   mode: 'code-demo',
  //   codeDemo: {
  //     html: `<button class="demo-btn">\n  資料準備中\n</button>`,
  //     css: `.demo-btn {\n  background-color: #082642;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  border: none;\n  font-weight: bold;\n}`
  //   },
  //   demoComponent: (
  //     <button className="bg-[#082642] text-white px-6 py-3 rounded-lg font-bold shadow-md cursor-not-allowed opacity-80">
  //       資料準備中
  //     </button>
  //   )
  // }
];