import { useState, useEffect, EventHandler, ReactNode } from 'react'
import './output.css';
import MainLayout from './MainLayout';

const Main = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const words = ['노원으로부터', '공릉으로부터', '경춘선숲길로부터', '월계로부터','프나온으로부터']; // 교체할 단어 리스트

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1800); // 2초 애니메이션 + 2초 대기
    return () => clearInterval(interval);
  }, []);

	return (

    <div className="w-screen h-full ">
  <div className="h-[3500px] bg-white">
      {/* 데스크탑 레이아웃 */}
      <div className="w-screen h-[1000px]">
  <img
    src={process.env.PUBLIC_URL + "/main_bg.png"}
    alt="배경 이미지"
    className="w-full h-full object-cover rounded-xl shadow-md blur object-bottom"
  />

<img
    src={process.env.PUBLIC_URL + "/new_logo.png"}
    alt="겹치는 이미지"
    className="absolute top-[88px] w-full"
  />
</div>

  <div className="hidden md:flex flex-col items-center ">
  <div className="absolute top-[157px] w-screen flex flex-col items-center justify-start gap-[0px] ">
    <div className="relative w-screen h-[769px] shrink-0 flex ">
      
      <div className="absolute left-1/2 top-0 items-center w-[460px] h-[682px] flex"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/main_bg.png'})` }}>
        
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
          <div className="w-[250px] h-[70px] shrink-0 flex flex-row items-center justify-between py-[10px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#B2B2B2]">
            <div className="text-[25px] font-['Pretendard'] text-[#B2B2B2] text-center whitespace-nowrap">구독하기 (준비중)</div>
            <img width="25" height="22" src={process.env.PUBLIC_URL + "/right.png"}></img>
          </div>
          <a href="https://www.instagram.com/fromnowon.mag">
          <div className="w-[250px] h-[70px] shrink-0 flex flex-row items-center justify-between py-[10px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#000] relative overflow-hidden group">
  <div className="absolute inset-0 bg-[#000] text-[#ffffff] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100"></div>
  <div className="relative text-[25px] font-['Pretendard'] text-[#000] text-center whitespace-nowrap transition-colors duration-300 group-hover:text-white">인스타그램
  </div>
  <img className="relative" width="25" height="22" src={process.env.PUBLIC_URL + "/right.png"} alt="icon" />
</div>
</a>
        </div>
      </div>
    </div>

    <div className="w-screen">
  <MainLayout/>
</div>

    <div className="w-screen flex flex-row items-start justify-between">
      <a href='/post2'>
        <div className="relative w-[50vw] h-auto shrink-0 flex pl-[0px] pr-[2vw] py-[0px] bg-white flex-col justify-between items-start">
          <div className="relative w-full h-auto flex">
            <img className="w-full h-auto" src={process.env.PUBLIC_URL + "/main_post1.png"} alt="main post" />
            <div className="w-full h-auto bg-gradient-to-b from-transparent via-black/60 to-black"></div>
          </div>
        </div></a>

        <div className="relative w-[50%] h-auto shrink-0 flex">
          <div className="absolute w-full h-full bg-white"></div>
          <div className="absolute left-[200px] top-[169px] w-[411px] h-[580px]">
     <svg
        width="293"
        height="426"
        viewBox="0 0 293 426"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hover:fill-blue-400 hover:scale-110 transition-transform duration-300"
      >
        <path
          d="M18.4325 70.3362L27.5737 96.924L13.1294 111.814L0.489258 191.462L22.7549 241.331L20.963 256.739L40.7466 303.818L33.5547 326.937L46.1465 350.655L41.2067 393.516L69.6713 425.601L83.2075 355.496L145.004 292.155L154.315 237.85L267.883 229.852L283.562 197.674L256.586 118.061L292.558 72.6873L279.966 46.9984L217.019 42.7226L215.215 19.6038L192.732 0L137.873 24.7439L98.6203 11.6977L58.7383 50.4212L18.4325 70.3362Z"
          className="transition-all duration-300 fill-gray-300 hover:fill-[#C5FF31]"
        />
      </svg>

      <svg
        width="216"
        height="230"
        viewBox="0 0 216 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[13.0%] right-[22.07%] top-[36%] bottom-[20.86%] hover:scale-110 transition-transform duration-300"
      >
        <path
          d="M19.2075 126.496L0.259277 198.826L70.0225 229.989L147.183 159.261L214.537 138.147L199.778 101.36L215.07 74.8183L190.782 27.7392L203.883 0.851746L90.3146 8.85L81.004 63.1551L19.2075 126.496Z"
          className="transition-all duration-300 fill-gray-300 hover:fill-[#C5FF31]"
        />
      </svg>

      <svg
        width="174"
        height="216"
        viewBox="0 0 174 216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-8.66%] right-[59.77%] top-[60.0%] bottom-[0%] hover:scale-110 transition-transform duration-300"
      >
        <path
          d="M48.563 0.600342L23.3795 25.4249L0 92.1999L33.4893 116.033L116.014 216L173.548 197.284L137.432 81.0784L102.671 61.6014L48.563 0.600342Z"
          className="transition-all duration-300 fill-gray-300 hover:fill-[#C5FF31]"
        />
      </svg>

      <svg
        width="274"
        height="212"
        viewBox="0 0 274 212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[22.85%] right-[40.79%] top-[55%] bottom-[26.62%] hover:scale-110 transition-transform duration-300"
      >
        <path
          d="M36.5484 211.284L114.811 185.814L166.97 203.792L197.554 187.519L208.341 195.229L234.421 184.096L238.925 133.595L274 108.77L267.704 30.0091L226.333 0.908875L107.183 38.2609L30.0225 108.989L0.431885 95.0785L36.5484 211.284Z"
          className="transition-all duration-300 fill-gray-300 hover:fill-[#C5FF31]"
        />
      </svg>

      <div className="absolute left-[33%] right-[55.23%] top-[22.93%] bottom-[72.93%] text-[20px] font-['Pretendard'] font-semibold text-[#fff]">상계</div>
      <div className="absolute left-[45%] right-[36.01%] top-[50%] bottom-[44.66%] text-[20px] font-['Pretendard'] font-semibold text-[#fff]">중계</div>
      <div className="absolute left-[30%] right-[52.8%] top-[60%] bottom-[28.28%] text-[20px] font-['Pretendard'] font-semibold text-[#fff]">하계</div>
      <div className="absolute left-[16.2%] right-[55.22%] top-[78.69%] bottom-[9.79%] text-[20px] font-['Pretendard'] font-semibold text-[#fff]">월계</div>
      <div className="absolute left-[61.72%] right-[9.71%] top-[74.89%] bottom-[13.58%] text-[20px] font-['Pretendard'] font-semibold text-[#fff]">공릉</div>
    </div>
          <div className="absolute top-4 flex flex-row items-center justify-start ">
            <div className="text-black text-[35px] font-bold font-['Pretendard'] pr-[15px]">MAP  </div>
            <img width="31" height="28" src={process.env.PUBLIC_URL + "/right.png"} alt="icon" />
          </div>
        </div>
      </div>

      <div className="w-screen flex flex-row items-start pb-[30px]">
  <div className="relative w-[50vw] h-auto shrink-0 flex pl-[30px]  pt-[25px] bg-white flex-col justify-between items-start ">
    <div className="h-[70px] flex flex-col justify-start items-start gap-0.5">
      <div className="self-stretch flex justify-start items-center gap-[10px]">
        <div className="text-black text-[35px] font-bold font-['Pretendard']">이 달의 MAGAZINE</div>
      </div>
    </div>


    <a href='/post3'>
    <div className="relative self-stretch flex flex-wrap justify-start items-start gap-5">
      <div className="w-[18vw] h-[430px] relative">
        <div className="left-0 top-0 absolute "></div>
        <img className="w-full h-auto absolute top-0 left-0 object-cover" src={process.env.PUBLIC_URL + "/main_post3.png"} alt="post 3" />
      </div>
      <div className="w-[400px] flex flex-col justify-start items-start gap-[3px]">
        <div className="text-black text-base font-bold font-['Pretendard']">PEOPLE & PLACE</div>
        <div className="text-black text-[28px] font-bold font-['Pretendard']">"로고, 딸이 그렸다, <br/>돈카츠 이유도 딸이 좋아해서..."</div>
        <div className="text-black text-[15px] font-normal font-['Inter']">광운대 선정 1위 맛집 ㅡ 하이레 인터뷰</div>
      </div>
    </div></a>

    <a href='/post4' className='left-150'>
    <div className="w-[45vw] relative w-full flex justify-end items-start gap-5 pt-[40px] pl-[350px]">
    
      <div className="relative flex flex-col justify-start items-end gap-[3px]">
      
        <div className="text-black text-base font-bold font-['Pretendard']">F&B PLACE</div>
        <div className="text-right text-black text-[28px] font-bold font-['Pretendard']">가을엔 뇨끼를</div>
        <div className="text-black text-[15px] font-normal font-['Inter']">공릉 메모아</div>
      </div>
      <div className="w-[18vw] h-[346.67px] relative">
        <img className="w-full h-auto absolute top-0 left-0 object-cover" src={process.env.PUBLIC_URL + "/main_post4.png"} alt="post 4" />
      </div>
    </div></a>
  </div>


  <div className="relative w-[50%] h-auto shrink-0 flex flex-col items-end justify-between">
  <a href='/post5'>
    <div className="relative w-full h-auto flex">
      <img className="w-full h-auto object-cover" src={process.env.PUBLIC_URL + "/main_post2.png"} alt="main post" />
      <div className="absolute top-0 left-0 w-full h-full"></div>
    </div>
    </a>
  </div>
  

</div>


<div className='w-screen h-[750px] flex flex-row items-center bg-[#C5FF31] pl-[30px]'>
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
  </div>
  </div>
  
  <div className="flex flex-col items-center lg:hidden ">
    <h1 className="text-2xl font-bold">모바일 레이아웃</h1>
    <p>이 부분은 모바일에서만 보입니다.</p>
  </div>
  
</div>)
}

export default Main;