(function(){
  const overlay = document.getElementById('intro-overlay');
  const curtL   = document.getElementById('curt-left');
  const curtR   = document.getElementById('curt-right');
  const cube    = document.getElementById('cube');

  // Slow spin while showing (CSS handles initial spin, we add slight wobble)
  let t = 0;
  const tilt = setInterval(()=>{
    t += 0.012;
    // subtle Y tilt oscillation on top of CSS spin
    cube.style.animationTimingFunction = 'linear';
  }, 16);

  // At 1600ms — open curtains revealing the website
  setTimeout(()=>{
    curtL.style.transform = 'translateX(-100%)';
    curtR.style.transform = 'translateX(100%)';
  }, 1600);

  // At 2900ms — fade cube out
  setTimeout(()=>{
    clearInterval(tilt);
    const cubeWrap = document.getElementById('cube-wrap');
    if(cubeWrap){
      cubeWrap.style.transition = 'opacity .5s ease, transform .5s ease';
      cubeWrap.style.opacity = '0';
      cubeWrap.style.transform = 'scale(.7)';
    }
  }, 2900);

  // At 3500ms — remove overlay entirely
  setTimeout(()=>{
    if(overlay) overlay.remove();
  }, 3500);

  // ── Testimonial card 3D tilt on mouse ──
  document.addEventListener('mousemove', e=>{
    document.querySelectorAll('.testi-card').forEach(card=>{
      const r = card.getBoundingClientRect();
      if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom){
        card.style.transform='';
        return;
      }
      const cx=(e.clientX-r.left)/r.width-.5;
      const cy=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`rotateX(${-cy*10}deg) rotateY(${cx*10}deg) translateZ(8px)`;
    });
  });
})();
