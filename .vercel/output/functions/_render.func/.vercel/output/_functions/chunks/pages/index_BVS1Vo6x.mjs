/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, j as renderComponent, m as maybeRenderHead, k as renderSlot, h as addAttribute } from '../astro_D4uVV2FC.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Image } from './generic_PoQ4cWkm.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const $$Astro$a = createAstro();
const $$SeoHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SeoHead;
  return renderTemplate`<head><title>Alala Campo</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Descripción de tu página aquí"><meta name="keywords" content="tus, palabras, clave, aquí"><meta property="og:title" content="El título de tu página aquí"><meta property="og:description" content="Descripción de tu página aquí"><meta property="og:image" content="URL de tu imagen aquí"><meta property="og:url" content="URL de tu página aquí"><meta name="twitter:card" content="summary_large_image">${renderHead()}</head>`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/components/SeoHead.astro", void 0);

const $$Astro$9 = createAstro();
const $$RootLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$RootLayout;
  return renderTemplate`<html lang="es"> ${renderComponent($$result, "SeoHead", $$SeoHead, {})}${maybeRenderHead()}<body class="bg-[#F5F5EB]"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/layouts/RootLayout.astro", void 0);

const $$Astro$8 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class="absolute z-10 top-0 left-0 w-full flex justify-between px-6 pt-6 lg:px-20 lg:pt-10 pb-5 bg-transparent"> <ul class="hidden lg:flex"> <li class="px-6 py-3.5 leading-[133%] text-base font-medium text-[#FFF]">
Casas
</li> <li class="px-6 py-3.5 leading-[133%] text-base font-medium text-[#FFF]">
Servicios
</li> </ul> ${renderComponent($$result, "Image", $$Image, { "src": "/logo.png", "alt": "alala campo logo", "width": 150, "height": 100, "class": "object-contain" })} <ul class="hidden lg:flex"> <li class="px-6 py-3.5 leading-[133%] text-base font-medium text-[#FFF]">
Ubicación
</li> <li class="px-6 py-3.5 leading-[133%] text-base font-medium text-[#FFF]">
Contacto
</li> </ul> </nav>`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/components/Nav.astro", void 0);

const $$Astro$7 = createAstro();
const $$IntroHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$IntroHero;
  return renderTemplate`${maybeRenderHead()}<section class="relative"> <div class="absolute top-0 left-0 w-full h-dvh bg-[radial-gradient(transparent,black)] opacity-50"></div> <!-- <div class="absolute top-0 left-0 w-full h-dvh bg-black opacity-30"></div> --> ${renderComponent($$result, "Image", $$Image, { "src": "/images/drone-complejo-1.jpg", "alt": "Vista de drone del campo 'Alala Campo'", "width": 1e3, "height": 1e3, "class": "object-cover w-full h-dvh" })} <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> <h1 class="font-bold font-serif text-[#FFF] text-[2.25rem] lg:text-[4.8rem] leading-[100%] text-balance lg:text-pretty text-center">
BIENVENIDOS A ALALA CAMPO
</h1> <div class="flex items-center gap-4 text-nowrap lg:gap-6 justify-center pt-8 text-[#fff] text-[.875rem] lg:text-[1.125rem] font-medium"> <p>17:05</p> <div class="w-[1px] h-[25px] bg-[#fff]"></div> <p>31 °C</p> <div class="w-[1px] h-[25px] bg-[#fff]"></div> <p>Mayormente soleado</p> </div> </div> </section>`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/components/IntroHero.astro", void 0);

