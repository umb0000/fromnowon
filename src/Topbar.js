import React from 'react';
import './output.css';

const Topbar = () => {
  return (
    <div className="fixed top-0 w-full flex flex-col items-center justify-start backdrop-blur-lg z-50">
      <div className="w-full h-[38px] flex items-center justify-center bg-white">
        <div className="flex-1 text-lg font-['Pretendard'] font-medium text-black text-center">
          우리의 노원은 지금으로부터. FROM NOWON, FROM NOW ON
        </div>
      </div>
      <div className="w-screen flex flex-col items-center justify-center bg-white/80">
        <div className=" w-screen h-[50px] flex items-center justify-center px-4 border-y border-black">
          <img 
            className="w-[30px] h-[25px]" 
            src="자산 3I83_219;83_207.png" 
            alt="Logo" 
          />
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="text-lg font-['Pretendard'] font-bold text-black text-center">
              FROM NOW ON
            </div>
            <img 
              className="w-[5px] h-[5px]" 
              src="Ellipse 3I83_219;83_210.png" 
              alt="Dot" 
            />
            <div className="text-lg font-['Pretendard'] font-bold text-black text-center">
              F&B
            </div>
            <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
            <div className="text-lg font-['Pretendard'] font-bold text-black text-center">
              CULTURE
            </div>
            <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
            <div className="text-lg font-['Pretendard'] font-bold text-black text-center">
              PEOPLE
            </div>
            <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
            <div className="text-lg font-['Pretendard'] font-bold text-black text-center">
              ABOUT US
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
