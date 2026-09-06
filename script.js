/**
 * RASMCO GROUP - Main Script
 */
(function () {
  "use strict";

  /* -------------------------------------------------------------------------- */
  /* i18n Translation Dictionary                                               */
  /* -------------------------------------------------------------------------- */
  var i18n = {
    en: {
      navAbout: "About Us",
      navSubsidiaries: "Subsidiaries",
      navGoals: "Our Goals",
      navAffiliations: "Affiliations",
      navPartners: "Partners",
      navContact: "Contact Us",
      heroTitle: "We Cultivate Glory, We Craft Pride<br>We Build the Nation",
      heroDownload: "Click here to download company profile",
      whoTitle: "Who We Are?",
      whoCopy:
        "<strong>RASMCO Group</strong> is a leading Saudi economic ecosystem established in 1987, pioneering strategic integration across <strong>Agriculture, Industry, and Real Estate.</strong> Aligned with <strong>Saudi Vision 2030,</strong> we operate <strong>+30 million m²</strong> of agricultural land to achieve <strong>year-round self-sufficiency</strong> with <strong>100% natural, chemical-free produce and an annual yield exceeding 250,000 tons.</strong> Anchored by the <strong>Kingdom’s largest 33,000 m² industrial complex,</strong> a modern cold-chain logistics fleet, and a <strong>Zero Industrial Waste</strong> mandate, we combine scale with absolute sustainability. Today, we extend our expertise across <strong>neighboring Arab markets,</strong> delivering <strong>Saudi-made</strong> produce and industrial solutions built on trust, quality, and sustainable innovation.",
      readMore: "Read More",
      numbersTitle: "Rasmco In Numbers",
      numbersIntro:
        "<strong>RASMCO Group</strong> is a leading economic ecosystem in the Kingdom, driving strategic integration across three sectors: Agriculture, Industry, and Real Estate.",
      stat1: "Total Farmland Area",
      stat2: "Annual Agricultural Output",
      stat3: "Advanced Industrial Complex Area",
      stat4: "Annual Industrial Production Capacity",
      whyTitle: "Why Choose Us?",
      whyLead:
        "We combine deep agricultural expertise with unmatched real estate market insight to maximize the value of your farm or ranch investment. Our specialized knowledge ensures you make informed, profitable decisions in the agricultural land market.",
      whyExpTitle: "Experience",
      whyProdTitle: "Products",
      whyDelTitle: "Delivery",
      whyPriceTitle: "Pricing",
      whyExpCopy:
        "Decades of agricultural expertise and regional market knowledge help us make confident decisions, from cultivating the land to delivering value for every partner.",
      whyProdCopy:
        "From naturally grown produce to integrated industrial solutions, our products are developed with consistent quality, responsible production, and customer needs in mind.",
      whyDelCopy:
        "Our modern cold-chain logistics network keeps products fresh and protected, supporting dependable delivery from RASMCO farms and facilities to markets across the region.",
      whyPriceCopy:
        "We offer transparent, competitive pricing built around reliable quality, efficient operations, and long-term value for customers and business partners.",
      sectorsTitle: "Rasmco Group Sectors",
      sectorAgri:
        "Massive national production supporting the highest standards of biosecurity and sustainable quality",
      sectorInd:
        "An integrated industrial complex featuring state-of-the-art global production lines and advanced automated abattoirs with MAP smart packaging to ensure 100% natural purity",
      sectorRe:
        "The engineering pillar constructing and developing the group's facilities and logistics hubs",
      partnersTitle: "Rasmco Partners",
      partnersCopy:
        "We combine deep agricultural expertise with unmatched real estate market insight to maximize the value of your farm or ranch investment.<br><br>Our specialized knowledge ensures you make informed, profitable decisions in the agricultural land market.",
      partnersCopy1:
        "We combine deep agricultural expertise with unmatched real estate market insight to maximize the value of your farm or ranch investment.<br><br>Our specialized knowledge ensures you make informed, profitable decisions in the agricultural land market.",
      partnersCopy2:
        "Collaborating with leading retail partners like Carrefour enables wide-scale distribution of fresh, farm-grown produce with dependable consistency.<br><br>Together, we maintain stringent food safety and sustainable farm-to-shelf delivery across the region.",
      partnersCopy3:
        "Our strategic partnership with Farm Superstores connects high-yield domestic harvests directly with local community retail hubs.<br><br>Through integrated cold-chain operations, we preserve natural taste, freshness, and optimal nutritional quality.",
      partnersCopy4:
        "Supplying premier supermarket networks such as Al-Othaim Markets reinforces our commitment to national food security and self-sufficiency.<br><br>We deliver 100% natural, chemical-free agricultural produce every day to meet growing market demand.",
      followUs: "YOU CAN FOLLOW US ON",
      quickLinks: "QUICK LINKS",
      footerAbout:
        "RASMCO Group is a leading economic ecosystem in the Kingdom, driving strategic integration across three sectors: Agriculture, Industry, and Real Estate. In alignment with Saudi Vision 2030, the Group manages massive agricultural projects exceeding 30 million m² to secure supply chains and achieve self-sufficiency with 100% chemical-free, natural products year-round."
    },
    ar: {
      navAbout: "من نحن",
      navSubsidiaries: "الشركات التابعة",
      navGoals: "أهدافنا",
      navAffiliations: "الانتماءات",
      navPartners: "الشركاء",
      navContact: "اتصل بنا",
      heroTitle: "نزرع المجد، ونصنع الفخر<br>ونبني الوطن",
      heroDownload: "اضغط هنا لتحميل ملف الشركة",
      whoTitle: "من نحن؟",
      whoCopy:
        "<strong>مجموعة راسمكو</strong> منظومة اقتصادية سعودية رائدة تأسست عام 1987، وتقود تكاملاً استراتيجياً عبر <strong>الزراعة والصناعة والعقار.</strong> وبما يتوافق مع <strong>رؤية السعودية 2030،</strong> ندير أكثر من <strong>30 مليون م²</strong> من الأراضي الزراعية لتحقيق <strong>الاكتفاء الذاتي على مدار العام</strong> بإنتاج <strong>طبيعي 100% وخالٍ من المواد الكيميائية يتجاوز 250,000 طن سنوياً.</strong> واستناداً إلى <strong>أكبر مجمع صناعي في المملكة بمساحة 33,000 م²،</strong> وأسطول لوجستي حديث للسلسلة الباردة، والتزام <strong>صفر نفايات صناعية</strong>، نجمع بين الحجم والاستدامة المطلقة. واليوم نمد خبراتنا عبر <strong>الأسواق العربية المجاورة،</strong> لنقدم منتجات وحلولاً صناعية <strong>صنع في السعودية</strong> مبنية على الثقة والجودة والابتكار المستدام.",
      readMore: "اقرأ المزيد",
      numbersTitle: "راسمكو بالأرقام",
      numbersIntro:
        "<strong>مجموعة راسمكو</strong> منظومة اقتصادية رائدة في المملكة، تقود تكاملاً استراتيجياً عبر ثلاثة قطاعات: الزراعة، والصناعة، والعقار.",
      stat1: "إجمالي مساحة الأراضي الزراعية",
      stat2: "الإنتاج الزراعي السنوي",
      stat3: "مساحة المجمع الصناعي المتقدم",
      stat4: "الطاقة الإنتاجية الصناعية السنوية",
      whyTitle: "لماذا تختارنا؟",
      whyLead:
        "نجمع بين الخبرة الزراعية العميقة والرؤية الثاقبة لسوق العقار لتعظيم قيمة استثمارك الزراعي. تضمن لك معرفتنا المتخصصة اتخاذ قرارات مدروسة ومربحة في سوق الأراضي الزراعية.",
      whyExpTitle: "الخبرة",
      whyProdTitle: "المنتجات",
      whyDelTitle: "التوريد",
      whyPriceTitle: "التسعير",
      whyExpCopy:
        "تمنحنا عقود من الخبرة الزراعية والمعرفة العميقة بالأسواق الإقليمية القدرة على اتخاذ قرارات واثقة، بدءاً من زراعة الأرض وحتى تقديم قيمة حقيقية لكل شريك.",
      whyProdCopy:
        "من المنتجات الطبيعية المزروعة بعناية إلى الحلول الصناعية المتكاملة، نطور منتجاتنا وفق معايير ثابتة من الجودة والإنتاج المسؤول واحتياجات العملاء.",
      whyDelCopy:
        "تحافظ شبكة الخدمات اللوجستية الحديثة وسلسلة التبريد لدينا على جودة المنتجات ونضارتها، وتدعم توصيلها بشكل موثوق من مزارع ومنشآت راسمكو إلى أسواق المنطقة.",
      whyPriceCopy:
        "نقدم أسعاراً تنافسية وشفافة تقوم على جودة موثوقة وعمليات فعالة وقيمة مستدامة لعملائنا وشركائنا في الأعمال.",
      sectorsTitle: "قطاعات مجموعة راسمكو",
      sectorAgri:
        "إنتاج وطني ضخم يدعم أعلى معايير الأمن الحيوي والجودة المستدامة",
      sectorInd:
        "مجمع صناعي متكامل يضم خطوط إنتاج عالمية ومسالخ آلية متقدمة مع تعبئة MAP الذكية لضمان نقاء طبيعي 100%",
      sectorRe:
        "الركن الهندسي الذي يشيد ويطور منشآت المجموعة ومراكزها اللوجستية",
      partnersTitle: "شركاء راسمكو",
      partnersCopy:
        "نجمع بين الخبرة الزراعية العميقة والرؤية الثاقبة لسوق العقار لتعظيم قيمة استثمارك الزراعي.<br><br>تضمن لك معرفتنا المتخصصة اتخاذ قرارات مدروسة ومربحة في سوق الأراضي الزراعية.",
      partnersCopy1:
        "نجمع بين الخبرة الزراعية العميقة والرؤية الثاقبة لسوق العقار لتعظيم قيمة استثمارك الزراعي.<br><br>تضمن لك معرفتنا المتخصصة اتخاذ قرارات مدروسة ومربحة في سوق الأراضي الزراعية.",
      partnersCopy2:
        "يمكّننا التعاون مع كبرى سلاسل التجزئة مثل كارفور من توزيع منتجات زراعية طازجة بمواصفات موثوقة وجودة ثابتة.<br><br>معاً نحافظ على أعلى معايير سلامة الأغذية وكفاءة التوريد المستدام من المزرعة إلى المتجر.",
      partnersCopy3:
        "تسهم شراكتنا الاستراتيجية مع أسواق المزرعة في ربط الحصاد الزراعي المحلي بمراكز التوزيع المجتمعية في مختلف المدن.<br><br>ومن خلال سلسلة التبريد المتقدمة، نضمن الحفاظ على النقاء الطبيعي والنضارة والقيمة الغذائية.",
      partnersCopy4:
        "يعزز تزويد شبكات التجزئة الرائدة مثل أسواق العثيم التزامنا الراسخ بدعم الأمن الغذائي الوطني وتحقيق الاكتفاء الذاتي.<br><br>نقدم محاصيل طبيعية 100% وخالية من المواد الكيميائية يومياً لتلبية احتياجات السوق المتنامية.",
      followUs: "يمكنكم متابعتنا عبر",
      quickLinks: "روابط سريعة",
      footerAbout:
        "مجموعة راسمكو منظومة اقتصادية رائدة في المملكة، تقود تكاملاً استراتيجياً عبر ثلاثة قطاعات: الزراعة، والصناعة، والعقار. وبما يتوافق مع رؤية السعودية 2030، تدير المجموعة مشاريع زراعية ضخمة تتجاوز 30 مليون م² لتأمين سلاسل الإمداد وتحقيق الاكتفاء الذاتي بمنتجات طبيعية خالية من المواد الكيميائية على مدار العام."
    }
  };

  function applyLang(lang) {
    var dict = i18n[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key]) el.innerHTML = dict[key];
    });

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.textContent = lang === "ar" ? "English" : "العربية";
      toggle.setAttribute("data-lang", lang === "ar" ? "en" : "ar");
    }
  }

  var langToggleBtn = document.getElementById("langToggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", function () {
      applyLang(this.getAttribute("data-lang"));
    });
  }

  /* -------------------------------------------------------------------------- */
  /* Hero Background Carousel (5 Slides)                                       */
  /* -------------------------------------------------------------------------- */
  var heroSection = document.getElementById("home");
  var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-bg-slide"));
  var dots = Array.prototype.slice.call(document.querySelectorAll("#heroDots .dot"));
  var prevBtn = document.querySelector(".hero-arrow-prev");
  var nextBtn = document.querySelector(".hero-arrow-next");

  var currentSlideIndex = 0;
  var isSliding = false;
  var autoSlideIntervalMs = 5000;
  var autoSlideTimer = null;

  function updateDots(targetIndex) {
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === targetIndex);
    });
  }

  /**
   * Transition between slides.
   * @param {number} targetIndex Target slide index
   * @param {'next' | 'prev'} direction Transition direction
   */
  function goToSlide(targetIndex, direction) {
    if (slides.length <= 1) return;
    if (isSliding || targetIndex === currentSlideIndex) return;

    isSliding = true;
    var currentSlide = slides[currentSlideIndex];
    var nextSlide = slides[targetIndex];

    updateDots(targetIndex);

    if (direction === "next") {
      // Incoming slide enters from right, moving right-to-left
      nextSlide.className = "hero-bg-slide from-right";
      void nextSlide.offsetWidth; // Trigger browser reflow

      currentSlide.className = "hero-bg-slide active to-left";
      nextSlide.className = "hero-bg-slide from-right animate";
    } else {
      // Incoming slide enters from left, moving left-to-right
      nextSlide.className = "hero-bg-slide from-left";
      void nextSlide.offsetWidth; // Trigger browser reflow

      currentSlide.className = "hero-bg-slide active to-right";
      nextSlide.className = "hero-bg-slide from-left animate";
    }

    var finishTransition = function () {
      slides.forEach(function (slide, idx) {
        if (idx === targetIndex) {
          slide.className = "hero-bg-slide active";
        } else {
          slide.className = "hero-bg-slide";
        }
      });
      currentSlideIndex = targetIndex;
      isSliding = false;
    };

    setTimeout(finishTransition, 820);
  }

  function nextSlide() {
    var nextIndex = (currentSlideIndex + 1) % slides.length;
    goToSlide(nextIndex, "next");
  }

  function prevSlide() {
    var prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, "prev");
  }

  function startAutoplay() {
    stopAutoplay();
    autoSlideTimer = setInterval(function () {
      nextSlide();
    }, autoSlideIntervalMs);
  }

  function stopAutoplay() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Arrow navigation event listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      nextSlide();
      resetAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      prevSlide();
      resetAutoplay();
    });
  }

  // Dot navigation event listeners
  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      if (index === currentSlideIndex) return;
      var direction = index > currentSlideIndex ? "next" : "prev";
      goToSlide(index, direction);
      resetAutoplay();
    });
  });

  // Pause automatic sliding on hover
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoplay);
    heroSection.addEventListener("mouseleave", startAutoplay);
  }

  // Initialize autoplay
  if (slides.length > 1) {
    startAutoplay();
  }

  /* -------------------------------------------------------------------------- */
  /* Who We Are Scroll Reveal Animation                                        */
  /* -------------------------------------------------------------------------- */
  var whoSection = document.querySelector(".who-section");
  if (whoSection) {
    var revealWho = function () {
      whoSection.classList.add("is-visible");
    };

    if ("IntersectionObserver" in window) {
      var whoObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              revealWho();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      whoObserver.observe(whoSection);
    } else {
      revealWho();
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Sectors Scroll Reveal Animation (One by One)                               */
  /* -------------------------------------------------------------------------- */
  var sectorsSection = document.querySelector(".sectors-section") || document.getElementById("sectors");
  var sectorCards = document.querySelectorAll(".sector-item");

  if (sectorsSection) {
    var revealSectors = function () {
      sectorsSection.classList.add("is-visible");
      sectorCards.forEach(function (card, index) {
        setTimeout(function () {
          card.classList.add("is-visible");
        }, 150 + index * 320);
      });
    };

    if ("IntersectionObserver" in window) {
      var sectorsObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              revealSectors();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      sectorsObserver.observe(sectorsSection);

      // Also observe cards individually for incremental scrolling
      var cardObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25, rootMargin: "0px 0px -30px 0px" }
      );

      sectorCards.forEach(function (card) {
        cardObserver.observe(card);
      });
    } else {
      revealSectors();
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Sector Rollover                                                            */
  /* -------------------------------------------------------------------------- */
  var sectorItems = document.querySelectorAll(".sector-item");

  sectorItems.forEach(function (sectorItem) {
    sectorItem.addEventListener("mouseenter", function () {
      sectorItems.forEach(function (item) {
        item.classList.remove("active");
      });
      sectorItem.classList.add("active");
    });

    sectorItem.addEventListener("mouseleave", function () {
      sectorItems.forEach(function (item) {
        item.classList.remove("active");
      });
      if (sectorItems[0]) sectorItems[0].classList.add("active");
    });
  });

  /* -------------------------------------------------------------------------- */
  /* Rasmco In Numbers Scroll Reveal & Count-up Animation                      */
  /* -------------------------------------------------------------------------- */
  var numbersSection = document.getElementById("goals") || document.querySelector(".numbers-section");
  var statValues = Array.prototype.slice.call(document.querySelectorAll(".stat-value"));
  var hasCountedNumbers = false;

  function formatStatNumber(value) {
    return Math.round(value).toLocaleString("en-US");
  }

  function countStat(statValue) {
    var numberTextNode = Array.prototype.slice.call(statValue.childNodes).find(function (node) {
      return node.nodeType === 3 && /\d/.test(node.nodeValue);
    });
    if (!numberTextNode) return;

    var target = parseInt(statValue.dataset.countTarget, 10);
    if (!target) return;

    var trailingSpace = /\s$/.test(numberTextNode.nodeValue) ? " " : "";
    numberTextNode.nodeValue = "0" + trailingSpace;
    var startTime = null;
    var duration = 5000;

    function updateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = 1 - Math.pow(1 - progress, 4);
      numberTextNode.nodeValue = formatStatNumber(target * easedProgress) + trailingSpace;

      if (progress < 1) {
        window.requestAnimationFrame(updateCount);
      }
    }

    window.requestAnimationFrame(updateCount);
  }

  function startNumbersCount() {
    if (hasCountedNumbers) return;
    hasCountedNumbers = true;
    statValues.forEach(countStat);
  }

  if (numbersSection) {
    if (statValues.length) {
      statValues.forEach(function (statValue) {
        var numberTextNode = Array.prototype.slice.call(statValue.childNodes).find(function (node) {
          return node.nodeType === 3 && /\d/.test(node.nodeValue);
        });
        if (numberTextNode) {
          statValue.dataset.countTarget = numberTextNode.nodeValue.replace(/[^\d]/g, "");
          numberTextNode.nodeValue = "0" + (/\s$/.test(numberTextNode.nodeValue) ? " " : "");
        }
      });
    }

    var triggerNumbers = function () {
      numbersSection.classList.add("is-visible");
      if (statValues.length) {
        setTimeout(startNumbersCount, 250);
      }
    };

    if ("IntersectionObserver" in window) {
      var numbersObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              triggerNumbers();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      numbersObserver.observe(numbersSection);
    } else {
      triggerNumbers();
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Why Choose Us Scroll Reveal Animation                                     */
  /* -------------------------------------------------------------------------- */
  var whySection = document.querySelector(".why-section");
  if (whySection) {
    var revealWhy = function () {
      whySection.classList.add("is-visible");
    };

    if ("IntersectionObserver" in window) {
      var whyObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              revealWhy();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      whyObserver.observe(whySection);
    } else {
      revealWhy();
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Why Choose Us Tabs                                                         */
  /* -------------------------------------------------------------------------- */
  var tabs = document.querySelectorAll(".why-tab");
  var panels = document.querySelectorAll(".why-panel");
  var whySlideIndicators = document.querySelectorAll(".slide_box span");
  var whySlideIndex = 0;
  var whyAutoSlideDelay = 3500;
  var whyAutoSlideTimer = null;

  panels.forEach(function (panel, index) {
    if (panel.classList.contains("active")) {
      whySlideIndex = index;
    }
  });

  function setWhySlide(index) {
    if (!panels.length) return;

    whySlideIndex = (index + panels.length) % panels.length;

    panels.forEach(function (panel) {
      panel.classList.toggle("active", panels[whySlideIndex] === panel);
    });
    whySlideIndicators.forEach(function (indicator, indicatorIndex) {
      indicator.classList.toggle("active_slide", indicatorIndex === whySlideIndex);
      indicator.setAttribute("aria-pressed", indicatorIndex === whySlideIndex ? "true" : "false");
    });
  }

  function stopWhyAutoSlide() {
    if (whyAutoSlideTimer) {
      clearInterval(whyAutoSlideTimer);
      whyAutoSlideTimer = null;
    }
  }

  function startWhyAutoSlide() {
    stopWhyAutoSlide();
    if (panels.length > 1) {
      whyAutoSlideTimer = setInterval(function () {
        setWhySlide(whySlideIndex + 1);
      }, whyAutoSlideDelay);
    }
  }

  whySlideIndicators.forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      setWhySlide(index);
      startWhyAutoSlide();
    });

    indicator.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setWhySlide(index);
        startWhyAutoSlide();
      }
    });
  });

  setWhySlide(whySlideIndex);
  startWhyAutoSlide();

  /* -------------------------------------------------------------------------- */
  /* Partners Scroll Reveal Animation                                           */
  /* -------------------------------------------------------------------------- */
  var partnersSection = document.querySelector(".partners-section") || document.getElementById("partners");
  if (partnersSection) {
    var revealPartners = function () {
      partnersSection.classList.add("is-visible");
    };

    if ("IntersectionObserver" in window) {
      var partnersObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              revealPartners();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      partnersObserver.observe(partnersSection);
    } else {
      revealPartners();
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Partners Slider (partner1.png - partner4.png with auto slide & button)     */
  /* -------------------------------------------------------------------------- */
  var partnersStage = document.querySelector(".partners-stage");
  var partnersViewport = document.querySelector(".partners-viewport");
  var partnersTrack = document.querySelector(".partners-track");
  var partnersTextTrack = document.querySelector(".partners-text-track");
  var partnerNextBtn = document.querySelector(".partners-next");
  var partnerSlides = document.querySelectorAll(".partner-slide");

  if (partnersTrack && partnerSlides.length > 0) {
    var isSliding = false;
    var autoSlideDelay = 3000;
    var autoSlideTimer = null;

    function syncActiveClasses() {
      var slides = partnersTrack.querySelectorAll(".partner-slide");
      slides.forEach(function (slide, idx) {
        slide.classList.remove(
          "active-exit",
          "active-exit-2",
          "active-exit-3",
          "active-1",
          "active-2",
          "active-3",
          "active-4"
        );
        if (idx === 0) {
          slide.classList.add("active-1");
        } else if (idx === 1) {
          slide.classList.add("active-2");
        } else if (idx === 2) {
          slide.classList.add("active-3");
        } else if (idx === 3) {
          slide.classList.add("active-4");
        }
      });
    }

    function advancePartners(steps) {
      if (isSliding || steps <= 0) return;
      var slides = partnersTrack.querySelectorAll(".partner-slide");
      if (slides.length < 4 + steps) return;
      isSliding = true;

      var trackStyle = window.getComputedStyle(partnersTrack);
      var gap = parseFloat(trackStyle.gap) || 22;
      var isRtl = document.documentElement.dir === "rtl";

      // Calculate move distance to bring slides[steps] to position 0
      var moveDistance = 0;
      for (var i = 0; i < steps; i++) {
        moveDistance += slides[i].offsetWidth + gap;
        slides[i].classList.remove("active-1", "active-2", "active-3", "active-4");
        if (i === 0) {
          slides[i].classList.add("active-exit");
        } else if (i === 1) {
          slides[i].classList.add("active-exit-2");
        } else {
          slides[i].classList.add("active-exit-3");
        }
      }

      // Promote next slides to active-1, active-2, active-3, active-4
      for (var j = 0; j < 4; j++) {
        var targetSlide = slides[steps + j];
        if (targetSlide) {
          targetSlide.classList.remove(
            "active-exit",
            "active-exit-2",
            "active-exit-3",
            "active-1",
            "active-2",
            "active-3",
            "active-4"
          );
          targetSlide.classList.add("active-" + (j + 1));
        }
      }

      // Smoothly animate the partner logos track
      partnersTrack.style.transition = "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)";
      partnersTrack.style.transform = "translateX(" + (isRtl ? moveDistance : -moveDistance) + "px)";

      // Smoothly animate the partner copy text track
      if (partnersTextTrack) {
        partnersTextTrack.style.transition = "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)";
        partnersTextTrack.style.transform = "translateX(" + (isRtl ? (steps * 100) : (-steps * 100)) + "%)";
      }

      setTimeout(function () {
        // Move the exited logo slides to the back of the track
        for (var k = 0; k < steps; k++) {
          var s = partnersTrack.firstElementChild;
          if (s) {
            s.classList.remove("active-exit", "active-exit-2", "active-exit-3");
            partnersTrack.appendChild(s);
          }
        }
        // Seamlessly reset track transform back to 0 without transition
        partnersTrack.style.transition = "none";
        partnersTrack.style.transform = "translateX(0)";
        void partnersTrack.offsetWidth; // force reflow

        // Move exited text slides to the back of the text track
        if (partnersTextTrack) {
          for (var t = 0; t < steps; t++) {
            var firstText = partnersTextTrack.firstElementChild;
            if (firstText) {
              partnersTextTrack.appendChild(firstText);
            }
          }
          partnersTextTrack.style.transition = "none";
          partnersTextTrack.style.transform = "translateX(0)";
          void partnersTextTrack.offsetWidth;
        }

        syncActiveClasses();
        isSliding = false;
      }, 720);
    }

    function nextPartner() {
      advancePartners(1);
    }

    function prevPartner() {
      if (isSliding) return;
      var slides = partnersTrack.querySelectorAll(".partner-slide");
      if (slides.length < 4) return;
      isSliding = true;

      var lastSlide = partnersTrack.lastElementChild;
      var isRtl = document.documentElement.dir === "rtl";

      // Prepend lastSlide so it enters from the edge
      partnersTrack.insertBefore(lastSlide, partnersTrack.firstElementChild);

      // Temporarily give lastSlide the active-1 size to measure offset
      lastSlide.classList.remove(
        "active-exit",
        "active-exit-2",
        "active-exit-3",
        "active-1",
        "active-2",
        "active-3",
        "active-4"
      );
      lastSlide.classList.add("active-1");

      var trackStyle = window.getComputedStyle(partnersTrack);
      var gap = parseFloat(trackStyle.gap) || 22;
      var moveDistance = lastSlide.offsetWidth + gap;

      // Immediately offset track so lastSlide is outside the viewport without animation
      partnersTrack.style.transition = "none";
      partnersTrack.style.transform = "translateX(" + (isRtl ? moveDistance : -moveDistance) + "px)";
      void partnersTrack.offsetWidth; // force reflow

      // Prepend last text slide in text track
      if (partnersTextTrack) {
        var lastText = partnersTextTrack.lastElementChild;
        if (lastText) {
          partnersTextTrack.insertBefore(lastText, partnersTextTrack.firstElementChild);
          partnersTextTrack.style.transition = "none";
          partnersTextTrack.style.transform = "translateX(" + (isRtl ? "100%" : "-100%") + ")";
          void partnersTextTrack.offsetWidth;
          partnersTextTrack.style.transition = "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)";
          partnersTextTrack.style.transform = "translateX(0)";
        }
      }

      // Demote current slides
      if (slides[0]) {
        slides[0].classList.remove("active-1");
        slides[0].classList.add("active-2");
      }
      if (slides[1]) {
        slides[1].classList.remove("active-2");
        slides[1].classList.add("active-3");
      }
      if (slides[2]) {
        slides[2].classList.remove("active-3");
        slides[2].classList.add("active-4");
      }
      if (slides[3]) {
        slides[3].classList.remove("active-4");
      }

      // Smoothly animate track back to 0
      partnersTrack.style.transition = "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)";
      partnersTrack.style.transform = "translateX(0)";

      setTimeout(function () {
        syncActiveClasses();
        isSliding = false;
      }, 720);
    }

    function startAutoSlide() {
      stopAutoSlide();
      autoSlideTimer = setInterval(function () {
        nextPartner();
      }, autoSlideDelay);
    }

    function stopAutoSlide() {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
      }
    }

    function resetAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    // Next button click handler
    if (partnerNextBtn) {
      partnerNextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        nextPartner();
        resetAutoSlide();
      });
    }

    // Pause on hover
    if (partnersStage) {
      partnersStage.addEventListener("mouseenter", stopAutoSlide);
      partnersStage.addEventListener("mouseleave", startAutoSlide);
    }

    // Drag & Click handling directly on partnersViewport (isolated from next button)
    if (partnersViewport) {
      var isDragging = false;
      var hasDragged = false;
      var startX = 0;
      var startY = 0;
      var lastDiffX = 0;
      var pointerDownId = null;

      partnersViewport.addEventListener("pointerdown", function (e) {
        if (isSliding) return;
        if (e.button !== undefined && e.button !== 0) return;

        isDragging = true;
        hasDragged = false;
        startX = e.clientX;
        startY = e.clientY;
        lastDiffX = 0;
        pointerDownId = e.pointerId;
        stopAutoSlide();
      });

      partnersViewport.addEventListener("pointermove", function (e) {
        if (!isDragging || isSliding) return;

        var diffX = e.clientX - startX;
        var diffY = e.clientY - startY;

        if (!hasDragged) {
          // If vertical scrolling on touch, cancel horizontal drag
          if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 8) {
            isDragging = false;
            return;
          }
          // Only start dragging once horizontal movement exceeds threshold
          if (Math.abs(diffX) > 8) {
            hasDragged = true;
            partnersViewport.classList.add("is-dragging");
            try {
              partnersViewport.setPointerCapture(pointerDownId);
            } catch (err) {}
          }
        }

        if (hasDragged) {
          lastDiffX = diffX;
          var isRtl = document.documentElement.dir === "rtl";
          var visualOffset = diffX;
          // Apply slight resistance when dragging backwards
          if ((!isRtl && diffX > 0) || (isRtl && diffX < 0)) {
            visualOffset = diffX * 0.35;
          }
          partnersTrack.style.transition = "none";
          partnersTrack.style.transform = "translateX(" + visualOffset + "px)";

          if (partnersTextTrack && partnersViewport) {
            var textDragPct = (visualOffset / partnersViewport.offsetWidth) * 100;
            partnersTextTrack.style.transition = "none";
            partnersTextTrack.style.transform = "translateX(" + textDragPct + "%)";
          }
        }
      });

      function endDrag(e) {
        if (!isDragging) return;
        isDragging = false;
        partnersViewport.classList.remove("is-dragging");
        try {
          if (pointerDownId !== null) {
            partnersViewport.releasePointerCapture(pointerDownId);
          }
        } catch (err) {}

        if (hasDragged) {
          var isRtl = document.documentElement.dir === "rtl";
          var threshold = 40;

          if ((!isRtl && lastDiffX < -threshold) || (isRtl && lastDiffX > threshold)) {
            nextPartner();
          } else if ((!isRtl && lastDiffX > threshold) || (isRtl && lastDiffX < -threshold)) {
            prevPartner();
          } else {
            // Dragged under threshold: smoothly snap back
            partnersTrack.style.transition = "transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)";
            partnersTrack.style.transform = "translateX(0)";
            if (partnersTextTrack) {
              partnersTextTrack.style.transition = "transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)";
              partnersTextTrack.style.transform = "translateX(0)";
            }
          }
          resetAutoSlide();
        }
      }

      partnersViewport.addEventListener("pointerup", endDrag);
      partnersViewport.addEventListener("pointercancel", endDrag);

      // Click on partner slides to advance to that active position
      partnersViewport.addEventListener("click", function (e) {
        if (hasDragged) {
          e.preventDefault();
          e.stopPropagation();
          hasDragged = false;
          return;
        }

        var slide = e.target.closest(".partner-slide");
        if (!slide) return;

        var currentSlides = Array.from(partnersTrack.querySelectorAll(".partner-slide"));
        var position = currentSlides.indexOf(slide);
        if (position > 0 && position < 4) {
          advancePartners(position);
          resetAutoSlide();
        }
      });
    }

    function handleResize() {
      if (!isSliding) {
        partnersTrack.style.transition = "none";
        partnersTrack.style.transform = "translateX(0)";
        if (partnersTextTrack) {
          partnersTextTrack.style.transition = "none";
          partnersTextTrack.style.transform = "translateX(0)";
        }
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    var prevApplyLang = applyLang;
    applyLang = function (lang) {
      prevApplyLang(lang);
      if (!isSliding) {
        partnersTrack.style.transition = "none";
        partnersTrack.style.transform = "translateX(0)";
        if (partnersTextTrack) {
          partnersTextTrack.style.transition = "none";
          partnersTextTrack.style.transform = "translateX(0)";
        }
        syncActiveClasses();
      }
    };

    syncActiveClasses();
    startAutoSlide();
  }

  /* -------------------------------------------------------------------------- */
  /* Footer Scroll Reveal Animation                                             */
  /* -------------------------------------------------------------------------- */
  var footerSection = document.querySelector(".site-footer") || document.getElementById("contact");
  if (footerSection) {
    var revealFooter = function () {
      footerSection.classList.add("is-visible");
    };

    if ("IntersectionObserver" in window) {
      var footerObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              revealFooter();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
      );
      footerObserver.observe(footerSection);
    } else {
      revealFooter();
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Subpage (subpage.html) Scroll Reveal Animations                            */
  /* -------------------------------------------------------------------------- */
  var pageBanner = document.querySelector(".page-banner");
  if (pageBanner) {
    setTimeout(function () {
      pageBanner.classList.add("is-visible");
    }, 120);
  }

  var sectorSelectSection = document.querySelector(".sector-select-section");
  var subpageSectorCards = document.querySelectorAll(".sector-select-section .sector-card");

  if (sectorSelectSection) {
    var revealSectorSelect = function () {
      sectorSelectSection.classList.add("is-visible");
      subpageSectorCards.forEach(function (card, index) {
        setTimeout(function () {
          card.classList.add("is-visible");
        }, 120 + index * 180);
      });
    };

    if ("IntersectionObserver" in window) {
      var sectorSelectObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              revealSectorSelect();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      sectorSelectObserver.observe(sectorSelectSection);

      var subpageCardObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -30px 0px" }
      );

      subpageSectorCards.forEach(function (card) {
        subpageCardObserver.observe(card);
      });
    } else {
      revealSectorSelect();
    }
  }

  var sectorDetailBand = document.querySelector(".sector-detail-band");
  if (sectorDetailBand) {
    var revealSectorBand = function () {
      sectorDetailBand.classList.add("is-visible");
    };

    if ("IntersectionObserver" in window) {
      var sectorBandObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              revealSectorBand();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
      );
      sectorBandObserver.observe(sectorDetailBand);
    } else {
      revealSectorBand();
    }
  }

  var productsSection = document.querySelector(".products-section");
  var productRows = document.querySelectorAll(".product-row");

  if (productsSection) {
    var revealProductsHeader = function () {
      productsSection.classList.add("is-visible");
    };

    if ("IntersectionObserver" in window) {
      var productsHeaderObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              revealProductsHeader();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
      productsHeaderObserver.observe(productsSection);

      var productRowObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      productRows.forEach(function (row) {
        productRowObserver.observe(row);
      });
    } else {
      revealProductsHeader();
      productRows.forEach(function (row) {
        row.classList.add("is-visible");
      });
    }
  }

  if (window.location.hash) {
    var targetEl = document.querySelector(window.location.hash);
    if (targetEl) {
      targetEl.classList.add("is-visible");
      var subcards = targetEl.querySelectorAll(".sector-card, .product-row");
      subcards.forEach(function (c) {
        c.classList.add("is-visible");
      });
    }
  }
})();
