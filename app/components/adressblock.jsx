export default function MapIframe() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.315311942701!2d66.93889277650258!3d39.64261780238955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef51eed04e5b3%3A0x5027229ceb5b48fc!2s%22Istiqbolli%20ta&#39;lim%22%20private%20school!5e0!3m2!1sru!2s!4v1730740719935!5m2!1sru!2s"
            width="600"
            height="450"
            style={{
                border: 0, 
                width: window?.innerWidth <= 360 ? '280px' : '720px',
                height: window?.innerWidth <= 360 ? '280px' : '720px',
                position: 'absolute',
                bottom: window?.innerWidth <= 360 ? '30px' : '340px',
                left: window?.innerWidth <= 360 ? '50%' : '120px',
                transform: window?.innerWidth <= 360 ? 'translateX(-50%)' : 'none'
            }}
            allowFullScreen=""
            loading="lazy"
        ></iframe>
    );
}
