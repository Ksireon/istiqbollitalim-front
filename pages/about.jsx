import '../app/globals.scss'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import VipuskRewiev from '@/app/components/otzivi_vipusknikov'

export default function About() {
    return (
        <div className="about-page">
            <Header />
            <div className="about-container">
                <div className="about-content">
                    <section className="about-intro">
                        <h1>О нас</h1>
                        <p className="intro-text">
                            Наша школа — это образовательное пространство, где каждый ученик раскрывает свой потенциал 
                            и строится в новом знании. Мы создаем атмосферу, которая способствует всестороннему развитию личности 
                            с академическими навыками и каждому ребенку.
                        </p>
                        <p className="intro-text">
                            В основе нашего подхода — создание на основе научных достижений точных способностей, как и практического мышления. 
                            Мы стремимся развивать творческие, интеллектуальные, эмоциональные 
                            навыки, обучения и современной интегрированной культуры, которая обеспечивает комфортную и безопасную 
                            образовательную среду.
                        </p>
                    </section>

                    <section className="mission-section">
                        <h2>Миссия школы</h2>
                        <p>
                            Подготовить успешное, эрудированное и креативное поколение, 
                            предоставляя качественные образовательные услуги
                        </p>
                    </section>

                    <section className="values-section">
                        <h2>Ценности школы</h2>
                        
                        <div className="value-item">
                            <h3>Качество</h3>
                            <p>Мы ценим качество во всем что мы делаем, и стремимся постоянно совершенствоваться</p>
                        </div>
                        
                        <div className="value-item">
                            <h3>Честность</h3>
                            <p>Прозрачность в нашей работе обеспечивает доверительную и дружественную атмосферу</p>
                        </div>
                        
                        <div className="value-item">
                            <h3>Служение обществу</h3>
                            <p>Мы воспитываем ответственных, активных граждан с чувством социальной справедливости 
                            и готовностью служить благу общества</p>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Почему стоит выбрать нас?</h2>
                        
                        <div className="features-grid">
                            <div className="feature-card">
                                <h3>Полный день</h3>
                                <p>Полная занятость ребенка с утра до вечера</p>
                            </div>
                            
                            <div className="feature-card">
                                <h3>Психологический комфорт</h3>
                                <p>Дружественная и семейная атмосфера</p>
                            </div>
                            
                            <div className="feature-card">
                                <h3>Всё в одном месте</h3>
                                <p>Многопрофильные кружки и секции в современном корпусе</p>
                            </div>
                        </div>
                    </section>
                </div>
                
                <div className="reviews-section">
                    <VipuskRewiev />
                </div>
            </div>
            <Footer />
        </div>
    );
}
