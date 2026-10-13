const services = [
  {
    number: '01',
    title: 'VIDEO PRODUCTION & EDITING',
    description: 'Professional visual storytelling for brands, businesses, creators, and campaigns.',
    icon: '🎬',
    visualImage: 'https://i.ibb.co/G3TkRqZt/Whats-App-Image-2026-10-13-at-10-50-45.jpg',
    details: ['Professional Video Editing', 'YouTube Video Editing', 'Instagram Reels & YouTube Shorts', 'Commercial & Promotional Videos']
  },
  {
    number: '02',
    title: 'GRAPHIC & BRANDING DESIGN',
    description: 'Creative visual communication that captures attention and delivers your message effectively.',
    icon: '✦',
    visualImage: 'https://i.ibb.co/fdNzNgx0/Graphic-Design-and-Sketching-Studio.png',
    details: ['Poster Design', 'Social Media Creatives', 'Brochure & Flyer Design', 'Banner Design']
  },
  {
    number: '03',
    title: 'BRANDING & IDENTITY',
    description: 'Build a distinctive brand identity with consistent, memorable, and professional visual design.',
    icon: '◈',
    visualImage: 'https://i.ibb.co/Sw8Rzdjm/Whats-App-Image-2026-10-13-at-11-50-44.jpg',
    details: ['Logo Design', 'Brand Identity Development', 'Brand Guidelines', 'Business Stationery']
  },
  {
    number: '04',
    title: 'WEBSITE DEVELOPMENT',
    description: 'Modern, responsive websites designed to communicate your brand and support business goals.',
    icon: '◌',
    visualImage: 'https://i.ibb.co/20fj8y1b/Whats-App-Image-2026-10-13-at-12-17-40.jpg',
    details: ['Business Websites', 'Portfolio Websites', 'E-commerce Websites', 'Landing Pages']
  },
  {
    number: '05',
    title: 'SOCIAL MEDIA MANAGEMENT',
    description: 'Build a consistent social media presence through creative content, strategic planning, and management.',
    icon: '◎',
    visualImage: 'https://i.ibb.co/GfWXHpP5/Whats-App-Image-2026-10-13-at-12-04-35.jpg',
    details: ['Social Media Account Management', 'Content Planning', 'Content Creation', 'Social Media Post Design']
  },
  {
    number: '06',
    title: 'DIGITAL MARKETING & ADVERTISING',
    description: 'Promote your brand using targeted digital campaigns and data-informed marketing strategies.',
    icon: '↗',
    visualImage: 'https://i.ibb.co/dJkVgZpt/Whats-App-Image-2026-10-13-at-12-05-15.jpg',
    details: ['Meta Ads', 'Google Ads', 'Social Media Advertising', 'Marketing Strategy']
  },
  {
    number: '07',
    title: 'PHOTOGRAPHY & VIDEOGRAPHY',
    description: 'Capture products, people, businesses, and events through professional photography and video production.',
    icon: '◍',
    visualImage: 'https://i.ibb.co/Lh17HZgX/Whats-App-Image-2026-10-13-at-12-28-19.jpg',
    details: ['Product Photography', 'Corporate Photography', 'Event Photography', 'Promotional Videography']
  },
  {
    number: '08',
    title: 'MOTION GRAPHICS, VFX & PACKAGING',
    description: 'Add visual depth to projects through motion design, visual effects, and creative product presentation.',
    icon: '✧',
    visualImage: 'https://i.ibb.co/NgbPqwLP/Whats-App-Image-2026-10-13-at-12-22-00.jpg',
    details: ['2D Motion Graphics', 'Logo Animation', 'Typography Animation', 'Product Packaging Design']
  }
];

