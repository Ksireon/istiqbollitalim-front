export default function VipuskRewiev() {
  return (
    <div className="istorii_uspexa">
      <h1>Отзывы выпускников</h1>
      <div className="flexbox-container">
        <div className="arrowleft" onClick={() => {
          const container = document.querySelector('.istorii_uspexa .flexbox');
          const scrollAmount = container.clientWidth;
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }}></div>
        <div className="flexbox">
          <iframe
            className="dev"
            src="https://www.youtube-nocookie.com/embed/NswdqRl3BTY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          <iframe
            className="dev"
            src="https://www.youtube-nocookie.com/embed/qtU5kjg1gfM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          <iframe
            className="dev"
            src="https://www.youtube-nocookie.com/embed/jNsQvYula70"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          <iframe
            className="dev"
            src="https://www.youtube-nocookie.com/embed/T9CikwHQCUY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        <div className="arrowright" onClick={() => {
          const container = document.querySelector('.istorii_uspexa .flexbox');
          const scrollAmount = container.clientWidth;
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }}></div>
      </div>
    </div>
  );
}
