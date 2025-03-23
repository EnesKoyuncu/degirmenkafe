import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

// GSAP ScrollTrigger eklentisini kaydedelim
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animasyonları
    const section = sectionRef.current;
    const images = imagesRef.current;
    const info = infoRef.current;

    if (!section || !images || !info) return;

    // İmajlar için animasyon
    gsap.fromTo(
      images.querySelectorAll(".about-image"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Bilgi içeriği için animasyon
    gsap.fromTo(
      info.querySelectorAll(".about-info-item"),
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // İstatistikler için animasyon
    gsap.fromTo(
      info.querySelectorAll(".about-stat"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: info.querySelector(".about-stats"),
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="hakkimizda" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-info" ref={infoRef}>
            <h2 className="section-title about-info-item">
              Değirmen Kafe Hakkında
            </h2>

            <p className="about-text about-info-item">
              Değirmen Kafe, 2015 yılında tarihi bir değirmen binasında
              kapılarını açtı. Geleneksel değirmencilik ruhunu modern bir kafe
              konseptiyle birleştirerek, misafirlerimize eşsiz bir deneyim
              sunmayı amaçlıyoruz.
            </p>

            <p className="about-text about-info-item">
              Her damak tadına uygun lezzetler sunan menümüzde taze ve kaliteli
              malzemeler kullanıyor, özenle hazırladığımız kahvelerimizde özel
              kavurma çekirdekler tercih ediyoruz.
            </p>

            <p className="about-text about-info-item">
              Sıcak atmosferimiz ve güleryüzlü personelimizle, ailenizle veya
              arkadaşlarınızla keyifli vakit geçirebileceğiniz, şehrin
              gürültüsünden uzak bir mola yeri sunuyoruz.
            </p>

            <div className="about-stats about-info-item">
              <div className="about-stat">
                <span className="about-stat-number">7</span>
                <span className="about-stat-text">Özel Kahve Çeşidi</span>
              </div>

              <div className="about-stat">
                <span className="about-stat-number">25+</span>
                <span className="about-stat-text">Leziz Tatlı</span>
              </div>

              <div className="about-stat">
                <span className="about-stat-number">8</span>
                <span className="about-stat-text">Yıllık Deneyim</span>
              </div>
            </div>
          </div>

          <div className="about-images" ref={imagesRef}>
            <div className="about-image-grid">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80"
                alt="Kafemizin içi"
                className="about-image"
              />
              <img
                src="https://images.unsplash.com/photo-1573254597318-4cda58783d6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                alt="Taze kahve"
                className="about-image"
              />
              <img
                src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                alt="Tatlılarımız"
                className="about-image"
              />
              <img
                src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                alt="Kafe ortamı"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
