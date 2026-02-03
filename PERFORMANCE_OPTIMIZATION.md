# Core Web Vitals Optimization - RelieveGt
## Guía de Implementación y Mejores Prácticas

### ✅ Optimizaciones Implementadas

#### 1. **LCP (Largest Contentful Paint) - Target: ≤ 2.5s**

**Implementado:**
- ✅ `OptimizedImage` component con lazy loading nativo
- ✅ Aspect ratio fijo para prevenir CLS
- ✅ Preconnect a dominios críticos en `index.html`
- ✅ CSS crítico inline
- ✅ Code splitting en `vite.config.js`
- ✅ Preload de recursos críticos

**Próximos pasos:**
- [ ] Convertir TODAS las imágenes a WebP con fallback a JPEG
- [ ] Implementar `<link rel="preload">` para la imagen hero
- [ ] Usar CDN con compresión Brotli (Vercel lo hace automáticamente)

---

#### 2. **FID (First Input Delay) - Target: ≤ 100ms**

**Implementado:**
- ✅ Code splitting por vendor (React, GSAP, OGL separados)
- ✅ Lazy loading de componentes pesados
- ✅ Minificación agresiva con Terser
- ✅ Tree shaking automático

**Próximos pasos:**
- [ ] Reducir o eliminar GSAP si no es crítico para la experiencia
- [ ] Mover CircularGallery (OGL) a un componente lazy-loaded
- [ ] Usar `requestIdleCallback` para tareas no críticas

---

#### 3. **CLS (Cumulative Layout Shift) - Target: ≤ 0.1**

**Implementado:**
- ✅ Dimensiones fijas en `OptimizedImage` (width, height, aspectRatio)
- ✅ Aspect ratio boxes para prevenir saltos de layout
- ✅ CSS crítico inline para evitar FOUT
- ✅ Placeholders con blur durante carga

**Próximos pasos:**
- [ ] Añadir `font-display: swap` a fuentes custom
- [ ] Reservar espacio para ads/banners si los hay
- [ ] Evitar inyectar contenido dinámico en above-the-fold

---

### 🚀 Configuraciones de Hosting (Vercel)

**Ya configurado en `vercel.json`:**
- ✅ Cache de 1 año para assets estáticos (`max-age=31536000`)
- ✅ Headers de seguridad (XSS, Clickjacking protection)
- ✅ Compresión automática (Gzip/Brotli)

**Recomendaciones adicionales:**
1. **Habilitar Analytics de Vercel** para medir Core Web Vitals reales
2. **Usar dominio custom** (mejora percepción de velocidad)
3. **Configurar Edge Functions** para personalización sin latencia

---

### 📊 Cómo Medir el Rendimiento

#### Herramientas a usar:

1. **PageSpeed Insights** (Google)
   ```
   https://pagespeed.web.dev/
   ```
   - Mide Core Web Vitals en datos de campo (usuarios reales)
   - Proporciona sugerencias específicas

2. **Lighthouse** (Chrome DevTools)
   ```bash
   npm run build
   npm run preview
   # Luego abre DevTools → Lighthouse → Run analysis
   ```

3. **WebPageTest**
   ```
   https://www.webpagetest.org/
   ```
   - Simula conexiones 3G/4G
   - Waterfall de recursos

4. **Chrome User Experience Report (CrUX)**
   - Datos de usuarios reales de Chrome
   - Accesible desde Search Console

---

### 🎯 Checklist de Optimización por Ruta

#### **Homepage (`/`)**
- [ ] Hero image a WebP + dimensiones fijas
- [ ] Preload de fuentes críticas
- [ ] Lazy load de `CircularGallery` y `ProductSpotlight`
- [ ] Diferir GSAP hasta interacción

#### **Catálogo (`/catalogo`)**
- [ ] Virtual scrolling para grids grandes (react-window)
- [ ] Intersection Observer para lazy load inteligente
- [ ] Thumbnail preview antes de HD

#### **Funkos (`/funkos`)**
- [ ] Comprimir imágenes de showcase (actualmente ~500KB cada una)
- [ ] Lazy load del spotlight

---

### 📦 Optimización de Imágenes

**Script recomendado para comprimir:**
```bash
# Instalar sharp (herramienta de optimización)
npm install -D sharp

# Convertir a WebP (crear script en package.json)
node scripts/optimize-images.js
```

**Target de tamaños:**
- Hero images: ≤ 150KB
- Product cards: ≤ 80KB
- Icons/logos: ≤ 20KB

---

### 🔍 Monitoreo Continuo

**Configurar en Google Search Console:**
1. Ir a "Core Web Vitals" report
2. Monitorear URLs "Poor" o "Need Improvement"
3. Priorizar fixes basados en tráfico real

**Configurar Real User Monitoring (RUM):**
```javascript
// Añadir a main.jsx
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```

---

### ⚡ Quick Wins (Implementar YA)

1. **Convertir imágenes principales a WebP**
   - Ahorra ~30-50% de peso
   
2. **Añadir `loading="lazy"` a TODAS las imágenes below-the-fold**
   - Ya implementado en `OptimizedImage`

3. **Minimizar uso de GSAP**
   - Considerar CSS animations para efectos simples

4. **Preload del LCP element**
   ```html
   <link rel="preload" as="image" href="/hero.webp">
   ```

---

### 🎨 Optimización de Fonts

**Si usas Google Fonts:**
```html
<!-- Añadir a index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

**Mejor opción (self-hosted):**
1. Descargar fuentes con `fontsource`
2. Añadir `font-display: swap` en CSS
3. Subset solo caracteres en español

---

### 📈 Objetivos de Rendimiento

| Métrica | Target | Actual (estimado) |
|---------|--------|-------------------|
| LCP     | ≤ 2.5s | ~3.2s →optimizar  |
| FID     | ≤ 100ms| ~150ms →reducir JS|
| CLS     | ≤ 0.1  | ~0.05 ✅         |
| TTFB    | ≤ 600ms| Depende de hosting|
| Speed Index | ≤ 3.4s | ~4.1s →mejorar |

---

### 🛠️ Comandos Útiles

```bash
# Analizar bundle size
npm run build
npx vite-bundle-visualizer

# Lighthouse CI (automatizar)
npm install -g @lhci/cli
lhci autorun

# Comprimir imágenes manualmente
npx @squoosh/cli --webp auto input.jpg
```

---

### 🚨 Red Flags a Evitar

❌ **NO hacer:**
- Layout shifts por anuncios/pop-ups
- Cargar múltiples fuentes (max 2-3)
- JavaScript que bloquea rendering
- Imágenes sin dimensiones
- Animaciones pesadas en mobile

✅ **SÍ hacer:**
- Progressive enhancement
- Mobile-first approach
- Critical CSS inline
- Defer non-critical scripts
- Test en conexiones lentas

---

### 📞 Soporte y Recursos

- **Web.dev Performance**: https://web.dev/performance/
- **Vercel Docs**: https://vercel.com/docs/concepts/analytics
- **Chrome DevTools**: https://developer.chrome.com/docs/devtools/

---

**Última actualización:** 2026-02-03  
**Próxima revisión:** Después del primer deploy a producción
