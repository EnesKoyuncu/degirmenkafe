import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInUp } from "../utils/animations";
import "./Gallery.css";

// GSAP ScrollTrigger eklentisini kaydedelim
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("hepsi");
  const galleryRef = useRef<HTMLElement>(null);
  const galleryItemsRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "hepsi", label: "Hepsi" },
    { id: "mekan", label: "Mekan" },
    { id: "kahveler", label: "Kahveler" },
    { id: "tatlilar", label: "Tatlılar" },
    { id: "yemekler", label: "Yemekler" },
  ];

  interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    category: string;
  }

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      alt: "Değirmen Kafe Dış Mekan",
      category: "mekan",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80",
      alt: "Kafe İç Mekan",
      category: "mekan",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1573254597318-4cda58783d6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Türk Kahvesi",
      category: "kahveler",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1354&q=80",
      alt: "Latte Art",
      category: "kahveler",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Cheesecake",
      category: "tatlilar",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1125&q=80",
      alt: "Tiramisu",
      category: "tatlilar",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Kahvaltı Tabağı",
      category: "yemekler",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Avokadolu Tost",
      category: "yemekler",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      alt: "Kafe Ortamı",
      category: "mekan",
    },
  ];

  const filteredItems =
    activeCategory === "hepsi"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Kategori değiştiğinde animasyon için
  useEffect(() => {
    if (!galleryItemsRef.current) return;

    const galleryItemsContainer = galleryItemsRef.current;
    const galleryItemElements =
      galleryItemsContainer.querySelectorAll(".gallery-item");

    // Öğeleri animasyonla göster
    gsap.fromTo(
      galleryItemElements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, [activeCategory]);

  // İlk yükleme animasyonu
  useEffect(() => {
    const section = galleryRef.current;
    if (!section) return;

    const titleElement = section.querySelector(".section-title");
    const categoriesElement = section.querySelector(".gallery-categories");

    // Başlık animasyonu
    if (titleElement) {
      fadeInUp(titleElement, {
        y: -30,
        duration: 0.8,
      });
    }

    // Kategori butonları animasyonu
    if (categoriesElement) {
      fadeInUp(categoriesElement, {
        delay: 0.3,
        duration: 0.8,
      });
    }
  }, []);

  return (
    <section id="galeri" className="gallery section" ref={galleryRef}>
      <div className="container">
        <h2 className="section-title">Galeri</h2>

        {/* Kategori Seçimi */}
        <div className="gallery-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`gallery-category-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Galeri Öğeleri */}
        <div className="gallery-items" ref={galleryItemsRef}>
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.src} alt={item.alt} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
