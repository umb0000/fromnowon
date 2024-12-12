import { useState, EventHandler, ReactNode } from 'react';
import './output.css';

const Post3 = () => {
	return (
  <div className="relative w-screen h-[10000px] bg-[#fff] overflow-hidden">
  <div className="absolute  top-0 w-screen flex flex-col items-center justify-start gap-[46px]">

    <img width="1139" src={process.env.PUBLIC_URL + "/post3_2.png"}></img>

    <div className="w-[716px] flex flex-col items-start justify-start gap-[20px]">
      <div className="self-stretch text-[15px] font-['Pretendard'] text-[#000]">2024-12-05</div>
      <div className="self-stretch text-[40px] font-['Pretendard'] font-bold text-[#000]">여기 일본인가요? 돈카츠 맛집 하이레</div>
      <div className="self-stretch text-[20px] font-['Pretendard'] font-light text-[#000]">광운대 하이레</div>
      <img width="716"  src={process.env.PUBLIC_URL + "/post3_1.png"}></img>
      <div className="w-[699px] text-[20px] font-['Pretendard'] font-medium text-[#000]">광운대에서 광운대역으로 넘어가는 길목에 있는 분위기 좋은 돈카츠 가게.
      돈카츠의 근본 등심부터 안심, 신메뉴 유린기 카츠까지 맛볼 수 있어요. <br/></div>
<div className="w-[1400px] flex flex-row items-center justify-start gap-[10px]">
<img width="350"  src={process.env.PUBLIC_URL + "/post3_3_1.png"}></img>
<img width="350"  src={process.env.PUBLIC_URL + "/post3_4.png"}></img>
</div>
<div className="w-[1400px] flex flex-row items-center justify-start gap-[10px]">
<img width="350"  src={process.env.PUBLIC_URL + "/post3_3.png"}></img>
<img width="350"  src={process.env.PUBLIC_URL + "/post3_3_2.png"}></img>
</div>
      <div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap"> <br/>
다양한 소스들이 준비되어 있어 취향에 맞게 골라 먹기 좋아요.<br/>
에디터들이 시킨 안심, 유린기, 등심 카츠. (사진 상 왼쪽부터) <br/>
사르르 녹는 식감과 소스의 조화로 너무 맛있게 먹었습니다. </div>

<img width="716"  src={process.env.PUBLIC_URL + "/post3_6.png"}></img>
<img width="716"  src={process.env.PUBLIC_URL + "/post3_7.png"}></img>
<div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">자칫 느끼하다고 느낄 수 있는 돈카츠를 다양한 소스와 샐러드를 곁들여 먹어보세요. </div>

      <div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">외관부터 내부 인테리어, 그리고 현지에서 먹는 듯한 돈카츠의 맛으로 일본 여행 온 듯한 <br/>기분을 들게 해주는 공간. <br/>아직 식사 안하셨다면 오늘은 하이레 어떨까요?
      아래에서 사장님과의 인터뷰가 이어집니다.</div>

      

      <img width="716"  src={process.env.PUBLIC_URL + "/post3_9.png"}></img>
      <div className="self-stretch text-[35px] font-['Pretendard'] font-bold text-[#000]">광운대 학생 맛집 1위 선정 하이레, <br/>"메뉴는 안심 추천, 손님들이 난축맛돈 경험해봤으면"</div>
      <div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">광운대 학생들이 뽑은 가장 인기 있는 학교 앞 맛집은 어딜까?<br/>
지난 10월, 광운 스퀘어에서 진행한 프롬나우온 부스에서 맛집 투표를 받은 결과, <br/>돈카츠 가게 “하이레”가 1위로 선정되었다. <br/>프나온 에디터 3명이 직접 하이레에 방문해 식사하고, 사장님과의 인터뷰도 해보았다. </div>
<img width="716"  src={process.env.PUBLIC_URL + "/post3_12.png"}></img>
      <div className="text-[20px] font-['Pretendard'] font-medium text-[#000] whitespace-nowrap">시작에 앞서 간단한 자기 소개 부탁드립니다. <br/>

- 가게를 언제 오픈하셨나요? 이 가게를 시작하게 된 계기는 무엇인가요? <br/>
2023년 9월에 오픈했습니다. 
<br/> 서울에 있는 호텔에서 10년이상 근무하면서, 
<br/>마음 한켠에 나만의 가게를 해보겠다는 마음을 가지고 있었는데... 
<br/>시기가 잘 맞았던거 같습니다.<br/><br/>학교 주변에서 가게를 운영하시는 특별한 이유가 있나요?<br/> 대학교상권이라.. 평일에 빡세게 일하고, 주말에 쉴수 있다고 생각했고.. 
<br/>지금 그렇게 운영하고 있습니다. 주말에 쉬고... 방학때... 나도 방학처럼 좀 쉬면서...? <br/><br/>

<img width="716"  src={process.env.PUBLIC_URL + "/post3_10.png"}></img>
<br/> 가게 이름에 특별한 의미가 있나요?<br/> 
하이레 라는 뜻이 “들어와” 라는 의미를 가지고 있습니다. <br/>발음상 부르기도 편해서 그렇게 짓게 되었습니다. 
<br/><br/> 대표 메뉴나 추천 메뉴가 무엇인가요?<br/> 등심은 어디서나 드실수 있는 메뉴인데.. 안심은 먹기가 좀 힘든 부위다 보니..<br/> 그걸 추천드립니다. 지방이 없이 부드러워서 많이들 좋아하시는듯 합니다. <br/><br/> 
최근에 신메뉴도 나온 걸로 알고 있는데 신메뉴 개발 과정은 어떻게 되나요?<br/> 혹은 주로 어디서 아이디어를 얻으시나요?<br/> 
평소 제가 좋아하는 음식취향이.. 매우 대중적이기 때문에.. <br/>다들 좋아하실거라 믿었습니다. 주로 일본에 있는 업장에서 아이디어를 얻습니다. 
<br/><br/> 난축맛돈 등 재료에도 신경을 많이 쓰시는 것 같은데, <br/>음식에 사용되는 재료는 어떻게 선정하시나요?<br/> 돈까스는 사실 고기가 좋아야.. 돈까스도 맛있습니다.. 튀기는 테크닉이나.. 숙성도 중요하지만 <br/>본재료가 좋아야 맛있더라구요. 난축맛돈이라는 품종에 관심이 많았고.. <br/>좋은 원육을 소개시켜드리고 싶었습니다. 가격이 높다는 단점이 있지만, 경험이 중요하니.. <br/><br/> 메뉴에 대한 특별한 철학이나 신념이 있으신가요?<br/> 돈까스는 소울푸드입니다.. 다양한 연령층이 즐길수 있는.. 몇 안되는 메뉴라 생각합니다.. 
<br/>부담없이 즐길 수 있는 메뉴가 결국 롱런할수 있다고 봅니다. <br/><br/> 투표 결과 광운대 근처 1등 맛집으로 선정되었습니다. 어떤 점에서 학생들에게 인기 있는 가게가 된 것 같나요? 


<br/> 광운대 학생들과의 특별한 에피소드가 있다면 알려주세요.<br/> 아무래도.. 가게가 작은 소규모 식당이다 보니.. 수용할수 있는 인원이 한정적입니다.. <br/>밥시간때에.. 몰리면.. 웨이팅하다보니.. 그렇게 느낀거 같네요.. 감사합니다 ㅠ <br/><br/> 

<img width="716"  src={process.env.PUBLIC_URL + "/post3_1.png"}></img>
<div className="self-stretch text-[35px] font-['Pretendard'] font-bold text-[#000] pt-10px">"로고, 직접 딸에게 그려달라고 했다, <br/>돈카츠 이유도 딸이 좋아해서..."</div>

<br/>가게 인테리어에 대한 미감이 남다르시고, <br/>티셔츠나 스티커 등 굿즈가 눈에 띄는데 혹시 디자인을 직접 하시는 건가요?<br/> 하이레 로고 (돼지로고)는 직접 딸에게 그려달라고 하고.. 시그니쳐로 사용하고 있습니다. <br/>사실 돈까스집 창업한것도 딸이 제일 좋아하는 음식이 돈까스이기에... <br/>스티커나 굿즈는 직접 디자인하고 메이킹한것들입니다. <br/><br/> 앞으로 가게를 어떻게 발전시킬 계획이 있으신가요? (새로운 메뉴 추가, 매장 확장 등)<br/> 새로운 메뉴는 방학중에 테이스팅을 거친후, 정식 출시할 예정이고, 확장은 아직 생각안하고 있고..<br/> 광운대에 새로운 매장을 하나 더 운영해볼까 기획만 하고 있습니다. (돈까스집 말고 다른 메뉴) <br/><br/> 현재 가게를 운영하면서 가장 자랑스러운 부분은 무엇인가요?<br/> 끊임없이 재 방문해주시는 분들이 많아서. 일단.. 맛이 없진 않구나.. 하고.. 생각하고 있습니다. <br/><br/> 향후 꿈이나 목표가 있으신가요?<br/> 광운대에 돈까스가게 말고, 다른 아이템으로 한번 가게를 만들어보고 싶긴합니다. <br/><br/> 사장님께 돈까스란 무엇인가요?<br/> 소울푸드... 평생 먹어도 안질릴 메뉴죠. <br/><br/> 마지막으로, 하이레를 방문하는 사람들에게 어떤 말을 해주고 싶으신가요?<br/> 불편하고 좁은.. 매장에.. 기다려주시는 분들도 계시고, 항상 감사합니다.. 바라는건 사랑과 평화...
</div>
      <div className="text-[15px] font-['Pretendard'] font-medium text-[#414141] whitespace-nowrap">Editor. 수련<br/> </div>

      
    </div>
  </div>
</div>)
}

export default Post3



