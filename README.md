🖤 HitsumiBot

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=32&duration=2500&pause=800&color=39FF88&center=true&vCenter=true&width=700&lines=HITSUMIBOT;WHATSAPP+MULTI-DEVICE+BOT;BY+BRAUTOWW.OFC" alt="HitsumiBot animado" />
</p><p align="center">
  <img src="https://img.shields.io/badge/HITSUMIBOT-39FF88?style=for-the-badge&logo=whatsapp&logoColor=black" alt="HitsumiBot" />
  <img src="https://img.shields.io/badge/STATUS-ACTIVE-00FF88?style=for-the-badge" alt="Estado" />
  <img src="https://img.shields.io/badge/NODE.JS-20%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
</p><p align="center">
  <b>Un bot. Miles de posibilidades.</b><br>
  Automatización, entretenimiento y herramientas para WhatsApp.
</p><p align="center">
  <a href="https://whatsapp.com/channel/0029VbENN4t1t90jhORoPK1Z">
    <img src="https://img.shields.io/badge/ENTRAR%20AL%20CANAL-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Entrar al canal oficial de HitsumiBot" />
  </a>
  &nbsp;
  <a href="https://github.com/galaxybotb-source/hitsumiBot-">
    <img src="https://img.shields.io/badge/VER%20REPOSITORIO-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Repositorio de HitsumiBot" />
  </a>
</p>---

"01" — Acerca de HitsumiBot

HitsumiBot es un bot de WhatsApp multidispositivo basado en Baileys, diseñado para ofrecer herramientas de administración, entretenimiento y automatización desde una sola plataforma.

⚡ Funciones

- 🎵 Búsqueda y herramientas de música.
- 🎬 Descargas multimedia.
- 🤖 Funciones de inteligencia artificial.
- 🛡️ Administración de grupos.
- 🎮 Juegos y sistema RPG.
- 🖼️ Stickers y herramientas multimedia.
- 🔗 Sistema de vinculación de WhatsApp.
- 🧩 Sistema de plugins y comandos.

Las funciones disponibles dependen de los plugins y de la configuración de tu instalación.

---

"02" — Enlaces oficiales

<p align="center">
  <a href="https://whatsapp.com/channel/0029VbENN4t1t90jhORoPK1Z">
    <img src="https://img.shields.io/badge/📢_CANAL_DE_WHATSAPP-ÚNETE_AHORA-25D366?style=for-the-badge" alt="Canal de WhatsApp" />
  </a>
</p><p align="center">
  <a href="https://github.com/galaxybotb-source/hitsumiBot-">
    <img src="https://img.shields.io/badge/💻_CÓDIGO_FUENTE-VER_EN_GITHUB-39FF88?style=for-the-badge&logo=github&logoColor=black" alt="Código fuente" />
  </a>
</p>Información| Detalle
Nombre| HitsumiBot
Autor de esta versión| Brautoww.ofc
Repositorio| "GitHub" (https://github.com/galaxybotb-source/hitsumiBot-)
Canal| "Canal de WhatsApp" (https://whatsapp.com/channel/0029VbENN4t1t90jhORoPK1Z)
Tecnología| Node.js
Biblioteca de WhatsApp| Baileys

---

"03" — Requisitos

Antes de comenzar, necesitas:

- Android con Termux, Linux o un entorno compatible con Node.js.
- Node.js 20 o superior, compatible con las dependencias del proyecto.
- Git.
- FFmpeg para las funciones multimedia que lo requieran.
- Conexión a Internet.

"04" — Instalación en Termux

Paso 1. Preparar Termux

termux-setup-storage
pkg update -y && pkg upgrade -y
pkg install -y nodejs-lts git ffmpeg

Paso 2. Descargar HitsumiBot

cd ~/storage/shared
git clone https://github.com/galaxybotb-source/hitsumiBot-.git hitsumi-Bot
cd ~/storage/shared/hitsumi-Bot

Si Git indica que el repositorio no existe o no tienes acceso, verifica la dirección y los permisos del repositorio.

Paso 3. Instalar las dependencias

npm install --no-bin-links

Paso 4. Iniciar el bot

npm start

Sigue las instrucciones que aparezcan en Termux para completar la vinculación.

«Importante: el método de vinculación depende de la versión del código. Sigue el método que realmente muestre tu instalación.»

---

"05" — Comandos básicos

El prefijo predeterminado puede ser "." si así está configurado el proyecto.

.menu
.menu2
.play nombre de canción
.video búsqueda o enlace
.ly nombre de canción
.ia tu mensaje
.s

Consulta ".menu" dentro de WhatsApp para ver los comandos que estén disponibles en tu instalación.

---

"06" — Mantener el bot activo

Puedes utilizar PM2 para ejecutar el bot en segundo plano.

npm install -g pm2
cd ~/storage/shared/hitsumi-Bot
pm2 start index.js --name hitsumibot
pm2 save

Comandos útiles:

Comando| Acción
"pm2 status"| Ver el estado
"pm2 logs hitsumibot"| Ver los registros
"pm2 restart hitsumibot"| Reiniciar
"pm2 stop hitsumibot"| Detener
"pm2 delete hitsumibot"| Eliminar de PM2

Utiliza PM2 únicamente después de comprobar que el bot inicia correctamente en primer plano.

---

"07" — Estructura del proyecto

hitsumi-Bot/
├── config.js
├── index.js
├── main.js
├── handler.js
├── plugins/
├── lib/
├── storage/
├── package.json
└── README.md

La estructura exacta puede variar según la versión del repositorio.

"08" — Actualización

Si descargaste el proyecto con Git:

cd ~/storage/shared/hitsumi-Bot
git pull

Si el bot se ejecuta mediante PM2:

pm2 restart hitsumibot

Antes de actualizar, haz una copia de seguridad de tus archivos de configuración y datos. No sobrescribas sesiones ni configuraciones personalizadas sin comprobar los cambios.

"09" — Seguridad

- No publiques claves API, contraseñas ni archivos ".env".
- No subas sesiones de WhatsApp al repositorio.
- Mantén tus credenciales fuera del código público.
- Usa la automatización respetando las condiciones de WhatsApp.
- Conserva una copia de seguridad de la configuración y de los datos necesarios.

"10" — Créditos y licencia

HitsumiBot es una versión personalizada del proyecto hitsumi Bot.

- Personalización: Brautoww.ofc.
- Proyecto de origen: "Pain Bot — nexusday/pain-bot" (https://github.com/nexusday/pain-bot).
- Biblioteca: "Baileys" (https://github.com/WhiskeySockets/Baileys).
- Licencia: consulta la licencia incluida en el repositorio y conserva los avisos y atribuciones exigidos por ella.

---

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=1000&color=39FF88&center=true&vCenter=true&width=600&lines=HITSUMIBOT;BY+BRAUTOWW.OFC;THANKS+FOR+VISITING" alt="HitsumiBot: gracias por visitar" />
</p><p align="center">
  <a href="https://whatsapp.com/channel/0029VbENN4t1t90jhORoPK1Z">
    <img src="https://img.shields.io/badge/ÚNETE_A_NUESTRO_CANAL-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Unirse al canal" />
  </a>
</p><p align="center">
  <b>HitsumiBot © Brautoww.ofc</b><br>
  <sub>Construido para personalizar. Diseñado para evolucionar.</sub>
</p>
