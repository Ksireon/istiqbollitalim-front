import MapIframe from './adressblock';

export default function Footer() {
    return (
        <div>
            <footer>
                <h1>
                    Наши контакты и адрес
                </h1>
                <MapIframe />
                <div className="cont">
                    <div className="left">
                        <div className="button">
                            <div className="img1"></div>
                            <a href="">+998 90 461 20 20</a>
                        </div>
                        <div className="button">
                            <div className="img2"></div>
                            <a href="https://www.google.com/maps/place/%22Istiqbolli+ta'lim%22+private+school/@39.642614,66.941468,17z/data=!4m6!3m5!1s0x38aef51eed04e5b3:0x5027229ceb5b48fc!8m2!3d39.6426137!4d66.9414677!16s%2Fg%2F11hkb_77q7?hl=ru&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">Г. Самарканд, <br />
                                ул. Фирдавси 81</a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="button">
                            <div className="img1"></div>
                            <a href="https://www.instagram.com/istiqbolli_talim?igsh=N3ozdWI5NjMycXV4">@istiqbolli_talim</a>
                        </div>
                        <div className="button">
                            <div className="img2"></div>
                            <a href="https://t.me/istiqbollitalimschool">t.me/istiqbollitalim</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

