import { useState, FormEvent, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInUp } from "../utils/animations";
import "./Contact.css";

// GSAP ScrollTrigger kaydı
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Gerçek bir formda burada API'ye istek gönderilebilir
    console.log("Form gönderildi:", formData);
    setIsSubmitted(true);
    // Form gönderildikten sonra formu sıfırla
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Form gönderildiğinde başarı mesajını göster
    const successTimeout = setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);

    return () => clearTimeout(successTimeout);
  };

  // Sayfa yüklendiğinde animasyonları başlat
  useEffect(() => {
    const section = contactRef.current;
    if (!section) return;

    const titleElement = section.querySelector(".section-title");
    const contactItems = section.querySelectorAll(".contact-info-item");
    const formContainer = section.querySelector(".contact-form-container");

    // Başlık animasyonu
    if (titleElement) {
      fadeInUp(titleElement, {
        y: -30,
        duration: 0.8,
      });
    }

    // İletişim bilgileri animasyonu
    if (contactItems.length) {
      gsap.fromTo(
        contactItems,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        }
      );
    }

    // Form animasyonu
    if (formContainer) {
      gsap.fromTo(
        formContainer,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="iletisim" className="contact" ref={contactRef}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Bize Ulaşın</h2>
            <p className="contact-description">
              Rezervasyon, özel etkinlik organizasyonları veya sorularınız için
              bizimle iletişime geçebilirsiniz.
            </p>

            <div className="contact-details">
              <div className="contact-info-item">
                <div className="contact-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="contact-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>Adres</h3>
                  <p>
                    Atatürk Bulvarı No: 123 <br />
                    Merkez / Antalya
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="contact-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>Telefon</h3>
                  <p>+90 242 123 45 67</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="contact-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>E-posta</h3>
                  <p>info@degirmenkafe.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="contact-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>Çalışma Saatleri</h3>
                  <p>
                    Pazartesi - Cuma: 08:00 - 23:00 <br />
                    Cumartesi - Pazar: 09:00 - 00:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="contact-form-container">
              <h3 className="contact-form-title">Mesaj Gönderin</h3>

              {isSubmitted && (
                <div className="form-success-message">
                  <p>
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş
                    yapacağız.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} ref={formRef}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-control form-textarea"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
