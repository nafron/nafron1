let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
β­βγ *Tutorial Main ππ₯π’π‘ ππ’π§* γ
β 
βγ Tutorial EPIC RPG γ
ββ’ *${usedPrefix}claim*
β   Staterpack yang bisa di klaim 
β   12 jam sekali
ββ’ *${usedPrefix}mulung*
ββ’ *${usedPrefix}adventure*
ββ’ *${usedPrefix}petualang*
β   Untuk mencari resource seperti 
β   Money, Exp, dll..,dibutuhkan  
β   minimal 80 nyawa untuk bisa 
β   melakukannya dan, kamu tidak 
β   dapat spam karena ada delay 5 
β   menit
ββ’ *${usedPrefix}use potion <jumlah>*
β   Untuk memakai potion/untuk 
β   mengisi nyawa/health
ββ’ *${usedPrefix}shop buy potion <jumlah>*
β   Untuk membeli potion dan ketik 
β   *${usedPrefix}use potion <jumlah>*
β   untuk menggunakan potion
ββ’ *${usedPrefix}shop <args>*
β   Untuk membeli atau menjual sesuatu
ββ’ *${usedPrefix}shop buy <crate> <jumlah>*
β   Untuk membeli Crate
ββ’ *${usedPrefix}profile*
ββ’ *${usedPrefix}pp*
ββ’ *${usedPrefix}profil*
β   untuk mengetahui No whatsapmu, dll
ββ’ *${usedPrefix}inv*
ββ’ *${usedPrefix}inventory*
ββ’ *${usedPrefix}bal*
β   Untuk mengecek nyawa, money, dll.
ββ’ *${usedPrefix}judi <jumlah>*
β   *_Jangan judi, Karena gk bakal_*
β   *_balik modal.BENERAN GK BOHONG π_*
β  
β *Β©Nafron 2022*
β°βγ *Tutorial Main ππ₯π’π‘ ππ’π§* γ
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

