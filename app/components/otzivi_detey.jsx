export default function ChildRewiev() {
    return (
        <div className="otzivi_detey">
        <h1>Отзывы учеников</h1>
        <div className="slider-container">
          <div className="arrowleft" onClick={() => {
            const container = document.querySelector('.otzivi_detey .videos-container');
            const scrollAmount = container.clientWidth;
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          }}></div>
          <div className="videos-container">
          <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/jt12E98iwYY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/2E3Y9UEAopk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/czpcAPhSCdE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/6ECsRVgcdRU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/kYxs3tDiKQU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/HnmrdhX0ALM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/5pJ_KHOZdL4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/eVtwbUXxRdE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/06QxmGyU7Ms"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/msvI6Vjm_3Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/QppQSfOtMHM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/c3iRjOI1P1k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/UCSJHTbeBhc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/DYOMqd7sDWY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <iframe
          
          className="vid"
          src="https://www.youtube-nocookie.com/embed/RFaIzQxI6MU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
          </div>
          <div className="arrowright" onClick={() => {
            const container = document.querySelector('.otzivi_detey .videos-container');
            const scrollAmount = container.clientWidth;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }}></div>
        </div>
      </div>
    );
  }
  