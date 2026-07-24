// Hero slider
const slides = document.querySelectorAll('#heroSlider .slide');
const dotsWrap = document.getElementById('sliderDots');
let cur = 0;
slides.forEach((_,i)=>{ const b=document.createElement('button'); if(i===0)b.classList.add('active'); b.addEventListener('click',()=>goTo(i)); dotsWrap.appendChild(b); });
const dots = dotsWrap.querySelectorAll('button');
function goTo(i){ slides[cur].classList.remove('active'); dots[cur].classList.remove('active'); cur=(i+slides.length)%slides.length; slides[cur].classList.add('active'); dots[cur].classList.add('active'); }
document.getElementById('nextSlide').addEventListener('click',()=>goTo(cur+1));
document.getElementById('prevSlide').addEventListener('click',()=>goTo(cur-1));
let st=setInterval(()=>goTo(cur+1),4500);
const hs=document.getElementById('heroSlider');
hs.addEventListener('mouseenter',()=>clearInterval(st));
hs.addEventListener('mouseleave',()=>{ st=setInterval(()=>goTo(cur+1),4500); });

// Courses
const courses=[
  {t:'JEE Main & Advanced',d:'Complete PCM coverage with weekly mock tests and expert IIT faculty.',dur:'2 Yrs',batch:'Class 11–12',img:'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=560&h=315&fit=crop'},
  {t:'NEET UG',d:'Biology-focused curriculum with AIIMS faculty and full lab practice.',dur:'2 Yrs',batch:'Class 11–12',img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=560&h=315&fit=crop'},
  {t:'Foundation Program',d:'Strong conceptual basics in Maths & Science built for early learners.',dur:'2 Yrs',batch:'Class 9–10',img:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=560&h=315&fit=crop'},
  {t:'CUET Prep',d:'Domain + General Test coverage for top central university admissions.',dur:'1 Yr',batch:'Class 12',img:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=560&h=315&fit=crop'},
  {t:'CA Foundation',d:'Accounting, law & economics fundamentals for commerce aspirants.',dur:'6 Mo',batch:'Post 12th',img:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=560&h=315&fit=crop'},
  {t:'Class 11–12 Boards',d:'Board-focused teaching with solved sample papers and revision tests.',dur:'2 Yrs',batch:'Class 11–12',img:'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=560&h=315&fit=crop'},
  {t:'Olympiad Prep',d:'Math & Science Olympiad training with national-level practice sets.',dur:'1 Yr',batch:'Class 6–10',img:'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=560&h=315&fit=crop'},
  {t:'Banking & SSC',d:'Quant, reasoning & GK shortcuts for government competitive exams.',dur:'8 Mo',batch:'Post 12th',img:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=560&h=315&fit=crop'},
  {t:'Coding for Kids',d:'Scratch to Python, project-based learning with patient instructors.',dur:'1 Yr',batch:'Class 6–9',img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=560&h=315&fit=crop'},
  {t:'Spoken English',d:'Confidence-building communication workshops for all age groups.',dur:'3 Mo',batch:'All Ages',img:'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=560&h=315&fit=crop'},
];
const arr=`<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
const ct=document.getElementById('courseTrack');
const ch=courses.map(c=>`<div class="course-card"><div class="course-img" style="background-image:url('${c.img}')"></div><div class="course-body"><div class="course-meta"><span>${c.batch}</span><span class="dot"></span><span>${c.dur}</span></div><h4>${c.t}</h4><p>${c.d}</p><div class="course-footer"><div><span class="ctag">${c.batch}</span></div><a href="#" class="cta-link">Details ${arr}</a></div></div></div>`).join('');
ct.innerHTML=ch+ch;

// Media
(function(){
  const items=[
    {type:'video',src:'Education Today',date:'Mar 2025',title:'How ICON Is Redefining JEE Coaching in Rajasthan',desc:"A full feature on ICON's small-batch model and its record-breaking 2025 results.",img:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=640&h=360&fit=crop'},
    {type:'article',src:'City Express',date:'Jun 2025',title:'1,200 Selections in a Single Year — The ICON Story',desc:"City Express covers ICON's milestone year and the methodology behind every result.",img:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=640&h=360&fit=crop'},
    {type:'article',src:'Career Compass',date:'Jan 2025',title:'Scholarship Tests That Actually Change Lives',desc:"Spotlighting ICON's 90% fee-waiver programme and its impact on first-gen learners.",img:'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=640&h=360&fit=crop'},
    {type:'video',src:'EdIndia Weekly',date:'Nov 2024',title:"Inside a Model Classroom: ICON's Teaching Philosophy",desc:"EdIndia goes behind the scenes to show what makes ICON's doubt-clearing desk unique.",img:'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=640&h=360&fit=crop'},
    {type:'article',src:'The Campus Wire',date:'Aug 2024',title:'NEET Success Rates: How ICON Tops the Charts',desc:"An in-depth feature on ICON's NEET programme, faculty credentials, and outcomes.",img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=640&h=360&fit=crop'},
    {type:'article',src:'Rajasthan Bulletin',date:'Apr 2025',title:"Bhilwara's ICON Puts the City on the Education Map",desc:'How ICON became a nationally recognised coaching brand from a Tier-2 city.',img:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=640&h=360&fit=crop'},
    {type:'video',src:'Career Compass TV',date:'Feb 2025',title:'Hybrid Classrooms: The Future of Indian Coaching',desc:"A panel discussion featuring ICON's director on the rise of hybrid learning.",img:'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=640&h=360&fit=crop'},
    {type:'article',src:'EdIndia Weekly',date:'Dec 2024',title:'Top 10 Coaching Institutes in Rajasthan 2025',desc:"ICON ranked #2 in Rajasthan in EdIndia's annual survey of 300+ coaching centres.",img:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=640&h=360&fit=crop'},
  ];
  const mArr=`<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
  const html=items.map(m=>{
    const iv=m.type==='video';
    const playIco=`<div class="play-ov"><div class="play-btn"><svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div>`;
    const badge=`<span class="mbadge ${iv?'mbadge-video':'mbadge-article'}">${iv?'▶ Video':'📄 Article'}</span>`;
    return `<div class="media-card"><div class="media-thumb"><img src="${m.img}" alt="${m.title}" loading="lazy">${iv?playIco:''}${badge}</div><div class="media-body"><div class="msource">${m.src}</div><h4>${m.title}</h4><p>${m.desc}</p><div class="media-foot"><span class="mdate">${m.date}</span><a href="media.html" class="mlink">${iv?'Watch':'Read'} ${mArr}</a></div></div></div>`;
  }).join('');
  document.getElementById('mediaTrack').innerHTML=html+html;
})();

// ── Testimonials: original layout + drag on both sides ──
(function(){
  const data=[
    {name:'Ananya Joshi',  course:'JEE Advanced, 2025',  quote:'The doubt-clearing sessions changed everything. I finally understood Physics instead of memorising it.',stars:5, img:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Rahul Meena',   course:'NEET UG, 2025',       quote:'Small batches meant every mentor knew my weak spots personally. That attention is rare.',stars:5,            img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Sneha Rathi',   course:'Foundation, Class 10',quote:'I went from average to topping my school in Maths within a year at ICON.',stars:4,                          img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Vikram Singh',  course:'CUET, 2025',          quote:'The mock test schedule was intense but exactly what I needed to build exam stamina.',stars:5,                 img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Ishita Agarwal',course:'NEET UG, 2024',       quote:"Dr. Kapoor's biology classes are the reason I cleared NEET on my first attempt.",stars:5,                   img:'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Aditya Bansal', course:'JEE Main, 2025',      quote:'Hybrid classes let me attend online on bad health days without missing anything.',stars:4,                   img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Kavya Nair',    course:'CA Foundation, 2025', quote:'Structured and disciplined — exactly the environment I needed after school.',stars:5,                        img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Manav Chouhan', course:'Foundation, Class 9', quote:'My son actually looks forward to Maths class now. That says a lot.',stars:5,                                  img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Riya Kapoor',   course:'Olympiad Prep, 2025', quote:'Made it to the national round for the first time thanks to the Olympiad track.',stars:4,                     img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Devansh Patel', course:'Coding for Kids',     quote:'Built his first Python game in three months. Instructors are patient and clear.',stars:5,                    img:'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Neha Sisodia',  course:'Spoken English',      quote:'Went from avoiding interviews to leading my college fest as anchor.',stars:5,                                img:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Arjun Vaishnav',course:'Banking & SSC',       quote:'The quant shortcuts alone were worth joining. Cleared prelims on first attempt.',stars:4,                    img:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Pooja Solanki', course:'NEET UG, 2025',       quote:'Every mock test came with a personal weak-area report. Incredibly useful.',stars:5,                          img:'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Yash Tiwari',   course:'JEE Advanced, 2024',  quote:"Faculty here don't just teach, they mentor. Made all the difference under pressure.",stars:5,               img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
    {name:'Simran Kaur',   course:'CUET, 2024',          quote:'Balanced domain subjects and general test prep perfectly within the timeline.',stars:4,                       img:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop', ytId:'dQw4w9WgXcQ'},
  ];

  const ini  = n => n.split(' ').map(w=>w[0]).slice(0,2).join('');
  const stars = n => Array.from({length:5},(_,i)=>i<n?'★':'☆').join('');

  // ── LEFT reel: inject cards (duplicated for seamless loop) ──
  const reelTrack = document.getElementById('reelTrack');
  if(reelTrack){
    const reelCard = (t, idx) =>
      `<div class="reel-item" data-idx="${idx}">` +
        `<img class="reel-thumb" src="${t.img}" alt="${t.name}" draggable="false">` +
        `<button class="reel-play-btn" aria-label="Watch"><i class="fa-solid fa-play"></i></button>` +
        `<div class="reel-overlay">` +
          `<div class="reel-stars">${stars(t.stars)}</div>` +
          `<p class="reel-quote">"${t.quote}"</p>` +
          `<div class="reel-who">` +
            `<img class="reel-av" src="${t.img}" alt="${t.name}" loading="lazy" onerror="this.style.display='none'">` +
            `<div><div class="reel-name">${t.name}</div><div class="reel-course">${t.course}</div></div>` +
          `</div>` +
        `</div>` +
      `</div>`;
    const all = data.map((t,i) => reelCard(t,i)).join('');
    reelTrack.innerHTML = all + all;
  }

  // ── RIGHT columns: inject cards (duplicated for seamless loop) ──
  const cardHtml = t =>
    `<div class="testi-card">` +
      `<img class="testi-img" src="${t.img}" alt="${t.name}" loading="lazy" draggable="false" onerror="this.style.display='none'">` +
      `<div class="testi-body">` +
        `<div class="testi-stars">${stars(t.stars)}</div>` +
        `<p class="testi-quote">${t.quote}</p>` +
        `<div class="testi-who">` +
          `<img class="testi-av" src="${t.img}" alt="${t.name}" loading="lazy" draggable="false" onerror="this.outerHTML='<div class=testi-av-initials>${ini(t.name)}</div>'">` +
          `<div><div class="testi-name">${t.name}</div><div class="testi-course">${t.course}</div></div>` +
        `</div>` +
      `</div>` +
    `</div>`;

  const colA = data.filter((_,i)=>i%2===0);
  const colB = data.filter((_,i)=>i%2===1);
  const elA  = document.getElementById('testiColA');
  const elB  = document.getElementById('testiColB');
  if(elA){ const h=colA.map(cardHtml).join(''); elA.innerHTML=h+h; }
  if(elB){ const h=colB.map(cardHtml).join(''); elB.innerHTML=h+h; }

  // ── DRAG + TAP: left reel ──
  (function(){
    const reels = document.getElementById('testiReels');
    const track = document.getElementById('reelTrack');
    if(!reels || !track) return;

    let dragging=false, dragMoved=false, startX=0, lastX=0, vel=0, rafId=null;
    let frozenX=0, userPaused=false;
    const THRESHOLD=5;

    function getLiveX(){ return new DOMMatrix(getComputedStyle(track).transform).m41; }

    function freeze(){
      frozenX = getLiveX();
      track.style.animationPlayState='paused';
      track.style.transform=`translateX(${frozenX}px)`;
    }
    function unfreeze(){
      if(userPaused) return;
      track.style.animationPlayState='running';
      track.style.transform='';
    }
    function setX(x){
      const half=track.scrollWidth/2;
      x=((x%-half)- -half)%-half-half;
      track.style.transform=`translateX(${x}px)`;
      frozenX=x;
    }

    /* ── mouse ── */
    reels.addEventListener('mousedown',e=>{
      dragging=true; dragMoved=false;
      startX=lastX=e.clientX; vel=0;
      freeze(); reels.style.cursor='grabbing'; cancelAnimationFrame(rafId);
      e.preventDefault();
    });
    window.addEventListener('mousemove',e=>{
      if(!dragging) return;
      if(Math.abs(e.clientX-startX)>THRESHOLD) dragMoved=true;
      vel=lastX-e.clientX; lastX=e.clientX;
      setX(frozenX-(e.clientX-startX));
      startX=e.clientX; frozenX-=vel;
    });
    window.addEventListener('mouseup',e=>{
      if(!dragging) return;
      dragging=false; reels.style.cursor='grab';
      if(!dragMoved){
        const item=e.target.closest('.reel-item');
        if(item){ userPaused=true; openShorts(parseInt(item.dataset.idx,10)); return; }
        userPaused=!userPaused;
        if(!userPaused) unfreeze();
        return;
      }
      let v=vel;
      (function glide(){ v*=0.90; if(Math.abs(v)<0.3){unfreeze();return;} setX(frozenX-v); rafId=requestAnimationFrame(glide); })();
    });

    /* ── touch ── */
    reels.addEventListener('touchstart',e=>{ dragging=true; dragMoved=false; startX=lastX=e.touches[0].clientX; vel=0; freeze(); cancelAnimationFrame(rafId); },{passive:true});
    reels.addEventListener('touchmove',e=>{ if(!dragging)return; if(Math.abs(e.touches[0].clientX-startX)>THRESHOLD)dragMoved=true; vel=lastX-e.touches[0].clientX; lastX=e.touches[0].clientX; setX(frozenX-(lastX-startX)); startX=lastX; frozenX-=vel; },{passive:true});
    reels.addEventListener('touchend',e=>{
      if(!dragging)return; dragging=false;
      if(!dragMoved){
        const t=e.changedTouches[0];
        const item=document.elementFromPoint(t.clientX,t.clientY)?.closest('.reel-item');
        if(item){ userPaused=true; openShorts(parseInt(item.dataset.idx,10)); return; }
        userPaused=!userPaused; if(!userPaused) unfreeze(); return;
      }
      let v=vel;
      (function glide(){ v*=0.90; if(Math.abs(v)<0.3){unfreeze();return;} setX(frozenX-v); rafId=requestAnimationFrame(glide); })();
    });
    reels.addEventListener('dragstart',e=>e.preventDefault());
    reels.style.cursor='grab';

    /* ── Pause on hover ── */
    reels.addEventListener('mouseenter', () => {
      if(!dragging && !userPaused) {
        track.style.animationPlayState = 'paused';
      }
    });
    reels.addEventListener('mouseleave', () => {
      if(!dragging && !userPaused) {
        track.style.animationPlayState = 'running';
        track.style.transform = '';
      }
    });

    /* ── Shorts lightbox ── */
    function openShorts(idx){
      const d=data[idx]; if(!d) return;
      let lb=document.getElementById('shorts-lb');
      if(!lb){
        lb=document.createElement('div'); lb.id='shorts-lb';
        lb.innerHTML=
          '<div class="slb-bg"></div>'+
          '<div class="slb-wrap">'+
            '<button class="slb-close"><i class="fa-solid fa-xmark"></i></button>'+
            '<div class="slb-phone">'+
              '<iframe id="slb-frame" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen></iframe>'+
              '<div class="slb-info"><span class="slb-name"></span><span class="slb-course"></span></div>'+
            '</div>'+
          '</div>';
        document.body.appendChild(lb);
        lb.querySelector('.slb-bg').onclick=closeShorts;
        lb.querySelector('.slb-close').onclick=closeShorts;
        document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeShorts(); });
      }
      lb.querySelector('#slb-frame').src=`https://www.youtube.com/embed/${d.ytId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
      lb.querySelector('.slb-name').textContent=d.name;
      lb.querySelector('.slb-course').textContent=d.course;
      lb.classList.add('slb-open');
      document.body.style.overflow='hidden';
    }
    function closeShorts(){
      const lb=document.getElementById('shorts-lb'); if(!lb) return;
      lb.classList.remove('slb-open');
      document.body.style.overflow='';
      document.getElementById('slb-frame').src='';
      userPaused=false; unfreeze();
    }
  })();

  // ── DRAG: right columns (vertical) ──
  (function(){
    const cols   = document.querySelector('.testi-cols');
    const trackA = document.getElementById('testiColA');
    const trackB = document.getElementById('testiColB');
    if(!cols || !trackA || !trackB) return;

    let dragging=false, startY=0, lastY=0, vel=0, rafId=null;
    let yA=0, yB=0;

    // read the live translateY from the CSS animation at the moment of grab
    function getLiveY(el){
      return new DOMMatrix(getComputedStyle(el).transform).m42;
    }

    function wrapY(y, half){
      if(half <= 0) return y;
      y = y % -half;                    // keep in range (-half .. 0)
      if(y > 0)    y -= half;
      if(y < -half) y += half;
      return y;
    }

    function applyY(){
      const halfA = trackA.scrollHeight / 2;
      const halfB = trackB.scrollHeight / 2;
      yA = wrapY(yA, halfA);
      yB = wrapY(yB, halfB);
      trackA.style.transform = `translateY(${yA}px)`;
      trackB.style.transform = `translateY(${yB}px)`;
    }

    function freeze(){
      yA = getLiveY(trackA);
      yB = getLiveY(trackB);
      trackA.style.animationPlayState = 'paused';
      trackB.style.animationPlayState = 'paused';
      applyY();
    }

    function unfreeze(){
      trackA.style.animationPlayState = 'running';
      trackB.style.animationPlayState = 'running';
      trackA.style.transform = '';
      trackB.style.transform = '';
    }

    cols.addEventListener('mousedown', e=>{
      dragging=true; lastY=e.clientY; vel=0;
      freeze(); cols.classList.add('is-dragging');
      cancelAnimationFrame(rafId);
      e.preventDefault();
    });

    window.addEventListener('mousemove', e=>{
      if(!dragging) return;
      const dy = e.clientY - lastY;
      lastY = e.clientY;
      vel = dy;
      yA += dy;   // col-up: drag down → cards move down (scroll back)
      yB -= dy;   // col-down: drag down → cards move up (scroll forward, opposite)
      applyY();
    });

    window.addEventListener('mouseup', ()=>{
      if(!dragging) return;
      dragging = false;
      cols.classList.remove('is-dragging');
      let v = vel;
      cancelAnimationFrame(rafId);
      (function glide(){
        v *= 0.88;
        if(Math.abs(v) < 0.3){ unfreeze(); return; }
        yA += v;
        yB -= v;
        applyY();
        rafId = requestAnimationFrame(glide);
      })();
    });

    // touch
    cols.addEventListener('touchstart', e=>{
      dragging=true; lastY=e.touches[0].clientY; vel=0;
      freeze(); cols.classList.add('is-dragging');
      cancelAnimationFrame(rafId);
    }, {passive:true});

    cols.addEventListener('touchmove', e=>{
      if(!dragging) return;
      const dy = e.touches[0].clientY - lastY;
      lastY = e.touches[0].clientY;
      vel = dy;
      yA += dy;
      yB -= dy;
      applyY();
    }, {passive:true});

    cols.addEventListener('touchend', ()=>{
      if(!dragging) return;
      dragging = false;
      cols.classList.remove('is-dragging');
      let v = vel;
      cancelAnimationFrame(rafId);
      (function glide(){
        v *= 0.88;
        if(Math.abs(v) < 0.3){ unfreeze(); return; }
        yA += v;
        yB -= v;
        applyY();
        rafId = requestAnimationFrame(glide);
      })();
    });

    cols.addEventListener('dragstart', e=>e.preventDefault());
  })();
})();

// Mentor slider
(function(){
  const grid=document.getElementById('mentorGrid');
  const outer=document.getElementById('mentorOuter');
  const dotsEl=document.getElementById('mentorDots');
  const prev=document.getElementById('mentorPrev');
  const next=document.getElementById('mentorNext');
  function getPV(){return window.innerWidth<=560?1:window.innerWidth<=900?2:4;}
  let pv=getPV(), cur=0;
  const cards=Array.from(grid.children), tot=cards.length;
  function pages(){return Math.ceil(tot/pv);}
  function buildDots(){dotsEl.innerHTML='';for(let i=0;i<pages();i++){const s=document.createElement('span');if(i===cur)s.classList.add('active');s.addEventListener('click',()=>go(i));dotsEl.appendChild(s);}}
  function go(i){cur=(i+pages())%pages();const w=cards[0].offsetWidth,g=20,off=cur*pv*(w+g);grid.style.transform=`translateX(-${off}px)`;dotsEl.querySelectorAll('span').forEach((s,j)=>s.classList.toggle('active',j===cur));}
  prev.addEventListener('click',()=>go(cur-1));
  next.addEventListener('click',()=>go(cur+1));
  buildDots();
  window.addEventListener('resize',()=>{const np=getPV();if(np!==pv){pv=np;cur=0;grid.style.transform='translateX(0)';buildDots();}});
})();

// Pause marquees on card hover
['courseTrack','mediaTrack'].forEach(id=>{
  const track = document.getElementById(id);
  if(!track) return;
  track.addEventListener('mouseenter', ()=> track.style.animationPlayState='paused');
  track.addEventListener('mouseleave', ()=> track.style.animationPlayState='running');
});

// Scroll reveal
const revealObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
},{threshold:.05, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>{
  // If already in viewport on load, show immediately without waiting for scroll
  const r = el.getBoundingClientRect();
  if(r.top < window.innerHeight){
    el.classList.add('visible');
  } else {
    revealObs.observe(el);
  }
});

function toggleDD(id){
  const li = document.getElementById(id);
  const isOpen = li.classList.contains('open');
  document.querySelectorAll('.nav-links > li.open').forEach(el=>el.classList.remove('open'));
  const bd=document.getElementById('dd-book');
  if(bd) bd.style.display='';
  if(!isOpen){
    if(id==='dd-book'){
      const dd=document.getElementById('dd-book');
      if(dd) dd.style.display='block';
    } else {
      li.classList.add('open');
    }
  }
}
document.addEventListener('click', e => {
  if(!e.target.closest('.nav-links > li') && !e.target.closest('.btn-book')){
    document.querySelectorAll('.nav-links > li.open').forEach(el=>el.classList.remove('open'));
    const bd=document.getElementById('dd-book');
    if(bd) bd.style.display='';
  }
});

// Open booking form — scroll to contact, pre-select course type
function openBookingForm(type){
  // close any open dropdowns
  document.querySelectorAll('.nav-links > li.open').forEach(el=>el.classList.remove('open'));
  const bd = document.getElementById('dd-book');
  if(bd) bd.style.display='';

  // scroll to contact section
  const section = document.getElementById('contact');
  if(section) section.scrollIntoView({behavior:'smooth', block:'start'});

  // after scroll, highlight form and pre-fill message
  setTimeout(()=>{
    const form = document.querySelector('.contact-form');
    const msgField = document.getElementById('cf-msg');
    const nameField = document.getElementById('cf-name');

    if(form){
      form.classList.remove('booking-highlight');
      void form.offsetWidth; // force reflow to restart animation
      form.classList.add('booking-highlight');
      setTimeout(()=>form.classList.remove('booking-highlight'), 800);
    }
    if(msgField && !msgField.value){
      msgField.value = `I'd like to book a ${type}.`;
    }
    if(nameField) nameField.focus();
  }, 700);
}

// WhatsApp form submit
function submitToWhatsApp(){
  const name    = document.getElementById('cf-name').value.trim();
  const phone   = document.getElementById('cf-phone').value.trim();
  const course  = document.getElementById('cf-course').value;
  const cls     = document.getElementById('cf-class').value;
  const msg     = document.getElementById('cf-msg').value.trim();
  if(!name || !phone){
    alert('Please enter your name and mobile number.');
    return;
  }
  const text = encodeURIComponent(
    `*New Enquiry — ICON Institute*\n\n` +
    `👤 Name: ${name}\n` +
    `📱 Phone: ${phone}\n` +
    `📚 Course: ${course || 'Not specified'}\n` +
    `🎓 Class: ${cls || 'Not specified'}\n` +
    `💬 Message: ${msg || 'No message'}`
  );
  window.open(`https://wa.me/919800000000?text=${text}`, '_blank');
}

// YouTube IFrame API — must be global for YT callback
var ytPlayer, vcMuted=true, vcTimer;

function onYouTubeIframeAPIReady(){
  ytPlayer = new YT.Player('yt-player',{
    videoId:'M7lc1UVf-VE',
    playerVars:{
      autoplay:1, mute:1, controls:0, showinfo:0,
      rel:0, modestbranding:1, loop:1, playlist:'M7lc1UVf-VE',
      disablekb:1, fs:0, iv_load_policy:3, origin:window.location.origin
    },
    events:{
      onReady: function(e){
        e.target.playVideo();
        vcTimer = setInterval(vcUpdateProgress, 500);
      },
      onStateChange: function(e){
        var playBtn = document.getElementById('vc-play');
        if(!playBtn) return;
        if(e.data === YT.PlayerState.PLAYING){
          playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';
          playBtn.classList.add('active');
        } else {
          playBtn.innerHTML='<i class="fa-solid fa-play"></i>';
          playBtn.classList.remove('active');
        }
      }
    }
  });
}

function vcTogglePlay(){
  if(!ytPlayer) return;
  var s = ytPlayer.getPlayerState();
  if(s === 1) ytPlayer.pauseVideo();
  else ytPlayer.playVideo();
}

function vcToggleMute(){
  if(!ytPlayer) return;
  var btn = document.getElementById('vc-mute');
  if(vcMuted){ ytPlayer.unMute(); vcMuted=false; btn.innerHTML='<i class="fa-solid fa-volume-high"></i>'; btn.classList.add('active'); }
  else        { ytPlayer.mute();   vcMuted=true;  btn.innerHTML='<i class="fa-solid fa-volume-xmark"></i>'; btn.classList.remove('active'); }
}

function vcSeekBy(secs){
  if(!ytPlayer) return;
  ytPlayer.seekTo(Math.max(0, ytPlayer.getCurrentTime() + secs), true);
}

function vcSeek(e){
  if(!ytPlayer || !ytPlayer.getDuration) return;
  var bar = document.getElementById('vc-progress');
  var rect = bar.getBoundingClientRect();
  var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  ytPlayer.seekTo(pct * ytPlayer.getDuration(), true);
}

function vcUpdateProgress(){
  if(!ytPlayer || !ytPlayer.getCurrentTime) return;
  var cur = ytPlayer.getCurrentTime(), dur = ytPlayer.getDuration();
  if(!dur) return;
  var fill = document.getElementById('vc-fill');
  if(fill) fill.style.width = ((cur/dur)*100).toFixed(2)+'%';
}


// ── Intro curtain sequence ──
(function(){
  const overlay = document.getElementById('intro-overlay');
  const curtL   = document.getElementById('curt-left');
  const curtR   = document.getElementById('curt-right');
  const cube    = document.getElementById('cube');

  // 6 different campus images — one per face, shuffled on every reload
  const faceImgs = [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  ];

  // Shuffle so each reload shows a different face first
  function shuffle(arr){
    var a=arr.slice();
    for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}
    return a;
  }
  var shuffled = shuffle(faceImgs);
  var faces = cube ? cube.querySelectorAll('.cube-face') : [];
  faces.forEach(function(face, i){
    var img = document.createElement('img');
    img.src = shuffled[i % shuffled.length];
    img.alt = 'ICON';
    face.appendChild(img);
  });

  // Random start rotation angle — different each reload
  var startY = Math.floor(Math.random() * 360);
  var startX = -15 + Math.floor(Math.random() * 20) - 10; // -25 to -5
  if(cube){
    cube.style.setProperty('--ry', startY + 'deg');
    cube.style.setProperty('--rx', startX + 'deg');
  }

  // At 1000ms — open curtains revealing the website
  setTimeout(()=>{
    curtL.style.transform = 'translateX(-100%)';
    curtR.style.transform = 'translateX(100%)';
  }, 1000);

  // At 2000ms — fade cube out
  setTimeout(()=>{
    const cubeWrap = document.getElementById('cube-wrap');
    if(cubeWrap){
      cubeWrap.style.transition = 'opacity .5s ease, transform .5s ease';
      cubeWrap.style.opacity = '0';
      cubeWrap.style.transform = 'scale(.6) translateY(-20px)';
    }
  }, 2000);

  // At 2600ms — remove overlay entirely
  setTimeout(()=>{
    if(overlay) overlay.remove();
    // Trigger all reveals immediately once page is visible
    document.querySelectorAll('.reveal:not(.visible)').forEach(el=>el.classList.add('visible'));
  }, 2600);

  // ── Testimonial card 3D tilt removed (drag slider used instead) ──
})();
