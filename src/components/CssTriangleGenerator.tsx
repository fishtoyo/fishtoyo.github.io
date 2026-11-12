import { useState } from 'react';

type Direction =
  | 'top' | 'right' | 'bottom' | 'left'
  | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

// 依方向、寬高與顏色算出 border-width 與 border-color
const getTriangleBorders = (direction: Direction, width: number, height: number, color: string) => {
  const halfW = width / 2;
  const halfH = height / 2;
  let bw = '';
  let bc = '';
  switch (direction) {
    case 'top':
      bw = `0 ${halfW}px ${height}px ${halfW}px`;
      bc = `transparent transparent ${color} transparent`;
      break;
    case 'right':
      bw = `${halfH}px 0 ${halfH}px ${width}px`;
      bc = `transparent transparent transparent ${color}`;
      break;
    case 'bottom':
      bw = `${height}px ${halfW}px 0 ${halfW}px`;
      bc = `${color} transparent transparent transparent`;
      break;
    case 'left':
      bw = `${halfH}px ${width}px ${halfH}px 0`;
      bc = `transparent ${color} transparent transparent`;
      break;
    case 'top-left':
      bw = `${height}px ${width}px 0 0`;
      bc = `${color} transparent transparent transparent`;
      break;
    case 'top-right':
      bw = `0 ${width}px ${height}px 0`;
      bc = `transparent ${color} transparent transparent`;
      break;
    case 'bottom-left':
      bw = `${height}px 0 0 ${width}px`;
      bc = `transparent transparent transparent ${color}`;
      break;
    case 'bottom-right':
      bw = `0 0 ${height}px ${width}px`;
      bc = `transparent transparent ${color} transparent`;
      break;
  }
  return { bw, bc };
};

// 九宮格排列，中間留空
const DIRECTION_GRID: Array<Direction | 'center'> = [
  'top-left', 'top', 'top-right',
  'left', 'center', 'right',
  'bottom-left', 'bottom', 'bottom-right',
];

const labelClass = 'block text-white/80 text-sm font-bold text-center w-full uppercase tracking-wider';

export function CssTriangleGenerator() {
  const [direction, setDirection] = useState<Direction>('top');
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);
  const [locked, setLocked] = useState(true); // 鎖定時高度跟著寬度
  const [color, setColor] = useState('#009BD0');
  const [copied, setCopied] = useState(false);

  const borders = getTriangleBorders(direction, width, height, color);
  const cssCode = `width: 0;\nheight: 0;\nborder-style: solid;\nborder-width: ${borders.bw};\nborder-color: ${borders.bc};`;

  const copyCss = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-120 mx-auto bg-linear-to-br from-[#082642] to-[#164E81] border border-white/10 shadow-2xl rounded-2xl flex flex-col">
      {/* 預覽＋方向 */}
      <div className="flex flex-col sm:flex-row border-b border-white/10">
        <div className="flex-1 p-3.75 border-b sm:border-b-0 sm:border-r border-white/10">
          <div className="size-full min-h-50 bg-black/20 shadow-inner border border-white/5 rounded-xl flex items-center justify-center">
            <div
              className="transition-all duration-300 border-solid"
              style={{ width: 0, height: 0, borderWidth: borders.bw, borderColor: borders.bc }}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-5 sm:p-6 gap-4">
          <label className={labelClass}>Direction</label>
          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-2 w-fit">
              {DIRECTION_GRID.map((dir) => {
                if (dir === 'center') return <div key={dir} className="size-8" />;
                const active = direction === dir;
                const icon = getTriangleBorders(dir, 24, 24, active ? '#EF4444' : 'rgba(255, 255, 255, 0.2)');
                return (
                  <button
                    key={dir}
                    onClick={() => setDirection(dir)}
                    className={`size-8 flex items-center justify-center transition-all duration-200 cursor-pointer rounded-full hover:scale-110 hover:bg-white/10 ${active ? 'drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]' : ''}`}
                    title={dir}
                  >
                    <div style={{ width: 0, height: 0, borderStyle: 'solid', borderWidth: icon.bw, borderColor: icon.bc }} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 尺寸與顏色 */}
      <div className="flex flex-col items-center justify-start p-4 sm:p-5 gap-3 border-b border-white/10">
        <label className={labelClass}>Size/Color</label>
        <div className="w-full flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 w-full max-w-md">
            <div className="flex items-center bg-white/10 rounded-md px-3 py-2 border border-white/20 focus-within:border-[#49C5E4] transition-colors flex-1 min-w-15">
              <span className="text-white/40 text-xs font-bold mr-2 select-none">W</span>
              <input
                type="number"
                min="0"
                value={width}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setWidth(value);
                  if (locked) setHeight(value);
                }}
                className="w-full bg-transparent text-white font-mono text-sm outline-none text-center min-w-7.5"
              />
            </div>
            <div className={`flex items-center bg-white/10 rounded-md px-3 py-2 border border-white/20 transition-colors flex-1 min-w-15 ${locked ? 'opacity-50' : 'focus-within:border-[#49C5E4]'}`}>
              <span className="text-white/40 text-xs font-bold mr-2 select-none">H</span>
              <input
                type="number"
                min="0"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                disabled={locked}
                className="w-full bg-transparent text-white font-mono text-sm outline-none text-center min-w-7.5 disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex items-center justify-center bg-white/10 rounded-md border border-white/20 focus-within:border-[#49C5E4] transition-colors size-9.5 shrink-0">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="size-6 rounded cursor-pointer bg-transparent border-0 p-0"
              />
            </div>
            <div className="flex items-center gap-1.5 shrink-0 pl-1">
              <input
                type="checkbox"
                id="proportional"
                checked={locked}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setLocked(checked);
                  if (checked) setHeight(width);
                }}
                className="accent-[#49C5E4] cursor-pointer size-4"
              />
              <label htmlFor="proportional" className="text-white/80 text-sm font-medium cursor-pointer select-none">Lock</label>
            </div>
          </div>
        </div>
      </div>

      {/* 產生的 CSS */}
      <div className="flex flex-col items-center justify-start p-4 sm:p-5 gap-3">
        <label className={labelClass}>CSS</label>
        <div className="w-full flex flex-col gap-4">
          <div className="bg-black/30 p-4 rounded-xl border border-white/10 overflow-x-auto text-[#49C5E4] font-mono text-[10px] sm:text-[11px] leading-relaxed flex items-start justify-start text-left min-h-20 shadow-inner">
            <pre className="whitespace-pre-wrap tracking-normal">{cssCode}</pre>
          </div>
          <button
            onClick={copyCss}
            className="w-4/5 max-w-70 mx-auto bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-md text-[13px] font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md border border-white/20 active:scale-95 uppercase tracking-normal"
          >
            <span className="material-symbols-outlined text-[16px]">{copied ? 'check' : 'content_copy'}</span>
            {copied ? 'Copied' : 'Copy CSS'}
          </button>
        </div>
      </div>
    </div>
  );
}
