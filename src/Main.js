import { useState, useEffect, EventHandler, ReactNode } from 'react'
import './output.css';

const Main = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const words = ['노원으로부터', '공릉으로부터', '경춘선숲길로부터', '월계로부터','프나온으로부터']; // 교체할 단어 리스트

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // 2초 애니메이션 + 2초 대기
    return () => clearInterval(interval);
  }, []);

	return (<div className="w-screen h-[3774px] bg-[#fff] overflow-hidden">
  <div className="absolute top-[157px] w-screen flex flex-col items-center justify-start gap-[36px]">
    <div className="relative w-screen h-[769px] shrink-0 flex">
      <div className="absolute left-1/2 top-0 items-center w-[460px] h-[682px] flex">
        
        <img className="relative -translate-x-1/2 top-[40px]" width="600"  src={process.env.PUBLIC_URL + "/bg_map.png"}></img>

      </div>
      <div className="absolute -translate-x-1/2 left-1/2 top-[40px] flex flex-col items-center justify-center">
        <div className="w-[1114px] h-[180px] text-[150px] font-['Pretendard'] font-bold text-[#000] text-center">FROM NOW ON</div>
        <div className="w-[1114px] h-[180px] text-[150px] font-['Pretendard'] font-bold text-[#000] text-center">지금,</div>
        <div className="w-[1114px] h-[180px] text-[150px] font-['Pretendard'] font-bold text-[#000] text-center overflow-hidden relative">
              <span className="relative h-full flex flex-col items-center">
                {words.map((word, index) => (
                  <span 
                    key={index} 
                    className={`absolute transition-transform duration-1000 ease-in-out ${index === currentTextIndex ? 'translate-y-0' : 'translate-y-[100%]'}`}
                  >
                    {word}
                  </span>
                ))}
              </span> </div>
        <div className="text-[36px] font-['Pretendard'] text-[#000] whitespace-nowrap">노원구 중심 감도 높은 노원구 공간 큐레이션 매거진, 프롬나우온</div>
        <div className="flex flex-row items-start justify-start gap-[36px] py-[30px] px-0">
          <div className="w-[250px] h-[70px] shrink-0 flex flex-row items-center justify-between py-[10px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#000]">
            <div className="text-[25px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">구독하러 가기</div>
            <img width="25" height="22" src={process.env.PUBLIC_URL + "/right.png"}></img>
          </div>
          <div className="w-[250px] h-[70px] shrink-0 flex flex-row items-center justify-between py-[10px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#000]">
            <div className="text-[25px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap">인스타그램</div>
            <img width="25" height="22" src={process.env.PUBLIC_URL + "/right.png"}></img>
          </div>
        </div>
      </div>
    </div>

    <div className="w-screen flex flex-row items-start justify-between">
        <div className="relative w-[60%] h-auto shrink-0 flex flex-col items-end justify-between p-4">
          <div className="relative w-full h-auto flex">
            <img className="w-full h-auto" src={process.env.PUBLIC_URL + "/main_post1.png"} alt="main post" />
            <div className="w-full h-auto bg-gradient-to-b from-transparent via-black/60 to-black"></div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="text-2xl font-['Pretendard'] font-bold text-white whitespace-nowrap">F&B PLACE</div>
            <img width="31" height="28" src="Vector64_29.png" alt="icon" />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <div className="w-full text-4xl font-['Pretendard'] font-extrabold text-white">이탈리아 현지 생면의 맛을 찾아서</div>
            <div className="w-full text-xl font-['Inter'] text-white">공릉 페페그라노</div>
          </div>
        </div>
        <div className="relative w-[40%] h-auto shrink-0 flex">
          <div className="absolute w-full h-full bg-white"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-14 text-4xl font-['Inter'] text-black">지도?</div>
          <div className="absolute w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-gray-400"></div>
            <div className="absolute inset-y-0 left-1/4 right-1/4 bg-gray-300"></div>
            <div className="absolute inset-x-0 bottom-0 bg-gray-300"></div>
            <div className="absolute top-0 bottom-1/4 left-1/12 right-1/5 bg-gray-300"></div>
            <div className="absolute top-1/5 bottom-2/3 left-1/3 right-1/3 text-xl font-['Pretendard'] font-semibold text-white">상계</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-xl font-['Pretendard'] font-semibold text-white">중계</div>
            <div className="absolute bottom-1/4 left-1/3 right-1/3 text-xl font-['Pretendard'] font-semibold text-white">하계</div>
            <div className="absolute bottom-1/6 left-1/6 text-xl font-['Pretendard'] font-semibold text-white">월계</div>
            <div className="absolute bottom-1/6 right-1/6 text-4xl font-['Pretendard'] font-semibold text-black">공릉</div>
          </div>
          <div className="absolute top-4 left-4 flex flex-row items-center justify-start gap-4">
            <div className="text-2xl font-['Pretendard'] font-bold text-black">MAP</div>
            <img width="31" height="28" src="Vector64_36.png" alt="icon" />
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