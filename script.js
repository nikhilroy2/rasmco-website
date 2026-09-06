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

  setWhySlide(whySlideIndex);
  startWhyAutoSlide();

  /* -------------------------------------------------------------------------- */
  /* Partners Slider (partner1.png - partner4.png with auto slide & button)     */
  /* -------------------------------------------------------------------------- */
  var partnersStage = document.querySelector(".partners-stage");
  var partnersTrack = document.querySelector(".partners-track");
  var partnerNextBtn = document.querySelector(".partners-next");
  var partnerSlides = document.querySelectorAll(".partner-slide");

  if (partnersTrack && partnerSlides.length > 0) {
    var baseCount = 4; // 4 unique partner logos
    var currentStep = 0;
    var isSliding = false;
    var autoSlideDelay = 3000;
    var autoSlideTimer = null;

    function updateActiveClasses(stepIndex) {
      partnerSlides.forEach(function (slide, idx) {
        slide.classList.remove("active-1", "active-2", "active-3", "active-4");
        var pos = idx - stepIndex;
        if (pos === 0) {
          slide.classList.add("active-1");
        } else if (pos === 1) {
          slide.classList.add("active-2");
        } else if (pos === 2) {
          slide.classList.add("active-3");
        } else if (pos === 3) {
          slide.classList.add("active-4");
        }
      });
    }

    var baseWidths = [];

    function measureBaseWidths() {
      baseWidths = [];
      var lastImg = partnerSlides[partnerSlides.length - 1].querySelector("img");
      var naturalRatio = (lastImg && lastImg.naturalWidth && lastImg.naturalHeight)
        ? (lastImg.naturalWidth / lastImg.naturalHeight)
        : 0.866;
      var baseH = parseFloat(window.getComputedStyle(lastImg || partnerSlides[partnerSlides.length - 1]).height) || 100;
      var fallbackW = Math.round(baseH * naturalRatio);

      for (var i = 0; i < baseCount; i++) {
        // Clones 4, 5, 6, 7 are in base state, providing the exact base inactive width
        var cloneSlide = partnerSlides[baseCount + i];
        var w = (cloneSlide && cloneSlide.offsetWidth > 0) ? cloneSlide.offsetWidth : fallbackW;
        baseWidths.push(w);
      }
    }

    function getStepOffset(stepIndex) {
      if (stepIndex === 0) return 0;
      var trackStyle = window.getComputedStyle(partnersTrack);
      var gap = parseFloat(trackStyle.gap) || 22;

      var offset = 0;
      for (var i = 0; i < stepIndex; i++) {
        var w = (baseWidths[i % baseCount] && baseWidths[i % baseCount] > 0)
          ? baseWidths[i % baseCount]
          : 87;
        offset += w + gap;
      }
      return offset;
    }

    function applyTransform(stepIndex, animated) {
      var offset = getStepOffset(stepIndex);
      var isRtl = document.documentElement.dir === "rtl";
      partnersTrack.style.transition = animated
        ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
        : "none";
      partnersTrack.style.transform =
        "translateX(" + (isRtl ? offset : -offset) + "px)";
    }

    function nextPartner() {
      if (isSliding) return;
      isSliding = true;

      currentStep++;
      updateActiveClasses(currentStep);
      applyTransform(currentStep, true);

      // If we reached the end of the 4 original slides, seamlessly reset to 0
      if (currentStep >= baseCount) {
        setTimeout(function () {
          currentStep = 0;
          updateActiveClasses(0);
          applyTransform(0, false);
          void partnersTrack.offsetWidth; // Force reflow
          isSliding = false;
        }, 620);
      } else {
        setTimeout(function () {
          isSliding = false;
        }, 620);
      }
    }

    function prevPartner() {
      if (isSliding) return;
      isSliding = true;

      if (currentStep === 0) {
        // Seamlessly snap to baseCount clone (looks identical to 0), then animate back to baseCount - 1
        currentStep = baseCount;
        updateActiveClasses(baseCount);
        applyTransform(baseCount, false);
        void partnersTrack.offsetWidth; // Force reflow

        setTimeout(function () {
          currentStep = baseCount - 1;
          updateActiveClasses(currentStep);
          applyTransform(currentStep, true);
          setTimeout(function () {
            isSliding = false;
          }, 620);
        }, 20);
      } else {
        currentStep--;
        updateActiveClasses(currentStep);
        applyTransform(currentStep, true);
        setTimeout(function () {
          isSliding = false;
        }, 620);
      }
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

    if (partnerNextBtn) {
      partnerNextBtn.addEventListener("click", function () {
        nextPartner();
        resetAutoSlide();
      });
    }

    // Pause auto slide on mouse hover
    if (partnersStage) {
      partnersStage.addEventListener("mouseenter", stopAutoSlide);
      partnersStage.addEventListener("mouseleave", startAutoSlide);

      // Mobile Touch Gestures (Swipe to slide)
      var touchStartX = 0;
      var touchStartY = 0;
      var touchEndX = 0;
      var touchEndY = 0;

      partnersStage.addEventListener("touchstart", function (e) {
        if (e.touches && e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchEndX = touchStartX;
          touchEndY = touchStartY;
          stopAutoSlide();
        }
      }, { passive: true });

      partnersStage.addEventListener("touchmove", function (e) {
        if (e.touches && e.touches.length === 1) {
          touchEndX = e.touches[0].clientX;
          touchEndY = e.touches[0].clientY;
        }
      }, { passive: true });

      partnersStage.addEventListener("touchend", function () {
        var diffX = touchEndX - touchStartX;
        var diffY = touchEndY - touchStartY;
        var isRtl = document.documentElement.dir === "rtl";
        var threshold = 35; // minimum horizontal swipe distance

        // Only trigger if horizontal swipe is greater than vertical movement
        if (Math.abs(diffX) > threshold && Math.abs(diffX) > Math.abs(diffY)) {
          if ((!isRtl && diffX < 0) || (isRtl && diffX > 0)) {
            nextPartner();
          } else {
            prevPartner();
          }
        }
        resetAutoSlide();
      });
    }

    function handleResize() {
      measureBaseWidths();
      applyTransform(currentStep, false);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("load", handleResize);

    var prevApplyLang = applyLang;
    applyLang = function (lang) {
      prevApplyLang(lang);
      handleResize();
    };

    measureBaseWidths();
    updateActiveClasses(0);
    applyTransform(0, false);
    startAutoSlide();
  }
})();
