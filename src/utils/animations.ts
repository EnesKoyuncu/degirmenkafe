import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Animasyon eklentilerini kaydedelim
gsap.registerPlugin(ScrollTrigger);

// Animasyon seçenekleri için tip tanımı
interface AnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  y?: number;
  x?: number;
  scale?: number;
}

// Yavaşça içeri girme animasyonu
export const fadeInUp = (
  element: string | Element,
  options: AnimationOptions = {}
) => {
  const {
    trigger = element,
    start = "top 80%",
    end = "bottom 20%",
    delay = 0,
    duration = 0.8,
    ease = "power2.out",
    stagger = 0,
    y = 30,
  } = options;

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      stagger,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        end,
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Yavaşça soldan sağa animasyonu
export const fadeInLeft = (
  element: string | Element,
  options: AnimationOptions = {}
) => {
  const {
    trigger = element,
    start = "top 80%",
    end = "bottom 20%",
    delay = 0,
    duration = 0.8,
    ease = "power2.out",
    stagger = 0,
    x = -50,
  } = options;

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x,
    },
    {
      opacity: 1,
      x: 0,
      stagger,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        end,
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Yavaşça sağdan sola animasyonu
export const fadeInRight = (
  element: string | Element,
  options: AnimationOptions = {}
) => {
  const {
    trigger = element,
    start = "top 80%",
    end = "bottom 20%",
    delay = 0,
    duration = 0.8,
    ease = "power2.out",
    stagger = 0,
    x = 50,
  } = options;

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x,
    },
    {
      opacity: 1,
      x: 0,
      stagger,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        end,
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Scale animasyonu
export const zoomIn = (
  element: string | Element,
  options: AnimationOptions = {}
) => {
  const {
    trigger = element,
    start = "top 80%",
    end = "bottom 20%",
    delay = 0,
    duration = 0.8,
    ease = "power2.out",
    stagger = 0,
    scale = 0.8,
  } = options;

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale,
    },
    {
      opacity: 1,
      scale: 1,
      stagger,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        end,
        toggleActions: "play none none reverse",
      },
    }
  );
};

// Staggered animasyon - grup içindeki elemanları sırayla animasyona sokma
export const staggerElements = (
  elements: string | Element,
  options: AnimationOptions = {}
) => {
  const {
    trigger = elements,
    start = "top 80%",
    end = "bottom 20%",
    delay = 0,
    duration = 0.5,
    stagger = 0.1,
    y = 20,
    ease = "power2.out",
  } = options;

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      stagger,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        end,
        toggleActions: "play none none reverse",
      },
    }
  );
};
