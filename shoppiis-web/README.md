# Shoppiis — Sitio Web (Vehicle Transport & Auto Carrier)

Sitio estático (HTML + CSS + JS, sin frameworks). Todo es editable a mano.
No necesita build, ni Node, ni nada raro: son archivos sueltos que se suben tal cual.

---

## 📁 Estructura

```
shoppiis-web/
├── index.html        ← todo el contenido / textos / secciones
├── styles.css        ← todos los estilos (colores, tipografías, layout)
├── app.js            ← menú móvil, animaciones, toggle idioma, formulario
├── assets/
│   ├── img/
│   │   ├── logo.jpg
│   │   ├── hero.jpg       ← foto principal (camión cargando)
│   │   ├── g1.jpg … g6.jpg ← galería "On The Road" (g1 = puerta con DOT)
│   └── team/
│       ├── jorge.jpg
│       ├── benjamin.jpg
│       └── ignacio.jpg
├── netlify.toml      ← config opcional para Netlify
├── 404.html
└── README.md
```

---

## ✏️ Cómo editar (lo que vas a tocar más seguido)

### Textos
Todo está en `index.html`. Buscá la sección por su comentario, ej:
`<!-- ============ HERO ============ -->`, `<!-- ============ TEAM ============ -->`, etc.

### Textos en 2 idiomas (EN / ES)
Los elementos traducibles tienen dos atributos. Editá **los dos** para que el
toggle EN/ES quede sincronizado:

```html
<h2 data-en="Get a free quote." data-es="Recibí una cotización gratis.">Get a free quote.</h2>
```

- `data-en` → texto en inglés
- `data-es` → texto en español
- placeholders de inputs → `data-ph-en` / `data-ph-es`
- opciones de `<select>` → `data-opt-en` / `data-opt-es`

Para traducir algo que todavía está solo en inglés: agregale `data-en="..."` y
`data-es="..."` y el toggle lo toma solo.

### Fotos
Reemplazá los archivos en `assets/img/` y `assets/team/` **manteniendo el mismo
nombre** y no tenés que tocar el HTML. Si querés otro nombre, cambialo también
en el `src="..."` dentro de `index.html`.

- Fotos recomendadas: 1200px de ancho aprox., comprimidas (usá squoosh.app).
- `g1.jpg` es la foto de la puerta con "SHOPPIIS LLC / DOT 4261491" — es la de
  mayor valor de confianza, no la saques.

### Colores / estilo
Todo en `styles.css`, arriba de todo en `:root`:

```css
--yellow:#f2e20a;   /* amarillo de marca */
--black:#0a0a0a;
```

---

## 📨 Formulario de cotización (IMPORTANTE — hacelo antes de publicar)

El formulario ya está conectado a **Web3Forms** (gratis, sin servidor).
Para activarlo:

1. Entrá a **https://web3forms.com** y poné el email donde querés recibir los
   pedidos (ej. `jorge.o@shoppiis.com`). Te dan una **Access Key**.
2. Abrí `index.html`, buscá `TU_CLAVE_DE_WEB3FORMS_ACA` y pegá tu clave ahí.
3. **Probalo:** mandá una cotización de prueba y confirmá que te llega el mail.

> ⚠️ Si no ponés la clave, el formulario muestra "enviado" pero **no manda nada**.
> No publiques sin probar el envío al menos una vez.

¿Preferís Formspree en vez de Web3Forms?
- En `app.js` cambiá `FORM_ENDPOINT` por tu URL de Formspree
  (`https://formspree.io/f/XXXX`).
- En `index.html` borrá el input `access_key`.

---

## 🗺️ Cotización instantánea + mapa (Mapbox — IMPORTANTE)

El sitio tiene una **cotización instantánea**: el cliente elige recogida y
entrega, elige el tipo de vehículo, y el sitio calcula el precio solo
(distancia real de manejo × tarifa por milla) y muestra la ruta en un mapa.
Después el botón **"Request to Book"** rellena el formulario de abajo con
esos datos para que despacho reciba el pedido por email.

Usa **Mapbox** (gratis hasta ~100.000 consultas por mes). El token se
configura como **variable de entorno en Vercel** (no va en el código):

