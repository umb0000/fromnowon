import React, { useRef, useEffect, useState } from "react";

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

  // MainLayout 진입/이탈 시 body 스크롤 제어
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

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    <h2 className="text-white text-2xl font-bold text-center">
      여기에 원하는 텍스트
    </h2>
  </div>
        
      </div>

      {/* 오른쪽 영역 */}
      <div
        ref={rightRef}
        className="w-1/2 bg-gray-200 p-6 overflow-y-auto h-full"
      >
        <div className="h-[200vh] bg-gradient-to-b from-white to-gray-300">
          <h2 className="text-xl font-bold mb-4">👉 오른쪽 스크롤</h2>
          <p>중간에 있는 동안에는 전체 스크롤이 막혀요.</p>
          <p className="mt-[160vh] text-right text-sm">⬇️ 맨 아래 도달</p>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;