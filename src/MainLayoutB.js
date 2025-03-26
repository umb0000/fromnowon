import React, { useRef, useEffect, useState } from "react";
import './output.css';

const MainLayoutB = () => {
  const layoutRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [hasSnapped, setHasSnapped] = useState(false); // 스냅 제어용

  // MainLayout이 화면에 보이는지 감지 + 강제 스크롤 위치 이동
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsInViewport(isVisible);

        if (isVisible && layoutRef.current) {
          // 상단바 높이 보정: 88px
          const offsetTop =
            layoutRef.current.getBoundingClientRect().top +
            window.scrollY -
            88;

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });

          setHasSnapped(true);
        } else if (!isVisible) {
          setHasSnapped(false); // 다시 위로 올라가면 스냅 초기화
        }
      },
      {
        threshold: 0.9, // 30%만 보여도 스냅
      }
    );

    if (layoutRef.current) observer.observe(layoutRef.current);

    return () => {
      if (layoutRef.current) observer.unobserve(layoutRef.current);
    };
  }, []);

  // 단독 영역 스크롤 감지
  useEffect(() => {
    const el = rightRef.current;

    const handleScroll = () => {
      if (!isInViewport || !hasSnapped) return;

      const atTop = el.scrollTop === 0;
      const atBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - 3;

      if (atTop || atBottom) {
        document.body.style.overflow = "auto";
      } else {
      document.body.style.overflow = "hidden";
     }
    };

    if (el) {
      el.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isInViewport, hasSnapped]);


  useEffect(() => {
    if (isInViewport) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

   return () => {
     document.body.style.overflow = "auto";
   };
  }, [isInViewport]);

  useEffect(() => {
    const rightEl = rightRef.current;
  
    const handleWheel = (e) => {
        if (!isInViewport || !hasSnapped || !leftRef.current) return;
      
        const leftEl = leftRef.current;
      
        const atTop = leftEl.scrollTop === 0;
        const atBottom =
          leftEl.scrollTop + leftEl.clientHeight >= leftEl.scrollHeight - 1;
      
        if (atTop && e.deltaY < 0) return;
        if (atBottom && e.deltaY > 0) return;
      
        e.preventDefault();
        leftEl.scrollTop += e.deltaY;
      };
  
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isInViewport, hasSnapped]);

  return (
    <div
      ref={layoutRef}
      className="w-screen h-[calc(100vh-138px)] flex flex-row scroll-mt-[88px]"
    >
      {/* 단독 영역 */}
      <div className="order-2 w-1/2 relative bg-gray-100 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[580px]">
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


          <div className="absolute top-4 flex flex-row items-center justify-start pl-5">
            <div className="text-black text-[35px] font-bold font-['Pretendard'] pr-[15px]">MAP  </div>
            <img width="31" height="28" src={process.env.PUBLIC_URL + "/right.png"} alt="icon" />
          </div>
        
      </div>

      {/* 스크롤롤 영역 */}
      <div
        ref={leftRef}
        className="order-1 w-1/2 bg-[FFB433] p-3 pt-0 pb-0 overflow-y-auto h-full overflow-x-scroll scrollbar-hide"
        style={{ backgroundColor: '#B4EBE6' }}>
        <div className="flex flex-row h-[200vh] gap-2 ">
            
            {/*스크롤롤 첫 번째 열*/}

            <div className="w-1/2 flex-col gap-20 pt-[50px]">
      <div>
    <a href='/post5'>
    <div className="relative self-stretch flex flex-col justify-start items-start gap-2">
      <div className="w-full relative">
        <img className="w-full top-0 object-cover" src={process.env.PUBLIC_URL + "/main_post6.png"} alt="post 3" />
      </div>
      <div className="w-[auto] flex flex-col justify-start items-start gap-[3px]">
        <div className="text-black text-base font-bold font-['Pretendard']">PLACE</div>
        <div className="text-black text-[28px] font-bold font-['Pretendard']">암온어 마스트리스boat</div>
        <div className="text-black text-[15px] font-normal font-['Inter']">사방이 고양이</div>
      </div>
    </div>
    </a></div>
    
    <div className="pt-[90px]">
    <a href='/post3'>
    <div className="relative self-stretch flex flex-col justify-start items-start gap-2">
      <div className="w-full relative">
        <img className="w-full top-0 object-cover" src={process.env.PUBLIC_URL + "/main_post4.png"} alt="post 3" />
      </div>
      <div className="w-[auto] flex flex-col justify-start items-start gap-[3px]">
        <div className="text-black text-base font-bold font-['Pretendard']">F&B PLACE</div>
        <div className="text-black text-[28px] font-bold font-['Pretendard']">봄에는 뇨끼를</div>
        <div className="text-black text-[15px] font-normal font-['Inter']">공릉 메모아</div>
      </div>
    </div>
    </a>
    </div>
    
    
    </div>

    {/*오른쪽 두 번째 열*/}

    <div className="w-1/2 flex-col pt-[200px] ">

    <div >
        <a href='/post6'>
    <div className="relative self-stretch flex flex-col justify-start items-start gap-2 p-1">
      <div className="w-full relative">
        <img className="w-full top-0 object-cover" src={process.env.PUBLIC_URL + "/post6.jpg"} alt="post 6" />
      </div>
      <div className="w-[auto] flex flex-col justify-start items-start gap-[3px]">
        <div className="text-black text-base font-bold font-['Pretendard']">F&B PLACE</div>
        <div className="text-black text-[28px] font-bold font-['Pretendard']">새해를 맞이하는 귀여움 한 조각</div>
        <div className="text-black text-[15px] font-normal font-['Inter']">노원역 느좋 카페는 여기</div>
      </div>
    </div>
    </a>
    </div>
    
    <div className="pt-[90px]">
    <a href='/post3'>
    <div className="relative self-stretch flex flex-col justify-start items-start gap-2 p-1">
      <div className="w-full relative">
        <img className="w-full top-0 object-cover" src={process.env.PUBLIC_URL + "/main_post3.png"} alt="post 3" />
      </div>
      <div className="w-[auto] flex flex-col justify-start items-start gap-[3px]">
        <div className="text-black text-base font-bold font-['Pretendard']">PEOPLE & PLACE</div>
        <div className="text-black text-[28px] font-bold font-['Pretendard']">"로고, 딸이 그렸다, <br/>돈카츠 선택 이유도 딸이 좋아해서..."</div>
        <div className="text-black text-[15px] font-normal font-['Inter']">광운대 선정 1위 맛집 ㅡ 하이레 인터뷰</div>
      </div>
    </div>
    </a>
    </div>
    
    </div>
 
        </div>
      </div>
      
    </div>
  );
};

export default MainLayoutB;