const usePrevNextButtons$1 = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi)
      return;
    emblaApi.scrollPrev();
    if (onButtonClick)
      onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);
  const onNextButtonClick = useCallback(() => {
    if (!emblaApi)
      return;
    emblaApi.scrollNext();
    if (onButtonClick)
      onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);
  const onSelect = useCallback((emblaApi2) => {
    setPrevBtnDisabled(!emblaApi2.canScrollPrev());
    setNextBtnDisabled(!emblaApi2.canScrollNext());
  }, []);
  useEffect(() => {
    if (!emblaApi)
      return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  };
};
const PrevButton$1 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: "sc_embla__button embla__button--prev",
      type: "button",
      ...restProps,
      children: [
        /* @__PURE__ */ jsx("svg", { className: "sc_embla__button__svg", viewBox: "0 0 532 532", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          }
        ) }),
        children
      ]
    }
  );
};
const NextButton$1 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: "sc_embla__button embla__button--next",
      type: "button",
      ...restProps,
      children: [
        /* @__PURE__ */ jsx("svg", { className: "sc_embla__button__svg", viewBox: "0 0 532 532", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          }
        ) }),
        children
      ]
    }
  );
};

const TWEEN_FACTOR_BASE$1 = 0.32;
const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max);
const slides$1 = [
  { src: "/images/general-pictures/dosCasas1.jpg" },
  { src: "/images/general-pictures/dosCasas3.jpg" },
  { src: "/images/general-pictures/1.jpg" },
  { src: "/images/general-pictures/araucoVolley1.jpg" },
  { src: "/images/general-pictures/olivos1.jpg" },
  { src: "/images/general-pictures/2.jpg" }
];
const ScaleCarousel = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons$1(emblaApi);
  const setTweenNodes = useCallback((emblaApi2) => {
    tweenNodes.current = emblaApi2.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".sc_embla__slide__number");
    });
  }, []);
  const setTweenFactor = useCallback((emblaApi2) => {
    tweenFactor.current = TWEEN_FACTOR_BASE$1 * emblaApi2.scrollSnapList().length;
  }, []);
  const tweenScale = useCallback(
    (emblaApi2, eventName) => {
      const engine = emblaApi2.internalEngine();
      const scrollProgress = emblaApi2.scrollProgress();
      const slidesInView = emblaApi2.slidesInView();
      const isScrollEvent = eventName === "scroll";
      emblaApi2.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];
        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex))
            return;
          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();
              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }
          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );
  useEffect(() => {
    if (!emblaApi)
      return;
    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);
    emblaApi.on("reInit", setTweenNodes).on("reInit", setTweenFactor).on("reInit", tweenScale).on("scroll", tweenScale);
  }, [emblaApi, tweenScale]);
  return /* @__PURE__ */ jsxs("div", { className: "sc_embla", children: [
    /* @__PURE__ */ jsx("div", { className: "pb-4 flex justify-end pr-8 lg:pr-[20%]", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
      /* @__PURE__ */ jsx(PrevButton$1, { onClick: onPrevButtonClick, disabled: prevBtnDisabled }),
      /* @__PURE__ */ jsx(NextButton$1, { onClick: onNextButtonClick, disabled: nextBtnDisabled })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "sc_embla__viewport", ref: emblaRef, children: /* @__PURE__ */ jsx("div", { className: "sc_embla__container", children: slides$1.map((slide) => /* @__PURE__ */ jsx("div", { className: "sc_embla__slide", children: /* @__PURE__ */ jsx("div", { className: "sc_embla__slide__number", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: slide.src,
        width: 1e3,
        height: 500
      },
      slide.src
    ) }) }, slide.src)) }) })
  ] });
};

const $$Astro$6 = createAstro();
const $$GeneralPictures = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GeneralPictures;
  return renderTemplate`${maybeRenderHead()}<section class="pt-16 lg:py-32"> ${renderComponent($$result, "ScaleCarousel", ScaleCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/facup/FREELANCE/alala-campo2.0/src/ui/ScaleCarousel/ScaleCarousel", "client:component-export": "default" })} </section>`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/components/GeneralPictures.astro", void 0);

