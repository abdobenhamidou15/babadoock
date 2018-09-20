const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', async message => {
  if (message.content.startsWith("++ban")) {
   if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply('Вы не получите мут, бот не дает мут владельцам!:x:');
   if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('**Bot** не имеет разрешения');
   let user = message.mentions.users.first();
   let user1 = message.mentions.users.first();
   let reason = message.content.split(' ').slice(2).join(" ");  
   if (!reason) {
     reason = 'Нет причин';
   }
   if (message.mentions.users.size < 1) return message.reply('@имя пользователя !!').then(message => message.delete(35000));
 
   var userM = message.guild.member(message.mentions.users.first());
   if(userM.id === message.author.id) return message.reply('я не могу дать вам запрет').then(m => m.delete(5000));
   if(userM.id === message.guild.owner.id) return message.reply("Этот участник имеет модераторские права!");
   if(message.guild.member(userM.user).hasPermission("ADMINISTRATOR")) return message.reply('У меня нет прав!!')

   if (!message.guild.member(user)
   .kickable) return message.reply('**Bot** не имеет разрешения').then(message => message.delete(35000));
   message.guild.member(user).ban();
   message.channel.send(`<@${user.id}> запрещен **${message.guild.name}** ✈`);
   message.channel.send();
   
   if(!message.guild.channels.find('name', 'log-muted🗂')) return message.channel.send('сделать канал с именем **logs** Получение журналов').then(msg => msg.delete(5000));
 
   const wunmuteembed = new Discord.RichEmbed()
   .setColor(message.guild.me.highestRole.color) 
   .setAuthor(`член запрещен!`, user.displayAvatarURL)
   .setThumbnail(user1.displayAvatarURL)
   .addField("пользователь",`${user1.tag}`,true)
   .addField("Запрещено",`${message.author.tag}`,true)
   .addField("Причина:",`${reason}`,true)
   .setTimestamp()
   message.guild.channels.find('name', 'log-muted🗂').sendEmbed(wunmuteembed)
 
   var unmuteembeddm = new Discord.RichEmbed()
   .setDescription(`У вас Бан на сервере ${message.guild.name}
Причина: **${reason}**`)
   .setColor("#ff0000")
     user.send(unmuteembeddm);
 }
 
 });


 client.on('message', async message => {
  if (message.content.startsWith("++kick")) {
 if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply('Вы не получите мут, бот не дает мут владельцам!:x:')
 if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply('**Bot** не имеет разрешения')
 let user = message.mentions.users.first();
 let user1 = message.mentions.users.first();
 let reason = message.content.split(' ').slice(2).join(" ");  
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
 message.channel.send(`:white_check_mark: **${message.author.username}** Был кикнут из сервера.т <@${user.id}>`)
 message.channel.sendEmbed();
 
 if(!message.guild.channels.find('name', 'log-muted🗂')) return message.channel.send('сделать канал с именем **logs** Получение журналов').then(msg => msg.delete(5000));
 
 const wunmuteembed = new Discord.RichEmbed()
 .setColor(message.guild.me.highestRole.color) 
 .setAuthor(`член пнул!`, user.displayAvatarURL)
 .setThumbnail(user1.displayAvatarURL)
 .addField("пользователь",`${user1.tag}`,true)
 .addField("ногами",`${message.author.tag}`,true)
 .addField("причина",`${reason}`,true)
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
