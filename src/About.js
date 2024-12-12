import { useState, EventHandler, ReactNode } from 'react'
import './output.css'

const About = () => {
	return (<div className="relative w-screen h-[1433px] bg-[#fff] overflow-hidden">
  <div className="absolute pl-[250px] pr-[250px] top-[126px] w-[379px] h-[90px]">

      <div className="w-[379px] flex flex-col items-start justify-start gap-[0px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[17px]">
          <div className="text-[40px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
          <img width="31" height="28" src={process.env.PUBLIC_URL + "/right.png"}></img>
        </div>
        <div className="self-stretch h-[32px] text-[15px] font-['Inter'] text-[#000]">맛과 멋 동시에 채운 공간</div>
      </div>


      <div className="self-stretch flex flex-row items-center justify-start gap-[20px] ">
        <div className="w-[350px] shrink-0 flex flex-col items-start justify-start gap-[11px]">
          <img width="350" src={process.env.PUBLIC_URL + "/main_post5.png"}></img>
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">RM은 어떤 카페를 갈까</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">BTS RM도 다녀간 공릉 로스터리</div>
          </div>
        </div>

        <a href='/post1'>
        <div className="w-[350px] shrink-0 flex flex-col items-start justify-start gap-[11px]">
          <img width="350" src={process.env.PUBLIC_URL + "/main_post6.png"}></img>
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">암온어 마스트리스boat</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">눈에 보이는 사방이 고양이</div>
          </div>
        </div></a>

        <div className="w-[350px] shrink-0 flex flex-col items-start justify-start gap-[11px]">
          <img width="350" src={process.env.PUBLIC_URL + "/main_post7.png"}></img>
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">파블로바를 아시나요</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">연말을 담은 특별한 디저트</div>
          </div>
        </div>

</div>
    
</div>
</div>)
}

export default About