const $$Astro$5 = createAstro();
const $$HouseList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HouseList;
  const houses = [
    {
      name: "Arauco",
      capacity: "12-14 PERSONAS",
      bedrooms: "3 HABITACIONES",
      bathrooms: "3 BA\xD1OS",
      img: "bg-[url('/images/houses/arauco/araucoRe4.jpg')] bg-center bg-cover w-full h-full absolute top-[100%] left-0 group-hover:top-0 transition-all ease-in-out duration-500"
    },
    {
      name: "Coratina",
      capacity: "6-8 PERSONAS",
      bedrooms: "2 HABITACIONES",
      bathrooms: "1 BA\xD1OS",
      img: "bg-[url('/images/houses/coratina/coratinaRe2.jpg')] bg-center bg-cover w-full h-full absolute top-[100%] left-0 group-hover:top-0 transition-all ease-in-out duration-500"
    },
    {
      name: "Alore\xF1a",
      capacity: "2-4 PERSONAS",
      bedrooms: "MONOAMBIENTE",
      bathrooms: "1 BA\xD1OS",
      img: "bg-[url('/images/houses/alorenia/aloreRe39.jpg')] bg-center bg-cover w-full h-full absolute top-[100%] left-0 group-hover:top-0 transition-all ease-in-out duration-500"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-6xl m-auto py-16 lg:py-32"> ${houses.map((house) => renderTemplate`<div class="border-b-[1px] border-[#cbcbc3] py-[76px] px-8 lg:px-10 relative group overflow-hidden"> <div${addAttribute(house.img, "class")}></div> <h1 class="relative z-10 text-[3.5rem] leading-[120%] font-serif transition-all ease-in-out duration-300 group-hover:text-white"> ${house.name} </h1> <ul class="relative z-10 pt-6 flex flex-wrap gap-6 text-[1rem] lg:text-[1.25rem] text-[#858585] transition-all ease-in-out duration-300 group-hover:text-[#e7e7e7]"> <li>${house.capacity}</li> <li>${house.bedrooms}</li> <li>${house.bathrooms}</li> </ul> </div>`)} </section>`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/components/HouseList.astro", void 0);

const $$Astro$4 = createAstro();
const $$CommonServices = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CommonServices;
  return renderTemplate`${maybeRenderHead()}<section class="max-w-6xl lg:px-0 px-4 m-auto py-32 grid grid-cols-2 gap-10"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/introV.jpeg", "alt": "intro picture", "width": 400, "height": 600, "class": "w-full h-full col-span-2 lg:col-span-1" })} <div class="col-span-2 lg:col-span-1"> <h1 class="font-serif text-[3.5rem] pb-12 text-balance leading-[100%] lg:leading-[120%]">
Las 3 casas cuentan con:
</h1> <ul class="text-[1.125rem] flex flex-wrap gap-4 lg:gap-6"> <li class="bg-white w-fit p-3 rounded-md shadow">Pileta</li> <li class="bg-white w-fit p-3 rounded-md shadow">Wifi</li> <li class="bg-white w-fit p-3 rounded-md shadow">Parrilla</li> <li class="bg-white w-fit p-3 rounded-md shadow">Aire acondicionado</li> <li class="bg-white w-fit p-3 rounded-md shadow">Alarma</li> <li class="bg-white w-fit p-3 rounded-md shadow">Cochera</li> <li class="bg-white w-fit p-3 rounded-md shadow">Parquizado</li> <li class="bg-white w-fit p-3 rounded-md shadow">Cocina equipada</li> <li class="bg-white w-fit p-3 rounded-md shadow">TV cable</li> </ul> </div> </section>`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/components/CommonServices.astro", void 0);

const $$Astro$3 = createAstro();
const $$Location = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Location;
  return renderTemplate`${maybeRenderHead()}<section class="max-w-6xl lg:px-0 px-4 m-auto lg:py-32"> <div class="flex justify-end"> <h1 class="font-serif text-[3.5rem] pb-8 text-balance leading-[100%] lg:leading-[120%]">
Pocito, San Juan
</h1> </div> <div class=""> <div class="border-[1px] border-[#e6e6e6] rounded-[3px]"> ${renderComponent($$result, "Map", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/facup/FREELANCE/alala-campo2.0/src/ui/Map/Map", "client:component-export": "default" })} </div> <p class="pt-10 text-[1.25rem] text-[#858585]">
Alala Campo se encuentra por la Calle Chacabuco, entre calle 5 y calle 6.
      Pocito, San Juan.
</p> </div> </section>`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/components/Location.astro", void 0);

const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi)
      return;
    emblaApi.scrollPrev();
    if (onButtonClick)
      onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);
  const onNextButtonClick = useCallback(() => {
    if (!emblaApi)
      return;
    emblaApi.scrollNext();
    if (onButtonClick)
      onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);
  const onSelect = useCallback((emblaApi2) => {
    setPrevBtnDisabled(!emblaApi2.canScrollPrev());
    setNextBtnDisabled(!emblaApi2.canScrollNext());
  }, []);
  useEffect(() => {
    if (!emblaApi)
      return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  };
};
const PrevButton = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: "embla__button embla__button--prev",
      type: "button",
      ...restProps,
      children: [
        /* @__PURE__ */ jsx("svg", { className: "embla__button__svg", viewBox: "0 0 532 532", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          }
        ) }),
        children
      ]
    }
  );
};
const NextButton = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: "embla__button embla__button--next",
      type: "button",
      ...restProps,
      children: [
        /* @__PURE__ */ jsx("svg", { className: "embla__button__svg", viewBox: "0 0 532 532", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          }
        ) }),
        children
      ]
    }
  );
};

