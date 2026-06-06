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

- [ ] Clave de Web3Forms puesta en `index.html`
- [ ] Mandé una cotización de prueba y me llegó el mail
- [ ] Revisé los textos EN y ES
- [ ] Confirmé la dirección/zona correcta (Loxahatchee vs Jacksonville)
- [ ] (Opcional) Cargué números reales en la sección "By The Numbers"
      o la oculté hasta tener datos
- [ ] Reclamé el perfil en CarrierSource y subí la foto de la puerta (g1.jpg)
