import './FeatureCard.css';
import Slider from 'react-slick';
import featureCardData from './FeaturedCardData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      background: "grey",
      borderRadius: "50%",
      padding: "15px",
      zIndex: 10,
      top: '180px',
      left: "-20px",
      boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
    }}
    onClick={onClick}
  />
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      background: "grey",
      borderRadius: "50%",
      padding: "15px",
      zIndex: 10,
      top: '180px',
      right: "-20px",
    }}
    onClick={onClick}
  />
);


const FeatureCard = () => {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="slider-container container">
      <div className="card-heading">
        <h2 className='card-heading-text'>Featured this month</h2>
      </div>
      <div className="divider"></div>
      <Slider {...settings}>
        {featureCardData.map((item, index) => (
          <div key={index} className="feature-card slider-item" style={{ cursor: 'pointer' }}>
            <div className="feature-card-data">
              <div className='bg-svg'>
                <div className="svg-img">{item.svg}</div>
              </div>
                  <div className="future-card-overlay"> </div>
              <div className="feature-card-details">
                <button className='card-btn feature-card-btn'>{item.btnTitle}</button>
                <div className='card-title feature-card-title'>{item.title}</div>
                <div className="feature-card-profile-details">
                  <div class="future-card-img">
                    <div className="feature-card-img-wrapper" style={{ width: '64px', height: '48px' }}>
                      <img src={item.profileImg} alt={item.name} style={{ transition: 'opacity 500ms linear', objectFit: 'contain', }} />
                    </div>
                  </div>
                  <div className="card-profile-data">
                    <div className='future-card-name'>{item.name}</div>
                    <div className="profile-timeline">
                      <div className='future-card-date'>{item.date}</div>
                      <div className='future-card-last-seen'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                        {item.lastSeen}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureCard;
