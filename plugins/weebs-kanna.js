..import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(`https://raw.githubusercontent.com/Alfarqun/database/main/anime/kanna.json${command}`)
	if (!res.ok) throw await res.text()
	let json = await res.json()
	conn.sendButton(m.chat, `Random Image ${command.capitalize()}`, json.url, json.url, [['Next', usedPrefix + command]], m)
}
handler.help = handler.alias = ['kanna']
handler.tags = ['weebs']
handler.command = /^(kanna)$/i

export default handler
