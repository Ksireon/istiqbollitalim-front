import { useState, useEffect } from 'react';

export default function MapIframe() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 460);
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 460);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.315311942701!2d66.93889277650258!3d39.64261780238955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef51eed04e5b3%3A0x5027229ceb5b48fc!2s%22Istiqbolli%20ta&#39;lim%22%20private%20school!5e0!3m2!1sru!2s!4v1730740719935!5m2!1sru!2s"
            width="600"
            height="450"
            style={{
                border: 0,
                width: isMobile ? '280px' : '720px',
                height: isMobile ? '280px' : '720px',
                position: 'absolute',
                bottom: isMobile ? '30px' : '340px',
                left: isMobile ? '50%' : '120px',
                transform: isMobile ? 'translateX(-50%)' : 'none'
            }}
            allowFullScreen=""
            loading="lazy"
        ></iframe>
    );
}
