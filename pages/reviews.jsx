import '../app/globals.scss'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ChildRewiev from '@/app/components/otzivi_detey';
import ParentsRewiev from '@/app/components/otzivi_roditeley';
import VipuskRewiev from '@/app/components/otzivi_vipusknikov'


export default function Reviews() {
    return (
        <div className='reviews-page'>
            <Header />

            <ParentsRewiev />
            <br />
            <br />
            <br />
            <ChildRewiev />
            <br />
            <VipuskRewiev />
            <Footer />
        </div>
    );
}
