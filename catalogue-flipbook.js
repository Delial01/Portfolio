(() => {
  const base = 'assets/case-windmill-catalogue/pages/';
  const file = n => base + String(n).padStart(3, '0') + '.webp';
  const totalViews = 47;
  const single = document.getElementById('cm-single');
  const coverImg = document.getElementById('cm-cover-img');
  const coverInstruction = document.getElementById('cm-cover-instruction');
  const book = document.getElementById('cm-book');
  const leftImg = document.getElementById('cm-left-img');
  const rightImg = document.getElementById('cm-right-img');
  const leftLeaf = document.getElementById('cm-left');
  const rightLeaf = document.getElementById('cm-right');
  const flipper = document.getElementById('cm-flipper');
  const turningSheet = document.getElementById('cm-turning-sheet');
  const turnFront = document.getElementById('cm-turn-front');
  const turnBack = document.getElementById('cm-turn-back');
  const prevButton = document.getElementById('cm-prev');
  const nextButton = document.getElementById('cm-next');
  const pageLabel = document.getElementById('cm-page-label');
  const viewCount = document.getElementById('cm-view-count');
  const slider = document.getElementById('cm-page-slider');
  const lightbox = document.getElementById('cm-lightbox');
  const lightboxImage = document.getElementById('cm-lightbox-image');
  const lightboxTitle = document.getElementById('cm-lightbox-title');
  const fullscreenButton = document.getElementById('cm-fullscreen');
  const viewer = document.getElementById('cm-viewer');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let moving = false;
  function view(n) {
    if (n === 0) return {left: null, right: 0, title: 'FRONT COVER'};
    if (n === 46) return {left: 91, right: null, title: 'BACK COVER'};
    return {left: 2*n-1, right: 2*n, title: 'PAGES ' + (2*n) + '–' + (2*n+1)};
  }
  function preload(n) {
    if (n < 0 || n >= totalViews) return;
    const v = view(n);
    [v.left,v.right].filter(x => x !== null).forEach(p => {const image = new Image(); image.src = file(p);});
  }
  function show(n) {
    n = Math.max(0, Math.min(46,n)); current = n;
    const v = view(n);
    const edge = n === 0 || n === 46;
    single.hidden = !edge; book.hidden = edge;
    if (edge) {
      coverImg.src = file(n===0?0:91);
      coverImg.alt = n===0 ? 'Windmill Organics Catalogue front cover' : 'Windmill Organics Catalogue back cover';
      coverInstruction.textContent = n===0 ? 'CLICK TO OPEN THE CATALOGUE ↗' : 'END OF THE CATALOGUE';
    } else {
      leftImg.src = file(v.left); rightImg.src = file(v.right);
      leftImg.alt = 'Catalogue page ' + (v.left+1);
      rightImg.alt = 'Catalogue page ' + (v.right+1);
    }
    flipper.hidden = true;
    prevButton.disabled = n===0; nextButton.disabled = n===46;
    pageLabel.textContent = v.title;
    slider.value = String(n);
    slider.setAttribute('aria-valuetext',v.title.toLowerCase());
    viewCount.textContent = String(n+1).padStart(2,'0') + ' / 47';
    preload(n-1);preload(n+1);
  }
  function changeTo(target, animate = true) {
    if (moving || target < 0 || target > 46 || target === current) return;
    const old=current, forward = target > old;
    if (Math.abs(target-old)!==1 || !animate || reduceMotion.matches || old===0 || target===0 || old===46 || target===46) {show(target);return;}
    moving=true;
    const before=view(old),after=view(target);
    // Real two-sided page: on a forward turn the right sheet folds onto the left;
    // on a backward turn its reverse swings back to the right.
    if (forward) {
      leftImg.src=file(before.left);
      rightImg.src=file(after.right);
      turnFront.src=file(before.right);
      turnBack.src=file(after.left);
    } else {
      leftImg.src=file(after.left);
      rightImg.src=file(before.right);
      turnFront.src=file(after.right);
      turnBack.src=file(before.left);
    }
    turningSheet.style.transform = forward ? 'rotateY(0deg)' : 'rotateY(-180deg)';
    flipper.hidden=false;
    const start = forward ? 'rotateY(0deg)' : 'rotateY(-180deg)';
    const end = forward ? 'rotateY(-180deg)' : 'rotateY(0deg)';
    const animation=turningSheet.animate([{transform:start},{transform:end}],{duration:660,easing:'cubic-bezier(.34,.1,.22,1)',fill:'forwards'});
    animation.finished.then(()=>{animation.cancel();turningSheet.style.transform='';moving=false;show(target);}).catch(()=>{moving=false;show(target);});
  }
  prevButton.addEventListener('click',()=>changeTo(current-1));
  nextButton.addEventListener('click',()=>changeTo(current+1));
  coverImg.addEventListener('click',()=>changeTo(current===0?1:45));
  slider.addEventListener('input',()=>{if (!moving)changeTo(Number(slider.value),false)});
  document.addEventListener('keydown',e=>{
    if (lightbox.open) {if(e.key==='Escape')lightbox.close();return;}
    if (e.target.closest('input,textarea,[contenteditable=true]')) return;
    if (e.key==='ArrowRight') {e.preventDefault();changeTo(current+1)}
    if (e.key==='ArrowLeft') {e.preventDefault();changeTo(current-1)}
  });
  let pointerX = null;
  document.getElementById('cm-stage').addEventListener('pointerdown',e=>{pointerX = e.clientX;});
  document.getElementById('cm-stage').addEventListener('pointerup',e=>{
    if(pointerX===null)return;
    const dx=e.clientX-pointerX;
    if(Math.abs(dx)>45)changeTo(current+(dx<0?1:-1));
    pointerX=null;
  });
  function zoom(pageNumber) {
    if (moving || pageNumber===null) return;
    lightboxImage.src=file(pageNumber);
    lightboxImage.alt='Enlarged catalogue page '+(pageNumber+1)+' of 92';
    lightboxTitle.textContent='CATALOGUE PAGE '+String(pageNumber+1).padStart(2,'0')+' / 92';
    if(typeof lightbox.showModal === 'function')lightbox.showModal();
  }
  leftImg.addEventListener('click',()=>zoom(view(current).left));
  rightImg.addEventListener('click',()=>zoom(view(current).right));
  document.getElementById('cm-lightbox-close').addEventListener('click',()=>lightbox.close());
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
  fullscreenButton.addEventListener('click',()=>{
    if(document.fullscreenElement){document.exitFullscreen();}
    else if(viewer.requestFullscreen) viewer.requestFullscreen();
  });
  document.addEventListener('fullscreenchange',()=>{fullscreenButton.innerHTML=document.fullscreenElement?'EXIT FULL SCREEN ×':'FULL SCREEN ↗';});
  show(0);
})();
