import type en from '../../locales/en.json';

export type Translations = typeof en;

// 各區塊共用：排版方向與目前語系的文字
export interface SectionProps {
  isHorizontal: boolean;
  t: Translations;
}

// 橫式排版時每個區塊佔滿一個螢幕寬
export const sectionWrapperClass = (isHorizontal: boolean) =>
  isHorizontal ? 'w-screen h-screen shrink-0 flex items-center justify-center' : 'w-full';
