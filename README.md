# 🌿 Botanica Studio | Premium Spa & Beauty Template

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Botanica Studio** es una plantilla web estática (*Static Single-Page Application*) de alta gama, diseñada específicamente para centros de bienestar, spas, estudios de belleza y clínicas dermatológicas. 

Destaca por ofrecer una experiencia fluida, animaciones inmersivas y un enfoque estético editorial de lujo.

---

## 💡 Concepto de Plantilla (Template)

Este repositorio corresponde a **"Plantilla_2"** dentro del ecosistema de plantillas de catálogo. Está diseñada bajo una arquitectura modular y parametrizable. Su objetivo es que pueda clonarse y adaptarse para distintos clientes finales en cuestión de minutos.

**¿Por qué funciona excelente como plantilla base?**
1. **Mock Data Dinámico:** Todo el contenido de impacto (Testimonios, Servicios del Catálogo) no está "quemado" en el HTML. Se alimenta desde `frontend/assets/js/mock-data.js`. Cambiar los servicios para un nuevo cliente solo requiere editar este archivo.
2. **Variables de CSS Centralizadas:** Los colores de la marca se gobiernan desde bloque de variables nativas en `:root`. Cambiando 5 colores básicos (fondo principal, acentos y textos) se transforma completamente el aspecto general del sitio.
3. **Escalabilidad Preparada:** El proyecto está dividido lógicamente en `frontend/` y `backend/`, manteniendo un esqueleto listo para conectarse a un CMS real o bases de datos como MongoDB cuando el cliente lo requiera.

---

## ✨ Características Principales

- 🌙 **Modo Oscuro Integrado:** Tematización fluida que adapta el diseño lujoso de la marca a condiciones de baja luz. Guarda las preferencias locales del usuario.
- 📱 **100% Responsiva:** Adaptación meticulosa diseñada con filosofía *Mobile-First*. El menú, catálogo y márgenes fluyen sin problema en cualquier tamaño de pantalla.
- 💬 **Canal de Ventas WhatsApp:** Botón flotante omnipresente con discreta animación de interés, impulsando a los visitantes a la reserva de citas directas.
- 🎁 **Tarjetas de Promociones:** Panel dinámico para ofertas limitadas ("2x1", "20% DTO") con efecto *Glassmorphism* moderno.
- 💫 **Flujo y Animaciones Escalonadas:** Efectos con la 'Intersection Observer API' nativa. Las tarjetas, textos y el catálogo entran sutilmente en cascada al detectar el scroll.

---

## 📂 Estructura del Proyecto

```text
Plantilla_2/
├── backend/                  # Estructura base Node.js/Express
│   ├── index.js              # Entry-point (Placeholder API server)
│   └── package.json          
├── frontend/                 # Archivos estáticos de la aplicación
│   ├── admin/                  # Dashboard prototipo de administración
│   │   └── index.html          
│   ├── assets/                 # Recursos pesados
│   │   ├── css/
│   │   │   ├── admin.css       # Estilos específicos del panel
│   │   │   └── index.css       # Sistema central de diseño
│   │   └── js/
│   │       ├── admin.js        # Lógica del dashboard de prueba
│   │       ├── main.js         # Lógica central del cliente (Theme, Scroll, DOM)
│   │       └── mock-data.js    # ⬅️ Aquí viven los datos para re-usar la plantilla
│   └── index.html            # Landing page principal
└── package.json              # Scripts de automatización 
```

---

## 🚀 Cómo inicializar en modo de desarrollo

Para arrancar el motor de vista local asumiendo que tienes Node `npm` instalado:

1. **Instala las dependencias** (Asegurará el paquete local de visualización estática).
   ```bash
   npm install
   ```
2. **Despliega la página** a través de tu script nativo para servir el Front:
   ```bash
   npm run dev:front
   ```
3. Visita de forma interactiva en `http://localhost:3000`.

*(Para explorar el backend futuro de la plantilla `npm run dev:back` levantará Express).*

---

## 🎨 Guía Rápida para Customizar a otro cliente

1. Ve a `frontend/assets/js/mock-data.js` y edita el objeto `window.botanicaData`.
2. Actualiza los logotipos en SVG dentro de `frontend/index.html`.
3. Adentra a `frontend/assets/css/index.css` y reajusta las paletas maestras bajo `:root` y `body.dark-theme` (Por ejemplo, `--crema`, `--carbon`, `--verde-oliva`, `--arena`). ¡El diseño se readaptará instantáneamente!

> **Nota:** Este proyecto se compromete activamente desde Git para mantener revisiones lógicas independientes a nivel modular.