const projects = [
  {
    id: 'brand-system',
    title: 'Brand System Refresh',
    category: 'BRANDING & DESIGN',
    shortDescription: 'Editorial branding for a modern growth-focused business.',
    description: 'A flexible visual system designed to present a premium, confident, and scalable identity across digital and print assets.',
    thumbnail: 'https://i.ibb.co/TD4PFxfg/Whats-App-Image-2026-10-13-at-15-09-35.jpg',
    gallery: [
      'https://i.ibb.co/xKMStKpY/Whats-App-Image-2026-10-13-at-13-34-17.jpg',
      'https://i.ibb.co/5XGy2DZG/Whats-App-Image-2026-10-13-at-13-55-44.jpg'
    ],
    services: ['Brand Identity', 'Design System', 'Campaign Design'],
    featured: true,
    layout: 'large'
  },
  {
    id: 'launch-film',
    title: 'Video Editing Showcase',
    category: 'VIDEO PRODUCTION',
    shortDescription: 'Video editing showcase provided by Absolute Creative Studio.',
    description: 'Watch the video editing portfolio shared by Absolute Creative Studio.',
    thumbnail: 'https://i.ibb.co/zW0GM0XV/Whats-App-Image-2026-10-13-at-14-46-42.jpg',
    videoUrl: 'https://drive.google.com/file/d/1Xr-D-q3atxQBnjPiK6gShx71oGZyxn7_/preview?autoplay=1',
    gallery: [],
    services: ['Video Editing'],
    layout: 'wide'
  },
  {
    id: 'videography-showcase',
    title: 'Videography Showcase',
    category: 'VIDEO PRODUCTION',
    shortDescription: 'Videography showcase provided by Absolute Creative Studio.',
    description: 'Watch the videography portfolio shared by Absolute Creative Studio.',
    thumbnail: 'https://i.ibb.co/rKrSPqtC/Whats-App-Image-2026-10-13-at-14-54-09-1.jpg',
    videoUrl: 'https://drive.google.com/file/d/1HfDVgyyOnXDPctoAh_5Ea3pNwYjACVZT/preview?autoplay=1',
    gallery: [],
    services: ['Videography'],
    layout: 'standard'
  },
  {
    id: 'brand-identity-showcase',
    title: 'Product Identity Showcase',
    category: 'MOTION GRAPHICS',
    shortDescription: 'Brand identity artwork featured in the ACS portfolio.',
    description: 'A brand identity visual showcase using the supplied branding artwork.',
    thumbnail: 'https://i.ibb.co/7tHqMvvd/Whats-App-Image-2026-10-13-at-15-33-47.jpg',
    gallery: [
      'https://i.ibb.co/7tHqMvvd/Whats-App-Image-2026-10-13-at-15-33-47.jpg'
    ],
    services: ['Brand Identity'],
    layout: 'standard'
  },
  {
    id: 'studio-shoot',
    title: 'PHOTOGRAPHY',
    category: 'PHOTOGRAPHY',
    shortDescription: 'Crisp visual capture for products, people, and premium brand storytelling.',
    description: 'A polished photography direction focused on atmosphere, detail, and brand clarity across editorial and campaign use-cases.',
    thumbnail: 'https://i.ibb.co/nqLwxf1P/Whats-App-Image-2026-10-13-at-14-49-48.jpg',
    gallery: ['https://i.ibb.co/5gsZ326v/Untitled-Design.jpg'],
    services: ['Product Photography', 'Editorial Imaging', 'Campaign Visuals'],
    layout: 'wide'
  },
  {
    id: 'rg-enterprise',
    title: 'R G enterprise',
    category: 'CLIENT WORK',
    shortDescription: 'Creative work created for R G enterprise.',
    description: 'Portfolio visual shared for R G enterprise.',
    thumbnail: 'https://i.ibb.co/kg02XtcH/Whats-App-Image-2026-10-13-at-14-08-41-1.jpg',
    client: 'R G enterprise',
    gallery: ['https://i.ibb.co/kg02XtcH/Whats-App-Image-2026-10-13-at-14-08-41-1.jpg'],
    services: ['Creative Work']
  },
  {
    id: 'swathi-foods',
    title: 'Swathi Foods',
    category: 'CLIENT WORK',
    shortDescription: 'Creative work created for Swathi Foods.',
    description: 'Portfolio visual shared for Swathi Foods.',
    thumbnail: 'https://i.ibb.co/nMZtLNGN/Whats-App-Image-2026-10-13-at-15-26-57.jpg',
    client: 'Swathi Foods',
    gallery: ['https://i.ibb.co/nMZtLNGN/Whats-App-Image-2026-10-13-at-15-26-57.jpg'],
    services: ['Creative Work']
  },
  {
    id: 'swara-bindu-music-and-dance-academy',
    title: 'Swara Bindu Music and Dance Academy',
    category: 'WEBSITE DEVELOPMENT',
    shortDescription: 'Website development for Swara Bindu Music and Dance Academy.',
    description: 'A website for Swara Bindu Music and Dance Academy, presenting its music, dance, and arts programs.',
    thumbnail: 'https://swarabindumusicanddanceacademy.github.io/Swara-Bindu-Music-and-Dance-Academy-/academy-logo.png',
    client: 'Swara Bindu Music and Dance Academy',
    gallery: ['https://swarabindumusicanddanceacademy.github.io/Swara-Bindu-Music-and-Dance-Academy-/academy-logo.png'],
    externalUrl: 'https://swarabindumusicanddanceacademy.github.io/Swara-Bindu-Music-and-Dance-Academy-/',
    services: ['Website Development']
  }
];

