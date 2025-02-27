import { useState, EventHandler, ReactNode } from 'react';
import './output.css';

const Post5 = () => {
	return (
  <div className="relative w-screen h-[5000px] bg-[#fff] overflow-hidden">
  <div className="absolute  top-0 w-screen flex flex-col items-center justify-start gap-[46px]">

    <img width="1139" src={process.env.PUBLIC_URL + "/post5_1.png"}></img>

    <div className="w-[716px] flex flex-col items-start justify-start gap-[43px]">
      <div className="self-stretch text-[15px] font-['Pretendard'] text-[#000]">2024-11-28</div>
      <div className="self-stretch text-[40px] font-['Pretendard'] font-bold text-[#000]">독립 출판인의 명절, 언리미티드에디션 2024 방문기</div>
      <div className="self-stretch text-[20px] font-['Pretendard'] font-light text-[#000]">서울시립 북서울 미술관</div>
      <img width="716"  src={process.env.PUBLIC_URL + "/post5_2.jpg"}></img>
      <div className="w-[699px] text-[20px] font-['Pretendard'] font-medium text-[#000]">지난 11.15.~11.17. 열린 언리미티드에디션.<br/>
책이라는 물성을 빌려 이 세계에 태어난 다정하고 창의적인
자유로움들이 북서울미술관을 채웠습니다.<br/></div>
<div className="w-[716px] flex flex-row items-center justify-start gap-[10px]">
<img width="350"  src={process.env.PUBLIC_URL + "/post5_3.jpg"}></img>
<img width="350"  src={process.env.PUBLIC_URL + "/post5_4.jpg"}></img></div>
      <div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">지류를 중심으로 활동하는 국내외 창작자 220팀들의 다양한 작품들과 그보다도 다채로운 <br/>사람들이 모여 광활한 취향들이
      뻗어나가는 순간의 경험은 3일이라는 시간과 미술관이라는<br/> 공간을 넘어, 누군가의 세계를 환장시키면 계속해서 이어질 것이라고 굳게 믿게 되었답니다. </div>
      <img width="716"  src={process.env.PUBLIC_URL + "/post5_5.jpg"}></img>
      <div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">담당자님의 마지막 축사 말씀처럼, 모두가 언제 어디서나 독립적이되 외롭지는 않으시길!</div>
      <div className="text-[15px] font-['Pretendard'] font-medium text-[#414141] whitespace-nowrap">Editor. 심기<br/> </div>

      
    </div>
  </div>
</div>)
}

export default Post5