
// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href');
    if(id && id.startsWith('#')){
      e.preventDefault();
      const el=document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
      document.body.classList.remove('nav-open');
      const t=document.getElementById('nav-toggle'); if(t) t.setAttribute('aria-expanded','false');
    }
  });
});
// forms (demo)
function bindForm(id){
  const f=document.getElementById(id);
  if(!f) return;
  f.addEventListener('submit', e=>{
    e.preventDefault();
    const b=f.querySelector('button');
    b.disabled=true; b.textContent='Заявка отправлена ✓';
  });
}
['lead-home','lead-services','lead-tenders','lead-contacts','lead-footer'].forEach(bindForm);
// burger
const toggle=document.getElementById('nav-toggle');
const backdrop=document.getElementById('nav-backdrop');
function setBurger(open){ if(!toggle) return; toggle.setAttribute('aria-expanded', open?'true':'false'); }
if(toggle){ toggle.addEventListener('click', ()=>{ const open=!document.body.classList.contains('nav-open'); document.body.classList.toggle('nav-open',open); setBurger(open); }); }
if(backdrop){ backdrop.addEventListener('click', ()=>{ document.body.classList.remove('nav-open'); setBurger(false); }); }
document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ document.body.classList.remove('nav-open'); setBurger(false); }});
