import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

function Testimonials() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const testimonials = [
    {
      img: 'assets/img/testimonials/testimonials-1.jpg',
      name: 'Saul Goodman',
      title: 'Ceo & Founder',
      quote:
        'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...',
    },
    {
      img: 'assets/img/testimonials/testimonials-2.jpg',
      name: 'Sara Wilsson',
      title: 'Designer',
      quote:
        'Export tempor illum tamen malis malis eram quae irure esse labore...',
    },
    {
      img: 'assets/img/testimonials/testimonials-3.jpg',
      name: 'Jena Karlis',
      title: 'Store Owner',
      quote:
        'Enim nisi quem export duis labore cillum quae magna enim sint quorum...',
    },
    {
      img: 'assets/img/testimonials/testimonials-4.jpg',
      name: 'Matt Brandon',
      title: 'Freelancer',
      quote:
        'Fugiat enim eram quae cillum dolore dolor amet nulla culpa...',
    },
    {
      img: 'assets/img/testimonials/testimonials-5.jpg',
      name: 'John Larson',
      title: 'Entrepreneur',
      quote:
        'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam...',
    },
  ];

  return (
    <section id="testimonials" className="testimonials section dark-background">
      <img src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          slidesPerView="auto"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <img src={t.img} className="testimonial-img" alt={t.name} />
                <h3>{t.name}</h3>
                <h4>{t.title}</h4>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{t.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
