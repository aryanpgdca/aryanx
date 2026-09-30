const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';
});

const stage=document.getElementById('portraitStage');
if(stage){
  stage.addEventListener('pointermove',e=>{
    const r=stage.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    stage.style.transform=`rotateY(${x*10}deg) rotateX(${-y*9}deg)`;
  });
  stage.addEventListener('pointerleave',()=>stage.style.transform='rotateY(0deg) rotateX(0deg)');
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach((entry,i)=>{
    if(entry.isIntersecting){
      entry.target.style.transitionDelay=(i%5)*70+'ms';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

let last=0;
window.addEventListener('scroll',()=>{
  const nav=document.querySelector('.nav');
  const y=window.scrollY;
  if(y>40) nav.style.boxShadow='0 14px 45px rgba(0,0,0,.22)';
  else nav.style.boxShadow='none';
  last=y;
},{passive:true});
