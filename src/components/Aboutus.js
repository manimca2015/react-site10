import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Aboutus() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);
  return (
    <div id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
          </div>
          <div className="col-lg-6 content order-last  order-lg-first" data-aos="fade-up" data-aos-delay="100">
            <h3 class="text-start">About Us</h3>
            <p class="text-start">
              Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
            </p>
            <ul>
              <li>
                <i className="bi bi-diagram-3"></i>
                <div>
                  <h5 class="text-start">Ullamco laboris nisi ut aliquip consequat</h5>
                  <p class="text-start">Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                </div>
              </li>
              <li>
                <i className="bi bi-fullscreen-exit"></i>
                <div>
                  <h5 class="text-start">Magnam soluta odio exercitationem reprehenderi</h5>
                  <p class="text-start">Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                </div>
              </li>
              <li>
                <i className="bi bi-broadcast"></i>
                <div>
                  <h5 class="text-start">Voluptatem et qui exercitationem</h5>
                  <p class="text-start">Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Aboutus;
