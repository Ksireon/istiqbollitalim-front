import '../app/globals.scss'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useEffect } from 'react';

export default function Security() {
    useEffect(() => {
        const sliders = document.querySelectorAll('.slider-container');

        sliders.forEach((slider) => {
            const videosContainer = slider.querySelector('.videos-container');
            const leftArrow = slider.querySelector('.arrowleft');
            const rightArrow = slider.querySelector('.arrowright');

            // Scroll to next/previous video
            const scrollAmount = videosContainer.clientWidth / 3;

            leftArrow.addEventListener('click', () => {
                videosContainer.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });

            rightArrow.addEventListener('click', () => {
                videosContainer.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });

            // Touch events for mobile swipe
            let startX;
            let scrollLeft;

            videosContainer.addEventListener('touchstart', (e) => {
                startX = e.touches[0].pageX - videosContainer.offsetLeft;
                scrollLeft = videosContainer.scrollLeft;
            });

            videosContainer.addEventListener('touchmove', (e) => {
                if (!startX) return;
                const x = e.touches[0].pageX - videosContainer.offsetLeft;
                const walk = (x - startX);
                videosContainer.scrollLeft = scrollLeft - walk;
            });

            videosContainer.addEventListener('touchend', () => {
                startX = null;
            });
        });
    }, []);

    return (
        <div>
            <Header />
            <div className="infrastructere-and-security">
                <h1>Инфраструктура и безопасность</h1>
                <p>
                    Школа расположена в современном 7-этажном здании с 55 кабинетами, которые оборудованы новейшими технологиями для комфортного обучения. <br /> <br />

                    Мы предоставляем специализированные помещения для творчества, спорта и научных экспериментов, создавая идеальные условия для всестороннего развития детей. <br /> <br />

                    В школе внедрены системы видеонаблюдения и контроля доступа, что гарантирует безопасность учащихся.

                    Родители могут быть уверены в надежности и безопасности нашего учебного заведения,  а ребенок может сосредоточиться на учебе и развитии.

                </p>
            </div>
            <div className="container-infrastructure">
                <div className="blocks-container">
                    <div className="block">
                        <h2>Турникетная система</h2>
                        <div className="slider-container">
                            <div className="arrowleft"></div>
                            <div className="arrowright"></div>
                            <div className="videos-container">
                                <div className="video"></div>
                                <div className="video"></div>
                                <div className="video"></div>
                            </div>
                        </div>
                    </div>

                    <div className="block">
                        <h2>Охрана</h2>
                        <div className="slider-container">
                            <div className="arrowleft"></div>
                            <div className="arrowright"></div>
                            <div className="videos-container">
                                <div className="video"></div>
                                <div className="video"></div>
                                <div className="video"></div>
                                <div className="video"></div>
                            </div>
                        </div>
                    </div>

                    <div className="block">
                        <h2>Видеонаблюдение </h2>
                        <div className="slider-container">
                            <div className="arrowleft"></div>
                            <div className="arrowright"></div>
                            <div className="videos-container">
                                <div className="video"></div>
                                <div className="video"></div>
                                <div className="video"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
