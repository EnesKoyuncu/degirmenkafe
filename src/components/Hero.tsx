import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax efekti için mouse hareketi dinleme
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const x = e.clientX;
      const y = e.clientY;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Paralaks etkisi oluşturmak için hesaplamalar
      const moveX = (x / width - 0.5) * 20;
      const moveY = (y / height - 0.5) * 20;

      const bg = heroRef.current.querySelector(".hero-bg") as HTMLElement;
      if (bg) {
        bg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="anasayfa" className="hero" ref={heroRef}>
      {/* Arka plan resmi */}
      <div className="hero-bg-container">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className="hero-overlay"></div>
        </div>
      </div>

      {/* İçerik */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-container"
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Değirmen Kafe
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Eşsiz lezzetler ve rahatlatıcı bir ortamda unutulmaz anlar için sizi
            bekliyoruz
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a href="#menu" className="btn btn-primary">
              Menümüzü Keşfedin
            </a>
            <a href="#iletisim" className="btn btn-secondary">
              İletişime Geçin
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
