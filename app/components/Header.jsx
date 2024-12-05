import Link from "next/link";
import react from "react";


export default function Header() {
  return (
    <header>
      <div className="lefthead">
        <img className="icon" src="./icons/icon.png" alt="" />
        <Link href="/" className="no-underline"><h1>Главная</h1></Link>
      </div>
      <div className="as">
        <Link href="/programs">Программы</Link>
        <Link href="/blog">Блог</Link>
        <Link href="/security">Безопасность</Link>
        <Link href="/reviews">Отзывы</Link>
        <Link href="/about">О нас</Link>
        <Link href="/contacts">Контакты</Link>
      </div>
    </header>
  );
}
