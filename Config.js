const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "4593707507"
global.ownername = "monster xxx"
global.ytname = "YT: monster.inc"
global.socialm = "GitHub: monster"
global.location = "marocco"

global.ownernumber = '4593707507'  //creator number
global.ownername = '𝑵𝑨𝑹𝑪𝑰𝑺𝑺𝑰𝑺𝑻𝑰𝑪' //owner name
global.botname = '
#𝐆𝐁𝐗 /#/ 𝑵𝑨𝑹𝑪𝑰𝑺𝑺𝑰𝑺𝑻𝑰𝑪 !-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '
#𝐆𝐁𝐗 /#/ 𝑵𝑨𝑹𝑪𝑰𝑺𝑺𝑰𝑺𝑻𝑰𝑪 !⚔️'
global.packname = 'Sticker By'
global.author = 'NARCISSIST BOT'
//console view/theme
global.themeemoji = '👻'
global.wm = "NARCISSIST BOT."

//theme link
global.link = '' // if you want to send bot reply with group link then put your link here 🌿 
global.support = 'wa.me//4593707507'
//custom prefix
global.prefa = ['.'] //put here your fav prefix like +×÷= etc.

//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti92 = true //auto block +91
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    pm: ' 📍*sorry darling* Bot wont work in private darling📍 \n\n wa.me//4593707507',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
