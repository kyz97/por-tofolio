/* === EDIT BAGIAN INI === */
const NAMA="Kayz";
const SKILL=["HTML","CSS","JavaScript","UI/UX","MySQL","Jaringan","GSAP","Git"];
const BAN=["MY PROJECTS","UI/UX DESIGN","WEB DEV","GSAP ANIMATION"];
const PROYEK=[
 {t:"live",n:"Website Ulang Tahun",d:"Web kejutan interaktif dengan quiz, game mini dan countdown.",more:"Website kado ulang tahun yang dibuat dari nol. Pengunjung melewati quiz, bermain game mini, lalu menunggu countdown menuju hari spesial. Semua dibuat dengan HTML, CSS, dan JavaScript murni tanpa framework.",tech:["HTML","CSS","JavaScript"],fit:["Quiz dengan skor akhir","Game mini interaktif","Countdown otomatis","Animasi transisi antar halaman"],thn:"2026",demo:"https://example.com",repo:"https://github.com/",c:"#e8202a"},
 {t:"live",n:"Portofolio Pribadi",d:"Landing page personal dengan animasi scroll dan tema ganda.",more:"Halaman portofolio untuk memperkenalkan diri dan proyek-proyek. Fokus pada animasi kecil yang halus dan tampilan yang tetap nyaman di HP maupun laptop.",tech:["HTML","CSS","JS"],fit:["Tema terang dan gelap","Animasi muncul saat scroll","Filter dan pencarian proyek","Responsif di semua layar"],thn:"2026",demo:"https://example.com",repo:"https://github.com/",c:"#6c5cff"},
 {t:"dev",n:"Dashboard Jaringan",d:"Monitoring perangkat jaringan, masih tahap pengembangan.",more:"Dashboard untuk memantau status perangkat jaringan dalam satu tampilan. Saat ini masih berjalan di localhost dan terus dikembangkan.",tech:["JavaScript","Jaringan","Dashboard"],fit:["Status perangkat real-time","Grafik trafik","Notifikasi perangkat terputus"],thn:"2026",demo:"",repo:"https://github.com/",c:"#0f9d8a"},
 {t:"live",n:"Landing Page Sekolah",d:"Website profil sekolah yang responsif dan cepat.",more:"Website profil sekolah berisi informasi, galeri, dan kontak. Dibuat ringan supaya cepat dibuka walau koneksi pelan.",tech:["HTML","CSS","UI/UX"],fit:["Desain responsif","Galeri kegiatan","Peta lokasi dan kontak"],thn:"2025",demo:"https://example.com",repo:"",c:"#f5a800"},
 {t:"dev",n:"Sistem Informasi",d:"Aplikasi data dengan login dan database.",more:"Aplikasi pengelolaan data lengkap dengan halaman login, tabel, dan pencarian. Sedang dalam tahap pengembangan di localhost.",tech:["MySQL","JavaScript","Git"],fit:["Login dan hak akses","CRUD data","Pencarian dan ekspor"],thn:"2026",demo:"",repo:"https://github.com/",c:"#3a6bff"},
 {t:"live",n:"Motion Showreel",d:"Animasi 15 detik: tipografi kinetik dan partikel.",more:"Animasi motion graphics 15 detik yang dibuat dengan canvas. Berisi tipografi kinetik, grid bentuk, grafik data, dan efek partikel.",tech:["Canvas","GSAP","Animasi"],fit:["Lima adegan bergantian","Transisi wipe warna","Kontrol putar dan geser waktu"],thn:"2026",demo:"https://example.com",repo:"https://github.com/",c:"#ff3d71"}];