1. Creá una cuenta gratis en **https://account.mapbox.com**.
2. Copiá tu **Default public token** (empieza con `pk.`).
3. En Vercel: **Project → Settings → Environment Variables → Add**.
   - **Key (nombre exacto):** `MAPBOX_TOKEN`
   - **Value:** tu token `pk...`
   - **Environments:** marcá **Production** (y **Preview** si querés que
     los deploys de prueba también muestren el mapa).
4. **Redeploy:** Vercel no aplica una variable nueva al deploy actual.
   Andá a **Deployments → (⋯) del último → Redeploy**. En cada build,
   `vercel.json` corre `build.sh`, que toma la variable y genera
   `config.js` (`window.MAPBOX_TOKEN`); `index.html` lo carga antes de
   `app.js`.
5. **Recomendado:** en el panel de Mapbox, restringí el token a tu dominio
   (`shoppiis.com`) en *URL restrictions*, así nadie más lo usa.

> 📁 **Root Directory en Vercel:** como los archivos del sitio están en
> `shoppiis-web/`, el proyecto de Vercel debe tener el *Root Directory*
> apuntando a `shoppiis-web` (Settings → General → Root Directory). Ahí es
> donde viven `vercel.json` y `build.sh`.

> ℹ️ Como es un sitio estático, el token público termina igual en el
> navegador (Mapbox lo requiere del lado del cliente) — por eso conviene
> restringirlo por dominio. La variable de entorno sirve para no tenerlo en
> el repo y poder rotarlo sin tocar el código.

> ⚠️ Si la variable no está o el token no empieza con `pk.`, el bloque de
> cotización instantánea **queda oculto automáticamente** y el formulario
> manual de cotización sigue funcionando igual. El sitio nunca se rompe.

### Tarifas por milla

Se editan en dos lugares que deben coincidir:
- El `<select id="iqVehicle">` en `index.html` (el texto que ve el cliente).
- Los `value="..."` de ese mismo `<select>` (el número que se multiplica).

Tarifas actuales:

| Tipo de vehículo                        | Tarifa    |
|-----------------------------------------|-----------|
| Standard Car, Truck or SUV              | $1.00/mi  |
| Dually Truck or Van                     | $1.50/mi  |
| Oversized or Custom Vehicle Delivery    | $1.75/mi  |

¿Querés un **precio mínimo** (ej. no cobrar menos de $150 en rutas cortas)?
En `app.js` cambiá `const MIN_QUOTE = 0;` por el monto que quieras.

---

## 🚀 Deploy (elegí una — todas son gratis)

### Opción 1 — Netlify (la más fácil)
1. Entrá a https://app.netlify.com/drop
2. Arrastrá la carpeta entera. Listo, queda online.
3. Para dominio propio: Site settings → Domain → agregá `shoppiis.com`.

### Opción 2 — Cloudflare Pages
1. Subí esta carpeta a un repo de GitHub (ver abajo).
2. Cloudflare → Pages → Connect to Git → elegí el repo.
3. Build command: *(vacío)* · Output directory: `/` (la raíz).

### Opción 3 — GitHub Pages
1. Subí a un repo de GitHub.
2. Settings → Pages → Branch: `main` / `(root)` → Save.
3. Queda en `https://TUUSUARIO.github.io/REPO/`.

### Opción 4 — Vercel
1. Subí a GitHub.
2. Vercel → New Project → importá el repo → Deploy (sin configurar nada).

---

## 🐙 Subir a GitHub (para opciones 2, 3 y 4)

Con Git instalado, parado en esta carpeta:

```bash
git init
git add .
git commit -m "Shoppiis website"
git branch -M main
git remote add origin https://github.com/TUUSUARIO/shoppiis-web.git
git push -u origin main
```

(O usá GitHub Desktop si preferís sin terminal: "Add existing repository" →
elegí esta carpeta → Publish.)

---

## ✅ Checklist antes de publicar

- [ ] Variable `MAPBOX_TOKEN` (`pk...`) cargada en Vercel + Redeploy hecho (mapa + cotización)
- [ ] Clave de Web3Forms puesta en `index.html`
- [ ] Mandé una cotización de prueba y me llegó el mail
- [ ] Revisé los textos EN y ES
- [ ] Confirmé la dirección/zona correcta (Loxahatchee vs Jacksonville)
- [ ] (Opcional) Cargué números reales en la sección "By The Numbers"
      o la oculté hasta tener datos
- [ ] Reclamé el perfil en CarrierSource y subí la foto de la puerta (g1.jpg)
