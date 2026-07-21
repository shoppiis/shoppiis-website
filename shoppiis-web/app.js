/* =========================================================================
   SHOPPIIS — app.js
   Menú móvil · animaciones · FAQ · TOGGLE DE IDIOMA (EN/ES) · formulario
   =========================================================================

   CÓMO FUNCIONA EL IDIOMA
   -----------------------
   Al cargar la página, el script recorre todo el texto visible y, si encuentra
   una traducción en el diccionario DICT de abajo, le pone los atributos
   data-en / data-es automáticamente. Después el botón EN/ES intercambia todo.

   👉 SI EDITÁS UN TEXTO EN index.html:
      copiá el texto nuevo (en inglés) y su traducción dentro de DICT, así:
        "Texto en inglés": "Texto en español",
      Si un texto no está en el diccionario, queda igual en ambos idiomas
      (no rompe nada).
   ========================================================================= */

const DICT = {
  // --- Nav ---
  "Services": "Servicios",
  "Why Shoppiis": "Por qué Shoppiis",
  "Operations": "Operaciones",
  "Fleet": "Flota",
  "Team": "Equipo",
  "FAQ": "Preguntas",
  "Get a Free Quote": "Cotización gratis",
  "CALL DISPATCH": "LLAMAR A DESPACHO",

  // --- Hero ---
  "FMCSA-AUTHORIZED SOUTHEAST AUTO CARRIER · USDOT 4261491":
    "TRANSPORTISTA DE AUTOS EN EL SURESTE · AUTORIZADO FMCSA · USDOT 4261491",
  "Your vehicles, moved": "Sus vehículos, transportados",
  "across the South": "por todo el sur",
  "&mdash; safely, on time, fully insured.": "&mdash; seguros, a tiempo y asegurados.",
  "Shoppiis Cargo is an owner-operated vehicle transport and car shipping company serving Florida, Georgia, Mississippi, Alabama, South Carolina, North Carolina, and Tennessee. We transport vehicles for dealerships, manufacturers, private customers, and government agencies with real trucks, real routes, and real accountability.":
    "Shoppiis Cargo es una empresa de transporte de vehículos y envío de autos operada por sus dueños, que presta servicio en Florida, Georgia, Mississippi, Alabama, Carolina del Sur, Carolina del Norte y Tennessee. Transportamos vehículos para concesionarios, fabricantes, clientes particulares y agencias gubernamentales con camiones reales, rutas reales y responsabilidad real.",
  "Get a Free Quote &rarr;": "Cotización gratis &rarr;",
  "Call Dispatch": "Llamar a despacho",
  "Fast per-mile quotes &middot;": "Cotizaciones rápidas por milla &middot;",
  "$100K insured": "$100K asegurado",
  "&middot; Southeast lanes": "&middot; Rutas por el sureste",
  "OUR FLEET &middot;": "NUESTRA FLOTA &middot;",
  "&middot; SECURING A LOAD": "&middot; ASEGURANDO UNA CARGA",

  // --- Trust strip ---
  "Active Authority": "Autoridad activa",
  "Interstate Carrier": "Transportista interestatal",
  "$100K Insured": "$100K Asegurado",
  "Cargo &amp; Liability": "Carga y responsabilidad",
  "Interstate": "Interestatal",
  "FMCSA Authorized": "Autorizado FMCSA",
  "Owner Operated": "Operado por dueños",
  "We Control The Equipment": "Controlamos el equipo",

  // --- Ticker ---
  "DEALER-TO-DEALER TRANSFERS": "TRASLADOS ENTRE CONCESIONARIOS",
  "AUCTION &amp; MANUFACTURER DELIVERIES": "ENTREGAS DE SUBASTA Y FÁBRICA",
  "PRIVATE &amp; FLEET RELOCATIONS": "MUDANZAS PRIVADAS Y DE FLOTA",
  "GOVERNMENT LOADS": "CARGAS GUBERNAMENTALES",
  "RUNNING &amp; NON-RUNNING VEHICLES": "VEHÍCULOS QUE ARRANCAN Y QUE NO",
  "PER-MILE PRICING": "PRECIO POR MILLA",
  "$100K CARGO &amp; LIABILITY COVERAGE": "$100K EN COBERTURA DE CARGA Y RESPONSABILIDAD",

  // --- 01 What We Move ---
  "01 / What We Move": "01 / Qué transportamos",
  "We move vehicles. We charge by the mile. We pick up when we say we will.":
    "Movemos vehículos. Cobramos por milla. Retiramos cuando lo prometemos.",
  "Shoppiis Cargo runs truck-and-trailer routes across Florida and the Southeast, hauling cars for dealerships, manufacturers, private customers, and government loads &mdash; on our own equipment, with one team accountable from pickup to delivery.":
    "Shoppiis Cargo opera rutas con camión y tráiler por Florida y el sureste, trasladando autos para concesionarios, fabricantes, clientes particulares y cargas gubernamentales &mdash; con equipo propio y un solo equipo responsable desde la recogida hasta la entrega.",
  "Per-mile": "Por milla",
  "Transparent pricing": "Precios transparentes",
  "7 States": "7 Estados",
  "Active service area": "Zona de servicio activa",
  "Direct Carrier": "Transportista directo",
  "No brokers": "Sin intermediarios",

  // --- 02 Services ---
  "02 / Vehicle Transport Services": "02 / Servicios de transporte",
  "Auto transport, run by operators who own the equipment.":
    "Transporte de autos, operado por quienes son dueños del equipo.",
  "Every load moves on Shoppiis-operated trucks and trailers. We win the load, drive the route, and answer for the outcome &mdash; no anonymous handoffs to a stranger.":
    "Cada carga viaja en camiones y tráileres operados por Shoppiis. Ganamos la carga, manejamos la ruta y respondemos por el resultado &mdash; sin entregas anónimas a un desconocido.",
  "Dealer-to-Dealer Transfers": "Traslados entre concesionarios",
  "Move inventory between dealership locations quickly, with clear pickup and delivery windows you can plan around.":
    "Mueva inventario entre sucursales con rapidez, con ventanas claras de recogida y entrega para planificar.",
  "Auction &amp; Manufacturer Deliveries": "Entregas de subasta y fábrica",
  "Reliable, repeatable hauling of auction purchases and manufacturer deliveries on established regional lanes.":
    "Transporte confiable y repetible de compras en subasta y entregas de fábrica en rutas regionales establecidas.",
  "Private &amp; Fleet Relocations": "Mudanzas privadas y de flota",
  "Single-vehicle moves for private customers and multi-vehicle fleet relocations, priced honestly per mile.":
    "Traslados de un vehículo para particulares y mudanzas de flota de varios vehículos, con precio honesto por milla.",
  "Government Loads": "Cargas gubernamentales",
  "Authorized interstate capacity for government and institutional vehicle-transport requirements.":
    "Capacidad interestatal autorizada para necesidades de transporte de vehículos gubernamentales e institucionales.",

  // --- 03 Why choose ---
  "03 / Why Choose Shoppiis Cargo": "03 / Por qué elegir Shoppiis Cargo",
  "Built for shippers who are tired of chasing carriers.":
    "Hecho para quienes están cansados de perseguir transportistas.",
  "The auto-transport market is full of brokers who pass your vehicle to whoever answers. We run it differently &mdash; we own the trucks, we drive the routes, and you deal directly with the people responsible for your shipment.":
    "El mercado del transporte de autos está lleno de brókers que le pasan su vehículo a cualquiera. Nosotros lo hacemos distinto &mdash; somos dueños de los camiones, manejamos las rutas y usted trata directamente con los responsables de su envío.",
  "Owned equipment, one point of contact": "Equipo propio, un solo contacto",
  "Your vehicle stays on Shoppiis trucks and trailers. No re-brokering, no mystery driver, no finger-pointing.":
    "Su vehículo viaja siempre en camiones y tráileres de Shoppiis. Sin reventa, sin conductor misterioso, sin echar culpas.",
  "Transparent per-mile pricing": "Precio por milla transparente",
  "Clear, mileage-based quotes with no surprise fees. You know what the move costs before you book.":
    "Cotizaciones claras por millaje, sin cargos sorpresa. Usted sabe cuánto cuesta el traslado antes de reservar.",
  "Fully insured &amp; FMCSA-authorized": "Totalmente asegurado y autorizado por FMCSA",
  "$100K cargo &amp; liability coverage and active interstate authority &mdash; verifiable in public records before you tender.":
    "$100K en cobertura de carga y responsabilidad y autoridad interestatal activa &mdash; verificable en registros públicos antes de contratar.",
  "Southeast specialists": "Especialistas en el sureste",
  "We know the corridors &mdash; from Jacksonville and Atlanta to the Carolinas, Tennessee, and the Gulf Coast &mdash; and run them regularly.":
    "Conocemos los corredores &mdash; desde Jacksonville y Atlanta hasta las Carolinas, Tennessee y la Costa del Golfo &mdash; y los recorremos con frecuencia.",
  "Reliable pickup windows": "Ventanas de recogida confiables",
  "We commit to a window and communicate. Dispatch is a real phone number answered by people who run the loads.":
    "Nos comprometemos a una ventana y mantenemos la comunicación. Despacho es un teléfono real atendido por quienes manejan las cargas.",
  "Running or non-running": "Arranque o no arranque",
  "Operational and inoperable vehicles handled with the right equipment and securement &mdash; just tell us the condition.":
    "Vehículos operativos e inoperables manejados con el equipo y amarre correctos &mdash; solo díganos el estado.",

  // --- 04 Metrics ---
  "04 / By The Numbers": "04 / En números",
  "Real operations, measured.": "Operaciones reales, medidas.",
  "Operational metrics from active Shoppiis Cargo routes across the Southeast.":
    "Métricas operativas de rutas activas de Shoppiis Cargo por todo el sureste.",
  "(Placeholders &mdash; populate with verified figures before publishing.)":
    "(Marcadores &mdash; complete con cifras verificadas antes de publicar.)",
  "Operations To Date": "Operaciones a la fecha",
  "Vehicles Moved": "Vehículos movidos",
  "Vehicles Per Month": "Vehículos por mes",
  "Safety Violations": "Infracciones de seguridad",
  "FMCSA VERIFIED": "VERIFICADO POR FMCSA",

  // --- 05 Operations ---
  "07 / Operating Across the Southeast": "07 / Operando por el sureste",
  "On the Southeast&rsquo;s busiest vehicle-transport corridors.":
    "En los corredores de transporte más activos del sureste.",
  "The Southeast is one of the country&rsquo;s busiest vehicle-transport regions, with steady, recurring demand. Shoppiis runs key markets across seven states &mdash; anchored by Jacksonville, one of the nation&rsquo;s major auto-transport hubs.":
    "El sureste es una de las regiones de transporte de vehículos más activas del país, con demanda constante y recurrente. Shoppiis opera mercados clave en siete estados &mdash; anclados en Jacksonville, uno de los principales centros de transporte de autos del país.",
  "HOME BASE &middot; HUB": "BASE CENTRAL &middot; CENTRO",
  "SOUTHEAST": "SURESTE",
  "GULF SOUTH": "COSTA DEL GOLFO",
  "CAROLINAS": "CAROLINAS",
  "TENNESSEE VALLEY": "VALLE DE TENNESSEE",
  "South Carolina": "Carolina del Sur",
  "North Carolina": "Carolina del Norte",

  // --- 06 Quote form ---
  "06 / Request Transport": "06 / Solicitar transporte",
  "Get a free quote.": "Reciba una cotización gratis.",
  "Tell us where it&rsquo;s going and what we&rsquo;re moving. We&rsquo;ll come back with a per-mile quote and an available pickup window &mdash; usually same business day.":
    "Díganos a dónde va y qué debemos transportar. Le respondemos con una cotización por milla y una ventana de recogida disponible &mdash; normalmente el mismo día hábil.",
  "No obligation, no hidden fees": "Sin compromiso, sin cargos ocultos",
  "$100K cargo &amp; liability coverage": "Cobertura de $100K en carga y responsabilidad",
  "Running &amp; non-running vehicles": "Vehículos que arrancan y que no arrancan",
  "Talk to dispatch: (239) 526-1266": "Hable con despacho: (239) 526-1266",
  "Pickup location": "Lugar de recogida",
  "Delivery location": "Lugar de entrega",
  "Vehicle (year / make / model)": "Vehículo (año / marca / modelo)",
  "# of vehicles": "N.º de vehículos",
  "Vehicle condition": "Estado del vehículo",
  "Transport type": "Tipo de transporte",
  "Your name": "Su nombre",
  "Phone": "Teléfono",
  "Email": "Correo",
  "Preferred pickup date": "Fecha de recogida preferida",
  "Notes (optional)": "Notas (opcional)",
  "Request My Quote &rarr;": "Solicitar mi cotización &rarr;",
  "We typically respond the same business day. Your details are used only to quote your transport.":
    "Normalmente respondemos el mismo día hábil. Sus datos se usan solo para cotizar su transporte.",
  "Request received.": "Solicitud recibida.",
  "Thanks &mdash; dispatch will reach out shortly with your quote and an available pickup window. Need it sooner? Call (239)&nbsp;526-1266.":
    "Gracias &mdash; despacho se comunicará en breve con su cotización y una ventana de recogida disponible. ¿Lo necesita antes? Llame al (239)&nbsp;526-1266.",
  // opciones del <select>
  "Running": "Arranca",
  "Non-running / inoperable": "No arranca / inoperable",
  "Open transport": "Transporte abierto",
  "Enclosed transport": "Transporte cerrado",
  "Not sure": "No estoy seguro",

  // --- 07 Credibility ---
  "07 / Authorized &amp; Insured": "07 / Autorizado y asegurado",
  "Verify us before you tender a single load.":
    "Verifíquenos antes de entregarnos una sola carga.",
  "Brokers and dealerships can confirm our authority and safety standing in public records. Everything below is on file with the FMCSA.":
    "Los brókers y concesionarios pueden confirmar nuestra autoridad y nuestro historial de seguridad en registros públicos. Todo lo que aparece a continuación está registrado en la FMCSA.",
  "Operating Authority": "Autoridad operativa",
  "Active": "Activa",
  "Coverage": "Cobertura",
  "Primary BIPD · Progressive": "BIPD primaria · Progressive",
  "Equipment": "Equipo",
  "Auto Carrier": "Transportista de autos",
  "Owned truck + trailer": "Camión + tráiler propios",
  "Safety Record": "Historial de seguridad",
  "Clean": "Limpio",
  "0 violations · 0 crashes": "0 infracciones · 0 accidentes",
  "Active interstate authority since 09/2024 &middot; Cargo authorization: Property &middot; Hazmat authorized. Verify anytime via the":
    "Autoridad interestatal activa desde 09/2024 &middot; Autorización de carga: Propiedad &middot; Autorizado para materiales peligrosos. Verifíquela cuando quiera en el",
  "system.": "sistema.",

  // --- 08 Gallery ---
  "08 / On The Road": "08 / En la ruta",
  "Real loads. Real equipment. Real work.": "Cargas reales. Equipo real. Trabajo real.",
  "Shoppiis vehicles and crew moving customer cars across Florida &mdash; secured, strapped, and delivered.":
    "Vehículos y equipo de Shoppiis trasladando autos de clientes por Florida &mdash; asegurados, amarrados y entregados.",
  "LOADED &amp; SECURED": "CARGADO Y ASEGURADO",
  "WHEEL-STRAP SECUREMENT": "AMARRE POR RUEDA",
  "RAMP LOADING": "CARGA POR RAMPA",
  "ON A SOUTHEAST ROUTE": "EN RUTA POR EL SURESTE",
  "READY TO ROLL": "LISTO PARA SALIR",

  // --- 09 Team ---
  "09 / The Team": "09 / El equipo",
  "The people running the operation.": "Las personas que manejan la operación.",
  "We run Shoppiis directly &mdash; winning the loads, managing the routes, and controlling the equipment. Hands-on operators, not absentee owners.":
    "Manejamos Shoppiis directamente &mdash; ganando las cargas, gestionando las rutas y controlando el equipo. Operadores con las manos en el trabajo, no dueños ausentes.",
  "Founder &amp; CEO": "Fundador y CEO",
  "Spent 15+ years moving freight before starting Shoppiis. Came up through aviation logistics, knows the lanes cold, and still picks up the phone when a load needs sorting.":
    "Pasó más de 15 años moviendo carga antes de fundar Shoppiis. Viene de la logística aeronáutica, conoce las rutas al dedillo y sigue atendiendo el teléfono cuando hay que resolver un envío.",
  "Chief Operating Officer": "Director de operaciones",
  "Runs the day-to-day — dispatch, routing, and making sure trucks roll on time. If your vehicle is on the road, Benjamin knows where it is.":
    "Maneja el día a día: despacho, rutas y que los camiones salgan a tiempo. Si su vehículo está en la carretera, Benjamin sabe dónde está.",
  "Finance &amp; Operations": "Finanzas y operaciones",
  "Keeps the numbers honest and the pricing fair. Finance grad out of UCF who makes sure every truck we add actually pays for itself.":
    "Mantiene los números claros y los precios justos. Graduado en finanzas de UCF que se asegura de que cada camión que sumamos realmente se pague solo.",

  // --- 12 FAQ ---
  "12 / Questions, Answered": "12 / Preguntas respondidas",
  "Frequently asked questions.": "Preguntas frecuentes.",
  "Is my vehicle insured during transport?": "¿Mi vehículo está asegurado durante el transporte?",
  "Yes. Shoppiis carries $100,000 in primary cargo &amp; liability coverage (BIPD) through Progressive, and we operate under active FMCSA interstate authority (USDOT 4261491 / MC 1653490). You can request a certificate of insurance and verify our authority through the FMCSA SAFER system before booking.":
    "Sí. Shoppiis tiene $100,000 en cobertura primaria de carga y responsabilidad (BIPD) a través de Progressive, y operamos bajo autoridad interestatal activa de la FMCSA (USDOT 4261491 / MC 1653490). Puede solicitar un certificado de seguro y verificar nuestra autoridad en el sistema FMCSA SAFER antes de reservar.",
  "How soon can you pick up my vehicle?": "¿Qué tan pronto pueden retirar mi vehículo?",
  "It depends on the lane and current routing, but we usually provide an available pickup window the same business day you request a quote. Our Southeast corridors move fastest. Tell us your preferred date in the quote form and we&rsquo;ll confirm what&rsquo;s realistic.":
    "Depende de la ruta y la programación actual, pero normalmente damos una ventana de recogida disponible el mismo día hábil en que solicita la cotización. Nuestros corredores del sureste son los más rápidos. Indíquenos su fecha preferida en el formulario y confirmamos qué es realista.",
  "Do you transport non-running or inoperable vehicles?": "¿Transportan vehículos que no arrancan o inoperables?",
  "Yes. We handle both running and non-running vehicles &mdash; just select the condition in your quote request so we bring the right equipment and securement. Non-running vehicles may require a winch and additional handling, which we&rsquo;ll account for in the quote.":
    "Sí. Manejamos vehículos que arrancan y que no &mdash; solo elija el estado en su solicitud para que llevemos el equipo y amarre correctos. Los vehículos que no arrancan pueden requerir cabrestante y manejo adicional, que incluimos en la cotización.",
  "What areas do you serve?": "¿Qué zonas cubren?",
  "We operate across the Southeastern United States &mdash; Florida, Georgia, Mississippi, Alabama, South Carolina, North Carolina, and Tennessee. Jacksonville is a major national auto-transport hub and anchors our network. Have a lane outside this area? Ask &mdash; we hold interstate authority and can quote it.":
    "Operamos por todo el sureste de Estados Unidos &mdash; Florida, Georgia, Mississippi, Alabama, Carolina del Sur, Carolina del Norte y Tennessee. Jacksonville es un gran centro nacional de transporte de autos y ancla nuestra red. ¿Tiene una ruta fuera de esta zona? Pregúntenos &mdash; tenemos autoridad interestatal y podemos cotizarla.",
  "How does pricing and payment work?": "¿Cómo funcionan los precios y el pago?",
  "Transport is priced per mile based on distance, vehicle count, and condition &mdash; no surprise fees. You&rsquo;ll get a clear quote before you book. Payment terms are confirmed at booking; brokers can ask about carrier-packet and payment arrangements directly with dispatch.":
    "El transporte se cobra por milla según distancia, cantidad de vehículos y estado &mdash; sin cargos sorpresa. Recibe una cotización clara antes de reservar. Los términos de pago se confirman al reservar; los brókers pueden consultar por el carrier-packet y los arreglos de pago directamente con despacho.",
  "[Confirm accepted payment methods/terms before publishing.]":
    "[Confirme los métodos/términos de pago aceptados antes de publicar.]",

  // --- 13 Contact ---
  "13 / Get In Touch": "13 / Contacto",
  "Move a vehicle, or build with us.": "Mueva un vehículo o trabaje con nosotros.",
  "Brokers · Dealerships · Private": "Brókers · Concesionarios · Particulares",
  "Request Transport": "Solicitar transporte",
  "Need a vehicle moved across the Southeast? Get a per-mile quote with an available pickup window.":
    "¿Necesita mover un vehículo por el sureste? Solicite una cotización por milla con una ventana de recogida disponible.",
  "Talk To Dispatch": "Hable con despacho",
  "Call Us Directly": "Llámenos directamente",
  "Prefer to talk it through? Reach dispatch directly &mdash; answered by the people who run the loads.":
    "¿Prefiere hablarlo? Comuníquese directamente con despacho &mdash; atendido por quienes manejan las cargas.",

  // --- Footer ---
  "Vehicle transport &amp; logistics infrastructure. Owner-operated auto carrier serving the Southeastern United States.":
    "Transporte de vehículos e infraestructura logística. Transportista de autos operado por sus dueños, sirviendo al sureste de Estados Unidos.",
  "Company": "Empresa",
  "Get a Quote": "Cotización",
  "Other": "Otros",
  "Investor inquiries": "Consultas de inversores",
  "Partner with us": "Asóciese con nosotros",
  "FMCSA SAFER lookup": "Verificar en FMCSA SAFER",
  "INTERSTATE · PROPERTY · $100K INSURED": "INTERESTATAL · PROPIEDAD · $100K ASEGURADO"
};

