import '../app/globals.scss'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

// Array of image paths from the imgs folder
import { useState, useEffect } from 'react';

// Use relative imports for local images
const blogImages = [
    require('../imgs/IMG_6926.JPG'),
    require('../imgs/IMG_6946.JPG'),
    require('../imgs/IMG_6963.JPG'),
    require('../imgs/photo_2025-01-30_00-58-13.jpg'),
    require('../imgs/photo_2025-01-30_00-57-28.jpg'),
    require('../imgs/photo_2025-01-30_00-57-36.jpg'),
    require('../imgs/photo_2025-01-30_00-57-54.jpg'),
    require('../imgs/photo_2025-01-30_00-57-43.jpg'),
    require('../imgs/photo_2025-01-30_00-57-45.jpg'),
    require('../imgs/photo_2025-01-30_00-57-49.jpg'),
    require('../imgs/photo_2025-01-30_00-57-51.jpg'),
    require('../imgs/photo_2025-01-30_00-58-16.jpg')
];

export default function Blog() {
    return (
        <div>
            <Header />
            <div className="school-blog">
                <h1>Школьный блог</h1>
                <div className="container-blog">
                    {blogImages.slice(0, 4).map((src, index) => (
                        <div className="div" key={`blog1-${index}`}>
                            <Image 
                                src={src.default.src} 
                                alt={`Blog image ${index + 1}`} 
                                fill 
                                sizes="(max-width: 768px) 100vw, 380px"
                                priority
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                    ))}
                </div>
                <div className="container-blog2">
                    {blogImages.slice(4, 8).map((src, index) => (
                        <div className="div" key={`blog2-${index}`}>
                            <Image 
                                src={src.default.src} 
                                alt={`Blog image ${index + 5}`} 
                                fill 
                                sizes="(max-width: 768px) 100vw, 380px"
                                priority
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                    ))}
                </div>
                <div className="container-blog3">
                    {blogImages.slice(8, 12).map((src, index) => (
                        <div className="div" key={`blog3-${index}`}>
                            <Image 
                                src={src.default.src} 
                                alt={`Blog image ${index + 9}`} 
                                fill 
                                sizes="(max-width: 768px) 100vw, 380px"
                                priority
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="raspisanie-blog">
                <h1>Расписание мероприятий</h1>
                <div className="november">
                    <div className="left">
                        <h1>Ноябрь</h1>
                        <br />
                        <p>
                            1. Турнир по шахматам среди частных школ <br />
                            2. Веселые старты. Родители + дети <br />
                            3. Принимаем участие в 17 целях в области устойчивого развития <br />
                            Происходит открытый урок где ученикам рассказывают что это за цели, <br />
                            для чего они нужны и т.д <br />
                            Каждый месяц дети будут готовить свои проекты со своим видением как <br />
                            например: Решить проблему нищеты, или ликвидация голода <br />
                            Цель: внимание учеников к проблемам современности, воспитание <br />
                            детей, развить мышление детей, научить выражать свои мысли и <br />
                            отстаивать свое мнение.
                        </p>
                    </div>

                    <div className="right">
                        <p>
                            01.11.2024 09:00 <br />
                            01.11.2024 09:00 <br />
                            01.11.2024 09:00 <br />
                        </p>
                    </div>

                </div>
                <div className="december">
                    <div className="left">
                        <h1>Декабрь</h1>
                        <br />
                        <p>
                            1. Новый год <br />
                            2. Олимпиада по английскому языку внутри школы <br />
                            3. Специальный гость <br />
                            Спикер <br />
                            4. Проектные дни: <br />
                            Ученики работают группами над проектом, презентуют его, выражают <br />
                            свое мнение и виденье данной ситуации <br />
                            Тема: Хорошее здоровье и благополучие
                        </p>
                    </div>
                    <div className="right">
                        <p>
                            01.11.2024 09:00 <br />
                            01.11.2024 09:00 <br />
                            01.11.2024 09:00 <br /> <br />
                            01.11.2024 09:00 <br />
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
