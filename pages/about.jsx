import '../app/globals.scss'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function About() {
    return (
        <div className="about-page">
            <Header />
            <div className="container-about">
                <div className="top">
                    <h1>О нас</h1>
                    <p>
                        Наша школа — это образовательное пространство, где каждый ученик раскрывает свой потенциал
                        и стремится к новым знаниям. Мы создаем атмосферу, которая сочетает высокие академические стандарты
                        с индивидуальным подходом к каждому ребенку.
                        В основе нашего подхода — развитие не только интеллектуальных способностей, но и творческого мышления,
                        эмоционального интеллекта и социальных навыков. Мы гордимся нашими традициями, инновационными
                        методами обучения и современной инфраструктурой, которая обеспечивает комфортное и безопасное
                        образовательное пространство.
                    </p>
                </div>
                <div className="bottom">
                    <div className="istorii_uspexa">
                        <h1 className='h1white'>Истории успеха</h1>
                        <div className="flexbox">
                            <div className="arrowleft"></div>
                            <div className="dev"></div>
                            <div className="dev"></div>
                            <div className="dev"></div>
                            <div className="dev"></div>
                            <div className="arrowright"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
