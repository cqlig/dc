# Caligula - Página Web Personal

Una página web personal moderna y elegante con diseño oscuro, efectos de glow y funcionalidades interactivas.

## Características

### 🎨 Diseño
- **Tema oscuro** con gradientes y efectos de blur
- **Efectos de glow** en texto e iconos
- **Diseño responsive** que se adapta a diferentes dispositivos
- **Animaciones suaves** y transiciones elegantes

### 👤 Sección de Perfil
- **Foto de perfil** personalizada
- **Nombre "Caligula"** con efectos de glow
- **Insignias SVG** con diseño moderno y efectos hover
- **Contador de visitas real** que se incrementa automáticamente
- **Ubicación** actualizada a "archivos.lol"
- **Bio animada** tipo máquina de escribir: "archivos.lol" → "venta de archivos & paneles"
- **Enlaces sociales** con efectos hover

### 🎮 Discord Presence
- **Icono de Discord** con notificación
- **Estado de usuario** con indicadores visuales
- **Información de música** que se reproduce
- **Datos dinámicos** que cambian automáticamente
- **Integración con Discord Rich Presence** (simulada)
- **Estados personalizados** para archivos.lol

### 🎵 Reproductor de Música
- **Controles interactivos** (play/pause, anterior, siguiente)
- **Reproducción real** de audio con controles funcionales
- **Barra de progreso** sincronizada con el audio
- **Tiempo de reproducción** en tiempo real
- **Portada real** de "god like - summrs" desde Spotify
- **Controles de navegación** (adelantar/retroceder 10 segundos)

## Archivos

- `index.html` - Estructura HTML principal
- `styles.css` - Estilos CSS con efectos modernos
- `script.js` - Funcionalidades JavaScript interactivas
- `discord-presence.js` - Integración con Discord Rich Presence
- `discord-oauth.js` - OAuth2 para Discord real
- `server.js` - Servidor Node.js con Express
- `package.json` - Configuración de dependencias
- `README.md` - Este archivo de documentación

## Cómo usar

1. **Instalar dependencias**: `npm install`
2. **Configurar Discord OAuth2** en Discord Developer Portal
3. **Actualizar** `server.js` con tu Client Secret si es necesario
4. **Iniciar servidor**: `npm start` o `npm run dev`
5. **Abrir** `http://localhost:3000` en tu navegador
6. **Disfrutar** de la experiencia interactiva completa

## 🚀 Opciones de Hosting Gratuito

### **1. Vercel (Recomendado)**
- ✅ **Completamente gratuito** para proyectos personales
- ✅ **Despliegue automático** desde GitHub
- ✅ **SSL/HTTPS** incluido
- ✅ **CDN global** para mejor rendimiento
- ✅ **Soporte para Node.js** nativo

**Cómo desplegar en Vercel:**
1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. ¡Listo! Se despliega automáticamente

### **2. Netlify**
- ✅ **Gratuito** con límites generosos
- ✅ **Funciones serverless** incluidas
- ✅ **SSL/HTTPS** automático
- ✅ **Integración con Git**

### **3. Railway**
- ✅ **$5 de crédito** gratis mensual
- ✅ **Despliegue muy fácil**
- ✅ **Base de datos** incluida
- ✅ **Perfecto para Node.js**

### **4. Render**
- ✅ **Plan gratuito** disponible
- ✅ **Despliegue automático**
- ✅ **SSL/HTTPS** incluido
- ✅ **Soporte para Node.js**

### **5. Heroku**
- ✅ **Plan gratuito** (con sleep)
- ✅ **Muy estable**
- ✅ **Integración con GitHub**
- ✅ **Add-ons** disponibles

## Configuración para VPS (Opcional)

### Requisitos del servidor:
- **Node.js 16+** con npm
- **PM2** para gestión de procesos (recomendado)
- **Nginx/Apache** como proxy reverso
- **SSL/HTTPS** para OAuth2 de Discord

### Instalación en VPS:
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
export PORT=3000
export NODE_ENV=production

# Iniciar con PM2
pm2 start server.js --name "caligula-profile"

# Configurar proxy reverso en Nginx
```

### Configuración de Discord:
1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Crea una nueva aplicación
3. Configura OAuth2 con redirect URI: `https://tu-dominio.com/discord-callback`
4. Los datos ya están configurados en `server.js`

## Personalización

### Cambiar información personal:
- Edita el nombre en `index.html` línea 25
- Modifica la bio en línea 42
- Actualiza los enlaces sociales en las líneas 44-48

### Cambiar foto de perfil:
- Reemplaza la URL en `index.html` línea 20 con tu imagen

### Modificar insignias:
- Edita los SVG en `index.html` líneas 26-32
- Los badges ahora usan iconos SVG con efectos hover

### Ajustar estados de Discord:
- Modifica los arrays en `script.js` líneas 108-120
- Configura el Discord Rich Presence en `discord-presence.js`
- Los datos de OAuth2 están en `server.js`

## Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con efectos avanzados
- **JavaScript ES6+** - Interactividad y animaciones
- **Node.js** - Servidor backend con Express
- **Discord OAuth2** - Autenticación real
- **Font Awesome** - Iconos profesionales
- **CSS Grid & Flexbox** - Layout responsive

## Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## Efectos especiales

- **Partículas de fondo** que flotan suavemente
- **Efectos hover** en todos los elementos interactivos
- **Animaciones de entrada** para las tarjetas
- **Cursor parpadeante** en la bio
- **Transiciones suaves** en todos los elementos

---

Desarrollado con ❤️ para Caligula 