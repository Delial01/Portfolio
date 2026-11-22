(() => {
  'use strict';
  const { site, projects } = window.PORTFOLIO;
  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const setText = (selector, value) => { document.querySelector(selector).textContent = value; };

  setText('[data-role1]', site.roleLine1);
  setText('[data-role2]', site.roleLine2);
  setText('#intro', site.introduction);
  setText('#contact-heading', site.contactHeading);
  setText('#contact-description', site.contactDescription);
  setText('#footer-location', site.location.toUpperCase());
  setText('#year', new Date().getFullYear());
  document.querySelector('#hero-title').innerHTML = site.headline.map(line => `<span>${escapeHTML(line)}</span>`).join('');
  document.documentElement.style.setProperty('--accent', site.accent);

  const contactLink = document.querySelector('#contact-link');
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.email)) {
    contactLink.href = `mailto:${site.email}`;
    document.querySelector('#contact-email-address').textContent = site.email;
    contactLink.setAttribute('aria-label', `Email ${site.email}`);
  }

  const grid = document.querySelector('#project-grid');
  const filterBar = document.querySelector('#project-filters');
  const filterStatus = document.querySelector('#filter-status');
  const categoryOf = project => project.category.map(c => c.toLowerCase());

  projects.forEach((project, index) => {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = project.slug === 'biona-rice-cakes' ? 'biona-rice-cakes.html' : project.slug === 'machandel' ? 'machandel.html' : project.slug === 'bonsan-sauces' ? 'bonsan-sauces.html' : project.slug === 'biona-collateral' ? 'print-digital-ad-hocs.html' : project.slug === 'biona-catalogue' ? 'windmill-catalogue.html' : project.slug === 'biona-event' ? 'biona-waitrose-tasting-day.html' : project.slug === 'sprout' ? 'sprout.html' : project.slug === 'bird-blend' ? 'bird-blend.html' : `project.html?slug=${encodeURIComponent(project.slug)}`;
    card.dataset.categories = JSON.stringify(categoryOf(project));
    card.setAttribute('aria-label', `View ${project.title} project`);
    card.innerHTML = `
      <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} portfolio thumbnail" loading="${index < 2 ? 'eager' : 'lazy'}" ${index < 2 ? 'fetchpriority="high"' : ''}>
      <div class="project-overlay">
        <div class="project-label"><span>${escapeHTML(project.category.join(' / '))}</span><span>${String(index + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}</span></div>
        <h2>${escapeHTML(project.overlayTitle || project.title)}</h2>
        <p>${escapeHTML(project.overlayDescription || project.description)}</p>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </div>`;
    grid.append(card);
  });

  filterBar.innerHTML = site.filters.map((category, index) =>
    `<button class="filter${index === 0 ? ' active' : ''}" type="button" data-filter="${escapeHTML(category)}" aria-pressed="${index === 0}">${escapeHTML(category.toUpperCase())}</button>`
  ).join('');
  filterBar.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const choice = button.dataset.filter.toLowerCase();
    let visible = 0;
    [...grid.children].forEach((card, index) => {
      const matches = choice === 'all' || categoryOf(projects[index]).includes(choice);
      card.hidden = !matches;
      if (matches) visible++;
    });
    filterBar.querySelectorAll('button').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    filterStatus.textContent = `${visible} project${visible === 1 ? '' : 's'} shown`;
  });
})();
