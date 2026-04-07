import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  // 鎖定背景捲軸
  useEffect(() => {
    // 紀錄目前的捲動位置
    const scrollY = window.scrollY;
    
    // 將 body 設定為 fixed 並往上推對應的距離，徹底防止 iOS/行動版背景滑動
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      // 恢復原本的捲動位置
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4" 
      style={{ zIndex: 9999 }} // 強制最高層級，避免被 GSAP 覆蓋
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white w-full max-w-md p-8 md:p-10 rounded-3xl shadow-2xl text-center relative" 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-[#082642] text-white hover:bg-[#0c3862] opacity-100 rounded-full transition-colors cursor-pointer shadow-md">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="w-28 h-28 mx-auto bg-slate-100 rounded-full overflow-hidden mb-5 border-4 border-slate-50 shadow-sm">
          <img src="/archive/assets/images/author.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-1">鄭于庭</h3>
        <p className="text-sm font-medium text-slate-400 tracking-widest uppercase">Yu-Ting, Cheng</p>
        <div className="flex flex-col gap-4 mt-8">
          <a href="mailto:fishtoyo@gmail.com" className="block w-full py-4 bg-white text-[#082642] border-2 border-[#082642] text-[22px] font-bold text-center rounded-[6px] hover:bg-[#082642] hover:text-white hover:scale-105 transition-all duration-300 shadow-sm">Gmail</a>
          <a href="https://www.linkedin.com/in/fishtoyo" target="_blank" rel="noreferrer" className="block w-full py-4 bg-white text-[#082642] border-2 border-[#082642] text-[22px] font-bold text-center rounded-[6px] hover:bg-[#082642] hover:text-white hover:scale-105 transition-all duration-300 shadow-sm">LinkedIn</a>
          <a href="https://facebook.com/fishtoyo/" target="_blank" rel="noreferrer" className="block w-full py-4 bg-white text-[#082642] border-2 border-[#082642] text-[22px] font-bold text-center rounded-[6px] hover:bg-[#082642] hover:text-white hover:scale-105 transition-all duration-300 shadow-sm">Facebook</a>
        </div>
      </motion.div>
    </motion.div>
  );
};