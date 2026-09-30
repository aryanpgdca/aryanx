const glow=document.querySelector('.pointer-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true});

const scene=document.getElementById('scene'), card=document.getElementById('imageCard');
const floats=[...document.querySelectorAll('.float-tag,.glass-note')];
scene?.addEventListener('pointermove',e=>{
  const r=scene.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
  card.style.transform=`rotateY(${-5+x*12}deg) rotateX(${2-y*9}deg) translateZ(25px)`;
  floats.forEach(el=>{const d=+(el.dataset.depth||1);el.style.translate=`${x*-14*d}px ${y*-11*d}px`;});
});
scene?.addEventListener('pointerleave',()=>{card.style.transform='rotateY(-5deg) rotateX(2deg) translateZ(25px)';floats.forEach(el=>el.style.translate='0 0')});

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

window.addEventListener('scroll',()=>{
 const h=document.documentElement.scrollHeight-innerHeight;
 document.getElementById('progress').style.width=(scrollY/h*100)+'%';
},{passive:true});
document.getElementById('year').textContent=new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
 const t=document.querySelector(a.getAttribute('href')); if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}
}));
