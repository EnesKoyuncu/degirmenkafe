import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="md:w-1/4 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img
                src="/degirmenKafeLogo.png"
                alt="Değirmen Kafe Logo"
                className="h-16 mr-3 bg-white p-1 rounded-md"
              />
              <span className="text-2xl font-serif font-bold">
                Değirmen Kafe
              </span>
            </div>
            <p className="text-gray-300 text-center md:text-left mb-4">
              Geleneksel değirmencilik ruhunu modern bir kafe konseptiyle
              birleştirerek, misafirlerimize eşsiz bir deneyim sunmayı
              amaçlıyoruz.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm2 6h-4v5h4v-5zm0-3h-4v2h4v-2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a
                  href="#anasayfa"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a
                  href="#hakkimizda"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Menü
                </a>
              </li>
              <li>
                <a
                  href="#galeri"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Galeri
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">
              İletişim
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li className="text-gray-300">
                Atatürk Bulvarı No: 123 <br />
                Merkez / Antalya
              </li>
              <li className="text-gray-300">
                <a
                  href="tel:+902421234567"
                  className="hover:text-primary transition-colors"
                >
                  +90 242 123 45 67
                </a>
              </li>
              <li className="text-gray-300">
                <a
                  href="mailto:info@degirmenkafe.com"
                  className="hover:text-primary transition-colors"
                >
                  info@degirmenkafe.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">
              Çalışma Saatleri
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li className="text-gray-300">
                <span className="text-primary font-medium">
                  Pazartesi - Cuma:
                </span>
                <br />
                08:00 - 23:00
              </li>
              <li className="text-gray-300">
                <span className="text-primary font-medium">
                  Cumartesi - Pazar:
                </span>
                <br />
                09:00 - 00:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Değirmen Kafe. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
