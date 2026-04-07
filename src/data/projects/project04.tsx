import type { ProjectItem } from '../projects';

export const project04: ProjectItem = {
  id: 4,
  mode: 'code-demo',
  coverImage: '/assets/works/default.png', // 可以隨時替換為準備好的圖片路徑
  codeDemo: {
    html: `<button class="demo-btn">
  Click Me
</button>`,
    css: `.demo-btn {
  background-color: #082642;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.demo-btn:hover {
  background-color: #009BD0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}`,
    tsx: `export default function Demo() {
  return (
    <button className="bg-[#082642] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#009BD0] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
      Click Me
    </button>
  );
}`
  },
  // 這裡放置真實要在畫面右側「Live Preview」渲染出來的 React 元件
  demoComponent: (
    <button className="bg-[#082642] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#009BD0] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 cursor-pointer">
      Click Me
    </button>
  ),
  translations: {
    en: {
      title: 'Code Demo Example',
      desc: 'Interactive UI Component',
    },
    zh: {
      title: '程式碼實作展示',
      desc: '互動式 UI 元件範例',
    }
  }
};