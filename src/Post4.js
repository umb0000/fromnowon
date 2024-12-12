import { useState, EventHandler, ReactNode } from 'react';
import './output.css';

const Post4 = () => {
	return (
  <div className="relative w-screen h-[5000px] bg-[#fff] overflow-hidden">
  <div className="absolute  top-0 w-screen flex flex-col items-center justify-start gap-[46px]">

    <img width="1139" src={process.env.PUBLIC_URL + "/main_post5.png"}></img>

    <div className="w-[716px] flex flex-col items-start justify-start gap-[43px]">
      <div className="self-stretch text-[15px] font-['Pretendard'] text-[#000]">2024-11-28</div>
      <div className="self-stretch text-[40px] font-['Pretendard'] font-bold text-[#000]">RM은 어떤 카페를 갈까?</div>
      <div className="self-stretch text-[20px] font-['Pretendard'] font-light text-[#000]">공릉 비스킷플로어</div>
      <img width="716"  src={process.env.PUBLIC_URL + "/post4_2.jpg"}></img>
      <div className="w-[699px] text-[20px] font-['Pretendard'] font-medium text-[#000]">BTS의 RM도 다녀간 곳! 비스킷플로어를 소개합니다🙌 <br/></div>
<div className="w-[716px] flex flex-row items-center justify-start gap-[10px]">
<img width="350"  src={process.env.PUBLIC_URL + "/post4_3.jpg"}></img>
<img width="350"  src={process.env.PUBLIC_URL + "/post4_4.jpg"}></img></div>
      <div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">비스킷플로어를 들어가자마자 파릇파릇한🪴 식물들이 반겨줍니다. 원목 인테리어와 <br/>잘 어울려 고즈넉한 분위기를 느낄 수 있습니다. </div>

      <div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">이곳은 흑설탕과 구운 소금을 가미한 비스킷 라떼가☕ 시그니처 메뉴인데요. <br/>사장님이 직접 로스팅하신 질 좋은 원두를 사용해 커피 본질에 충실한 맛을 즐길 수 있답니다.</div>
      <div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">공간이 다소 협소하지만 오히려 커피 한 잔의 맛에 온전히 집중할 수 있어 좋아요. </div>
      <div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">✔️이런 분에게 추천해요!<br/>
 • 카페에서 조용히 책 읽고 싶어요<br/>
 • 맛있는 커피가 마시고 싶어요<br/>
 • 우드톤 인테리어가 좋아요<br/><br/>

📍서울 노원구 동일로190길 6 1층 6호
 08:00-19:00(주말 10:00-19:00)</div>
      <div className="text-[15px] font-['Pretendard'] font-medium text-[#414141] whitespace-nowrap">Editor. 고란<br/> </div>

      
    </div>
  </div>
</div>)
}

export default Post4









