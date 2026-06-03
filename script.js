/* ============================================================
   Scholar Help 365 — script.js  (vanilla, no dependencies)
   ============================================================ */
(function () {
  "use strict";

  var WA = "918447711925";

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("hamburger");
  var nav = document.getElementById("nav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("show");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("show");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Services data ---------- */
  var services = [
    ["📜", "Thesis Writing Assistance", "End-to-end support for structuring, writing and refining your thesis."],
    ["🎓", "Dissertation Assistance", "Comprehensive guidance from proposal through to final submission."],
    ["📄", "Research Paper Writing", "Well-researched, publication-quality papers across disciplines."],
    ["📚", "Journal Publication Support", "Manuscript prep, formatting and submission to reputable journals."],
    ["🗂️", "Synopsis Writing", "Clear, compelling synopses that get your topic approved."],
    ["🔍", "Literature Review Writing", "Critical, well-organised reviews of relevant scholarship."],
    ["📝", "Proposal Writing", "Persuasive research proposals built on a strong rationale."],
    ["📊", "SPSS Data Analysis", "Accurate SPSS analysis with clear, defensible interpretation."],
    ["📈", "Statistical Analysis", "Regression, ANOVA and advanced statistics, fully explained."],
    ["🛡️", "Plagiarism Checking & Removal", "Originality checks and rewriting to keep your work plagiarism-free."],
    ["✏️", "Assignment Assistance", "Reliable help with assignments across subjects and levels."],
    ["💼", "Case Study Assistance", "Structured, analytical case studies with real insight."],
    ["📽️", "PPT & Presentation Prep", "Polished, presentation-ready slides for your defence or viva."],
    ["✨", "Academic Editing & Proofreading", "Precise editing for clarity, flow, grammar and formatting."]
  ];
  var grid = document.getElementById("serviceGrid");
  var sHtml = "";
  services.forEach(function (s) {
    var msg = encodeURIComponent("Hi Scholar Help 365, I need help with: " + s[1]);
    sHtml +=
      '<a class="service-card" href="https://wa.me/' + WA + "?text=" + msg + '" target="_blank" rel="noopener">' +
      '<span class="ic" aria-hidden="true">' + s[0] + "</span>" +
      "<h3>" + s[1] + "</h3><p>" + s[2] + "</p></a>";
  });
  grid.innerHTML = sHtml;

  /* ---------- FAQ data ---------- */
  var faqs = [
    ["What services does Scholar Help 365 offer?", "We provide thesis and dissertation assistance, research paper writing, journal publication support, synopsis and proposal writing, literature reviews, SPSS and statistical analysis, plagiarism removal, assignment and case study help, presentation preparation, and academic editing and proofreading."],
    ["Is my information kept confidential?", "Absolutely. Complete confidentiality is central to our service. Your identity, documents and project details are never shared with any third party."],
    ["How do I get started?", "Simply message us on WhatsApp with your requirement. We review it, send you a clear quotation, and begin work once you confirm."],
    ["Do you provide plagiarism-free work?", "Yes. Every deliverable goes through plagiarism checking, and we can provide originality reports on request."],
    ["Can you help with urgent deadlines?", "Yes, we accommodate urgent timelines wherever feasible. Share your deadline on WhatsApp and we will confirm what is achievable."],
    ["Do you offer SPSS and statistical data analysis?", "Yes. We handle SPSS, regression, ANOVA and other statistical analyses, complete with clear interpretation of your results."],
    ["Will you help me publish in a journal?", "Yes. We assist with manuscript preparation, formatting to journal guidelines, and submission support for reputable journals."],
    ["What academic levels do you support?", "We support undergraduate, postgraduate, MBA, PhD scholars, researchers and working professionals across disciplines."],
    ["How is pricing decided?", "Pricing depends on the scope, complexity and deadline of your project. You receive a transparent quotation before any work begins."],
    ["Do you provide revisions?", "Yes. We offer revisions to ensure the final work fully meets your requirements and expectations."],
    ["How will I receive my completed work?", "Completed work is delivered directly to you on WhatsApp or email in your preferred format, along with continued support."],
    ["Is this guidance or ghostwriting?", "We provide academic assistance, guidance and reference material intended to support your own learning and research."]
  ];
  var faqList = document.getElementById("faqList");
  var fHtml = "";
  faqs.forEach(function (f, i) {
    fHtml +=
      '<div class="faq-item">' +
      '<button class="faq-q" aria-expanded="false" aria-controls="fa' + i + '">' +
      "<span>" + f[0] + '</span><span class="plus" aria-hidden="true">+</span></button>' +
      '<div class="faq-a" id="fa' + i + '"><p>' + f[1] + "</p></div></div>";
  });
  faqList.innerHTML = fHtml;

  faqList.addEventListener("click", function (e) {
    var btn = e.target.closest(".faq-q");
    if (!btn) return;
    var item = btn.parentElement;
    var ans = item.querySelector(".faq-a");
    var isOpen = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
    ans.style.maxHeight = isOpen ? ans.scrollHeight + "px" : null;
  });

  /* ---------- Contact form -> WhatsApp ---------- */
  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("cf-name");
    var svc = document.getElementById("cf-service");
    var msg = document.getElementById("cf-msg");
    var ok = true;
    [name, svc, msg].forEach(function (el) {
      if (!el.value.trim()) { el.classList.add("input-error"); ok = false; }
      else { el.classList.remove("input-error"); }
    });
    if (!ok) return;
    var text =
      "Hello Scholar Help 365! 👋%0A%0A" +
      "*Name:* " + encodeURIComponent(name.value) + "%0A" +
      "*Service:* " + encodeURIComponent(svc.value) + "%0A" +
      "*Details:* " + encodeURIComponent(msg.value);
    window.open("https://wa.me/" + WA + "?text=" + text, "_blank", "noopener");
  });

  /* ---------- Animated counters ---------- */
  var counted = false;
  function runCounters() {
    if (counted) return;
    counted = true;
    document.querySelectorAll(".num").forEach(function (el) {
      var target = +el.dataset.target;
      var suffix = el.dataset.suffix || "";
      var start = 0, dur = 1600, t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var val = Math.floor((1 - Math.pow(1 - p, 3)) * target);
        el.textContent = val.toLocaleString() + (p === 1 ? suffix : "");
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- IntersectionObserver: reveals + counters ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          if (en.target.querySelector && en.target.querySelector(".num")) runCounters();
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    runCounters();
  }

  /* ---------- Legal modals ---------- */
  var legal = {
    privacy: ["Privacy Policy",
      "<p>Scholar Help 365 respects your privacy. Any information you share — including your name, contact details and project requirements — is used solely to respond to your enquiry and deliver our services.</p>" +
      "<p>We do not sell, rent or share your personal information with third parties. Communication primarily takes place over WhatsApp; this website does not store form submissions on any server.</p>" +
      "<p>For any privacy-related request, please contact us on WhatsApp at +91 8447711925.</p>"],
    terms: ["Terms & Conditions",
      "<p>By engaging Scholar Help 365 you agree that all services are provided for academic assistance, guidance and reference purposes.</p>" +
      "<p>Project scope, pricing and timelines are confirmed in writing before work begins. Payments, revisions and delivery terms are agreed on a per-project basis.</p>" +
      "<p>Clients are responsible for using delivered material in accordance with their institution's academic-integrity policies.</p>"],
    disclaimer: ["Disclaimer",
      "<p>The services offered by Scholar Help 365 are intended to provide academic support, guidance and reference material to assist students and researchers in their own work.</p>" +
      "<p>We do not guarantee specific grades, acceptance or publication outcomes, as these depend on factors beyond our control. Clients are expected to comply with the academic-integrity policies of their respective institutions.</p>"]
  };
  var modal = document.getElementById("modal");
  var mTitle = document.getElementById("modalTitle");
  var mBody = document.getElementById("modalBody");
  document.querySelectorAll("[data-modal]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var d = legal[a.dataset.modal];
      mTitle.textContent = d[0];
      mBody.innerHTML = d[1];
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });
  function closeModal() { modal.hidden = true; document.body.style.overflow = ""; }
  document.getElementById("modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeModal(); });
})();