const TWEEN_FACTOR_BASE = 0.2;
const slides = [
  {
    src: "/images/visit-us/ullum.jpg",
    name: "Dique de Ullum. ",
    distance: "14km"
  },
  {
    src: "/images/visit-us/zonda.jpg",
    name: "Quebrada de Zonda.",
    distance: "13km"
  },
  {
    src: "/images/visit-us/teatro.jpg",
    name: "Teatro del Bicentenario.",
    distance: "10km"
  },
  {
    src: "/images/visit-us/sarmiento.jpg",
    name: "Casa de Sarmiento.",
    distance: "11km"
  },
  {
    src: "/images/visit-us/parque.jpg",
    name: "Parque de Mayo.",
    distance: "11km"
  },
  {
    src: "/images/visit-us/estadio.jpeg",
    name: "Estadio Bicentenario.",
    distance: "12km"
  },
  {
    src: "/images/visit-us/centro.jpg",
    name: "Centro San Juan.",
    distance: "10km"
  },
  {
    src: "/images/visit-us/salmuera.jpg",
    name: "Restaurante La Salmuera.",
    distance: "2km"
  }
];
const EmblaCarousel = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);
  const setTweenNodes = useCallback((emblaApi2) => {
    tweenNodes.current = emblaApi2.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer");
    });
  }, []);
  const setTweenFactor = useCallback((emblaApi2) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi2.scrollSnapList().length;
  }, []);
  const tweenParallax = useCallback(
    (emblaApi2, eventName) => {
      const engine = emblaApi2.internalEngine();
      const scrollProgress = emblaApi2.scrollProgress();
      const slidesInView = emblaApi2.slidesInView();
      const isScrollEvent = eventName === "scroll";
      emblaApi2.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];
        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex))
            return;
          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();
              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }
          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    []
  );
  useEffect(() => {
    if (!emblaApi)
      return;
    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);
    emblaApi.on("reInit", setTweenNodes).on("reInit", setTweenFactor).on("reInit", tweenParallax).on("scroll", tweenParallax);
  }, [emblaApi, tweenParallax]);
  return /* @__PURE__ */ jsxs("div", { className: "embla", children: [
    /* @__PURE__ */ jsx("div", { className: "embla__viewport", ref: emblaRef, children: /* @__PURE__ */ jsx("div", { className: "embla__container", children: slides.map((slide) => /* @__PURE__ */ jsx("div", { className: "embla__slide", children: /* @__PURE__ */ jsx("div", { className: "embla__parallax", children: /* @__PURE__ */ jsxs("div", { className: "embla__parallax__layer", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "embla__slide__img embla__parallax__img",
          src: slide.src,
          alt: "Your alt text"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-12 left-12 font-serif", children: /* @__PURE__ */ jsxs("p", { className: "text-white text-[2.6rem] leading-[100%] drop-shadow-[0_25px_25px_rgba(20,20,20,0.8)]	", children: [
        slide.name,
        /* @__PURE__ */ jsx("span", { className: "text-[2.2rem]", children: slide.distance })
      ] }) })
    ] }) }) }, slide.src)) }) }),
    /* @__PURE__ */ jsx("div", { className: "embla__controls", children: /* @__PURE__ */ jsxs("div", { className: "embla__buttons", children: [
      /* @__PURE__ */ jsx(PrevButton, { onClick: onPrevButtonClick, disabled: prevBtnDisabled }),
      /* @__PURE__ */ jsx(NextButton, { onClick: onNextButtonClick, disabled: nextBtnDisabled })
    ] }) })
  ] });
};

