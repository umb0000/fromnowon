import { useState, EventHandler, ReactNode } from 'react'
import './output.css';

const Main = () => {
	return (<div className="w-screen h-[3774px] bg-[#fff] overflow-hidden">
  <div className="absolute left-[642px] top-[1887px] text-[40px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">CURTURE IN NOWON</div>
  <div className="absolute left-[-2px] top-[157px] w-[1444px] flex flex-col items-center justify-start gap-[36px]">
    <div className="relative w-screen h-[769px] shrink-0 flex">
      <div className="absolute left-[323px] top-0 w-[460px] h-[682px] flex">
        <div className="absolute left-[33.44%] right-0 top-[60.5%] bottom-[3.23%] bg-[#c5ff31]"></div>
        <div className="absolute left-[23.66%] right-[24.07%] top-[39.63%] bottom-[20.86%] bg-[#c5ff31]"></div>
        <img className="absolute left-0 right-[57.77%] top-[62.86%] bottom-[0%]" width="194" height="253" src="월계53_10.png"></img>
        <div className="absolute left-[8.15%] right-[20.79%] top-0 bottom-[26.62%] bg-[#c5ff31]"></div>
      </div>
      <div className="absolute -translate-x-1/2 left-1/2 top-[40px] flex flex-col items-center justify-center">
        <div className="w-[1114px] text-[150px] font-['Pretendard'] font-bold text-[#000] text-center">FROM NOW ON</div>
        <div className="w-[1114px] h-[188px] text-[150px] font-['Pretendard'] font-bold text-[#000] text-center">지금,</div>
        <div className="w-[1114px] h-[188px] text-[150px] font-['Pretendard'] font-bold text-[#000] text-center">노원으로부터</div>
        <div className="text-[36px] font-['Pretendard'] text-[#000] whitespace-nowrap">노원구 중심 감도 높은 노원구 공간 큐레이션 매거진, 프롬나우온</div>
        <div className="flex flex-row items-start justify-start gap-[36px] py-[30px] px-0">
          <div className="w-[250px] h-[70px] shrink-0 flex flex-row items-center justify-between py-[10px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#000]">
            <div className="text-[25px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">구독하러 가기</div>
            <img width="25" height="22" src="Vector89_327.png"></img>
          </div>
          <div className="w-[250px] h-[70px] shrink-0 flex flex-row items-center justify-between py-[10px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#000]">
            <div className="text-[25px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">인스타그램</div>
            <img width="25" height="22" src="Vector89_332.png"></img>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-center justify-between">
      <div className="relative w-[840px] h-[980px] shrink-0 flex flex-col items-start justify-between py-[30px] px-[31px]">
        <div className="absolute left-0 top-0 w-[840px] h-[980px] shrink-0 flex">
          <img className="absolute left-0 top-0" width="840" height="980" src="image 737_8.png"></img>
          <div className="w-[840px] h-[980px] bg-[linear-gradient(180deg,#00000000_0%,#00000044_60%,#000_100%)]"></div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[17px]">
          <div className="text-[40px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">F&B PLACE</div>
          <img width="31" height="28" src="Vector64_29.png"></img>
        </div>
        <div className="w-[655px] flex flex-col items-start justify-start gap-[5px]">
          <div className="self-stretch h-[64px] text-[50px] font-['Pretendard'] font-extrabold text-[#fff] flex flex-col justify-end">이탈리아 현지 생면의 맛을 찾아서</div>
          <div className="self-stretch h-[32px] text-[20px] font-['Inter'] text-[#fff]">공릉 페페그라노</div>
        </div>
      </div>
      <div className="relative w-[600px] h-[980px] shrink-0 flex">
        <div className="absolute left-0 top-0 w-[600px] h-[980px] bg-[#fff]"></div>
        <div className="absolute left-[237px] top-[437px] w-[126px] h-[53px] text-[40px] font-['Inter'] text-[#000]">지도?</div>
        <div className="absolute left-[57px] top-[142px] w-[486px] h-[706px] overflow-hidden">
          <div className="absolute left-[33.44%] right-[-0%] top-[60.5%] bottom-[3.23%] bg-[#c5ff31]"></div>
          <div className="absolute left-[23.66%] right-[24.07%] top-[39.63%] bottom-[20.86%] bg-[#d9d9d9]"></div>
          <div className="absolute left-0 right-[57.77%] top-[62.86%] bottom-[-0%] bg-[#d9d9d9]"></div>
          <div className="absolute left-[8.15%] right-[20.79%] top-0 bottom-[26.62%] bg-[#d9d9d9]"></div>
          <div className="absolute left-[35.64%] right-[35.78%] top-[22.85%] bottom-[65.62%] text-[20px] font-['Pretendard'] font-semibold text-[#fff]">상계</div>
          <div className="absolute left-[53.61%] right-[17.81%] top-[51.27%] bottom-[37.21%] text-[20px] font-['Pretendard'] font-semibold text-[#fff]">중계</div>
          <div className="absolute left-[35.35%] right-[36.07%] top-[65.37%] bottom-[23.1%] text-[20px] font-['Pretendard'] font-semibold text-[#fff]">하계</div>
          <div className="absolute left-[16.2%] right-[55.22%] top-[78.69%] bottom-[9.79%] text-[20px] font-['Pretendard'] font-semibold text-[#fff]">월계</div>
          <div className="absolute left-[61.72%] right-[9.71%] top-[74.89%] bottom-[13.58%] text-[48px] font-['Pretendard'] font-semibold text-[#000]">공릉</div>
        </div>
        <div className="absolute left-[30px] top-[22px] flex flex-row items-center justify-start gap-[14px]">
          <div className="text-[40px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">MAP</div>
          <img width="31" height="28" src="Vector64_36.png"></img>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-center justify-start gap-[1px]">
      <div className="w-[600px] h-[980px] shrink-0 flex flex-col items-start justify-between pt-[31px] pr-[20px] pb-0 pl-[31px] bg-[#fff]">
        <div className="w-[379px] flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[17px]">
            <div className="text-[40px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">이 달의 MAGAZINE</div>
            <img width="31" height="28" src="Vector64_40.png"></img>
          </div>
          <div className="self-stretch h-[32px] text-[20px] font-['Inter'] text-[#000]">2024년 11월</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[11px]">
          <img width="300" height="400" src="Mask group37_57.png"></img>
          <div className="w-[177px] shrink-0 flex flex-col items-start justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">가을엔 뇨끼를</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">공릉 메모아</div>
          </div>
        </div>
        <div className="w-[539px] flex flex-row items-start justify-end gap-[11px]">
          <div className="flex flex-col items-end justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">PEOPLE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] text-right whitespace-nowrap">..느좋하이레제목<br/>대학가 1등 돈가스</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">월계 하이레</div>
          </div>
          <img width="300" height="400" src="Mask group64_68.png"></img>
        </div>
      </div>
      <div className="relative w-[840px] h-[980px] shrink-0 flex flex-col items-start justify-between py-[30px] px-[31px]">
        <div className="absolute left-0 top-0 w-[840px] h-[980px] shrink-0 flex">
          <img className="absolute left-0 top-0" width="840" height="980" src="image 964_53.png"></img>
          <div className="absolute left-0 top-0 w-[840px] h-[980px] bg-[linear-gradient(180deg,#00000000_0%,#00000044_60%,#000_100%)]"></div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[17px]">
          <div className="text-[40px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">CURTURE IN NOWON</div>
          <img width="31" height="28" src="Vector64_48.png"></img>
        </div>
        <div className="w-[655px] flex flex-col items-start justify-start gap-[5px]">
          <div className="self-stretch h-[120px] text-[50px] font-['Pretendard'] font-extrabold text-[#fff] flex flex-col justify-end">독립 출판인의 명절,<br/>언리미티드에디션 2024 방문기</div>
          <div className="self-stretch h-[32px] text-[20px] font-['Inter'] text-[#fff]">서울시립 북서울미술관</div>
        </div>
      </div>
    </div>
    <div className="w-[1379px] flex flex-col items-start justify-start gap-[27px]">
      <div className="w-[379px] flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[17px]">
          <div className="text-[40px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">EDITOR’S TASTE</div>
          <img width="31" height="28" src="Vector68_143.png"></img>
        </div>
        <div className="self-stretch h-[32px] text-[20px] font-['Inter'] text-[#000]">에디터가 제안하는 공간들</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
        <div className="w-[446px] shrink-0 flex flex-col items-start justify-start gap-[11px]">
          <img width="446" height="446" src="Mask group68_113.png"></img>
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">RM은 어떤 카페를 갈까</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">BTS RM도 다녀간 공릉 로스터리</div>
          </div>
        </div>
        <div className="w-[446px] shrink-0 flex flex-col items-start justify-start gap-[11px]">
          <img width="446" height="446" src="Mask group68_121.png"></img>
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">RM은 어떤 카페를 갈까</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">BTS RM도 다녀간 공릉 카페</div>
          </div>
        </div>
        <div className="w-[446px] shrink-0 flex flex-col items-start justify-start gap-[11px]">
          <img width="446" height="446" src="Mask group68_129.png"></img>
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="text-[16px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">F&B PLACE</div>
            <div className="text-[28px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">RM은 어떤 카페를 갈까</div>
            <div className="text-[15px] font-['Inter'] text-[#000] whitespace-nowrap">BTS RM도 다녀간 공릉 카페</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>)
}

export default Main;