const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');

function setYear() {
  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

function renderServices() {
  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid) return;

  servicesGrid.innerHTML = services
    .map(
      (service) => `
        <article class="service-card reveal">
          <div class="service-top">
            <span class="service-number">${service.number}</span>
            <span class="service-icon" aria-hidden="true">${service.icon}</span>
          </div>
          ${service.visualImage ? `<div class="service-visual"><img src="${service.visualImage}" alt="Video production and editing portfolio visual" loading="lazy" /></div>` : ''}
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <div class="service-details" hidden>
            <ul>
              ${service.details.map((detail) => `<li>${detail}</li>`).join('')}
            </ul>
          </div>
          <button class="button button--secondary" type="button" aria-expanded="false">VIEW DETAILS</button>
          <a class="button button--primary" href="contact.html?service=${encodeURIComponent(service.title)}#enquiry">ENQUIRE NOW</a>
        </article>
      `
    )
    .join('');

  servicesGrid.querySelectorAll('.service-card').forEach((card) => {
    const button = card.querySelector('.button');
    const details = card.querySelector('.service-details');

    const toggleDetails = () => {
      const isOpen = !details.hasAttribute('hidden');
      details.hidden = isOpen;
      button.textContent = isOpen ? 'VIEW DETAILS' : 'CLOSE DETAILS';
      button.setAttribute('aria-expanded', String(!isOpen));
    };

    button.addEventListener('click', toggleDetails);
  });
}

function renderAboutServices() {
  const list = document.getElementById('about-services-list');
  if (!list) return;

  list.innerHTML = services
    .map(
      (service) => `
        <div class="expertise-item reveal">
          <strong>${service.title}</strong>
        </div>
      `
    )
    .join('');
}

function renderPortfolioPreview() {
  const grid = document.getElementById('work-preview-grid');
  if (!grid) return;

  const previewProjects = projects.slice(0, 3);
  grid.innerHTML = previewProjects
    .map(
      (project) => `
        <article class="work-preview-card reveal">
          <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" />
          <div class="work-preview-copy">
            <div class="project-tag">${project.category}</div>
            <h3>${project.title}</h3>
            <a href="portfolio.html#${project.id}" aria-label="View ${project.title}">VIEW PROJECT</a>
          </div>
        </article>
      `
    )
    .join('');
}

