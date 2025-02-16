import { useState, useEffect } from 'react';

export default function MapIframe() {
    const [screenSize, setScreenSize] = useState('desktop');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 460) {
                setScreenSize('mobile');
            } else if (window.innerWidth <= 1366) {
                setScreenSize('laptop');
            } else {
                setScreenSize('desktop');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getStyles = () => {
        const baseStyles = {
            border: 0,
        };

        if (screenSize === 'mobile') {
            return {
                ...baseStyles,
                width: '80%',
                height: '280px',
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)'
            };
        } else if (screenSize === 'laptop') {
            return {
                ...baseStyles,
                width: '450px',
                height: '450px',
                position: 'relative',
                marginLeft: '200px'
            };
        } else {
            return {
                ...baseStyles,
                width: '720px',
                height: '720px',
                position: 'absolute',
                bottom: '340px',
                left: '120px'
            };
        }
    };

    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.315311942701!2d66.93889277650258!3d39.64261780238955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef51eed04e5b3%3A0x5027229ceb5b48fc!2s%22Istiqbolli%20ta&#39;lim%22%20private%20school!5e0!3m2!1sru!2s!4v1730740719935!5m2!1sru!2s"
            width="600"
            height="450"
            style={getStyles()}
            allowFullScreen=""
            loading="lazy"
        ></iframe>
    );
}
