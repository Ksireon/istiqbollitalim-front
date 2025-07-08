import Script from "next/script";
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
      <head>
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1422083055509092&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
          <div>
            <img
              src="https://mc.yandex.ru/watch/103244578"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>

      <body>
        {/* Meta Pixel Script */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1422083055509092');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="yandex-metrica" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(103244578, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

