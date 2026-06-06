const t=document.getElementById('menuToggle'),n=document.getElementById('navlinks');
t.addEventListener('click',()=>n.classList.toggle('open'));
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));

const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%4*60)+'ms';io.observe(el);});

const tk=document.getElementById('ticker');tk.innerHTML+=tk.innerHTML;

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q=>{q.addEventListener('click',()=>{q.parentElement.classList.toggle('open');});});

// ---- Toggle de idioma (EN / ES) ----
// Texto:        data-en / data-es
// placeholders: data-ph-en / data-ph-es
// <option>:     data-opt-en / data-opt-es
// Para traducir algo nuevo, agregá esos atributos y el toggle lo toma solo.
const WA_MSG = {
  en: "Hi Shoppiis, I'd like a vehicle transport quote.",
  es: "Hola Shoppiis, necesito una cotización de transporte."
};
function setLang(lang){
  document.documentElement.lang = lang;

  // texto
  document.querySelectorAll('[data-en]').forEach(el=>{
    const val = el.getAttribute('data-'+lang);
    if(val!==null) el.innerHTML = val;
  });
  // placeholders de inputs / textarea
  document.querySelectorAll('[data-ph-en]').forEach(el=>{
    const val = el.getAttribute('data-ph-'+lang);
    if(val!==null) el.setAttribute('placeholder', val);
  });
  // opciones de <select>
  document.querySelectorAll('option[data-opt-en]').forEach(el=>{
    const val = el.getAttribute('data-opt-'+lang);
    if(val!==null) el.textContent = val;
  });
  // mensaje dinámico de WhatsApp
  const wa = document.querySelector('.wa-float');
  if(wa) wa.href = 'https://wa.me/13478659529?text=' + encodeURIComponent(WA_MSG[lang]);

  // estado activo del botón
  document.querySelectorAll('[data-lang-toggle]').forEach(tg=>{
    tg.querySelectorAll('button').forEach(b=>{
      b.classList.toggle('active', b.getAttribute('data-lang')===lang);
    });
  });
}
document.querySelectorAll('[data-lang-toggle] button').forEach(b=>{
  b.addEventListener('click',()=>setLang(b.getAttribute('data-lang')));
});

// ---- Quote form ----
// PASO 1: creá una clave gratis en https://web3forms.com (te pide solo el email
//         donde querés recibir los pedidos) y pegala abajo. Eso es todo.
// (También funciona con Formspree: cambiá FORM_ENDPOINT por tu URL de Formspree
//  y borrá el input access_key del index.html.)
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

const form = document.getElementById('quoteForm');
form.addEventListener('submit', async function(e){
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  const es = document.documentElement.lang === 'es';
  btn.disabled = true;
  btn.innerHTML = es ? 'Enviando…' : 'Sending…';

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) throw new Error('send failed');

    form.style.display = 'none';
    const ok = document.getElementById('formSuccess');
    ok.classList.add('show');
    ok.scrollIntoView({ behavior:'smooth', block:'center' });
  } catch (err) {
    btn.disabled = false;
    btn.innerHTML = original;
    alert(es
      ? 'No pudimos enviar tu solicitud. Llamanos al (347) 865-9529 o intentá de nuevo.'
      : "We couldn't send your request. Please call (347) 865-9529 or try again.");
  }
});