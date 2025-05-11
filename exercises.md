# Roadmap Frontend Avanzado: Animaciones y Experiencias Inmersivas

## **Nivel 1: Fundamentos de Animaciones Scroll + CSS Avanzado (1 semana)**

### **Ejercicio 1.1: Scroll Suave con Efecto de Opacidad Progresiva**

- **Descripción:** Página con 5 secciones que hacen fade-in al aparecer.
- **Requisitos:**
  - Usar Lenis para smooth scroll.
  - Animar `opacity` y `translateY` con Intersection Observer.
- **Herramientas:** React, Tailwind, Lenis.
- **Bonus:** Indicador de progreso de scroll.

### **Ejercicio 1.2: Tarjeta con Efecto Parallax al Scroll**

- **Descripción:** Tarjeta donde la imagen se mueve más lento que el texto.
- **Requisitos:**
  - Usar `useTransform` de Framer Motion.
  - Efecto de escala al hover.
- **Herramientas:** Framer Motion, Lenis.

### **Ejercicio 1.3: Navbar Reactivo al Scroll**

- **Descripción:** Navbar que cambia de tamaño y color al hacer scroll.
- **Requisitos:**
  - Reducción de altura de 80px a 50px después de 200px de scroll.
  - Transición suave de color de fondo.
- **Herramientas:** Lenis, Tailwind.

---

## **Nivel 2: Integración Lenis + ScrollTrigger (2 semanas)**

### **Ejercicio 2.1: Sección Horizontal con Scroll Suave**

- **Descripción:** Sección tipo Netflix que se desplaza con scroll vertical.
- **Requisitos:**
  - Lenis en modo horizontal.
  - Efecto de velocidad variable en imágenes.
- **Herramientas:** GSAP ScrollTrigger, Lenis.
- **Bonus:** Snap cada 100vw.

### **Ejercicio 2.2: Texto Revelado con Máscara de Scroll**

- **Descripción:** Texto que aparece gradualmente con `clip-path`.
- **Técnica:** Animar `clip-path: inset()` con GSAP.
- **Herramientas:** GSAP, Lenis.

### **Ejercicio 2.3: Secciones Fullscreen con Transiciones**

- **Descripción:** 3 secciones de 100vh con transiciones fluidas.
- **Requisitos:**
  - Scroll snapping.
  - Títulos que escalan al entrar.
- **Herramientas:** Tailwind, GSAP.

---

## **Nivel 3: Proyectos de Clonación (2 semanas)**

### **Ejercicio 3.1: Clonar Página de Apple AirPods**

- **Features:**
  - Scroll con imágenes 3D rotativas.
  - Texto fijo que cambia por sección.
  - Parallax en fondos.
- **Herramientas:** Lenis, GSAP, React Three Fiber.

### **Ejercicio 3.2: Clonar Animación de Spotify Wrapped**

- **Features:**
  - Storytelling con scroll vertical.
  - Gráficos animados al scroll.
  - Transiciones de color.
- **Herramientas:** Framer Motion, Lenis.

---

## **Nivel 4: Proyecto Original (1 semana)**

### **Ejercicio 4.1: Landing Page para Producto Digital**

- **Requisitos:**
  - Diseño en Figma (pixel perfect).
  - Scroll horizontal en sección clave.
  - Cursor personalizado que escala en hover.
  - Animaciones de carga con SVG.
- **Stack:** Next.js, Tailwind, Lenis, Framer Motion.

---

## **Recursos Clave**

1. **Lenis + React:**

   ```tsx
   // _app.tsx
   import { useEffect } from "react";
   import Lenis from "@studio-freight/lenis";

   export default function App({ Component, pageProps }) {
     useEffect(() => {
       const lenis = new Lenis({ lerp: 0.1 });
       const raf = (time: number) => {
         lenis.raf(time);
         requestAnimationFrame(raf);
       };
       requestAnimationFrame(raf);
     }, []);

     return <Component {...pageProps} />;
   }
   ```
