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
import { TextPlugin } from "gsap/TextPlugin";
import ChildRewiev from "./otzivi_detey"
import ParentsRewiev from './otzivi_roditeley';
import VipuskRewiev from './otzivi_vipusknikov';


gsap.registerPlugin(ScrollTrigger, TextPlugin);



export default function MainPage() {

  const [hasError, setHasError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const pedSostavRef = useRef(null);
  const infrastructureRef = useRef(null);
  const [expandedProgram, setExpandedProgram] = useState(null); // Track which program is expanded

  // Animation refs
  const programsRef = useRef(null);
  const advantagesRef = useRef(null);
  const infrastructureTextRef = useRef(null);
  const formBlocksRef = useRef([]);
  const titleRef = useRef(null);
  const programCardsRef = useRef([]);
  const advantageCardsRef = useRef([]);

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
    // Создаем timeline для главной секции
    const mainTimeline = gsap.timeline();

    // Анимация фона с эффектом волны
    mainTimeline.fromTo(
      mainRef.current?.querySelector('.blueblackfon'),
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    )
      // Анимация заголовка с печатающим эффектом
      .fromTo(
        leftRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      // Анимация формы с пружинящим эффектом
      .fromTo(
        rightRef.current,
        { opacity: 0, scale: 0.8, rotation: 5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3"
      );

    // Добавляем плавающую анимацию для формы
    gsap.to(rightRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });
  }, []);

  useEffect(() => {
    // Анимация для секций с left/right блоками
    sectionsRef.current.forEach((section, index) => {
      const left = section.querySelector(".left");
      const right = section.querySelector(".right");

      if (left) {
        gsap.fromTo(
          left,
          { opacity: 0, x: -80, rotationY: -15 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (right) {
        gsap.fromTo(
          right,
          { opacity: 0, x: 80, rotationY: 15 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Анимация карточек программ
    if (programCardsRef.current.length > 0) {
      programCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
              scale: 0.9,
              rotationX: -15
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 0.8,
              delay: index * 0.15,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Добавляем hover эффект
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              duration: 0.3,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });
    }

    // Анимация карточек преимуществ
    if (advantageCardsRef.current.length > 0) {
      advantageCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
              rotationY: 20
            },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              duration: 1,
              delay: index * 0.2,
              ease: "elastic.out(1, 0.5)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Анимация иконок при появлении
          const icon = card.querySelector('.icon, .icon2, .icon3');
          if (icon) {
            gsap.fromTo(
              icon,
              { scale: 0, rotation: -180 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.8,
                delay: index * 0.2 + 0.3,
                ease: "back.out(2)",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        }
      });
    }

    // Анимация заголовков секций
    const sectionTitles = document.querySelectorAll('.programms h1, .adventages h1, .infrastructure .h1');
    sectionTitles.forEach((title, index) => {
      gsap.fromTo(
        title,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Анимация форм-блоков
    const formBlocks = document.querySelectorAll('.formblock2, .formblock3, .formblock4');
    formBlocks.forEach((block, index) => {
      gsap.fromTo(
        block,
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Анимация текста инфраструктуры
    if (infrastructureTextRef.current) {
      gsap.fromTo(
        infrastructureTextRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infrastructureTextRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
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


      <div className="programms" ref={programsRef}>
        <h1>Образовательные программы</h1>
        <div className="programs-grid">
          <div className="program-card" ref={(el) => (programCardsRef.current[0] = el)}>
            <h2>Детский сад</h2>
            <br />
            <ul>
              <li>- Прием от 3-х лет</li>
              <li>- 6 дней в неделю</li>
              <li>- 4-х разовое питание</li>
              <li>- Подготовка к школе</li>
              <li>- Изучение английского языка</li>
              <li>- Работа с логопедом и психологом</li>
              <li>- Разнообразные кружки</li>
            </ul>
            {/* <button className="details-btn">Подробнее</button> */}
          </div>
          <div className="program-card" ref={(el) => (programCardsRef.current[1] = el)}>
            <h2>Подготовительные группы</h2>
            <br />
            <ul>
              <li>- Прием с 6-ти лет</li>
              <li>- 6 дней в неделю</li>
              <li>- Умение складывать слоги в слова</li>
              <li>- Навыки счёта до 100</li>
              <li>- Каллиграфическая грамотность</li>
              <li>- Расширенный кругозор</li>
              <li>- Основы дисциплины</li>
              <li>- Легкий и уверенный старт к школе</li>
            </ul>
            {/* <button className="details-btn">Подробнее</button> */}
          </div>
          <div className="program-card" ref={(el) => (programCardsRef.current[2] = el)}>
            <h2>Начальная школа</h2>
            <br />
            <ul>
              <li>- Прием с 7-ми лет</li>
              <li>- 6 дней в неделю</li>
              <li>- Индивидуальный подход к каждому ученику</li>
              <li>- Подготовка к IELTS с 4-ого класса</li>
              <li>- Дополнительные кружки</li>
            </ul>
            {/* <button className="details-btn">Подробнее</button> */}
          </div>
          <div className="program-card" ref={(el) => (programCardsRef.current[3] = el)}>
            <h2>Средняя школа</h2>
            <br />
            <ul>
              <li>Прием с 12-ти лет</li>
              <li>6 дней в неделю</li>
              <li>Выпускник нашей школы:</li>
              <li>- Легко адаптируется и применяет знания на практике</li>
              <li>- Критически мыслит и решает реальные проблемы</li>
              <li>- Умеет работать с информацией и делать выводы</li>
              <li>- Является коммуникабельным и работает в команде</li>
              <li>- Развивает нравственность, интеллект и культуру</li>
            </ul>
            {/* <button className="details-btn">Подробнее</button> */}
          </div>
          <div className="program-card" ref={(el) => (programCardsRef.current[4] = el)}>
            <h2>Летний лагерь</h2>
            <br />
            <ul>
              <li>- Прием от 7 до 15 лет</li>
              <li>- Продолжительность один месяц</li>
              <li>- Хобби-классы</li>
              <li>- Экскурсии</li>
              <li>- Квесты</li>
              <li>- Игры</li>
              <li>- Мастер-классы и конкурсы</li>
              <li>- Разностороннее развитие: физическое, творческое, интеллектуальное, духовное, патриотическое, социальное.</li>
            </ul>
            {/* <button className="details-btn">Подробнее</button> */}
          </div>
        </div>
      </div>

      <div className="adventages" ref={advantagesRef}>
        <h1>Наши преимущества</h1>
        <div className="container">
          <div className="grids" ref={(el) => (advantageCardsRef.current[0] = el)}>
            <h2>Качество образования</h2>
            <div className="icon"></div>
            <p>Наша школа — это больше, чем просто учеба. Мы даем детям сильное образование, которое становится прочной основой для успешного будущего.</p>
          </div>
          <div className="grids" ref={(el) => (advantageCardsRef.current[1] = el)}>
            <h2>Индивидуальный подход</h2>
            <div className="icon2"></div>
            <p>У каждого ребёнка свой темп, интересы и потенциал — и мы это учитываем. В нашей школе индивидуальный подход — не формальность, а реальный путь к раскрытию сильных сторон каждого ученика.
            </p>
          </div>
          <div className="grids" ref={(el) => (advantageCardsRef.current[2] = el)}>
            <h2>Безопасность</h2>
            <div className="icon3"></div>
            <p>У нас безопасность — это не просто камеры и охрана, а продуманная система заботы о каждом ребёнке. Родители могут быть уверены: их дети в надёжных руках.
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
          <p>В нашей школе обучение строится по современным методикам с учётом того, что большинство детей не являются носителями русского языка.
            Мы используем игровые формы, дидактический материал и сингапурские подходы, делая каждый урок интересным и понятным. Обучение ведётся по Государственным образовательным стандартам и дополнительным программам, включая Cambridge Innovation Center и подготовку к IELTS с 4 класса. Углубленно изучаются математика (по системе Петерсон), русский, узбекский и английский языки. Наши учителя — это профессионалы, прошедшие повышение квалификации в ведущих вузах, и умеющие выстраивать живой контакт с детьми, где в центре урока — сам ученик.
          </p>
        </div>
      </div>



      <div className="otkr_uroki" ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="left">
          <h1>Открытые уроки</h1> <br />
          <p>В нашей школе помимо обычных занятий мы регулярно проводим <br /> открытые уроки в формате представлений, сценок и творческих <br /> выступлений. Такой подход делает обучение ярким <br /> и запоминающимся. <br /> <br />
            Дети не просто слушают материал — они проживают его. Это помогает лучше усваивать знания и развивать уверенность в себе. Родители могут лично увидеть, как раскрываются таланты их ребёнка.
          </p>
        </div>
        <div className="right"></div>
      </div>




      <div className="formblock2" ref={(el) => (formBlocksRef.current[0] = el)}>
        <div className="center">
          <h1>Узнать подробнее о школе</h1>
          <Zapros2 />
        </div>
      </div>


      <div className="infrastructure">
        <h1 className="h1" ref={titleRef}>Инфраструктура и безопасность</h1>



        <div className="text" ref={infrastructureTextRef}>
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
        </div>
      </div>

      <div className="formblock3" ref={(el) => (formBlocksRef.current[1] = el)}>
        <div className="center">
          <Zapros3 />
        </div>
      </div>
      <ChildRewiev />
      <VipuskRewiev />
      <div className="formblock4" ref={(el) => (formBlocksRef.current[2] = el)}>
        <div className="center">
          <h1>Вы можете ставить свой отзыв тут</h1>
          <Zapros4 />
        </div>
      </div>
      <Footer />
    </div>
  );
}
