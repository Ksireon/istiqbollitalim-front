import '../app/globals.scss'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';




export default function About() {
    return (
        <div>
            <Header />
            <div className="school-blog">
                <h1>Школьный блог</h1>
                <div className="container-blog">
                    <div className="div"></div>
                    <div className="div"></div>
                    <div className="div"></div>
                    <div className="div"></div>
                </div>
                <div className="container-blog2">
                    <div className="div"></div>
                    <div className="div"></div>
                    <div className="div"></div>
                    <div className="div"></div>
                </div>
                <div className="container-blog3">
                    <div className="div"></div>
                    <div className="div"></div>
                    <div className="div"></div>
                    <div className="div"></div>
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
