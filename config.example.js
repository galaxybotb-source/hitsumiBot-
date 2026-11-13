/* By Sunkovv
   Copia este archivo como config.js y edítalo:
   cp config.example.js config.js
*/



import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'


// CAMBIA POR EL NUMERO QUE VA SER OWNER DEL BOT
global.owner = [
  ['5492281463200', '༒̶ཱྀ͟͞ 𝐘̶͟͞𝐨̶͟͞𝐞̶͟͞𝐥̶͟͞ᵒ̶͟', true],
]

//  ACA PON EL LID DEL OWNER DEL BOT PARA QUE TE HAGA CASO COMO OWNER EL BOT, USA EL COMANDO /ID EN TU 
//PRIVADO PARA SACAR TU LID
global.ownerLid = [
  ['acaElLid', 'Sunkovv', true],
]

global.sessions = 'Sessions'
global.bot = 'Serbot' 
global.AFBots = true

global.packname = '𝑯𝑰𝑻𝑺𝑼𝑴𝑰𝑩𝑶𝑻-𝑴𝑫'
global.namebot = '𝑯𝑰𝑻𝑺𝑼𝑴𝑰𝑩𝑶𝑻'
global.author = 'yoel'
global.moneda = 'USD'


// Etiqueta de canal en mensajes (rcanal). Obtén el JID con: .canalid <link del canal>
global.canal = ''

// Canales que el bot y sub-bots siguen al conectar (JID @newsletter o link del canal)
global.ch = {
ch1: '120363412265734140@newsletter',
}

// Canal para logs/anuncios de sub-bots (también se sigue al conectar junto con global.ch)
global.logssubbots = ''

// Botones/listas interactivas con @itsliaaa/baileys (conexión sigue con @whiskeysockets/baileys)
global.baileysInteractive = true

global.mods =   []
global.prems = []

global.multiplier = 69 
global.maxwarn = '2'

// APIS QUE USA EL BOT EN GLOBAL(NO BORRES)
global.APIs = {
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.online", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

import { syncRcanalFromConfig } from './lib/newsletter-rcanal.js'
syncRcanalFromConfig()

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
