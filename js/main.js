/* ═══════════════════════════════════════════════════
   TORSU CHRISTOPHER v3 — main.js
   Web3Forms + WhatsApp + Project Modals + Interactions
═══════════════════════════════════════════════════ */

/* PROJECT DATA — edit this to update your projects */
const PROJECTS = {
  oasis: {
    title: 'Oasis — Wellness Platform',
    color: '#0D2322',
    tags: ['Web Design', 'UI/UX'],
    year: '2024',
    client: 'Oasis Wellness, Lagos',
    role: 'Lead Designer',
    duration: '6 weeks',
    overview: 'A full redesign of Oasis Wellness\'s digital presence. The goal was to translate the brand\'s calming philosophy into a digital experience that converts visitors into bookings.',
    challenge: 'The previous site felt generic and cluttered. Users were dropping off before reaching the booking page. We needed to simplify the journey and build trust through design.',
    solution: 'We stripped the layout back to its essentials — one hero message, clear service cards, and a frictionless booking flow. The warm earthy palette was carried over from the physical brand.',
    outcome: 'Conversion rate doubled within 30 days of launch. Bounce rate dropped by 38%.',
    screens: [
      { label: 'Homepage Hero', bg: '#0D2322' },
      { label: 'Services Section', bg: '#1a3a38' },
      { label: 'Booking Flow', bg: '#738F8A' },
      { label: 'Mobile View', bg: '#0D2322' },
    ],
    liveUrl: '#',
  },
  kora: {
    title: 'Kora — Finance App',
    color: '#AE4818',
    tags: ['UI/UX Design', 'Prototyping'],
    year: '2023',
    client: 'Kora Finance',
    role: 'UI/UX Designer',
    duration: '8 weeks',
    overview: 'Kora is a fintech app helping Nigerians send and receive money across Africa. I designed the full mobile UI from onboarding to transaction history.',
    challenge: 'Financial apps need to feel safe and trustworthy. The brief was to make Kora feel premium and modern while remaining accessible to users across varying levels of digital literacy.',
    solution: 'Clean card-based layout with large tap targets, clear typography hierarchy, and a colour system that communicates confidence. We A/B tested three onboarding flows.',
    outcome: 'App store rating improved from 3.2 to 4.6 after the redesign. User drop-off during onboarding reduced by 52%.',
    screens: [
      { label: 'Onboarding', bg: '#AE4818' },
      { label: 'Dashboard', bg: '#8B3615' },
      { label: 'Send Money', bg: '#AE4818' },
      { label: 'Transaction History', bg: '#6B2810' },
    ],
    liveUrl: '#',
  },
  nakasi: {
    title: 'Nakasi — Fashion Brand',
    color: '#738F8A',
    tags: ['Brand Identity', 'Visual Design'],
    year: '2023',
    client: 'Nakasi Fashion',
    role: 'Brand Designer',
    duration: '4 weeks',
    overview: 'Nakasi is a Lagos-based fashion label targeting style-conscious women aged 25–40. I built their complete brand identity from scratch — logo, typography, colour system, and brand guidelines.',
    challenge: 'The founder had a strong product but no visual language. She needed a brand that felt high-end but not cold, and contemporary but rooted in West African sensibility.',
    solution: 'I chose a wordmark with a refined serif, a warm neutral palette punctuated with terracotta, and a pattern system drawn from Ankara geometry — subtle enough for luxury, distinct enough to own.',
    outcome: 'Launched the new brand across social, packaging, and their Shopify store. Instagram following grew 300% in the first quarter post-launch.',
    screens: [
      { label: 'Logo System', bg: '#738F8A' },
      { label: 'Colour Palette', bg: '#5a7a75' },
      { label: 'Packaging', bg: '#738F8A' },
      { label: 'Brand in Use', bg: '#4a6a65' },
    ],
    liveUrl: '#',
  },
  ember: {
    title: 'Ember — Restaurant Website',
    color: '#D7720C',
    tags: ['Web Design'],
    year: '2024',
    client: 'Ember Restaurant, Lagos',
    role: 'Web Designer',
    duration: '3 weeks',
    overview: 'Ember is a contemporary Nigerian restaurant on Victoria Island. I designed their website to reflect the intimate, fire-lit atmosphere of the dining experience.',
    challenge: 'The client wanted photography-first design that let the food and ambience do the talking, while also making it easy to book a table or view the menu.',
    solution: 'Full-bleed imagery sections, a dark and warm palette, and a single-page scroll experience. The reservation widget is front and centre on every scroll depth.',
    outcome: 'Online reservations increased by 70% in the first month. The site was featured in a Nigerian lifestyle publication.',
    screens: [
      { label: 'Hero', bg: '#D7720C' },
      { label: 'Menu', bg: '#AE4818' },
      { label: 'Gallery', bg: '#D7720C' },
      { label: 'Reservation', bg: '#8B4A0A' },
    ],
    liveUrl: '#',
  },
  volta: {
    title: 'Volta — Energy Startup',
    color: '#C6BEA5',
    tags: ['Brand Identity', 'Web Design'],
    year: '2024',
    client: 'Volta Energy',
    role: 'Brand & Web Designer',
    duration: '5 weeks',
    overview: 'Volta is a Nigerian clean energy startup bringing solar solutions to homes and SMEs. I designed their brand identity and marketing website ahead of their seed round.',
    challenge: 'Energy is a serious, technical category. The challenge was to make Volta feel credible to investors while remaining approachable to everyday Nigerian homeowners.',
    solution: 'A bold, geometric logomark referencing electrical current. A palette of deep navy, warm sand, and electric yellow. The website leads with impact numbers — kWh saved, homes powered, CO₂ reduced.',
    outcome: 'Volta used the site during their pitch deck and secured ₦50M in seed funding. Inbound leads from the site exceeded projections by 3×.',
    screens: [
      { label: 'Brand Mark', bg: '#0D2322' },
      { label: 'Homepage', bg: '#1a3a38' },
      { label: 'Product Page', bg: '#0D2322' },
      { label: 'Mobile', bg: '#1a3a38' },
    ],
    liveUrl: '#',
  },
};