function renderPortfolio() {
  const projectGrid = document.getElementById('portfolio-grid');
  if (!projectGrid) return;

  if (!projects.length) {
    projectGrid.innerHTML = '<div class="empty-state">NEW WORK COMING SOON.</div>';
    return;
  }

  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card" data-project-id="${project.id}" tabindex="0" aria-label="View ${project.title}${project.client ? ` for ${project.client}` : ''}">
          ${project.client ? `<span class="project-client-badge">CLIENT: ${project.client}</span>` : ''}
          <div class="project-card-image">
            <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" />
            <div class="project-card-overlay">
              <span class="project-tag">${project.category}${project.client ? ` · ${project.client}` : ''}</span>
              <h3>${project.title}</h3>
              <span class="project-link">VIEW PROJECT</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  projectGrid.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => openProjectModal(card.dataset.projectId));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProjectModal(card.dataset.projectId);
      }
    });
  });
}

function openProjectModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const currentIndex = projects.findIndex((item) => item.id === projectId);
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  modalContent.innerHTML = `
    <div class="case-study-hero">
      <div class="case-study-header">
        <p class="eyebrow">${project.category}</p>
        <h2 id="modal-title">${project.title}</h2>
        <div class="case-study-meta">
          ${project.services.map((service) => `<span>${service}</span>`).join('')}
          ${project.client ? `<span>CLIENT: ${project.client}</span>` : ''}
        </div>
        <p>${project.description}</p>
        <div class="modal-actions">
          <a href="#portfolio" class="button button--secondary" data-close="modal">BACK TO PORTFOLIO</a>
          <a href="contact.html" class="button button--primary">CONTACT US</a>
          ${project.externalUrl ? `<a href="${project.externalUrl}" class="button button--secondary" target="_blank" rel="noopener noreferrer">VISIT LIVE WEBSITE</a>` : ''}
        </div>
      </div>
      ${project.videoUrl
        ? `<div class="case-study-video is-vertical"><iframe src="${project.videoUrl}" title="${project.title}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
        : `<img src="${project.gallery[0] || project.thumbnail}" alt="${project.title}" />`}
    </div>

    <div class="case-study-section">
      <div class="case-study-grid">
        <div class="case-study-card">
          <h3>Project Overview</h3>
          <p>${project.description}</p>
        </div>
        <div class="case-study-card">
          <h3>Objectives</h3>
          <p>Clarify brand intent, create a premium visual presence, and build a flexible content system that can evolve with the business.</p>
        </div>
      </div>
    </div>

    <div class="case-study-section">
      <div class="case-study-grid">
        <div class="case-study-card">
          <h3>Creative Approach</h3>
          <p>We translate the brief into a defined visual direction, combining brand language, tone, and content structure to create work that feels cohesive and intentional.</p>
        </div>
        <div class="case-study-card">
          <h3>Services Provided</h3>
          <ul>
            ${project.services.map((service) => `<li>${service}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>

    ${project.gallery?.length
      ? `<div class="case-study-gallery">
          ${project.gallery
            .map((image) => `<img src="${image}" alt="${project.title} project detail" loading="lazy" />`)
            .join('')}
        </div>`
      : ''}

    <div class="modal-actions">
      <button class="button button--secondary" type="button" data-project-nav="${previousProject.id}">PREVIOUS</button>
      <button class="button button--secondary" type="button" data-project-nav="${nextProject.id}">NEXT</button>
      <button class="button button--primary" type="button" data-close="modal">BACK TO PORTFOLIO</button>
    </div>
  `;

  const navButtons = modalContent.querySelectorAll('[data-project-nav]');
  navButtons.forEach((button) => {
    button.addEventListener('click', () => openProjectModal(button.dataset.projectNav));
  });

  modalContent.querySelectorAll('[data-close="modal"]').forEach((button) => {
    button.addEventListener('click', closeProjectModal);
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const videoFrame = modal.querySelector('.case-study-video iframe');
  if (videoFrame) videoFrame.src = 'about:blank';
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupModalClose() {
  const closeButton = document.querySelector('.modal-close');
  if (closeButton) closeButton.addEventListener('click', closeProjectModal);

  modal.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'modal') closeProjectModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeProjectModal();
    }
  });
}

