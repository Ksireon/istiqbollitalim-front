import '../app/globals.scss'
import Header from '../app/components/Header';
import Education from '@/app/components/education';
import Platforms from '@/app/components/platforms';
import Hobbies from '@/app/components/hobbies';
import Footer from '@/app/components/Footer';





export default function Programms() {
  return (
    <div>
      <Header />
      <Education />
      <Platforms />
      <Hobbies />
      <Footer />
    </div>
  );
}
