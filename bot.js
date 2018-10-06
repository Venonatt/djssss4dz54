const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
 هلا والله
❤ ممكن تدخل سيرفر حبي
                     [ https://discord.gg/yEJZt8G ] 
الدعووة خاصة لك ... [ ${member}  ]
السيرفر للتصميم بوت خاص فيك مجانا 24/24 ساعة 😘
وتربح فلوس عبر بايبال مضمون %100
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