function revealOnScroll() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const original = button.textContent;
    button.textContent = 'MESSAGE SENT';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = original;
      button.disabled = false;
      form.reset();
    }, 1800);
  });
}

function hideLoader() {
  const loader = document.querySelector('.site-loader');
  if (!loader) return;
  setTimeout(() => loader.classList.add('is-hidden'), 800);
}

function setupScrollHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;

    if (currentScrollY <= 80 || header.contains(document.activeElement) || !scrollingDown) {
      header.classList.remove('is-hidden');
    } else {
      header.classList.add('is-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
}

function addWhatsAppButton() {
  const button = document.createElement('a');
  const message = 'Hi Absolute Creative Studio, I would like to discuss a project.';
  button.className = 'whatsapp-float';
  button.href = `https://wa.me/918217096218?text=${encodeURIComponent(message)}`;
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.setAttribute('aria-label', 'Message Absolute Creative Studio on WhatsApp');
  button.title = 'Message us on WhatsApp';
  button.innerHTML = '<svg class="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.3A12.6 12.6 0 0 0 5.2 22.4l-1.6 6 6.2-1.6A12.6 12.6 0 1 0 16 3.3Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/><path d="M12 9.7c-.4 0-.8.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.4 4 1.6 4.3c.2.3 2.7 4.3 6.5 5.8 3.2 1.3 3.8 1 4.5.9.7-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.7-.5l-2.5-1.2c-.3-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.3-.5.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.3-.4.3-.6.1-.2 0-.4-.1-.6l-1.2-2.8c-.3-.7-.6-.7-.9-.7Z" fill="currentColor" transform="translate(-1 -1) scale(1.04)"/></svg>';
  document.body.appendChild(button);
}

function addAcsAssistant() {
  const widget = document.createElement('section');
  widget.className = 'acs-chat-widget';
  widget.innerHTML = `
    <section class="acs-chat-panel" id="acs-ai-panel" aria-label="ACS AI chat" aria-hidden="true">
      <header class="acs-chat-header">
        <div><strong>ACS AI</strong><span>Automated studio guide</span></div>
        <button class="acs-chat-close" type="button" aria-label="Close ACS AI">×</button>
      </header>
      <div class="acs-chat-messages" role="log" aria-live="polite" aria-relevant="additions text"></div>
      <form class="acs-chat-form">
        <label class="sr-only" for="acs-ai-input">Message ACS AI</label>
        <input id="acs-ai-input" type="text" placeholder="Ask about ACS..." autocomplete="off" />
        <button type="submit" aria-label="Send message">SEND</button>
      </form>
    </section>
    <button class="acs-chat-toggle" type="button" aria-expanded="false" aria-controls="acs-ai-panel">
      <span class="acs-chat-symbol" aria-hidden="true"><img src="https://i.ibb.co/Kzsz3zDz/Luxury-Gold-and-Silver-AI-Orb.png" alt="" /></span><span>ACS AI</span>
    </button>
  `;
  document.body.appendChild(widget);

  const panel = widget.querySelector('.acs-chat-panel');
  const toggle = widget.querySelector('.acs-chat-toggle');
  const close = widget.querySelector('.acs-chat-close');
  const messages = widget.querySelector('.acs-chat-messages');
  const form = widget.querySelector('.acs-chat-form');
  const input = widget.querySelector('#acs-ai-input');

  const addMessage = (text, sender, link) => {
    const message = document.createElement('div');
    message.className = `acs-chat-message is-${sender}`;
    const content = document.createElement('p');
    content.textContent = text;
    message.appendChild(content);
    if (link) {
      const action = document.createElement('a');
      action.href = link.href;
      action.textContent = link.label;
      action.className = 'acs-chat-link';
      message.appendChild(action);
    }
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  };

  const sendReply = (text) => {
    addMessage(text, 'user');
    const query = text.toLowerCase();
    let answer = 'I can help with our services, portfolio, or getting in touch. Choose a topic below, or tell me a little more.';
    let link = null;

    if (/service|design|brand|video|website|social|market|photo|motion/.test(query)) {
      answer = 'ACS offers creative services across branding, design, video, websites, social media, photography, and digital campaigns. Scope and availability are confirmed for each project.';
      link = { href: 'services.html', label: 'EXPLORE SERVICES' };
    } else if (/portfolio|work|case stud/.test(query)) {
      answer = 'Browse selected work across our creative categories. Project details and service filters are available in the portfolio.';
      link = { href: 'portfolio.html', label: 'VIEW PORTFOLIO' };
    } else if (/contact|enquir|quote|price|project|start|talk|hire/.test(query)) {
      answer = 'Tell us about your idea and project needs. The team can discuss fit, scope, and availability with you.';
      link = { href: 'contact.html', label: 'START AN ENQUIRY' };
    } else if (/where|location|based|bengaluru|bangalore/.test(query)) {
      answer = 'Absolute Creative Studio is based in Bengaluru, India, and welcomes project enquiries from elsewhere too.';
      link = { href: 'about.html', label: 'ABOUT ACS' };
    } else if (/hello|hi|hey/.test(query)) {
      answer = 'Hello! What would you like to know about ACS? I can point you to our services, portfolio, or contact page.';
    }

    window.setTimeout(() => addMessage(answer, 'assistant', link), 250);
  };

  const quickReplies = document.createElement('div');
  quickReplies.className = 'acs-chat-quick-replies';
  [
    ['Our services', 'What services do you offer?'],
    ['Portfolio', 'Show me your portfolio'],
    ['Start a project', 'How can I contact you?'],
    ['Location', 'Where are you based?']
  ].forEach(([label, message]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.addEventListener('click', () => sendReply(message));
    quickReplies.appendChild(button);
  });

  addMessage('Hi, I’m ACS AI, the automated studio guide. Ask about our services, selected work, or how to start a project.', 'assistant');
  messages.appendChild(quickReplies);

  const setOpen = (isOpen) => {
    panel.classList.toggle('is-open', isOpen);
    panel.setAttribute('aria-hidden', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) input.focus();
  };

  toggle.addEventListener('click', () => setOpen(!panel.classList.contains('is-open')));
  close.addEventListener('click', () => setOpen(false));
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    sendReply(text);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('is-open')) setOpen(false);
  });
}

