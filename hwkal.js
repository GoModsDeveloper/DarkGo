
const fs = require('fs')
const chalk = require('chalk')


// κͺΆ ππ¨ γ© ππ¨ππ¬ δΈ°
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//βββββγ SETUP BUTTON AND CONTACT γβββββ//
global.youtube = 'https://youtube.com/DarkGo'
global.ig = 'https://www.instagram.com/DarkGo'
global.mygc = 'wa.me/6285778852160'
global.myweb = 'https://dewasosmed.com'
global.linkgrupss = "https://chat.whatsapp.com"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'gomods@gmail.com'
global.region = 'indonesia'
//βββββγ SETUP BOTZ γβββββ//
global.ownername = 'ππ¨ γ© ππ¨ππ¬'
global.botname = 'ππ¨ γ© ππ¨ππ¬'
global.footer = 'ππ¨ γ© ππ¨ππ¬' 
//=================================================//
// SETTING
global.owner = ['6288212471024']
global.packname = 'π³ππππΆπ γ‘'
global.ownerr = ['ππ¨ γ© ππ¨ππ¬']
global.author = 'Botz Privateπ­'
global.sessionName = './sessionye/haikal'
global.prefa = ['','!','.',',','π€','πΏ']
global.sp = 'β­'
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