/* ══════════════════════════════════════════
   DOM READY
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initScrollReveal();
  initSvcHover();
  initWorkFilter();
  initProjectModals();
  initContactForm();
});


/* ══════════════════════════════════════════
   CURSOR
══════════════════════════════════════════ */
function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || window.matchMedia('(pointer:coarse)').matches) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function followLoop() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(followLoop);
  })();
}


/* ══════════════════════════════════════════
   NAV
══════════════════════════════════════════ */
function initNav() {
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const links  = document.getElementById('navLinks');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Burger
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    links.style.cssText = open
      ? `display:flex;flex-direction:column;position:fixed;top:64px;left:0;right:0;
         background:#F5F4ED;padding:2rem 5%;border-bottom:1px solid rgba(13,35,34,.08);
         gap:1.5rem;z-index:899;`
      : '';
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      links.style.cssText = '';
    });
  });

  // Active section highlight
  const sections  = document.querySelectorAll('section[id]');
  const navAnchors = links.querySelectorAll('a');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const match = links.querySelector(`a[href="#${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));
}


/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
function initScrollReveal() {
  const targets = [
    '.hero__left', '.hero__right',
    '.about__left', '.about__right',
    '.svc', '.proj', '.testi-card',
    '.contact__left', '.contact__right',
    '.section-title', '.section-eyebrow',
  ];

  targets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      const isCard = /svc|proj|testi/.test(sel);
      if (isCard) el.style.transitionDelay = `${i * 0.04}s`;
    });
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}


/* ══════════════════════════════════════════
   SERVICE ROW HOVER — expand desc on hover
══════════════════════════════════════════ */
function initSvcHover() {
  document.querySelectorAll('.svc').forEach(row => {
    const desc = row.querySelector('.svc__desc');
    if (!desc) return;

    // Initially hide description
    desc.style.cssText = `
      overflow:hidden; max-height:0; opacity:0; margin-top:0;
      transition:max-height .4s cubic-bezier(.16,1,.3,1),
                 opacity .35s ease, margin-top .35s ease;
    `;

    // Restructure grid to 3-col on hover by making name wrap desc
    const name = row.querySelector('.svc__name');
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;grid-column:2;position:relative;z-index:1;';
    name.parentNode.insertBefore(wrap, name);
    wrap.appendChild(name);
    wrap.appendChild(desc);

    row.addEventListener('mouseenter', () => {
      desc.style.maxHeight = desc.scrollHeight + 'px';
      desc.style.opacity   = '1';
      desc.style.marginTop = '.5rem';
    });
    row.addEventListener('mouseleave', () => {
      desc.style.maxHeight = '0';
      desc.style.opacity   = '0';
      desc.style.marginTop = '0';
    });
  });
}


/* ══════════════════════════════════════════
   WORK FILTER
══════════════════════════════════════════ */
function initWorkFilter() {
  const btns  = document.querySelectorAll('.wf');
  const cards = document.querySelectorAll('.proj');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.f;

      cards.forEach(card => {
        const cats = (card.dataset.cat || '').split(' ');
        const show = f === 'all' || cats.includes(f);
        card.style.opacity         = show ? '1' : '0.25';
        card.style.transform       = show ? '' : 'scale(.97)';
        card.style.pointerEvents   = show ? '' : 'none';
        card.style.transition      = 'opacity .3s, transform .3s';
      });
    });
  });
}


/* ══════════════════════════════════════════
   PROJECT MODALS
══════════════════════════════════════════ */
function initProjectModals() {
  const overlay = document.getElementById('modalOverlay');
  const inner   = document.getElementById('modalInner');
  const closeBtn = document.getElementById('modalClose');

  // Open on any proj__view button or project card click
  document.querySelectorAll('.proj__view, .proj').forEach(el => {
    el.addEventListener('click', e => {
      // Don't double-fire if it's both card and button
      const key = el.dataset.project || el.closest('[data-project]')?.dataset.project;
      if (!key || !PROJECTS[key]) return;
      openModal(key);
    });
  });

  // Prevent button click from bubbling to card twice
  document.querySelectorAll('.proj__view').forEach(btn => {
    btn.addEventListener('click', e => e.stopPropagation());
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  function openModal(key) {
    const p = PROJECTS[key];
    inner.innerHTML = buildModal(p);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function buildModal(p) {
    const screens = (p.screens || []).map(s => `
      <div class="modal-screen" style="background:${s.bg}">
        <div class="modal-screen-grid"></div>
        <span class="modal-screen-label">${s.label}</span>
      </div>`).join('');

    return `
      <div class="modal-hero" style="background:${p.color}">
        <div class="modal-hero-grid"></div>
        <span class="modal-hero-glyph">${p.title.split('—')[0].trim()}</span>
      </div>

      <div class="modal-meta">
        ${p.tags.map(t => `<span>${t}</span>`).join('')}
      </div>

      <h2 class="modal-title">${p.title}</h2>

      <div class="modal-overview">
        <div class="modal-overview-item">
          <strong>Client</strong>
          <p>${p.client}</p>
        </div>
        <div class="modal-overview-item">
          <strong>My Role</strong>
          <p>${p.role}</p>
        </div>
        <div class="modal-overview-item">
          <strong>Year</strong>
          <p>${p.year}</p>
        </div>
        <div class="modal-overview-item">
          <strong>Duration</strong>
          <p>${p.duration}</p>
        </div>
      </div>

      <p class="modal-body">${p.overview}</p>

      <h3 style="font-family:'Fraunces',serif;font-weight:300;font-size:1.1rem;margin-bottom:.75rem;color:#0D2322;">The Challenge</h3>
      <p class="modal-body">${p.challenge}</p>

      <h3 style="font-family:'Fraunces',serif;font-weight:300;font-size:1.1rem;margin-bottom:.75rem;margin-top:1.5rem;color:#0D2322;">The Solution</h3>
      <p class="modal-body">${p.solution}</p>

      <h3 style="font-family:'Fraunces',serif;font-weight:300;font-size:1.1rem;margin-bottom:.75rem;margin-top:1.5rem;color:#0D2322;">The Outcome</h3>
      <p class="modal-body" style="margin-bottom:2rem">${p.outcome}</p>

      ${screens.length ? `
        <h3 style="font-family:'Fraunces',serif;font-weight:300;font-size:1.1rem;margin-bottom:1rem;color:#0D2322;">Screens</h3>
        <div class="modal-screens">${screens}</div>
      ` : ''}

      <div class="modal-cta">
        <a href="${p.liveUrl}" target="_blank" class="btn btn--primary">View Live Site ↗</a>
        <a href="#contact"
           onclick="document.getElementById('modalOverlay').classList.remove('open');document.body.style.overflow='';setTimeout(()=>document.getElementById('contact').scrollIntoView({behavior:'smooth'}),100)"
           class="btn btn--ghost">Start a Similar Project</a>
      </div>
    `;
  }
}


/* ══════════════════════════════════════════
   CONTACT FORM — Web3Forms + WhatsApp
   ▸ Get your FREE key at web3forms.com
   ▸ Sign up with your email → copy the access key
   ▸ Paste it into index.html where it says YOUR_WEB3FORMS_KEY
   ▸ That's it. No templates. No limits. Free forever.
══════════════════════════════════════════ */
function initContactForm() {
  const form     = document.getElementById('contactForm');
  const sendBtn  = document.getElementById('sendBtn');
  const waBtn    = document.getElementById('waBtn');
  const statusEl = document.getElementById('formStatus');
  if (!form) return;

  /* Update WhatsApp link with form data before user clicks */
  form.addEventListener('input', () => {
    const name    = document.getElementById('cf_name').value.trim();
    const service = document.getElementById('cf_service').value;
    const budget  = document.getElementById('cf_budget').value;
    const msg     = document.getElementById('cf_msg').value.trim();

    const parts = [
      "Hi Torsu! I came across your portfolio and I'd love to work with you.",
      name    ? `My name is ${name}.` : '',
      service ? `I need help with: ${service}.` : '',
      budget  ? `My budget is around ${budget}.` : '',
      msg     ? `\n\n${msg}` : '',
    ].filter(Boolean);

    waBtn.href = `https://wa.me/2348132003769?text=${encodeURIComponent(parts.join(' '))}`;
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearStatus();

    /* Validation */
    const name    = document.getElementById('cf_name').value.trim();
    const email   = document.getElementById('cf_email').value.trim();
    const service = document.getElementById('cf_service').value;
    const msg     = document.getElementById('cf_msg').value.trim();

    if (!name || !email || !service || !msg) {
      return showStatus('error', '⚠ Please fill in your name, email, service and message.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return showStatus('error', '⚠ Please enter a valid email address.');
    }

    /* Check if key is still placeholder */
    const keyInput = form.querySelector('input[name="access_key"]');
    const key = keyInput ? keyInput.value : '';

    setSending(true);

    if (!key || key === 'YOUR_WEB3FORMS_KEY') {
      setSending(false);
      return showStatus('error', '⚠ Please add your Web3Forms access key to the form before sending.');
    }

    /* Web3Forms submission */
    try {
      const data = new FormData(form);
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        onSuccess();
      } else {
        throw new Error(json.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      showStatus('error', '✗ Something went wrong. Please try again later or refresh the page.');
      setSending(false);
    }
  });

  function onSuccess() {
    setSending(false);
    sendBtn.querySelector('.btn__text').textContent = 'Sent ✓';
    showStatus('success', '✓ Message sent! Torsu will get back to you within 24 hours.');
    form.reset();
    setTimeout(() => {
      sendBtn.querySelector('.btn__text').textContent = 'Send Message';
      clearStatus();
    }, 6000);
  }

  function setSending(yes) {
    sendBtn.classList.toggle('sending', yes);
    sendBtn.querySelector('.btn__text').textContent = yes ? 'Sending' : 'Send Message';
    sendBtn.disabled = yes;
  }

  function showStatus(type, msg) {
    statusEl.textContent = msg;
    statusEl.className   = `cform__status ${type}`;
  }
  function clearStatus() {
    statusEl.textContent = '';
    statusEl.className   = 'cform__status';
  }
  function delay(ms) { return new Promise(r => setTimeout(r, ms)); }
}

