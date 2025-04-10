import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Zapros1 from "./zapros1";
import Zapros2 from "./zapros2";
import Zapros3 from "./zapros3";
import Zapros4 from "./zapros4";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChildRewiev from "./otzivi_detey"
import ParentsRewiev from './otzivi_roditeley';
import VipuskRewiev from './otzivi_vipusknikov';


gsap.registerPlugin(ScrollTrigger);



export default function MainPage() {

  const [hasError, setHasError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const pedSostavRef = useRef(null);
  const infrastructureRef = useRef(null);
  const [expandedProgram, setExpandedProgram] = useState(null); // Track which program is expanded

  useEffect(() => {
    try {
    } catch (error) {
      setHasError(true);
      console.error(error);
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      scrollPedSostav('right');
    }
    if (isRightSwipe) {
      scrollPedSostav('left');
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const scrollPedSostav = (direction) => {
    const container = pedSostavRef.current?.querySelector('.flexbox');
    if (!container) return;

    const scrollAmount = direction === 'left' ? -320 : 320;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollInfrastructure = (direction) => {
    const container = infrastructureRef.current?.querySelector('.infrastructurevids_grid');
    if (!container) return;

    const scrollAmount = direction === 'left' ? -320 : 320;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleInfrastructureTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleInfrastructureTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleInfrastructureTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      scrollInfrastructure('right');
    }
    if (isRightSwipe) {
      scrollInfrastructure('left');
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (hasError) {
    return <div>Произошла ошибка при загрузке компонента.</div>; // Показываем сообщение об ошибке
  }



  /////////////////////////////////////////////////////////
  const mainRef = useRef(null); // Для анимации main
  const leftRef = useRef(null); // Для анимации left
  const rightRef = useRef(null); // Для анимации right
  const sectionsRef = useRef([]);


  useEffect(() => {
    // Анимация для блока main (срабатывает сразу)
    gsap.fromTo(
      mainRef.current, // Триггерим на main
      { opacity: 0, scale: 1 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    // Анимация для блока left (срабатывает сразу)
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.5, // Задержка перед анимацией
        ease: "power3.out",
      }
    );

    // Анимация для блока right (срабатывает сразу)
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      const left = section.querySelector(".left");
      const right = section.querySelector(".right");


      gsap.fromTo(
        left,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );


      gsap.fromTo(
        right,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);


  return (
    <div className="mainPage">
      <Header />
      <main ref={mainRef}>
        <div className="blueblackfon"></div>
        <div className="left" ref={leftRef}><h1>Istiqbolli ta'lim - школа, где качество образования - не просто звук!</h1></div>
        <div className="red"></div>
        <div className="right" ref={rightRef}>
          <div className="form">
            <Zapros1 />
          </div>
        </div>
      </main>


      <div className="programms">
        {expandedProgram === 'educational' ? (
          <div className="expanded-grid">
            <div className="close-btn" onClick={() => setExpandedProgram(null)}>✕</div>
            <h1>Образовательные программы</h1>
            <div className="expanded-content">
              <p>
                Детский сад,
                Младшая школа,
                Средняя школа,
                Старшая школа,
                Подготовка к школе

              </p>
            </div>
          </div>
        ) : expandedProgram === 'methodology' ? (
          <div className="expanded-grid">
            <div className="close-btn" onClick={() => setExpandedProgram(null)}>✕</div>
            <h1>Методология преподавания</h1>
            <div className="expanded-content">
              <p>
                Наши методы преподавания и индивидуальный подход делают обучение понятным и увлекательным для каждого ребенка. Все знания и навыки, полученные за годы обучения, помогают им успешно применять их в жизни и строить свое будущее

              </p>
            </div>
          </div>
        ) : expandedProgram === 'clubs' ? (
          <div className="expanded-grid">
            <div className="close-btn" onClick={() => setExpandedProgram(null)}>✕</div>
            <h1>Разнообразные кружки</h1>
            <div className="expanded-content">
              <p>
                Карате, танцы, шахматы…- чтобы дети помимо учебы занимались творчеством,развивали свои таланты и становились всесторонне развитыми личностями
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="grids">
              <h1>Образовательные <br />
                программы</h1> <br />
              <p>Для родителей это возможность <br />
                почуствовать атмосферу <br />
                урока, а также посмотреть <br />
                на ребенка в роли ученика.</p> <br />

              <button onClick={() => setExpandedProgram('educational')}>Подробнее</button>
            </div>
            <div className="grids">
              <h1>Методология <br />
                преподавания</h1> <br />
              <p>Для родителей это возможность <br />
                почуствовать атмосферу <br />
                урока, а также посмотреть <br />
                на ребенка в роли ученика.</p> <br />

              <button onClick={() => setExpandedProgram('methodology')}>Подробнее</button>
            </div>
            <div className="grids">
              <h1>Разнообразные <br />
                кружки</h1> <br />
              <p>Для родителей это возможность <br />
                почуствовать атмосферу <br />
                урока, а также посмотреть <br />
                на ребенка в роли ученика.</p> <br />

              <button onClick={() => setExpandedProgram('clubs')}>Подробнее</button>
            </div>
          </>
        )}
      </div>

      <div className="adventages" >
        <h1>Наши преимущества</h1>
        <div className="container">
          <div className="grids">
            <h2>Качество образования</h2>
            <div className="icon"></div>
            <p>Самый большой и современный кампус, а также все необходимые условия. Оборудованные классы и залы, сбалансированное и полезное питание.</p>
          </div>
          <div className="grids">
            <h2>Индивидуальный подход</h2>
            <div className="icon2"></div>
            <p>Углубленное изучение математики и языков по авторским программам. Подготовка к IELTS с четвертого класса. Различные кружки, такие как ментальная арифметика, мнемоника, <br /> карате, танцы и многое другое.</p>
          </div>
          <div className="grids">
            <h2>Безопасность</h2>
            <div className="icon3"></div>
            <p>Углубленные программы, современные методики, комплексный подход, а также повышение квалификации каждый год.
            </p>
          </div>
        </div>
      </div>

      <ParentsRewiev />


      <div className="zanyatiya" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="left">
          <h1>Как проходят занятия в нашей школе</h1> <br />
          <p>Занятия в нашей школе проходят в атмосфере, где мы уделяем внимание не только учебному процессу, но и здоровому питанию, отдыху и физическому развитию. <br />  <br />

Школа работает с 8:30 до 17:30, что позволяет организовать эффективное обучение и отдых для детей. <br /> Завтраки для младших классов проходят в 9:15, <br /> для старших — в 10:15. Обед для младших начинается в 12:20, для старших — в 13:10. Полдник для младших — в 15:20, для старших — в 15:40. Мы обеспечиваем сбалансированное питание, соответствующее принципам здорового образа жизни.
</p>
        </div>
        <div className="right"></div>
      </div>

      <div className="metodiki" ref={(el) => (sectionsRef.current[1] = el)}>
        <div className="right"></div>
        <div className="left">
          <h1>Методики обучения</h1> <br />
          <p>Мы используем современные методики обучения, <br />
            которые сочетают в себе лучшие траиции <br />
            образования и инновационные подходы. Наши педагоги <br />
            активно применяют методики проектного обучения, где <br />
            дети работают над реальными задачами и проектами, <br />
            развивая не только академические знания, но и навыки <br />
            командной работы, критического мышления и <br />
            самостоятельности. В школе также внедрены элементы <br />
            гибкого расписания и индивидуального подхода к <br />
            каждому ученику, что позволяет учитывать уникальные <br />
            особенности и потребности каждого ребенка.</p>
        </div>
      </div>



      <div className="otkr_uroki" ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="left">
          <h1>Открытые урки</h1> <br />
          <p>Наши ученики получают не только фундаментальные <br />
            знания по основным предметам, таким как математика, <br />
            язык, наука и искусств, но и развивают важные <br />
            жизненные навыки. Мы уделяем большое внимание <br />
            развитию коммуникативных способностей, умению <br />
            решать проблемы, работать в команде и <br />
            самостоятельно принимать решения. Помимо этого, <br />
            дети учатся критически мыслить, исследовать мир <br />
            вокруг и находить нестандартные решения. В <br />
            результате обучения в нашей школе, дети выходят <br />
            подготовленными к дальнейшему обучению и жизни в <br />
            современном мире, уверенными в своих силах и <br />
            возможностях.</p>
        </div>
        <div className="right"></div>
      </div>


      {/* <div className="raspisanie">
          <h1>Расписание открытых уроков</h1>
          <div className="container">
            <div className="blocks ximiya">
              <div className="img"></div> <br />
              <h1>Химия</h1>
              <div className="bottom">
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
              </div>
            </div>
            <div className="blocks geographia">
              <div className="img2"></div> <br />
              <h1>География</h1>
              <div className="bottom">
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
              </div>
            </div>
            <div className="blocks geometria">
              <div className="img3"></div> <br />
              <h1>Геометрия</h1>
              <div className="bottom">
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
                <p>Тайны кислот и оснований: индикаторы <br />
                  в действии (6 класс)...................31.08.24/09:00</p>
              </div>
            </div>
          </div>
        </div> */}

      <div className="formblock2">
        <div className="center">
          <h1>Узнать подробнее о школе</h1>
          <Zapros2 />
        </div>
      </div>


      <div className="infrastructure">
        <h1 className="h1">Инфраструктура и безопасность</h1>
        <div className="container" ref={infrastructureRef}>
          <div className="arrowleft" onClick={() => scrollInfrastructure('left')}></div>
          <div className="infrastructurevids_grid"
            onTouchStart={handleInfrastructureTouchStart}
            onTouchMove={handleInfrastructureTouchMove}
            onTouchEnd={handleInfrastructureTouchEnd}
          >
            <div className="block">
              <div className="image"></div>
              <h3>Турникетная система</h3>
              {/* <p>Оборудованные всем необходимым для комфортного обучения</p> */}
            </div>
            <div className="block">
              <div className="image"></div>
              <h3>Охрана</h3>
              {/* <p>Просторный зал с современным спортивным инвентарем</p> */}
            </div>
            <div className="block">
              <div className="image"></div>
              <h3>Видеонаблюдение </h3>
              {/* <p>Уютная столовая с качественным питанием</p> */}
            </div>
          </div>
          <div className="arrowright" onClick={() => scrollInfrastructure('right')}></div>
        </div>


        {/* <div className="text">
          <p>В нашей школе безопасность учеников является приоритетом. Мы принимаем все необходимые меры для создания <br />
            комфортной и защищенной образовательной среды. В школе действует современная система видеонаблюдения, <br />
            которая охватывает все ключевые зоны, включая входы, коридоры, классы и прилегающую территорию. Камеры <br />
            работают круглосуточно, что позволяет оперативно реагировать на любые непредвиденные ситуации. <br />
            Кроме того, на территории школы круглосуточно дежурит профессиональная охрана, сотрудники которой проходят <br />
            регулярные тренировки и инструктажи. Для обеспечения максимальной безопасности доступ на территорию школы <br />
            строго контролируется: все посетители проходят обязательную регистрацию и идентификацию на входе. <br />
            <br />

            Мы также уделяем особое внимание внутреннему распорядку и дисциплине. Учащиеся и сотрудники школы <br />
            регулярно участвуют в инструктажах по вопросам безопасности, включая правила эвакуации и поведения в <br />
            чрезвычайных ситуациях. <br /> <br />



            Все эти меры направлены на то, чтобы каждый ученик чувствовал себя защищенным и мог сосредоточиться на учебе <br />
            и развитии в комфортных условиях.
          </p>
        </div> */}
      </div>
      <div className="formblock3">
        <div className="center">
          <Zapros3 />
        </div>
      </div>
      <ChildRewiev />
      <VipuskRewiev />
      <div className="formblock4">
        <div className="center">
          <h1>Вы можете ставить свой отзыв тут</h1>
          <Zapros4 />
        </div>
      </div>
      <Footer />
    </div>
  );
}
