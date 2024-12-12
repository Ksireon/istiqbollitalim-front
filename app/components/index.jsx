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



gsap.registerPlugin(ScrollTrigger);



export default function MainPage() {

  const [hasError, setHasError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
    if (touchStart - touchEnd > 75) { // Свайп влево
      nextSlide();
    }

    if (touchStart - touchEnd < -75) { // Свайп вправо
      prevSlide();
    }
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


  const scrollPedSostav = (direction) => {
    const container = document.querySelector('.ped_sostav .flexbox');
    const scrollAmount = direction === 'left' ? -520 : 520; // Ширина карточки
    
    if (container) {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
  };


  return (
      <div className="mainPage">
        <Header />
        <main ref={mainRef}>
          <div className="blueblackfon"></div>
          <div className="left" ref={leftRef}><h1>Ваша ракета к успеху - <br /> это образование</h1></div>
          <div className="red"></div>
          <div className="right" ref={rightRef}>
            <div className="form">
              <Zapros1 />
            </div>
          </div>
        </main>


        <div className="programms">
          <div className="grids">
            <h1>Образовательные <br />
              программы</h1> <br />
            <p>Для родителей это возможность <br />
              почуствовать атмосферу <br />
              урока, а также посмотреть <br />
              на ребенка в роли ученика.</p> <br />

            <button>Подробнее</button>
          </div>
          <div className="grids">
            <h1>Методология <br />
              преподавания</h1> <br />
            <p>Для родителей это возможность <br />
              почуствовать атмосферу <br />
              урока, а также посмотреть <br />
              на ребенка в роли ученика.</p> <br />

            <button>Подробнее</button>
          </div>
          <div className="grids">
            <h1>Разнообразные <br />
              кружки</h1> <br />
            <p>Для родителей это возможность <br />
              почуствовать атмосферу <br />
              урока, а также посмотреть <br />
              на ребенка в роли ученика.</p> <br />

            <button>Подробнее</button>
          </div>
        </div>

        <div className="adventages" >
          <h1>Наши преимущества</h1>
          <div className="container">
            <div className="grids">
              <h2>Качество образования</h2>
              <div className="icon"></div>
              <p>Наша школа не только учит, но <br /> и воспитывает, помогая детям <br /> становиться ответственными и <br /> самостоятельными.</p>
            </div>
            <div className="grids">
              <h2>Индивидуальный подход</h2>
              <div className="icon2"></div>
              <p>Мы верим, что каждый ребенок <br /> уникален, и стремимся <br /> учитывать его особенности в <br /> процессе обучения.</p>
            </div>
            <div className="grids">
              <h2>Безопасность</h2>
              <div className="icon3"></div>
              <p>Мы создаем условия, в которых <br /> ученики чувствуют себя <br /> комфортно и уверенно.</p>
            </div>
          </div>
        </div>

        <div className="otzivi">
          <h1>Отзывы родителей</h1>
          <div className="gridsvid">
            <div className="vid"></div>
            <div className="vid"></div>
            <div className="vid"></div>
          </div>
        </div>


        <div className="zanyatiya" ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="left">
            <h1>Как проходят занятия в нашей школе</h1> <br />
            <p>В нашей школе каждый учебный день наполнен <br />
              разнообразными занятиями, которые направлены на <br />
              всестороннее развитие. Мы стремимся создать среду, <br />
              где каждый ученик чувствует себя <br />
              комфортно и уверенно. Занятия проходят <br />
              в увлекательной и интерактивной форме, <br />
              с использованием современных технологий <br />
              и творческих подходов. В начале каждого урока мы <br />
              проводим небольшую разминку <br />
              для активизации внимания, а затем переходим к <br />
              основной теме, которую рассматриваем через примеры <br />
              из жизни, игры и практические задания.</p>
          </div>
          <div className="right"></div>
        </div>

        <div className="metodiki" ref={(el) => (sectionsRef.current[1] = el)}>
          <div className="right"></div>
          <div className="left">
            <h1>Методики обуч��ния</h1> <br />
            <p>Мы используем современные методики обучения, <br />
              которые сочетают в себе лучшие традиции <br />
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
            <h1>Открытые ур��ки</h1> <br />
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


        <div className="raspisanie">
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
                <p>Тайны кислот и о��нований: индикаторы <br />
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
        </div>

        <div className="formblock2">
          <div className="center">
            <h1>Вы можете записаться на открытый урок</h1>
            <Zapros2 />
          </div>
        </div>


        <div className="ped_sostav">
          <div className="arrowleft" onClick={() => scrollPedSostav('left')}></div>
          <h1 className="h1">Педагогический состав</h1>
          <div className="flexbox">

            <div className="div">
              <div className="top"></div>
              <div className="bottom">
                <h1>Анна Александровна <br />
                  Иванова</h1>
                <h2>Учитель математики</h2>
                <br /> <p>
                  Опытный и вдохновляющий педагог, который <br /> работает в нашей школе [количество лет] лет... <br />
                  <br />
                  <a href="">читать далее</a>
                </p>
              </div>
            </div>
            <div className="div">
              <div className="top"></div>
              <div className="bottom">
                <h1>Анна Александровна <br />
                  Иванова</h1>
                <h2>Учитель математики</h2>
                <br /> <p>
                  Опытный и вдохновляющий педагог, который <br /> работает в нашей школе [количество лет] лет... <br />
                  <br />
                  <a href="">читать далее</a>
                </p>
              </div>
            </div>
            <div className="div">
              <div className="top"></div>
              <div className="bottom">
                <h1>Анна Александровна <br />
                  Иванова</h1>
                <h2>Учитель математики</h2>
                <br /> <p>
                  Оптный и вдохновляющий педагог, который <br /> работает в нашей школе [количество лет] лет... <br />
                  <br />
                  <a href="">читать далее</a>
                </p>
              </div>
            </div>
          </div>
          <div className="arrowright" onClick={() => scrollPedSostav('right')}></div>
        </div>

        <div className="infrastructure">
          <h1 className="h1">Инфраструктура и безопасность</h1>
          <div className="arrowleft"></div>
          <div className="flexbox">

            <div className="div">
              <div className="top"></div>

            </div>
            <div className="div">
              <div className="top"></div>

            </div>

            <div className="div">
              <div className="top"></div>

            </div>
            <div className="div">
              <div className="top"></div>

            </div>


          </div>
          <div className="arrowright"></div>


          <div className="text">
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
        <div className="formblock3">
          <div className="center">
            <Zapros3 />
          </div>
        </div>
        <div className="otzivi_detey">
          <h1>Отзывы учеников</h1>
          <div className="gridsvid">
            <div className="vid"></div>
            <div className="vid"></div>
            <div className="vid"></div>
          </div>
        </div>
        <div className="istorii_uspexa">
          <h1>Истории успеха</h1>
          <div className="flexbox">
            <div className="arrowleft"></div>
            <div className="dev"></div>
            <div className="dev"></div>
            <div className="dev"></div>
            <div className="dev"></div>
            <div className="arrowright"></div>
          </div>
        </div>
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
