import type { ProjectItem } from '../projects';
import { CssTriangleGenerator } from '../../components/CssTriangleGenerator';

export const project04: ProjectItem = {
  id: 4,
  mode: 'code-demo',
  coverImage: '/assets/videos/project04.mp4',
  codeDemo: {
    html: `<!-- 
  Triangle shapes can be created directly using pure CSS, 
  eliminating the need for image files. 
  You can also combine it with 'transform: rotate()' 
  to achieve any desired angle.
-->
<div class="triangle"></div>`,
    css: `.triangle {
  /* 1. Width and height must be 0 */
  width: 0;
  height: 0;
  border-style: solid;
  
  /* 2. Define the size and shape via border-width */
  border-width: 0 50px 100px 50px;
  
  /* 3. Core logic: set adjacent borders to transparent */
  /* The following is a 'top' pointing triangle: keep the bottom border color */
  border-color: transparent transparent #009BD0 transparent;
}`,
    tsx: `export default function CssTriangle() {
  return (
    <div 
      style={{
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 50px 100px 50px',
        borderColor: 'transparent transparent #009BD0 transparent'
      }}
    />
  );
}`
  },
  demoComponent: <CssTriangleGenerator />,
  translations: {
    en: {
      title: "CSS Triangle Generator",
      desc: "An interactive tool to generate pure CSS triangles. You can customize the direction, size, and color dynamically."
    },
    zh: {
      title: "CSS 三角形產生器",
      desc: "互動式的純 CSS 三角形產生工具，透過調整方向、尺寸與顏色，幫助你快速生成並理解 CSS 邊框畫三角形的原理。"
    }
  }
};
