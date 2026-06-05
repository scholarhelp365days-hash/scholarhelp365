/* ============================================================
   SCHOLAR HELP 365 — interactions (vanilla JS)
   ============================================================ */
(function () {
  "use strict";
  var WA = "918447711925";
  function wa(msg) {
    return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- Services data ---------- */
  var services = [
    ["📜", "Thesis Writing Assistance", "Structured, well-argued thesis support from framing to final draft, aligned to your guidelines."],
    ["🎓", "Dissertation Assistance", "End-to-end dissertation guidance across chapters, methodology, and coherent argumentation."],
    ["📝", "Research Paper Writing", "Clear, publication-ready research papers built on solid sources and sound structure."],
    ["📚", "Journal Publication Support", "Manuscript preparation, formatting, and submission guidance for target journals."],
    ["🧾", "Synopsis Writing", "Concise, compelling synopses that frame your study and win committee approval."],
    ["🔍", "Literature Review Writing", "Comprehensive, critical literature reviews that map the field and locate your gap."],
    ["📋", "Proposal Writing", "Persuasive research proposals with clear objectives, rationale, and methodology."],
    ["📊", "SPSS Data Analysis", "Accurate SPSS analysis with clean output and interpretation you can defend."],
    ["📈", "Statistical Analysis", "Robust statistical testing and modelling explained in plain, defensible language."],
    ["🛡️", "Plagiarism Checking & Removal", "Originality checks and careful rewriting so your work reads cleanly and ethically."],
    ["✍️", "Assignment Assistance", "Well-researched, properly referenced assignments delivered on time."],
    ["🔬", "Case Study Assistance", "Analytical case studies with structured frameworks and actionable insight."],
    ["🖥️", "PPT & Presentation Preparation", "Polished, defense-ready presentations that communicate your work with impact."],
    ["📖", "Academic Editing & Proofreading", "Meticulous editing for clarity, grammar, flow, and consistent academic style."]
  ];

  var grid = document.getElementById("serviceGrid");
  if (grid) {
    var html = "";
    for (var i = 0; i < services.length; i++) {
      var s = services[i];
      var msg = "Hi Scholar Help 365, I'm interested in " + s[1] + ". Can you share details?";
      html +=
        '<article class="service-card reveal' + (i % 3 === 1 ? " d1" : i % 3 === 2 ? " d2" : "") + '">' +
        '<span class="svc-ic">' + s[0] + "</span>" +
        "<h3>" + s[1] + "</h3>" +
        "<p>" + s[2] + "</p>" +
        '<a class="svc-link" href="' + wa(msg) + '" target="_blank" rel="noopener">' +
        '<svg class="wa-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Z"/></svg>' +
        "Enquire on WhatsApp <span class=\"arr\">→</span></a></article>";
    }
    grid.innerHTML = html;
  }

  /* ---------- FAQ data ---------- */
  var faqs = [
    ["What services does Scholar Help 365 offer?", "We provide thesis and dissertation assistance, research paper writing, journal publication support, synopsis and proposal writing, literature reviews, SPSS and statistical analysis, plagiarism checking and removal, assignment and case study assistance, presentation preparation, and academic editing and proofreading."],
    ["Who do you work with?", "Students, PhD scholars, researchers, and working professionals across a wide range of disciplines and academic levels — from undergraduate coursework to doctoral research."],
    ["How do I get started?", "Just message us on WhatsApp with your topic, guidelines, deadline, and any files. We review the details and send a clear quotation. Once you confirm with the advance, we begin."],
    ["How does payment work?", "Work begins only after a mandatory advance payment. The remaining balance is paid before final delivery, and complete final deliverables are released only after full payment."],
    ["Are advance payments refundable?", "Advance payments are non-refundable once work has started, because each engagement is customised and resources are committed immediately."],
    ["Can I see progress before final delivery?", "Yes. We share drafts, previews, and progress updates during execution so you can give feedback and stay informed throughout."],
    ["Do you offer revisions?", "Revisions are included within the originally agreed scope. Additional requirements beyond that scope may involve extra charges, discussed transparently in advance."],
    ["Is my information kept confidential?", "Absolutely. Your files and personal details are handled securely, are never shared with third parties, and are never sold. Contact information is used only for service communication."],
    ["Do you guarantee grades or publication?", "No. We provide research support, editing, guidance, and analytical assistance. Grades, approvals, examination results, and publication outcomes depend on institutions and reviewers and cannot be guaranteed."],
    ["How are timelines decided?", "Project timelines begin after the advance payment and receipt of all required materials. Missing or delayed information can affect agreed timelines."],
    ["How will we communicate?", "Primarily through WhatsApp, with email as needed. We recommend documenting key requirements and approvals so everything stays clear for both sides."],
    ["What if I need to cancel?", "Cancellation requests made before work begins may be reviewed individually. Payments made after work has started are non-refundable, and any approved refund remains at management discretion."]
  ];

  var faqList = document.getElementById("faqList");
  if (faqList) {
    var fh = "";
    for (var j = 0; j < faqs.length; j++) {
      fh +=
        '<div class="faq-item">' +
        '<button class="faq-q" aria-expanded="false"><span>' + faqs[j][0] + "</span>" +
        '<span class="faq-icon" aria-hidden="true">+</span></button>' +
        '<div class="faq-a"><p>' + faqs[j][1] + "</p></div></div>";
    }
    faqList.innerHTML = fh;

    faqList.addEventListener("click", function (e) {
      var btn = e.target.closest(".faq-q");
      if (!btn) return;
      var item = btn.parentElement;
      var ans = item.querySelector(".faq-a");
      var isOpen = item.classList.contains("open");
      // close others
      faqList.querySelectorAll(".faq-item.open").forEach(function (o) {
        if (o !== item) {
          o.classList.remove("open");
          o.querySelector(".faq-a").style.maxHeight = null;
          o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        }
      });
      if (isOpen) {
        item.classList.remove("open");
        ans.style.maxHeight = null;
        btn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("hamburger");
  var menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Policy modals ---------- */
  var policies = {
    payment: {
      title: "Payment Policy",
      intro: "Clear, fair terms so every engagement starts on a transparent footing.",
      items: [
        "Work begins only after an advance payment is received.",
        "Advance payment is mandatory.",
        "Advance payments are non-refundable once work has started.",
        "The remaining balance must be paid before final delivery.",
        "Drafts, previews, and progress updates may be shared during execution.",
        "Complete final deliverables are released only after full payment.",
        "Project timelines begin after advance payment and receipt of all required materials."
      ]
    },
    refund: {
      title: "Refund Policy",
      intro: "Because work is customised, refunds are handled carefully and case by case.",
      items: [
        "Services are customised and refunds are generally unavailable once work has started.",
        "Cancellation requests before work begins may be reviewed individually.",
        "Payments made after work commencement are non-refundable.",
        "Any approved refund remains at management discretion.",
        "Refund requests must be submitted in writing."
      ]
    },
    terms: {
      title: "Terms & Conditions",
      intro: "By using our services, you agree to the following terms.",
      items: [
        "Clients agree to these terms by using the services.",
        "Clients must provide accurate requirements and information.",
        "Delays caused by missing information may affect timelines.",
        "Revisions apply only within the agreed scope.",
        "Additional requirements may incur additional charges.",
        "Services may be refused at management discretion.",
        "Communication and approvals should be documented through WhatsApp or email."
      ]
    },
    privacy: {
      title: "Privacy Policy",
      intro: "Your privacy and your work are treated with strict care.",
      items: [
        "Client information remains confidential.",
        "Files are not shared with third parties.",
        "Contact information is used only for service communication.",
        "Data is handled securely.",
        "Client information is not sold."
      ]
    },
    disclaimer: {
      title: "Disclaimer",
      intro: "Please read carefully to understand the scope of our services.",
      items: [
        "Services are provided as academic consulting, research support, editing, guidance, and analytical assistance.",
        "Grades, approvals, publications, and outcomes cannot be guaranteed.",
        "Scholar Help 365 is not responsible for institutional decisions, reviewer comments, publication outcomes, examination results, or evaluation decisions.",
        "Clients remain responsible for compliance with institutional policies."
      ]
    }
  };

  var overlay = document.getElementById("modalOverlay");
  var mTitle = document.getElementById("modalTitle");
  var mBody = document.getElementById("modalBody");
  var mClose = document.getElementById("modalClose");

  function openModal(key) {
    var p = policies[key];
    if (!p || !overlay) return;
    mTitle.textContent = p.title;
    var b = '<p class="intro">' + p.intro + "</p><ul>";
    for (var k = 0; k < p.items.length; k++) b += "<li>" + p.items[k] + "</li>";
    b += "</ul>";
    mBody.innerHTML = b;
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () { openModal(btn.getAttribute("data-modal")); });
  });
  if (mClose) mClose.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* ---------- Year ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
