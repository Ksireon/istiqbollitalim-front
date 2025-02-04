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
                    В нашей школе безопасность учеников является приоритетом. Мы принимаем все необходимые меры для <br />
                    создания комфортной и защищенной образовательной среды. В школе действует современная система <br />
                    видеонаблюдения, которая охватывает все ключевые зоны, включая входы, коридоры, классы и прилегающую <br />
                    территорию. Камеры работают круглосуточно, что позволяет оперативно реагировать на любые <br />
                    непредвиденные ситуации. <br />
                    Кроме того, на территории школы круглосуточно дежурит профессиональная охрана, сотрудники которой <br />
                    проходят регулярные тренировки и инструктажи. Для обеспечения максимальной безопасности доступ <br />
                    на территорию школы строго контролируется: все посетители проходят обязательную регистрацию <br />
                    и идентификацию на входе.
                </p>
            </div>
            <div className="container-infrastructure">
                <div className="blocks-container">
                    <div className="block">
                        <h2>Безопасность</h2>
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
                        <h2>Инфраструктура</h2>
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
                        <h2>Территория</h2>
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
                        <h2>Питание</h2>
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
