import { useState, useEffect, EventHandler, ReactNode } from 'react'
import './output.css';
import MainLayout from './MainLayout';
import MainLayoutB from './MainLayoutB';
import { motion } from 'framer-motion';

const Main = () => {
  

	return (

    <div className="w-screen h-full ">
  <div className="h-full bg-white">
      {/* 데스크탑 레이아웃 */}
      
     {/* 배경 이미지 + 로고 */}
<div className="relative w-screen h-[800px]">
  <img
    src={process.env.PUBLIC_URL + "/main_bg.png"}
    alt="배경 이미지"
    className="w-full h-full object-cover blur object-bottom"
  />

  <motion.div
    initial={{ opacity: 1, y: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 5, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}
    className="absolute top-[88px] w-full h-auto group z-10"
  >
    <img
      src={process.env.PUBLIC_URL + "/new_logo.png"}
      alt="logo"
      className="transition duration-300"
    />

    <div className="text-xl font-['Pretendard'] text-center font-bold text-white whitespace-nowrap tracking-tighter mix-blend-exclusion">
      노원구 중심 감도 높은 노원구 공간 큐레이션 매거진, 프롬나우온
    </div>
  </motion.div>

  {/* 버튼도 여기로 옮김 */}
  <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-row items-start justify-start gap-[36px] z-10">
    <div className="w-[250px] h-[70px] flex items-center justify-between px-[20px] bg-white border border-[#B2B2B2]">
      <div className="text-[25px] text-[#B2B2B2] font-['Pretendard']">구독하기 (준비중)</div>
      <img width="25" height="22" src={process.env.PUBLIC_URL + "/right.png"} />
    </div>
    <a href="https://www.instagram.com/fromnowon.mag">
      <div className="w-[250px] h-[70px] flex items-center justify-between px-[20px] bg-white border border-black relative overflow-hidden group">
        <div className="absolute inset-0 bg-black scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100"></div>
        <div className="relative text-[25px] text-black group-hover:text-white transition duration-300">인스타그램</div>
        <img className="relative" width="25" height="22" src={process.env.PUBLIC_URL + "/right.png"} alt="icon" />
      </div>
    </a>
  </div>
</div>


    <div className="w-screen ">
  <MainLayout/>
</div>
<div className="w-screen ">
  <MainLayoutB/>
</div>


<div className='w-screen h-[800px] flex flex-row items-start pt-[30px] bg-[#C5FF31] pl-[30px]'>
    <div className="w-[1379px] flex flex-col items-start justify-start gap-[27px]   ">
      <div className="w-[379px] flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[17px]">
          <div className="text-[40px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">EDITOR’S TASTE</div>
          <img width="31" height="28" src={process.env.PUBLIC_URL + "/right.png"}></img>
        </div>
        <div className="self-stretch h-[32px] text-[20px] font-['Inter'] text-[#000]">에디터가 제안하는 공간들</div>
      </div>

      <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
      <a href="/post4">
        <div className="w-[446px] shrink-0 flex flex-col items-start justify-start gap-[11px]">
          <img width="446" height="446" src={process.env.PUBLIC_URL + "/main_post5.png"}></img>
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">RM은 어떤 카페를 갈까</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">BTS RM도 다녀간 공릉 로스터리</div>
          </div>
        </div></a>


        <a href="/post1">
        <div className="w-[446px] shrink-0 flex flex-col items-start justify-start gap-[11px]">
          <img width="446" height="446" src={process.env.PUBLIC_URL + "/main_post6.png"}></img>
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">암온어 마스트리스boat</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">눈에 보이는 사방이 고양이</div>
          </div>
        </div></a>
        <div className="w-[446px] shrink-0 flex flex-col items-start justify-start gap-[11px]">
          <img width="446" height="446" src={process.env.PUBLIC_URL + "/main_post7.png"}></img>
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">파블로바를 아시나요</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">연말을 담은 특별한 디저트</div>
          </div>
        </div>
      </div>
    </div></div>
  </div>


  
  <div className="flex flex-col items-center lg:hidden ">
    <h1 className="text-2xl font-bold">모바일 레이아웃</h1>
    <p>이 부분은 모바일에서만 보입니다.</p>
  </div>
  
</div>)
}

export default Main;