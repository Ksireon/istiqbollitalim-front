import '../app/globals.scss'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export default function Security() {
    return (
        <div>
            <Header />
            <div className="container-about">
                <div className="top">
                    <h1>О нас</h1>
                    <br /> <br />
                    <p>
                        Наша школа — это образовательное пространство, где каждый ученик раскрывает свой потенциал <br />
                        и стремится к новым знаниям. Мы создаем атмосферу, которая сочетает высокие академические стандарты <br />
                        с индивидуальным подходом к каждому ребенку. <br />
                        В основе нашего подхода — развитие не только интеллектуальных способностей, но и творческого мышления, <br />
                        эмоционального интеллекта и социальных навыков. Мы гордимся нашими традициями, инновационными <br />
                        методами обучения и современной инфраструктурой, которая обеспечивает комфортное и безопасное <br />
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
