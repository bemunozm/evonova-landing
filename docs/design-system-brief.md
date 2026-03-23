# Design System Brief — EVONOVA Landing Page
**Versión:** 1.0 | **Fecha:** 2026-03-23 | **Para:** frontend_heavy

---

## A. Paleta de Colores — "Deep Tech"

| Rol | Hex | Uso |
|---|---|---|
| **Fondo Principal** | `#0a0a0a` | Background global |
| **Superficie / Cards** | `#141414` | Contenedores, modales, tarjetas |
| **Texto Principal** | `#ededed` | Headlines, cuerpo principal |
| **Texto Secundario** | `#a1a1aa` | Párrafos de soporte, labels, placeholders |
| **Accent CTA** | `#00ffa3` | Botones primarios, estados activos (Electric Mint) |
| **Accent Secundario** | `#8b5cf6` | Highlights en texto, gráficos IA (Electric Purple) |

**Justificación:** Negro profundo elimina fricción visual y proyecta "plataforma". Electric Mint (#00ffa3) guía el ojo directamente al CTA sin agresividad. Elimina completamente el azul corporativo que usa toda la competencia chilena.

---

## B. Tipografías

| Rol | Fuente | Peso | Alternativa Google Fonts |
|---|---|---|---|
| **Display / Headline** | Geist Sans | Bold / Semibold | Outfit Bold |
| **Body** | Inter | Regular / Medium | Plus Jakarta Sans |
| **Mono (métricas/código)** | Geist Mono | Regular | JetBrains Mono |

**Regla:** Headlines siempre grandes (clamp 48px → 80px). Nunca usar Inter como display en títulos principales.

---

## C. Estructura de Secciones (orden exacto)

1. **Nav** — Logo izq + links (Servicios, Casos, Pricing) + CTA outlined der. Sticky con `backdrop-blur`. Minimalista.
2. **Hero** — H1 impactante + subheadline + CTA primario filled + CTA secundario ghost. Efecto sutil de partículas o gradiente animado.
3. **Trust Bar** — Logos clientes (Pira.cl, OTEC). Escala de grises, opacidad 60%, hover a color completo.
4. **El Dolor** — Sección que identifica el problema del cliente. Copy emocional, formula PAS.
5. **Servicios** — Grid 3 cards. Beneficios (ahorro tiempo/costo), no tecnología. Glassmorphism sutil.
6. **Casos de Éxito** — Antes/después con métricas cuantificadas. Timeline o split-view.
7. **Proceso** — Timeline vertical: Diagnóstico → Pipeline → Implementación → IA Tuning.
8. **Pricing** — 3 paquetes orientativos (Starter / Growth / Enterprise). Diferenciador único en Chile.
9. **CTA Final** — Headline impactante + email + nombre. Simple, sin fricción.
10. **Footer** — Links, RRSS, ubicación Chile.

---

## D. Tono de Voz

**5 adjetivos de marca:** Experto · Pragmático · Directo · Innovador · Confiable

**Palabras a usar:** Pipeline, Automatización, IA Agent, ROI, Escalabilidad, Precisión, Integración, Diagnóstico.

**Palabras a evitar:** "Soluciones integrales", "partners estratégicos", "expertos en..." (demostrar, no decir), cualquier versión de "azul corporativo".

**Headline Hero recomendado:**
> *"Tu empresa, operando en piloto automático. Automatización e IA a medida para escalar sin contratar más."*

---

## E. Componentes y Efectos

- **Modo:** Dark Mode obligatorio. Refuerza identidad tech-premium.
- **Botones:** Bordes 4px-8px. `filled` con `#00ffa3` para CTA primario. `ghost` con borde sutil para secundario.
- **Cards:** Fondo `#141414` + borde `#ffffff10`. Glassmorphism muy ligero (blur 10px) en hover.
- **Animaciones:** Micro-interacciones sutiles en hover (ligero brillo, NO escala agresiva). Fade-up staggered en scroll.
- **Separadores:** Líneas 1px, opacidad `#ffffff10`.
- **WhatsApp flotante:** Fixed bottom-right, color `#25D366`, z-index máximo.
- **Sticky CTA:** Visible en scroll desktop y mobile.