/* ---- 1. Auto-etiquetado: pone data-en / data-es donde haya traducción ----
   El navegador serializa las entidades HTML al leer innerHTML / nodeValue
   (&mdash; → "—", &rsquo; → "’", &middot; → "·", & → &amp;…). Para que las
   claves del DICT coincidan SIEMPRE, normalizamos ambos lados pasándolos por
   el mismo serializador del DOM antes de comparar. Así dejan de fallar los
   textos con guiones largos, comillas, viñetas, etc. */
const _normEl = document.createElement('div');
function normKey(str){ _normEl.innerHTML = str; return _normEl.innerHTML.trim(); }

/* Índice: forma normalizada del inglés -> { en: claveOriginal, es: traducción } */
const LOOKUP = {};
Object.keys(DICT).forEach(k => { LOOKUP[normKey(k)] = { en: k, es: DICT[k] }; });

(function tagTranslatables(){
  const sel = 'a, p, h1, h2, h3, h4, span, label, button, option, div, li, small, b, strong, em';
  document.querySelectorAll(sel).forEach(el=>{
    if (el.hasAttribute('data-en')) return;        // respeta lo puesto a mano
    if (el.childElementCount === 0) {              // texto puro: traducimos el elemento entero
      const hit = LOOKUP[normKey(el.innerHTML.trim())];
      if (hit) {
        el.setAttribute('data-en', hit.en);
        el.setAttribute('data-es', hit.es);
      }
      return;
    }
    // Mezcla de texto + hijos (ej. la "+" del FAQ, el <small> de credibilidad,
    // el <b> de testimonios): envolvemos solo los nodos de texto que matcheen.
    Array.from(el.childNodes).forEach(node=>{
      if (node.nodeType !== 3) return;             // solo nodos de texto
      const trimmed = node.nodeValue.trim();
      if (!trimmed) return;
      const hit = LOOKUP[normKey(trimmed)];
      if (!hit) return;
      const span = document.createElement('span');
      span.setAttribute('data-en', hit.en);
      span.setAttribute('data-es', hit.es);
      span.innerHTML = hit.en;
      const lead = node.nodeValue.match(/^\s*/)[0];
      const trail = node.nodeValue.match(/\s*$/)[0];
      const frag = document.createDocumentFragment();
      if (lead) frag.appendChild(document.createTextNode(lead));
      frag.appendChild(span);
      if (trail) frag.appendChild(document.createTextNode(trail));
      el.replaceChild(frag, node);
    });
  });
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el=>{
    if (el.hasAttribute('data-ph-en')) return;
    const key = (el.getAttribute('placeholder') || '').trim();
    if (key && DICT[key]) {
      el.setAttribute('data-ph-en', key);
      el.setAttribute('data-ph-es', DICT[key]);
    }
  });
  document.querySelectorAll('option').forEach(el=>{
    if (el.hasAttribute('data-opt-en')) return;
    const key = el.textContent.trim();
    if (key && DICT[key]) {
      el.setAttribute('data-opt-en', key);
      el.setAttribute('data-opt-es', DICT[key]);
    }
  });
})();

