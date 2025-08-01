import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const faqs = [
    {
      question: 'Non consectetur a erat nam at lectus urna duis?',
      answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus...',
    },
    {
      question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
      answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi...',
    },
    {
      question: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
      answer: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci...',
    },
    {
      question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
      answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi...',
    },
    {
      question: 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
      answer: 'Molestie a iaculis at erat pellentesque adipiscing commodo...',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="faq section">
      <div className="container section-title" data-aos="fade-up">
        <span>Frequently Asked Questions</span>
        <h2>Frequently Asked Questions</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-container">
              {faqs.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`faq-item ${isOpen ? 'faq-active' : ''}`}
                    data-aos-delay={200 + index * 100}
                  >
                    <div
                      className="faq-header"
                      onClick={() => toggleFAQ(index)}
                      style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="faq-icon bi bi-question-circle"></i>
                        <h3 style={{ margin: 0 }}>{item.question}</h3>
                      </div>
                      <i className={`faq-toggle bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-right'}`}></i>
                    </div>
                    <div
                      className="faq-content"
                      style={{
                        maxHeight: isOpen ? '300px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease',
                        paddingTop: isOpen ? '10px' : '0',
                      }}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
