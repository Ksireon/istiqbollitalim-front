import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="lefthead">
        <img className="icon" src="./icons/icon.png" alt="" />
        <Link href="/" className="no-underline"><h1>Главная</h1></Link>
      </div>
      
      {/* Мобильная кнопка меню */}
      <div className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Десктопное меню */}
      <div className="as">
        <Link href="/programs">Программы</Link>
        <Link href="/blog">Блог</Link>
        <Link href="/security">Безопасность</Link>
        <Link href="/reviews">Отзывы</Link>
        <Link href="/about">О нас</Link>
        <Link href="/contacts">Контакты</Link>
      </div>

      {/* Мобильное меню */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
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
