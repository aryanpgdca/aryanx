const jobs=[
 {date:'JUL 2025 — PRESENT',logo:'ASUS',title:'ASUS Solution Expert',company:'ASUS · Full-time · Noida, UP (On-site)',bullets:['Helping customers choose the right ASUS solutions','Consultative and solution-oriented selling','Building long-term customer relationships']},
 {date:'APR 2024 — JUN 2025',logo:'BOSE',title:'Senior Executive',company:'Bose Corporation · Full-time · Noida, UP (On-site)',bullets:['Delivered exceptional customer experiences','Demonstrated premium Bose audio solutions','Drove sales through expertise & personalization']},
 {date:'AUG 2023 — MAR 2024',logo:'F',title:'Executive',company:'Flipkart · Full-time · Gurugram, HR (On-site)',bullets:['Managed inbound warehouse operations','Ensured inventory accuracy & stock verification','Collaborated with cross-functional teams']},
 {date:'APR 2023 — OCT 2023',logo:'B',title:'Java Developer',company:'Bytecode · Internship · Kanpur, UP (Hybrid)',bullets:['Developed and maintained Java-based applications','Worked on data integration & debugging','Followed best practices in software development']},
 {date:'APR 2022 — SEP 2022',logo:'PHP',title:'PHP Web Developer',company:'RAMAVIP PVT. LTD. · Internship · Kanpur, UP (Hybrid)',bullets:['Built and customized dynamic web applications','Implemented backend functionality using PHP & MySQL','Improved application performance and user experience']}
];
const timeline=document.querySelector('#timeline');
jobs.forEach((j,i)=>{
 const el=document.createElement('article'); el.className='job reveal'; el.style.transitionDelay=(i*70)+'ms';
 el.innerHTML=`<div class="job-dot"></div><div class="job-top"><div class="job-date">${j.date}</div><div class="job-title"><div class="job-logo">${j.logo}</div><div><h3>${j.title}</h3><p>${j.company}</p></div></div></div><ul>${j.bullets.map(x=>`<li>${x}</li>`).join('')}</ul>`;
 timeline.appendChild(el);
});
const certs=[
 ['Deloitte','Data Analytics Job Simulation','Forage'],['SQL for Data Analysis','Analytics & SQL','Simplilearn'],['Introduction to SQL','SQL Fundamentals','Simplilearn'],['Microsoft Database Fundamentals','Database Concepts','Simplilearn'],['Google Slides','Presentation & Productivity','Google Cloud Community'],['Power BI Data Modelling','BI & Analytics','Udemy'],['Java','Programming','Simplilearn'],['Business Analytics with Excel','Data Analysis','Udemy']
];
const certList=document.querySelector('#certList');
certs.forEach(c=>{const d=document.createElement('div');d.className='cert reveal';d.innerHTML=`<b>${c[0]}</b><span>${c[1]}</span><small>${c[2]}</small>`;certList.appendChild(d)});
const skills=['Technology Sales','Business Development','Technology Consulting','Customer Engagement','Marketing Strategy','Consumer Behavior','Data Analysis','SQL & MySQL','Power BI','Excel (Advanced)','Java','PHP','Web Development','CRM','Problem Solving','Communication','Relationship Management'];
const cloud=document.querySelector('#skillTags'); skills.forEach((s,i)=>{const d=document.createElement('span');d.className='skill-tag reveal';d.style.transitionDelay=(i*30)+'ms';d.textContent=s;cloud.appendChild(d)});
const tools=['Excel','Power BI','MySQL','Java','PHP','SQL','Salesforce']; const radial=document.querySelector('#toolRadial');
const center=document.createElement('div'); center.className='tool-node center'; center.textContent='TECH + BUSINESS'; radial.appendChild(center);
tools.forEach((t,i)=>{const d=document.createElement('div');d.className='tool-node';d.textContent=t;const a=(i/tools.length)*Math.PI*2-Math.PI/2;const r=88;d.style.left=`calc(50% + ${Math.cos(a)*r}px - 37px)`;d.style.top=`calc(50% + ${Math.sin(a)*r}px - 37px)`;radial.appendChild(d)});

// Responsive nav
const menu=document.querySelector('#menu'), nav=document.querySelector('#navLinks');
menu?.addEventListener('click',()=>nav.classList.toggle('mobile'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile')));

// Scroll-aware navbar
const navShell=document.querySelector('#navShell');
window.addEventListener('scroll',()=>navShell.classList.toggle('scrolled',window.scrollY>20),{passive:true});

// Cursor glow
const glow=document.querySelector('.cursor-glow'); window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true});

// 3D tilt interaction
function attachTilt(el){el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;const power=Number(el.dataset.tilt||6);el.style.transform=`perspective(900px) rotateX(${-y*power}deg) rotateY(${x*power}deg) translateZ(4px)`});el.addEventListener('pointerleave',()=>el.style.transform='')}
document.querySelectorAll('.tilt').forEach(attachTilt);

// Hero visual drag / inertia
const stage=document.querySelector('#heroStage'); let dragging=false,startX=0,startRot=0,currentRot=0;
stage?.addEventListener('pointerdown',e=>{dragging=true;startX=e.clientX;startRot=currentRot;stage.setPointerCapture(e.pointerId)});
stage?.addEventListener('pointermove',e=>{if(!dragging)return;currentRot=startRot+(e.clientX-startX)*.06;stage.querySelector('.portrait-card').style.transform=`rotateY(${currentRot}deg) rotateX(2deg)`});
stage?.addEventListener('pointerup',()=>{dragging=false}); stage?.addEventListener('pointercancel',()=>{dragging=false});

// Reveal on scroll
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(x=>{x.classList.add('observe');observer.observe(x)});

// Space particle field
const c=document.querySelector('#space'),ctx=c.getContext('2d'); let W,H,dpr,particles=[];
function resize(){W=innerWidth;H=innerHeight;dpr=Math.min(devicePixelRatio||1,2);c.width=W*dpr;c.height=H*dpr;c.style.width=W+'px';c.style.height=H+'px';ctx.setTransform(dpr,0,0,dpr,0,0);particles=Array.from({length:Math.min(180,Math.floor(W*H/9000))},()=>({x:Math.random()*W,y:Math.random()*H,z:Math.random(),s:.4+Math.random()*1.8,v:.08+Math.random()*.28}))}
function draw(){ctx.clearRect(0,0,W,H); for(const p of particles){p.y-=p.v;if(p.y<0)p.y=H;const a=.10+p.z*.5;ctx.fillStyle=`rgba(112,185,255,${a})`;ctx.beginPath();ctx.arc(p.x,p.y,p.s*p.z,0,Math.PI*2);ctx.fill()} requestAnimationFrame(draw)}
addEventListener('resize',resize); resize(); draw();
