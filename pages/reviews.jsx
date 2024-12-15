import '../app/globals.scss'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export default function Reviews() {
    return (
        <div className='reviews-page'>
            <Header />
            <div className="otzivi" >
                <h1>Отзывы родителей</h1>
                <div className="gridsvid">
                    <div className="vid"></div>
                    <div className="vid"></div>
                    <div className="vid"></div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="otzivi" >
                <h1>Отзывы учеников</h1>
                <div className="gridsvid">
                    <div className="vid"></div>
                    <div className="vid"></div>
                    <div className="vid"></div>
                </div>
            </div>
            <div className="istorii_uspexa-reviews istorii_uspexa">
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
            <Footer />
        </div>
    );
}