const $$Astro$2 = createAstro();
const $$VisitUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$VisitUs;
  return renderTemplate`${maybeRenderHead()}<section class="max-w-6xl m-auto py-32"> <h1 class="font-serif text-[3.5rem] pb-12 leading-[100%] lg:px-0 px-4 lg:leading[120%]">
Puntos de interés
</h1> ${renderComponent($$result, "ParallaxCarousel", EmblaCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/facup/FREELANCE/alala-campo2.0/src/ui/ParallaxCarousel/ParallaxCarousel", "client:component-export": "default" })} </section>`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/components/VisitUs.astro", void 0);

const $$Astro$1 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const email = data.get("email");
      const phone = data.get("phone");
      const message = data.get("message");
      console.log({ name, email, phone, message });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="max-w-6xl lg:px-0 px-4 m-auto lg:pt-32 lg:pb-32 pb-20"> <h1 class="font-serif text-[3.5rem] pb-8 text-balance leading-[120%]">
Contáctanos!
</h1> <div class="flex flex-col-reverse lg:flex-row gap-20"> <form method="POST" class="grid gap-8 basis-1/2"> <div class="grid gap-2 text-[1.2rem]"> <label for="name">Nombre</label> <input required type="text" id="name" name="name" class="border-b-2 border-[#e7e7bf] bg-[#ffffd6] p-2 rounded-sm"> </div> <div class="grid gap-2 text-[1.2rem]"> <label for="phone">Teléfono</label> <input required type="text" id="phone" name="phone" class="border-b-2 border-[#e7e7bf] bg-[#ffffd6] p-2 rounded-sm"> </div> <div class="grid gap-2 text-[1.2rem]"> <label for="email">Email</label> <input required type="email" id="email" name="email" class="border-b-2 border-[#e7e7bf] bg-[#ffffd6] p-2 rounded-sm"> </div> <div class="grid gap-2 text-[1.2rem]"> <label for="message">Mensaje</label> <textarea required id="message" name="message" class="border-b-2 border-[#e7e7bf] bg-[#ffffd6] p-2 rounded-sm"></textarea> </div> <div class="flex justify-end"> <button class="px-10 py-2 bg-white border border-gray rounded-md" type="submit">Enviar</button> </div> </form> <div class="flex flex-col gap-14 basis-1/2"> <div class="text-[1.2rem] h-fit flex flex-col gap-4 bg-white p-10 clip-path shadow-lg font-medium"> <div> <a href="mailto:info@alalacampo.com">info@alalacampo.com</a> </div> <div> <p>+54 2644 391292</p> </div> <p class="font-normal pt-6 text-[1.2rem]">
No dudes en enviar tu consulta! Ya sea por email o por teléfono. Te
          responderemos lo antes posible!
</p> </div> </div> </div> </section>`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/components/Contact.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "IntroHero", $$IntroHero, {})} ${renderComponent($$result2, "GeneralPictures", $$GeneralPictures, {})} ${renderComponent($$result2, "HouseList", $$HouseList, {})} ${renderComponent($$result2, "CommonServices", $$CommonServices, {})} ${renderComponent($$result2, "Location", $$Location, {})} ${renderComponent($$result2, "VisitUs", $$VisitUs, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })}`;
}, "C:/Users/facup/FREELANCE/alala-campo2.0/src/pages/index.astro", void 0);

const $$file = "C:/Users/facup/FREELANCE/alala-campo2.0/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
