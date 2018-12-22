const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '++'

    const adminww = "++";
client.on('message', message => {
if (message.content === adminww + 'idle') {
     if (message.author.id !== '312545924952096769') return ;
     client.user.setStatus("idle")
}
});


const adminabdo = "++";
client.on('message', message => {
if (message.content === adminabdo + 'online') {
     if (message.author.id !== '312545924952096769') return ;
     client.user.setStatus("online")
}
});

const adminben = "++";
client.on('message', message => {
if (message.content === adminben + 'dnd') {
     if (message.author.id !== '312545924952096769') return ;
     client.user.setStatus("dnd")
}
});


//Best Rainbow Bot .
client.on('message', message => {//new msg event
  if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'set')) {//to create the rainbow role
      if (message.author.id !== '312545924952096769') return ;
      let role = message.guild.roles.find('name', 'Rainbow')
      if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
    //start of create role 
    if(!role){
      rainbow =  message.guild.createRole({
     name: "Rainbow",//the role will create name
     color: "#000000",//the default color
     permissions:[]//the permissions
   //end of create role
  })
  
  }
  message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
  }})
  
  client.on('ready', () => {//new ready event
    setInterval(function(){
        client.guilds.forEach(g => {
                    var role = g.roles.find('name', 'Rainbow');//rainbow role name
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };
        });
    }, 5000);//the rainbow time
  })



client.on('message', async message => {
  if (message.content.startsWith("++ban")) {
   if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(' У вас нет прав!');
   if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('**Bot** не имеет разрешения');
   let user = message.mentions.users.first();
   let user1 = message.mentions.users.first();
   let reason = message.content.split(' ').slice(3).join(" ");  
   if (!reason) {
     reason = 'Нет причин';
   }
   if (message.mentions.users.size < 1) return message.reply('@имя пользователя !!').then(message => message.delete(35000));
   let customemoji5 = client.emojis.find(r => r.name === '544847695489478548');
   var userM = message.guild.member(message.mentions.users.first());
   if(userM.id === message.author.id) return message.reply('я не могу дать вам запрет').then(m => m.delete(5000));
   if(userM.id === message.guild.owner.id) return message.reply(`Этот участник имеет модераторские права! ${customemoji5}`);
   if(message.guild.member(userM.user).hasPermission("ADMINISTRATOR")) return message.reply('У меня нет прав!!')

   if (!message.guild.member(user)
   .kickable) return message.reply('**Bot** не имеет разрешения').then(message => message.delete(35000));
   message.guild.member(user).ban();
   message.channel.send(`<@${user.id}> Забанен на сервере! **${message.guild.name}** ✈`);
   message.channel.send();
   
   if(!message.guild.channels.find('name', 'log-muted🗂')) return message.channel.send('сделать канал с именем **logs** Получение журналов').then(msg => msg.delete(5000));
 
   const wunmuteembed = new Discord.RichEmbed()
   .setColor(message.guild.me.highestRole.color) 
   .setAuthor(`Участник Забанен!`, user.displayAvatarURL)
   .setThumbnail(user1.displayAvatarURL)
   .addField("Пользователь",`${user1.tag}`,true)
   .addField("Модератор",`${message.author.tag}`,true)
   .addField("Причина",`${reason}`,true)
   .setTimestamp()
   message.guild.channels.find('name', 'log-muted🗂').sendEmbed(wunmuteembed)
 
   var unmuteembeddm = new Discord.RichEmbed()
   .setDescription(`У вас Бан на сервере **${message.guild.name}**
Причина: **${reason}**`)
   .setColor("#ff0000")
     user.send(unmuteembeddm);
 }
 
 });


 client.on('message', async message => {
  if (message.content.startsWith("++kick")) {
 if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply('У вас нет прав!')
 if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply('**Bot** не имеет разрешения')
 let user = message.mentions.users.first();
 let user1 = message.mentions.users.first();
 let reason = message.content.split(' ').slice(3).join(" ");  
 if (!reason) {
   reason = 'Нет причин';
 }
 if (message.mentions.users.size < 1) return message.reply('@имя пользователя !!').then(message => message.delete(35000));
 
 var userM = message.guild.member(message.mentions.users.first());
 if(userM.id === message.author.id) return message.reply("ты не можешь пинать себя").then(m => m.delete(5000));
 if(userM.id === message.guild.owner.id) return message.reply("Этот участник имеет модераторские права!");
 if(message.guild.member(userM.user).highestRole.position >= message.guild.member(message.member).highestRole.position) 
 if(message.guild.member(userM.user).hasPermission("ADMINISTRATOR")) return message.reply('У меня нет прав!!')
 
 if (!message.guild.member(user)
 .kickable) return message.reply('**Bot** не имеет разрешения').then(message => message.delete(35000));
 message.guild.member(user).kick();
 message.channel.send(`:ballot_box_with_check: **${user.tag}** Был кикнут из сервера!`)
 message.channel.sendEmbed();
 
 if(!message.guild.channels.find('name', 'log-muted🗂')) return message.channel.send('сделать канал с именем **logs** Получение журналов').then(msg => msg.delete(5000));
 
 const wunmuteembed = new Discord.RichEmbed()
 .setColor(message.guild.me.highestRole.color) 
 .setAuthor(`Участник кикнут!`, user.displayAvatarURL)
 .setThumbnail(user1.displayAvatarURL)
 .addField("Пользователь",`${user1.tag}`,true)
 .addField("Модератор",`${message.author.tag}`,true)
 .addField("Причина",`${reason}`,true)
 .setTimestamp()
 message.guild.channels.find('name', 'log-muted🗂').sendEmbed(wunmuteembed)
 
 var unmuteembeddm = new Discord.RichEmbed()
 .setDescription(`Вас выгнали из **${message.guild.name}**
Причина:**${reason}** `)
 .setColor("#ff0000")
   user.send(unmuteembeddm);
 }
 });


   client.login(process.env.BOT_TOKEN);