/* ====================== */
const $=s=>document.querySelector(s);
$('#nm').innerHTML=NAMA.split(' ').map((w,wi)=>[...w].map((c,i)=>`<span style="animation-delay:${(wi*5+i)*.05}s">${c}</span>`).join('')).join('<br>');
$('#pf').innerHTML=[...'PORTFOLIO'].map(c=>`<span>${c}</span>`).join('');
const pts=(n,a,b)=>Array.from({length:n*2},(_,i)=>{const t=i*Math.PI/n,r=i%2?b:a;return(100+Math.cos(t)*r).toFixed(1)+','+(100+Math.sin(t)*r).toFixed(1)}).join(' ');
$('#bp').setAttribute('points',pts(16,96,80));$('#bs').setAttribute('points',pts(16,96,80));
const mk=a=>a.map(t=>`<span>${t}</span><span style="color:var(--yel)">//</span>`).join('').repeat(5);
$('#m1').innerHTML=mk(BAN);$('#m2').innerHTML=mk([...BAN].reverse());
$('#sk').innerHTML=SKILL.map(s=>`<span>${s}</span>`).join('');
let sd=11;const r=()=>(sd=sd*16807%2147483647)/2147483647,cols=['#ffffffd0','#ffd23f','#ff8a3d','#e8202a','#7a0f1a'];
$('#hm').innerHTML=Array.from({length:53*7},()=>{const v=r();return`<i style="background:${v<.55?cols[0]:v<.75?cols[1]:v<.88?cols[2]:v<.96?cols[3]:cols[4]}"></i>`}).join('');
const tg=p=>p.tech.map(k=>`<span>${k}</span>`).join('');
$('#gr').innerHTML=PROYEK.map((p,i)=>`<article class="cd rv" data-i="${i}" data-t="${p.t}" data-s="${(p.n+' '+p.tech.join(' ')).toLowerCase()}" style="transition-delay:${(i%3)*.08}s"><em>0${i+1}</em><span class="bd ${p.t==='dev'?'dv':''}">● ${p.t==='dev'?'DEV':'LIVE'}</span><h3>${p.n}</h3><p>${p.d}</p><div class="ch sm">${tg(p)}</div><button class="btn s">LIHAT DETAIL →</button></article>`).join('');
let F='all',Q='',cur=[],idx=0,last=null;const M=$('#md'),hs=u=>{try{history.replaceState(null,'',u)}catch(e){}};
const apply=()=>{document.querySelectorAll('.cd').forEach(c=>c.classList.toggle('h',(F!=='all'&&c.dataset.t!==F)||(Q&&!c.dataset.s.includes(Q))));$('#em').hidden=!!document.querySelector('.cd:not(.h)')};
document.querySelectorAll('.tabs a').forEach(a=>{const f=a.dataset.f;a.insertAdjacentText('beforeend',' ('+(f==='all'?PROYEK.length:PROYEK.filter(p=>p.t===f).length)+')');
 a.onclick=()=>{F=f;document.querySelectorAll('.tabs a').forEach(b=>b.classList.toggle('on',b===a));apply()}});
$('#q').oninput=e=>{Q=e.target.value.trim().toLowerCase();apply()};
function show(i){const p=PROYEK[i],pd=n=>String(n).padStart(2,'0');cur=[...document.querySelectorAll('.cd:not(.h)')].map(c=>+c.dataset.i);if(!cur.includes(i))cur=PROYEK.map((_,k)=>k);idx=cur.indexOf(i);
 $('#ms').className='bd '+(p.t==='dev'?'dv':'');$('#ms').textContent='● '+(p.t==='dev'?'DEV':'LIVE');$('#mn').textContent=pd(idx+1)+' / '+pd(cur.length)+' · '+p.thn;
 $('#mt').textContent=p.n;$('#mdsc').textContent=p.more;$('#mtech').innerHTML=tg(p);$('#mf').innerHTML=p.fit.map(x=>`<li>${x}</li>`).join('');
 $('#mp').innerHTML=`<b>${pd(i+1)}</b><span>${p.n}</span>`;$('#mp').style.setProperty('--g',p.c);
 $('#ma').innerHTML=(p.demo?`<a class="btn" href="${p.demo}" target="_blank" rel="noopener">BUKA DEMO →</a>`:`<span class="btn s off">DEMO BELUM TERSEDIA</span>`)+(p.repo?`<a class="btn s" href="${p.repo}" target="_blank" rel="noopener">LIHAT KODE</a>`:'');
 hs('#proyek-'+(i+1));if(M.hidden){last=document.activeElement;M.hidden=false;document.body.style.overflow='hidden';requestAnimationFrame(()=>M.classList.add('on'));$('#mc').focus()}}
function hide(){M.classList.remove('on');setTimeout(()=>{M.hidden=true},220);document.body.style.overflow='';hs('#proyek');last&&last.focus()}
$('#gr').onclick=e=>{const c=e.target.closest('.cd');if(c)show(+c.dataset.i)};
$('#mc').onclick=hide;M.onclick=e=>{if(e.target===M)hide()};
$('#mpv').onclick=()=>show(cur[(idx-1+cur.length)%cur.length]);$('#mnx').onclick=()=>show(cur[(idx+1)%cur.length]);
addEventListener('keydown',e=>{if(M.hidden)return;if(e.key==='Escape')hide();else if(e.key==='ArrowLeft')$('#mpv').click();else if(e.key==='ArrowRight')$('#mnx').click();
 else if(e.key==='Tab'){const f=[...M.querySelectorAll('button,a[href]')],a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
{const m=location.hash.match(/^#proyek-(\d+)$/);if(m&&PROYEK[m[1]-1])show(m[1]-1)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
addEventListener('scroll',()=>$('#up').classList.toggle('on',scrollY>500),{passive:true});
$('#up').onclick=()=>scrollTo({top:0});
$('#tg').onclick=()=>{const e=document.documentElement,d=e.dataset.theme?e.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;e.dataset.theme=d?'light':'dark'};