function initHomePage() {
  setYear();
  revealOnScroll();
  hideLoader();
}

function initAboutPage() {
  renderAboutServices();
  renderPortfolioPreview();
  setYear();
  revealOnScroll();
  hideLoader();
  setupContactForm();
}

function initServicesPage() {
  renderServices();
  setYear();
  revealOnScroll();
  hideLoader();
}

function initPortfolioPage() {
  renderPortfolio();
  setupModalClose();
  const requestedProject = window.location.hash.slice(1);
  if (projects.some((project) => project.id === requestedProject)) {
    openProjectModal(requestedProject);
  }
  setYear();
  revealOnScroll();
  hideLoader();
}

function initContactPage() {
  setupContactForm();
  const service = new URLSearchParams(window.location.search).get('service');
  const serviceField = document.querySelector('[name="projectType"]');
  if (service && serviceField) {
    const matchingOption = Array.from(serviceField.options).find(
      (option) => option.textContent.trim().toLowerCase() === service.toLowerCase()
    );
    if (matchingOption) serviceField.value = matchingOption.value;
  }
  setYear();
  revealOnScroll();
  hideLoader();
}

document.addEventListener('DOMContentLoaded', () => {
  setupScrollHeader();
  addWhatsAppButton();
  addAcsAssistant();

  if (document.body.dataset.page === 'home') {
    initHomePage();
  }

  if (document.body.dataset.page === 'about') {
    initAboutPage();
  }

  if (document.body.dataset.page === 'services') {
    initServicesPage();
  }

  if (document.body.dataset.page === 'portfolio') {
    initPortfolioPage();
  }

  if (document.body.dataset.page === 'contact') {
    initContactPage();
  }
});
