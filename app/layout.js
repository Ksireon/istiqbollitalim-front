import localFont from "next/font/local";
import "./globals.scss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Istiqbolli ta'lim",
  description: "Наша школа — это образовательное пространство, где каждый ученик раскрывает свой потенциал и стремится к новым знаниям. Мы создаем атмосферу, которая сочетает высокие академические стандарты с индивидуальным подходом к каждому ребенку. В основе нашего подхода — развитие не только интеллектуальных способностей, но и творческого мышления, эмоционального интеллекта и социальных навыков. Мы гордимся нашими традициями, инновационными методами обучения и современной инфраструктурой, которая обеспечивает комфортное и безопасное образовательное пространство.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

