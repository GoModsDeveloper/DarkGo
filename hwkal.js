
const fs = require('fs')
const chalk = require('chalk')


// ꪶ 𝐆𝐨 〩 𝐌𝐨𝐝𝐬 丰
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 SETUP BUTTON AND CONTACT 」—————//
global.youtube = 'https://youtube.com/DarkGo'
global.ig = 'https://www.instagram.com/DarkGo'
global.mygc = 'wa.me/6285778852160'
global.myweb = 'https://dewasosmed.com'
global.linkgrupss = "https://chat.whatsapp.com"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'gomods@gmail.com'
global.region = 'indonesia'
//—————「 SETUP BOTZ 」—————//
global.ownername = '𝐆𝐨 〩 𝐌𝐨𝐝𝐬'
global.botname = '𝐆𝐨 〩 𝐌𝐨𝐝𝐬'
global.footer = '𝐆𝐨 〩 𝐌𝐨𝐝𝐬' 
//=================================================//
// SETTING
global.owner = ['6288212471024']
global.packname = '𝙳𝚊𝚛𝚔𝙶𝚘 メ'
global.ownerr = ['𝐆𝐨 〩 𝐌𝐨𝐝𝐬']
global.author = 'Botz Private🎭'
global.sessionName = './sessionye/haikal'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {    
    wait: '*Loading*',
    private: 'Fitur Di Gunakan Hanya Untuk Private Chat',
    bot: 'Fitur Khusus User Nomor Botz',
}
//=================================================//

//=================================================//

//=================================================//
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.visoka = fs.readFileSync("./baseikal/video/hikal.gif")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
global.menuimg = './baseikal/image/dark.png'
global.ggikal = fs.readFileSync("./baseikal/video/haikal.mp4")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})