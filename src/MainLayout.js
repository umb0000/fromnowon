import React, { useRef, useEffect, useState } from "react";
import './output.css';

const MainLayout = () => {
  const layoutRef = useRef(null);
  const rightRef = useRef(null);
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

  // 오른쪽 영역 스크롤 감지
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
      if (!isInViewport || !hasSnapped || !rightEl) return;
  
      const atTop = rightEl.scrollTop === 0;
      const atBottom =
        rightEl.scrollTop + rightEl.clientHeight >= rightEl.scrollHeight - 1;
  
      if (atTop && e.deltaY < 0) {
        // 위에 있고 위로 스크롤하는 경우 → 전체 페이지 스크롤 허용
        return;
      }
  
      if (atBottom && e.deltaY > 0) {
        // 아래에 있고 아래로 스크롤하는 경우 → 전체 페이지 스크롤 허용
        return;
      }
  
      // 이외엔 오른쪽만 스크롤되게 막음
      e.preventDefault();
      rightEl.scrollTop += e.deltaY;
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
      {/* 왼쪽 영역 */}
      <div className="w-1/2 relative bg-gray-100 overflow-hidden">
        <img
          className="w-full h-full object-cover brightness-75"
          src={process.env.PUBLIC_URL + "/post2_2.png"}
          alt="main post"
        />

<div className="absolute bottom-[20px] left-[180px] -translate-x-1/2 -translate-y-1/2 z-20">
    <h2 className="text-white text-4xl font-bold">
      여기에 원하는 텍스트
    </h2>
  </div>
        
      </div>

      {/* 오른쪽 영역 */}
      <div
        ref={rightRef}
        className="w-1/2 bg-white p-2 pt-0 overflow-y-auto h-full overflow-x-scroll scrollbar-hide">
        <div className="flex flex-row h-[200vh] bg-gradient-to-b from-white to-gray-300 ">
            
            {/*오른쪽 첫 번째 열*/}

      <div className="w-1/2 flex-col gap-20">

      <div>
    <a href='/post5'>
    <div className="relative self-stretch flex flex-col justify-start items-start gap-2">
      <div className="w-full relative">
        <img className="w-full top-0 object-cover" src={process.env.PUBLIC_URL + "/post5_2.jpg"} alt="post 3" />
      </div>
      <div className="w-[auto] flex flex-col justify-start items-start gap-[3px]">
        <div className="text-black text-base font-bold font-['Pretendard']">CULTURE</div>
        <div className="text-black text-[28px] font-bold font-['Pretendard']">독립 출판인의 계절, <br/> 언리미티드에디션 방문기</div>
        <div className="text-black text-[15px] font-normal font-['Inter']">북서울시립미술관</div>
      </div>
    </div>
    </a></div>
    
    <div className="pt-[90px]">
    <a href='/post3'>
    <div className="relative self-stretch flex flex-col justify-start items-start gap-2">
      <div className="w-full relative">
        <img className="w-full top-0 object-cover" src={process.env.PUBLIC_URL + "/post5_2.jpg"} alt="post 3" />
      </div>
      <div className="w-[auto] flex flex-col justify-start items-start gap-[3px]">
        <div className="text-black text-base font-bold font-['Pretendard']">PEOPLE & PLACE</div>
        <div className="text-black text-[28px] font-bold font-['Pretendard']">독립 출판인의 계절, <br/> 언리미티드에디션 방문기</div>
        <div className="text-black text-[15px] font-normal font-['Inter']">북서울시립미술관</div>
      </div>
    </div>
    </a>
    </div>
    
    
    </div>

    {/*오른쪽 두 번째 열*/}

    <div className="w-1/2 flex-col pt-[200px]">
        <a href='/post3'>
    <div className="relative self-stretch flex flex-col justify-start items-start gap-2 p-1">
      <div className="w-full relative">
        <img className="w-full top-0 object-cover" src={process.env.PUBLIC_URL + "/main_post3.png"} alt="post 3" />
      </div>
      <div className="w-[auto] flex flex-col justify-start items-start gap-[3px]">
        <div className="text-black text-base font-bold font-['Pretendard']">PEOPLE & PLACE</div>
        <div className="text-black text-[28px] font-bold font-['Pretendard']">"로고, 딸이 그렸다, <br/>돈카츠 이유도 딸이 좋아해서..."</div>
        <div className="text-black text-[15px] font-normal font-['Inter']">광운대 선정 1위 맛집 ㅡ 하이레 인터뷰</div>
      </div>
    </div>
    </a></div>
          


  
        </div>
      </div>
    </div>
  );
};

export default MainLayout;