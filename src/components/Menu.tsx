import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInUp } from "../utils/animations";
import "./Menu.css";

// GSAP ScrollTrigger eklentisini kaydedelim
gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuItems {
  [key: string]: MenuItem[];
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("kahveler");
  const menuRef = useRef<HTMLElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "kahveler", label: "Kahveler" },
    { id: "sicak-icecekler", label: "Sıcak İçecekler" },
    { id: "soguk-icecekler", label: "Soğuk İçecekler" },
    { id: "tatlilar", label: "Tatlılar" },
    { id: "yiyecekler", label: "Yiyecekler" },
  ];

  const menuItems: MenuItems = {
    kahveler: [
      {
        name: "Türk Kahvesi",
        description: "Geleneksel yöntemle pişirilen Türk kahvesi",
        price: "35 ₺",
      },
      {
        name: "Filtre Kahve",
        description: "Günlük öğütülen çekirdekler ile",
        price: "40 ₺",
      },
      { name: "Espresso", description: "Yoğun lezzet", price: "30 ₺" },
      {
        name: "Americano",
        description: "Espresso bazlı Amerikan kahvesi",
        price: "42 ₺",
      },
      {
        name: "Cappuccino",
        description: "Espresso, sıcak süt ve süt köpüğü",
        price: "45 ₺",
      },
      {
        name: "Latte",
        description: "Zengin süt köpüğü ile servis edilir",
        price: "48 ₺",
      },
      {
        name: "Mocha",
        description: "Espresso, çikolata, süt ve süt köpüğü",
        price: "50 ₺",
      },
    ],
    "sicak-icecekler": [
      { name: "Çay", description: "Demlik çay", price: "15 ₺" },
      {
        name: "Bitki Çayları",
        description: "Çeşitli bitki çayları",
        price: "30 ₺",
      },
      {
        name: "Sıcak Çikolata",
        description: "Yoğun kıvamlı sıcak çikolata",
        price: "42 ₺",
      },
      {
        name: "Sahlep",
        description: "Tarçın ile servis edilir",
        price: "40 ₺",
      },
    ],
    "soguk-icecekler": [
      {
        name: "Limonata",
        description: "Ev yapımı taze limonata",
        price: "35 ₺",
      },
      { name: "Soğuk Kahve", description: "Buzlu kahve", price: "45 ₺" },
      {
        name: "Frappe",
        description: "Çikolatalı veya vanilyalı",
        price: "48 ₺",
      },
      {
        name: "Smoothie",
        description: "Mevsim meyveleri ile hazırlanır",
        price: "50 ₺",
      },
      { name: "Ice Tea", description: "Şeftali veya limon", price: "35 ₺" },
    ],
    tatlilar: [
      {
        name: "Cheesecake",
        description: "Günün çeşidine göre değişir",
        price: "65 ₺",
      },
      {
        name: "Brownie",
        description: "Sıcak servis edilir, yanında dondurma ile",
        price: "60 ₺",
      },
      {
        name: "Sufle",
        description: "Eritilmiş çikolata dolgulu",
        price: "70 ₺",
      },
      {
        name: "Tiramisu",
        description: "İtalyan usulü tiramisu",
        price: "65 ₺",
      },
      {
        name: "Magnolia",
        description: "Bisküvi ve pudding karışımı",
        price: "55 ₺",
      },
    ],
    yiyecekler: [
      {
        name: "Avokadolu Tost",
        description: "Avokado, beyaz peynir ve domates ile",
        price: "75 ₺",
      },
      {
        name: "Club Sandviç",
        description: "Tavuk, dana jambon, yumurta ve peynir",
        price: "90 ₺",
      },
      {
        name: "Kahvaltı Tabağı",
        description: "Zengin kahvaltı tabağı (2 kişilik)",
        price: "200 ₺",
      },
      {
        name: "Omlet",
        description: "Peynirli, sebzeli veya mantarlı",
        price: "65 ₺",
      },
      { name: "Salata", description: "Mevsim salata", price: "60 ₺" },
    ],
  };

  // Kategori değiştiğinde animasyon için
  useEffect(() => {
    if (!menuItemsRef.current) return;

    const menuItemsContainer = menuItemsRef.current;
    const menuItemElements = menuItemsContainer.querySelectorAll(".menu-item");

    // Öğeleri animasyonla göster
    gsap.fromTo(
      menuItemElements,
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
    const section = menuRef.current;
    if (!section) return;

    const titleElement = section.querySelector(".section-title");
    const categoriesElement = section.querySelector(".menu-categories");

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
    <section id="menu" className="menu section" ref={menuRef}>
      <div className="container">
        <h2 className="section-title">Menümüz</h2>

        {/* Kategori Seçimi */}
        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`menu-category-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menü Öğeleri */}
        <div className="menu-items" ref={menuItemsRef}>
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-details">
                <h3 className="menu-item-title">{item.name}</h3>
                <p className="menu-item-desc">{item.description}</p>
              </div>
              <div className="menu-item-price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