/* ---- 2. Menú móvil ---- */
const t = document.getElementById('menuToggle'), n = document.getElementById('navlinks');
if (t && n) {
  t.addEventListener('click', () => n.classList.toggle('open'));
  n.querySelectorAll('a').forEach(a => a.addEventListener('click', () => n.classList.remove('open')));
}

/* ---- 3. Animaciones al hacer scroll ---- */
const io = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4 * 60) + 'ms'; io.observe(el); });

/* ---- 4. Ticker ---- */
const tk = document.getElementById('ticker');
if (tk) tk.innerHTML += tk.innerHTML;

/* ---- 5. FAQ acordeón ---- */
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => { q.parentElement.classList.toggle('open'); });
});

/* ---- 6. TOGGLE DE IDIOMA (EN / ES) ---- */
const WA_MSG = {
  en: "Hi Shoppiis, I'd like a vehicle transport quote.",
  es: "Hola Shoppiis, necesito una cotización de transporte."
};
function setLang(lang){
  document.documentElement.lang = lang;
  try { localStorage.setItem('shoppiis-lang', lang); } catch(e){}
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val !== null) el.innerHTML = val;
  });
  document.querySelectorAll('[data-ph-en]').forEach(el => {
    const val = el.getAttribute('data-ph-' + lang);
    if (val !== null) el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('option[data-opt-en]').forEach(el => {
    const val = el.getAttribute('data-opt-' + lang);
    if (val !== null) el.textContent = val;
  });
  const wa = document.querySelector('.wa-float');
  if (wa) wa.href = 'https://wa.me/12395261266?text=' + encodeURIComponent(WA_MSG[lang]);
  document.querySelectorAll('[data-lang-toggle]').forEach(tg => {
    tg.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
  });
}
document.querySelectorAll('[data-lang-toggle] button').forEach(b => {
  b.addEventListener('click', () => setLang(b.getAttribute('data-lang')));
});

/* Idioma inicial: recordamos la última elección; si no hay, usamos el idioma
   del navegador (español si corresponde) y, por defecto, inglés. */
(function initLang(){
  let saved;
  try { saved = localStorage.getItem('shoppiis-lang'); } catch(e){}
  const browser = (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
  setLang(saved === 'es' || saved === 'en' ? saved : browser);
})();

/* ---- 7. Formulario de cotización ----
   PASO 1: creá una clave gratis en https://web3forms.com (te pide solo el email
           donde querés recibir los pedidos) y pegala en el index.html.
   (También funciona con Formspree: cambiá FORM_ENDPOINT por tu URL de Formspree
    y borrá el input access_key del index.html.) */
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

const form = document.getElementById('quoteForm');
if (form) {
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
      ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (err) {
      btn.disabled = false;
      btn.innerHTML = original;
      alert(es
        ? 'No pudimos enviar su solicitud. Llámenos al (239) 526-1266 o intente de nuevo.'
        : "We couldn't send your request. Please call (239) 526-1266 or try again.");
    }
  });
}
