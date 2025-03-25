import React from 'react';
import './output.css';

const Topbar = () => {
  return (
    <div>
    <div className="fixed top-0 w-full flex flex-col items-center justify-start backdrop-blur-md z-50 overflow-y-scroll scrollbar-hide">
      <div className="w-full h-[38px] flex items-center justify-center bg-white">
        <div className="flex-1 text-lg font-['Pretendard'] font-medium text-black text-center">
          우리의 노원은 지금으로부터. FROM NOWON, FROM NOW ON
        </div>
      </div>
      <div className="w-screen flex flex-col items-center justify-center bg-white/80">
        <div className=" w-screen h-[50px] flex items-center justify-center px-4 border-y border-black">
          <img 
            className="w-[30px] pr-[10px]" 
            src={process.env.PUBLIC_URL + "/logo_fn1.png"} 
            alt="Logo" 
          />
          <div className="flex flex-row items-center justify-start gap-4">
          <a href="/"> <div className="text-lg font-['Pretendard'] font-bold text-black text-center">
              FROM NOW ON
            </div></a>
            <img 
              className="w-[5px] h-[5px]" 
              src="Ellipse 3I83_219;83_210.png" 
              alt="Dot" 
            />
           <a href="/fb"><div className="text-lg font-['Pretendard'] font-bold text-black text-center">
              F&B
            </div></a> 
            <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
            <a href="/culture"><div className="text-lg font-['Pretendard'] font-bold text-black text-center">
              CULTURE
            </div></a>
            <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
            <div className="text-lg font-['Pretendard'] font-bold text-black text-center">
              PEOPLE
            </div>
            <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
            <a href="/about"><div className="text-lg font-['Pretendard'] font-bold text-black text-center">
              ABOUT US
            </div></a>
          </div>
        </div>
      </div>
    </div>

<div className="w-screen h-[50px] fixed bottom-[0px] flex flex-row items-center justify-between py-[13px] px-[30px] bg-[#000]">
<a href="/"> <div className="text-[20px] font-['Pretendard'] font-black text-[#fff] text-center whitespace-nowrap">FROM NOW ON</div></a>
<div className="pr-[1370px] text-[10px] font-['Pretendard'] font-medium text-[#fff] text-center whitespace-nowrap pr-[10px]">본 페이지는 PC버전으로 제작되었습니다.</div>
  <a href="https://www.instagram.com/fromnowon.mag"><div className="text-[20px] font-['Pretendard'] font-black text-[#fff] text-center whitespace-nowrap pr-[10px]">INSTAGRAM</div></a>
</div>

</div>
  );
};

export default Topbar;
