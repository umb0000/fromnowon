import { useState, EventHandler, ReactNode } from 'react';
import './output.css';

const Post2 = () => {
  return (
    <div className="relative w-screen h-[6500px] bg-[#fff] overflow-hidden">
      <div className="absolute top-0 w-screen flex flex-col items-center justify-start gap-[46px]">
        <img width="1139" src={process.env.PUBLIC_URL + "/post2_1.png"} />
        <div className="w-[716px] flex flex-col items-start justify-start gap-[43px]">
          <div className="self-stretch text-[15px] font-['Pretendard'] text-[#000]">2024-12-06</div>
          <div className="self-stretch text-[40px] font-['Pretendard'] font-bold text-[#000]">이탈리아 현지 생면의 맛을 찾아서</div>
          <div className="self-stretch text-[20px] font-['Pretendard'] font-light text-[#000]">공릉동의 작은 이탈리아, 페페그라노</div>
          <img width="716" src={process.env.PUBLIC_URL + "/post2_2.png"} />
          <div className="w-[702.50px] h-[1118px] flex-col justify-start items-start gap-[52px] inline-flex">
            <div className="self-stretch">
              <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: '400', fontFamily: 'Pretendard' }}>
                <br /> 공릉동의 작은 이탈리아, 
              </span>
              <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: '700', fontFamily: 'Pretendard' }}>
                ‘페페그라노(Pepegrano)’</span>
              <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: '400', fontFamily: 'Pretendard' }}>
                는 이탈리아 본토 스타일을 담아 치즈의 풍미가 진하고 소스가 꾸덕한 것이 매력인 레스토랑이다. 단 한 명의 쉐프가 모든 메뉴를 직접 조리하는 방식으로 운영되며, 예약을 받지 않아 디너타임에는 긴 웨이팅이 예상되는 편이다. 하지만 이는 섬세한 요리를 맛볼 수 있다는 기대를 높인다.<br />
                <br />페페그라노의 진가는 무엇보다 생면으로 만든 파스타에서 빛을 발한다. 탱탱한 식감은 풍부한 소스의 조화를 극대화하며, 한 입 한 입 새로운 느낌을 준다.
              </span>
            </div>
            <img width="1139" src={process.env.PUBLIC_URL + "/post2_6.png"} />
            <img width="1139" src={process.env.PUBLIC_URL + "/post2_7.png"} />
            <div className="self-stretch">
              <span style={{ color: 'black', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Pretendard' }}>
                페페그라노<br />
              </span>
              <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: '400', fontFamily: 'Pretendard' }}>
                <br />페페그라노의 시그니처 메뉴로, 크림을 배제한 정통 까르보나라의 깊은 맛을 담아냈다. <br />직접 염지한 판체타, 치즈, 그리고 계란 노른자로만 이루어진 꾸덕한 소스가 생면에 절묘하게 어우러지며, 이태리 본토의 미각을 그대로 재현한다. 미리 익숙한 크림 까르보나라와 비교해보며 음미하는 재미가 있다.<br /><br />
              </span>
            </div>
            <div className="self-stretch">
              <span style={{ color: 'black', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Pretendard' }}>
                크림뇨끼<br />
              </span>
              <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: '400', fontFamily: 'Pretendard' }}>
                <br />흔히 떠올리는 뇨끼의 쫀득한 감자 덩어리와는 달리, 페페그라노의 크림뇨끼는 부드럽고, <br />고급스러운 로마 스타일로 재해석되었다. 으깬 감자를 기본으로 만들어 부드럽지만, 포슬함, 꾸덕함, 고소함이 맛을 더해준다. 치즈의 농후한 맛과 은은한 트러플 향이 입안 가득 조화를 이뤄, 여러 메뉴를 시킨다면 꼭 맛보길 추천하는 메뉴이다.
              </span>
            </div>
            <img width="1139" src={process.env.PUBLIC_URL + "/post2_3.png"} />
            <img width="1139" src={process.env.PUBLIC_URL + "/post2_1.png"} />

            <div className="self-stretch">
              <span style={{ color: 'black', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Pretendard' }}>
                라자냐<br />
              </span>
              <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: '400', fontFamily: 'Pretendard' }}>
                <br />라자냐의 정석을 만끽하고 싶다면 이 메뉴를 놓치지 말아야한다. 라구 소스와 베샤멜 소스가 겹겹이 쌓인 생면 사이에 녹아들어 구워진 파스타이다. 베샤멜소스는 프랑스의 고추장과 같은 대중적인 크림소스로, 라쟈나를 만들 때 층층이 발라줘 특유의 맛을 전달한다. 생면의 쫄깃함과 더불어 치즈와 잘게 썰린 고기 알갱이는 한 입 베어 물 때마다 다양한 식감을 선사해, 클래식 이탈리아의 정취를 제대로 느낄 수 있다.
              </span>
            </div>
            <div className="self-stretch text-black text-xl font-medium font-['Pretendard']">
              이외에도 구운 야채의 채즘을 잘 가둬 신선함과 쫄깃한 식감이 돋보이는 ‘구운 야채 샐러드’, 리코타 치즈와 바질페스토의 풍미가 어우러지는 ‘바질페스토’도 꼭 한 번 경험해보길 추천하는 메뉴이다.
            </div>
            <img width="1139" src={process.env.PUBLIC_URL + "/post2_8.png"} />
            <div className="self-stretch text-black text-xl font-medium font-['Pretendard']">
              페페그라노는 단순히 맛있는 한 끼를 넘어, 기존의 파스타집에서 잘 접해보지 못한 새로운 미식을 선사한다. 그리고 그 감각은 또 찾고싶은 맛으로 기억될 것이다. 공릉동 한가운데서 이탈리아로의 작은 여행을 떠나고 싶다면, 이곳이 바로 그 여정을 완성시킬 장소이다.
            </div>
            <div className="text-[15px] font-['Pretendard'] font-medium text-[#414141] whitespace-nowrap">Editor. 니모, 커비, 쥬쥬<br/> </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Post2;
