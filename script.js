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
      whyLorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      whyLorem:
        "نجمع بين الخبرة الزراعية العميقة والرؤية الثاقبة لسوق العقار لتعظيم قيمة استثمارك الزراعي. تضمن لك معرفتنا المتخصصة اتخاذ قرارات مدروسة ومربحة في سوق الأراضي الزراعية.",
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

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-target");
      tabs.forEach(function (t) {
        t.classList.toggle("active", t === tab);
      });
      panels.forEach(function (panel) {
        panel.classList.toggle("active", panel.getAttribute("data-panel") === target);
      });
    });
  });

  /* -------------------------------------------------------------------------- */
  /* Partners Strip Carousel                                                   */
  /* -------------------------------------------------------------------------- */
  var partnerShift = 0;
  var partnerNextBtn = document.querySelector(".partners-next");
  var partnerStrip = document.querySelector(".partners-strip");

  if (partnerNextBtn && partnerStrip) {
    partnerNextBtn.addEventListener("click", function () {
      partnerShift = partnerShift ? 0 : 28;
      partnerStrip.style.transform =
        "translateX(" +
        (document.documentElement.dir === "rtl" ? partnerShift : -partnerShift) +
        "px)";
    });
  }
})();
