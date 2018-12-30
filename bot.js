const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
 هلا والله
❤ ممكن تدخل سيرفر حبي
                     [ https://discord.gg/bqz8NPq ] 
الدعووة خاصة لك ... [ ${member}  ]
 سيرفر تضيف أشخاص يعطونك كريدت وفلوس وأشياء زي كذا😘
 مضمون %100
**`) 
}).catch(console.error)
})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
 هلا والله
❤ ممكن تدخل سيرفر حبي
                     [ https://discord.gg/WPzRQ3F ] 
الدعووة خاصة لك ... [ ${member}  ]
سيرفر يحتاج دعم  حبي 
 مضمون %100
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
