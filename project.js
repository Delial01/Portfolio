(() => {
  'use strict';
  const { site, projects, caseStudies } = window.PORTFOLIO;
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const slug = new URLSearchParams(location.search).get('slug') || document.documentElement.dataset.previewSlug;
  if (slug === 'biona-rice-cakes') { location.replace('biona-rice-cakes.html'); return; }
  if (slug === 'machandel') { location.replace('machandel.html'); return; }
  if (slug === 'sprout') { location.replace('sprout.html'); return; }
  const projectIndex = projects.findIndex(item => item.slug === slug);
  const project = projects[projectIndex];
  const el = document.getElementById('case-main');
  document.documentElement.style.setProperty('--accent', site.accent);
  document.getElementById('case-year').textContent = new Date().getFullYear();
  if (!project) {
    el.innerHTML = '<section style="padding:80px 0"><h1>Project not found.</h1><p><a href="./#work">← Return to the portfolio</a></p></section>';
    return;
  }
  const data = caseStudies[slug];
  document.title = `${project.title} — Delia Logigan`;
  document.querySelector('meta[name="description"]').content = data.summary;
  const image = (src, alt, extra='') => `<img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy" ${extra}>`;
  const mediaBlocks = (entries, style='two') => {
    if (!entries || !entries.length) return '';
    return `<div class="case-visuals ${style}">${entries.map(m => `<figure class="case-visual">
      <div class="case-visual-label">${escapeHTML(m.chapter)}</div>
      <div class="case-image-panel">${image(m.src, m.alt, 'class="pixel-source"')}</div>
    </figure>`).join('')}</div>`;
  };
  const media = data.media || [];
  const mediaFor = section => {
    const picks = media.filter(item => item.section === section);
    const layout = picks.length === 1 ? 'one' : picks.length === 2 ? 'two' : 'three';
    return mediaBlocks(picks, layout);
  };
  const mediaForStep = i => mediaFor(`process-${String(i+1).padStart(2,'0')}`);
  const next = projects[(projectIndex + 1) % projects.length];
  el.innerHTML = `
    <div class="case-meta-row"><a class="case-back" href="./#work">← ALL PROJECTS</a><span class="case-kicker">CASE STUDY / ${String(projectIndex+1).padStart(2,'0')}—${String(projects.length).padStart(2,'0')}</span></div>
    <section class="case-heading" aria-labelledby="project-title" data-enter>
      <div><p class="case-kicker">${escapeHTML(data.eyebrow)}</p><h1 id="project-title">${escapeHTML(project.title)}.</h1></div>
      <div class="case-heading-aside"><p>${escapeHTML(data.heading)}</p></div>
    </section>
    <figure class="case-cover">${image(project.image, `${project.title} — selected project artwork`, 'loading="eager" fetchpriority="high"')}</figure>
    <dl class="case-facts">
      <div class="case-fact"><dt>PROJECT</dt><dd>${escapeHTML(project.title)}</dd></div>
      <div class="case-fact"><dt>DISCIPLINE</dt><dd>${escapeHTML(project.category.join(' / '))}</dd></div>
      <div class="case-fact"><dt>YEAR</dt><dd>${escapeHTML(project.year)}</dd></div>
      <div class="case-fact"><dt>MY CONTRIBUTION</dt><dd>${escapeHTML(data.scope.slice(0,3).join(' / '))}</dd></div>
    </dl>
    <section class="case-section" aria-labelledby="brief-title">
      <div class="case-section-top"><span class="case-label">01 / CONTEXT & CHALLENGE</span><span class="case-micro">THE BRIEF</span></div>
      <div class="case-intro-grid">
        <h2 class="case-display" id="brief-title">The<br>problem.</h2>
        <div class="case-text-column"><p class="case-section-text">${escapeHTML(data.summary)}</p><p class="case-section-text">${escapeHTML(data.challenge)}</p></div>
      </div>
      ${mediaFor('brief')}
    </section>
    <section class="case-section" aria-labelledby="process-title">
      <div class="case-section-top"><span class="case-label">02 / DESIGN PROCESS</span><span class="case-micro">FROM RESEARCH TO DETAIL</span></div>
      <div class="case-intro-grid"><h2 class="case-display" id="process-title">How I<br>approached it.</h2><div class="case-text-column"><p class="case-section-text">Each decision needed to serve the project brief — not just the overall look.</p></div></div>
      <div class="case-processes">
        ${data.approach.map((step, i) => `<article class="case-process">
          <div class="case-process-head"><span class="case-process-no">${escapeHTML(step.number)}</span><h3>${escapeHTML(step.title)}</h3></div>
          <div class="case-process-body"><p>${escapeHTML(step.text)}</p>${mediaForStep(i)}</div>
        </article>`).join('')}
      </div>
    </section>
    <section class="case-section" aria-labelledby="solution-title">
      <div class="case-section-top"><span class="case-label">03 / THE DESIGN RESPONSE</span><span class="case-micro">WHAT CHANGED</span></div>
      <div class="case-solution-grid"><h2 class="case-display" id="solution-title">The<br>solution.</h2><p>${escapeHTML(data.solution)}</p></div>
      ${mediaFor('solution')}
    </section>
    <section class="case-result" aria-labelledby="result-title">
      <div class="case-section-top"><span class="case-label">04 / OUTCOME</span><span class="case-micro">THE TAKEAWAY</span></div>
      <h2 class="case-result-statement" id="result-title">${escapeHTML(data.result)}</h2>
      <p class="case-result-desc">${escapeHTML(data.result_detail)}</p>
    </section>
    <nav class="case-nav" aria-label="Project navigation">
      <div><span class="case-nav-kicker">NEXT PROJECT / ${String((projectIndex+1)%projects.length+1).padStart(2,'0')}</span><a href="${next.slug === 'biona-rice-cakes' ? 'biona-rice-cakes.html' : next.slug === 'machandel' ? 'machandel.html' : next.slug === 'sprout' ? 'sprout.html' : `project.html?slug=${encodeURIComponent(next.slug)}`}">${escapeHTML(next.title)} <span aria-hidden="true">↗</span></a></div>
      <a class="case-nav-back" href="./#work">VIEW ALL PROJECTS ↑</a>
    </nav>
  `;
})();
