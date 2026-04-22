# Abraham Ramos — Sitio Web Oficial

> Portafolio personal · Full Stack · 3D · VR · Entornos Virtuales  
> Agencia digital en **Cadereyta Jiménez, Nuevo León, México**.  
> Desarrollo web, software a medida, videojuegos, simulación virtual y modelado 3D.

---

## 🌐 Sitio en vivo

**[abrahamramoskd.github.io](https://abrahamramoskd.github.io)**

---

## 👤 Autor

**Jorge Abraham Alanis Ramos** — *Humbrahexx*

| Red | Enlace |
| --- | --- |
| 🐙 GitHub | [github.com/abrahamramoskd](https://github.com/abrahamramoskd) |
| 👤 Facebook | [facebook.com/humbrahexx](https://www.facebook.com/humbrahexx/) |
| 🏢 Facebook estudio | [facebook.com/ivalitystudios](https://www.facebook.com/ivalitystudios) |
| 💼 LinkedIn | [linkedin.com/in/abraham-ramos-6b3740403](https://www.linkedin.com/in/abraham-ramos-6b3740403/) |
| 💬 WhatsApp | [+52 1 828 105 0910](https://wa.me/528281050910) |
| ✉️ Email | [jaalanisramos@gmail.com](mailto:jaalanisramos@gmail.com) |
| 📍 Ubicación | [Cadereyta Jiménez, NL, México](https://maps.google.com/?q=Cadereyta+Jimenez+Nuevo+Leon+Mexico) |

---

## 📁 Estructura del proyecto

```
/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos — Glassmorphism + Neumorphism dark
├── js/
│   └── main.js         # Animaciones, canvas, interacciones
└── assets/
    ├── images/
    │   ├── humbrahexxicon.png   # Favicon e ícono del sitio
    │   ├── model1.jpg
    │   ├── model3.jpg
    │   ├── almacen.png
    │   ├── videojuegos.png
    │   ├── ventas.png
    │   ├── laboratorios.png
    │   └── empresas.png
    └── videos/
        ├── recorridovirtual.mp4
        ├── galaxys26dashboard.mp4
        ├── carrusel3Danimado.mp4
        ├── animaciongaleria.mp4
        └── neuronainteractiva.mp4
```

---

## 🎨 Diseño & Estilo

El sitio usa un enfoque **dark glassmorphism + neumorphism** con las siguientes características:

* **Fondo**: Canvas animado con partículas de luz y repulsión al cursor
* **Glassmorphism**: Superficies translúcidas con `backdrop-filter: blur()`, bordes luminosos y shine highlights
* **Neumorphism**: Botones y tarjetas con sombras en capas que simulan profundidad táctil
* **Orbs flotantes**: Esferas decorativas animadas en el hero con gradientes esféricos realistas
* **Paleta de colores**:

| Variable | Valor | Uso |
| --- | --- | --- |
| `--accent-cyan` | `#00c8ff` | Acento principal, bordes activos |
| `--accent-blue` | `#0066ff` | Gradientes, botones |
| `--bg-void` | `#030508` | Fondo más oscuro |
| `--bg-surface` | `#0d1520` | Superficies de tarjetas |
| `--text-primary` | `#e8f0fe` | Texto principal |

* **Tipografía**:
  * Display: `Plus Jakarta Sans` (títulos, peso 800)
  * Body: `Inter Tight` (texto corrido, peso 300–500)

---

## ⚙️ Funcionalidades JavaScript (`main.js`)

| Módulo | Descripción |
| --- | --- |
| `initCanvas()` | Canvas con partículas flotantes y repulsión al mouse |
| `initNavbar()` | Efecto scroll + menú hamburguesa animado |
| `initReveal()` | Animaciones de entrada por scroll (IntersectionObserver) |
| `initTypewriter()` | Efecto de escritura cíclica en el hero |
| `initCounters()` | Contadores animados al entrar en viewport |
| `initShowreel()` | Switcher de video featured + autoplay por viewport |
| Ripple effect | Efecto de onda en clicks de botones CTA |

---

## 🔍 SEO

El sitio está optimizado para posicionamiento local en Cadereyta Jiménez y Nuevo León:

**Keywords principales:**
`cadereyta`, `cade`, `pagina web cadereyta`, `paginas web en cadereyta`, `sitio web cadereyta`, `negocios cadereyta`, `desarrollo web cadereyta`, `agencia digital cadereyta`, `SEO`

**Meta tags implementadas:**

* ✅ `meta name="keywords"` — keywords locales extendidas
* ✅ `meta name="description"` — descripción optimizada
* ✅ `meta name="robots"` — index, follow
* ✅ `meta name="geo.region"` — MX-NL
* ✅ `meta name="geo.placename"` — Cadereyta Jiménez, Nuevo León
* ✅ `meta name="geo.position"` + `ICBM` — coordenadas GPS
* ✅ Open Graph completo (Facebook/LinkedIn preview)
* ✅ Twitter Card
* ✅ Schema.org `LocalBusiness` con dirección, teléfono y sameAs
* ✅ `link rel="canonical"`

---

## 📱 Redes Sociales en el sitio

El footer incluye los siguientes íconos con tooltips:

1. 💬 **WhatsApp** — `+52 1 828 105 0910`
2. 👤 **Facebook Humbrahexx** — perfil personal del desarrollador
3. 🏢 **Facebook Ivality Studios** — página del estudio
4. 🐙 **GitHub** — repositorio `abrahamramoskd`
5. 💼 **LinkedIn** — perfil profesional
6. ✉️ **Email** — `jaalanisramos@gmail.com`

---

## 🗺️ Ubicación

El sitio incluye un mapa embebido de **Google Maps** apuntando a Cadereyta Jiménez, NL, con estilo oscuro cohesivo (filtro CSS `saturate + hue-rotate + brightness`).

---

## 📦 Secciones del sitio

| ID | Sección | Descripción |
| --- | --- | --- |
| `#hero` | Hero | Typewriter, stats, CTA principal |
| `#servicios` | Servicios | 6 servicios en grid con hover effects |
| `#beneficios` | Beneficios | Stats animados + lista de beneficios |
| `#portafolio` | Portafolio | 6 proyectos con overlay interactivo |
| `#showreel` | Demos | Video featured + 5 demos en grid |
| `#nosotros` | Nosotros | Texto, tags, mapa de Cadereyta |
| `#cta` | CTA Final | Llamada a acción con WhatsApp |
| `#footer` | Footer | Redes, servicios, contacto |

---

## 🚀 Despliegue

El sitio es estático — no requiere backend. Solo sube los archivos a cualquier hosting:

```bash
# Servidor local para desarrollo:
npx serve .
# o
python -m http.server 8080
```

Compatible con: **GitHub Pages**, **Netlify**, **Vercel**, **cPanel**, **cualquier hosting compartido**.

---

*© 2025 Abraham Ramos. Hecho con ❤️ en Cadereyta Jiménez, NL.*
