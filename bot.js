const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const prefix = "#";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + '-role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + '-role' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'role' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطاء الىه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء الى **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
 let banse = new Set();
 client.on('guildBanAdd', function(guild) {
   guild.fetchAuditLogs().then(logs => {
     const ser = logs.entries.first().executor;
     if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
       bans: 2
     }
     let boner = bane[ser.id+guild.id]
 banse.add(ser.id)
 boner.bans = Math.floor(boner.bans+1)
 
 
 setTimeout(() => {
   boner.bans = 2
   banse.delete(ser.id)
 },8000)
 
 if(boner.bans > 2) {
   let roles = guild.members.get(ser.id).roles.array()
 guild.members.get(ser.id).removeRoles(roles)
 }
 
     })
     fs.writeFile('./alpha.json', JSON.stringify(bane), (err) => {
 if (err) console.error(err);
 })
 
 })
 client.on('guildMemberRemove', (u) => {
     u.guild.fetchAuditLogs().then( s => {
         var ss = s.entries.first();
         if (ss.action == `MEMBER_KICK`) {
         if (!data[ss.executor.id]) {
             data[ss.executor.id] = {
             time : 1
           };
       } else {  
           data[ss.executor.id].time+=1
       };
 data[ss.executor.id].time = 0
 u.guild.members.get(ss.executor.id).roles.forEach(r => {
                 r.edit({
                     permissions : []
                 });
                 data[ss.executor.id].time = 0
             });
         setTimeout(function(){
             if (data[ss.executor.id].time <= 3) {
                 data[ss.executor.id].time = 0
             }
         })
     };
     });
     fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
         if (err) console.log(err.message);
     });
 });
 client.on('roleDelete', (u) => {
     u.guild.fetchAuditLogs().then( s => {
         var ss = s.entries.first();
         if (ss.action == `ROLE_DELETE`) {
         if (!data[ss.executor.id]) {
             data[ss.executor.id] = {
             time : 1
           };
       } else {
           data[ss.executor.id].time+=1
       };
 data[ss.executor.id].time = 0
 u.guild.members.get(ss.executor.id).roles.forEach(r => {
                 r.edit({
                     permissions : []
                 });
                 data[ss.executor.id].time = 0
             });
         setTimeout(function(){
             if (data[ss.executor.id].time <= 3) {
                 data[ss.executor.id].time = 0
             }
         },60000)
     };
     });
     fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
         if (err) console.log(err.message);
     }); 
 });
 client.on('channelDelete', (u) => {
     u.guild.fetchAuditLogs().then( s => {
         var ss = s.entries.first();
         if (ss.action == `CHANNEL_DELETE`) {
         if (!data[ss.executor.id]) {
             data[ss.executor.id] = {
             time : 1
           };
       } else {
           data[ss.executor.id].time+=1
       };
 data[ss.executor.id].time = 0
 u.guild.members.get(ss.executor.id).roles.forEach(r => {
                 r.edit({
                     permissions : []
                 });
                 data[ss.executor.id].time = 0
             });
         setTimeout(function(){
             if (data[ss.executor.id].time <= 3) {
                 data[ss.executor.id].time = 0
             }
         })
     };
     });
     fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
         if (err) console.log(err.message);
     });
 })

const hastebin = require('hastebin.js');
const h = new hastebin({});

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ');
    var command = args[0];
    switch(command) {
        case "#clear":
        if (message.channel.type !== "text") return message.reply("** This Command is Only For Servers | :x: **");
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("** You Don't Have Access To Do This Command | :x: **");
        if (!args[1]) args[1] = 100;
        var count = parseInt(args[1]);
        if (isNaN(count)) return message.reply("** You Have To Type Number | :x: **");
        message.channel.bulkDelete(count).then(msgs => {
            message.channel.send(`** Done ** | I have Deleted ${msgs.size} Messages ...`);
            var x = 0;
            var messages = msgs.map(m => `${++x} - ${m.author.tag}  :  ${m.content.split(" ").join(" ")}`).join(`
`);
            fs.writeFile(`${message.guild.id}.txt`, messages, (err) => {
                if (err) console.log(err.message);
                h.post(messages).then(url => {
                    var c = message.guild.channels.find("name", 'general-log');
                    if (!c) return;
                    var embed = new Discord.RichEmbed()
                    .setTitle(`Bulk Delete. | ${msgs.size} Messages`)
                    .setAuthor(client.user.tag, client.user.avatarURL)
                    .setThumbnail(message.guild.iconURL)
                    .setColor("RANDOM")
                    .setDescription(`By \`${message.author.tag}\`\n\n In #${message.channel.name}\n\n [Vew Messages on : \`HasteBin\`](${url})`)
                    .attachFile(`./${message.guild.id}.txt`);
                    c.send(`Download Messages : `, {embed : embed});
                });
            });
        });
        break;
    };
});


client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ');
    var command = args[0];
    switch(command) {
        case "#prune":
        if (message.channel.type !== "text") return message.reply("** This Command is Only For Servers | :x: **");
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("** You Don't Have Access To Do This Command | :x: **");
        if (!args[1]) args[1] = 100;
        var count = parseInt(args[1]);
        if (isNaN(count)) return message.reply("** You Have To Type Number | :x: **");
        message.channel.bulkDelete(count).then(msgs => {
            message.channel.send(`** Done ** | I have Deleted ${msgs.size} Messages ...`);
            var x = 0;
            var messages = msgs.map(m => `${++x} - ${m.author.tag}  :  ${m.content.split(" ").join(" ")}`).join(`
`);
            fs.writeFile(`${message.guild.id}.txt`, messages, (err) => {
                if (err) console.log(err.message);
                h.post(messages).then(url => {
                    var c = message.guild.channels.find("name", 'general-log');
                    if (!c) return;
                    var embed = new Discord.RichEmbed()
                    .setTitle(`Bulk Delete. | ${msgs.size} Messages`)
                    .setAuthor(client.user.tag, client.user.avatarURL)
                    .setThumbnail(message.guild.iconURL)
                    .setColor("RANDOM")
                    .setDescription(`By \`${message.author.tag}\`\n\n In #${message.channel.name}\n\n [Vew Messages on : \`HasteBin\`](${url})`)
                    .attachFile(`./${message.guild.id}.txt`);
                    c.send(`Download Messages : `, {embed : embed});
                });
            });
        });
        break;
    };
});
client.on('message', async message => {
  var moment = require('moment');
  var mmss = require('ms')
  let date = moment().format('Do MMMM YYYY , hh:mm');
  let User = message.mentions.users.first();
  let Reason = message.content.split(" ").slice(3).join(" ");
  let messageArray = message.content.split(" ");
  let time = messageArray[2];
  if(message.content.startsWith(prefix + "ban")) {
     if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**You dont have ban_members permission :/ **");
     if(!User) message.channel.send("**Mention Someone**");
     if(User.id === client.user.id) return message.channel.send("**Why you want to ban me ? :/**");
     if(User.id === message.guild.owner.id) return message.channel.send("**You can't ban the ownership**");
     if(!time) return message.channel.send("**- اكتب الوقت**");
     if(!time.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send('**- Error in this Duration**');
     if(!Reason) message.channel.send("**- اكتب Reason**");
     let banEmbed = new Discord.RichEmbed()
     .setAuthor(`New Banned User !`)
     .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
     .addField('- Banned By: ',message.author.tag,true)
     .addField('- Banned User:', `${User}`)
     .addField('- Reason:',Reason,true)
     .addField('- Time & Date:',date,true)
     .addField('- Duration:',time,true)
     .setFooter(message.author.tag,message.author.avatarURL);
     let incidentchannel = message.guild.channels.find(`name`, "incidents");
if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
incidentchannel.send(banEmbed);
	  message.delete()
message.channel.send(`**:white_check_mark: ${User} has been banned :airplane: **`).then(() => message.guild.member(User).ban({reason: Reason}))
User.send(`**:airplane: You are has been banned in ${message.guild.name} reason: ${Reason} by: ${message.author.tag} :airplane:**`)
     .then(() => { setTimeout(() => {
         message.guild.unban(User);
     }, mmss(time));
  });
 }
});

client.on('message',message =>{
  var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.toLowerCase().split(" ");
    var userM = message.mentions.users.first()
    if(command == prefix + 'unban') {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
        if(!args[1]) return  message.channel.send(':no_entry: | Please type the ID of user');
        if(args[1].length < 16) return message.reply(':no_entry: | This ID is not id user!');
        message.guild.fetchBans().then(bans => {
            var Found = bans.find(m => m.id === args[1]);
            if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
            message.guild.unban(args[1]);
            message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!`);
           
            let banInfo = new Discord.RichEmbed()
            .setTitle('**New Unbanned User !**')
            .setThumbnail(message.author.avatarURL)
            .setColor('GREEN')
            .setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!\n\n**User:** <@${args[1]}> (ID: ${args[1]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
            .setTimestamp()
            .setFooter(userM.user.tag, userM.user.avatarURL)
           
            let incidentchannel = message.guild.channels.find(`name`, "incidents");
            if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
            incidentchannel.send(banEmbed);
            }
 
        )}
      })


client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('+bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "dFuZe";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(':mega: Broadcast')
.addField('🔰Server:🔰', message.guild.name)
.addField('🚩Sender:🚩', message.author.username)
.addField('📜Message:📜', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
})









client.on('message',async message => {
    if(message.content.startsWith(prefix + "setVoice")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`🎤 - Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`🎤 - Voice Online : 「${message.guild.members.filter(m => m.voiceChannel).size}」`)
      },1000);
    });
    }
  });

  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setCount")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`👪 - Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`👪 - Members Count : 「${message.guild.memberCount}」`)
      },1000);
    });
    }
  });

    
   
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setTime")) {
    if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
          setInterval(function() {

        var currentTime = new Date(),
        hours = currentTime.getHours() + 3 ,
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth(),
        day = currentTime.getDate(),
        week = currentTime.getDay();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }

        c.setName("🕐 - Time : 「" + hours + ":" + minutes  +" " + suffix + "」");
      },1000);
    });
    }
  });

  
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setDate")) {
        var currentTime = new Date(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        week = currentTime.getDay();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
      console.log(`Date channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName("📅 - Date : " + "「" + day + "-" + month + "-" + years + "」")
      },1000);
    });
    }
  });

client.on('message',async message => {
  var moment = require('moment');
    if(message.content.startsWith(prefix + "setDays")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
      console.log(`Day channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`📅 - Day : 「${moment().format('dddd')}」`);
      },1000);
    });
    }
  });


  
const clans = JSON.parse(fs.readFileSync("./ClanSystem/ClanSystem.json", 'UTF8'));
const system = JSON.parse(fs.readFileSync("./ClanSystem/ClanStats.json", 'UTF8'));
const level = JSON.parse(fs.readFileSync("./ClanSystem/ClanLevels.json", 'UTF8'));

client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  let args = message.content.split(' ');
  let random = Math.floor(Math.random() * 5) + 2;
  let author = message.author;

  let xpLeft;
  let nameClan;
  let membersClan = [];
  let levelClan = 0;
  if(!system[author.id]) system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
  fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
  if(!level[author.id]) level[author.id] = {level: 1, xp: 1};
  fs.writeFile('./ClanSystem/ClanLevels.json', JSON.stringify(level, null, 4), function(err) {if(err) console.log(err)});

  level[author.id].xp += (+random);
  if(level[author.id].xp >= 300) {
    if(level[author.id].xp > 300) xpLeft = level[author.id].xp - 300;
    level[author.id] = {
      level: level[author.id].level + 1,
      xp: xpLeft
    };
    fs.writeFile('./ClanSystem/ClanLevels.json', JSON.stringify(level, null, 4), function(err) {if(err) console.log(err)});
  }
  if(message.content.startsWith(prefix + "clan")) {
    if(message.content.split(' ')[0] !== `${prefix}clan`) return;

    if(!args[1] || args[1] && args[1] === 'info') {
  let embed = new Discord.RichEmbed()
  .setAuthor('الكلانات', message.author.avatarURL)
  .setDescription(`- \`${prefix}clan\`: نظام الكلانات هو نظام شبه مسلي ينمي التفاعل ويمكنك التحكم بالكلان تبعك بشكل كامل
  - \`${prefix}clan info\`: لأظهار رسالة الأوامر ( هذه الرسالة ) ء
  - \`${prefix}clan create\`: لأنشاء كلان بالأسم الذي تريده
  - \`${prefix}clan invite\`: لدعوة شخص ما للكلان تبعك
  - \`${prefix}clan join\`: للتقديم على دخول الكلان الذي تريده
  - \`${prefix}clan promote\`: لأعطاء شخص بالكلان صلاحيات الادمن ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan demote\`: لأزالة صلاحية الادمن من عضو بالكلان ( صاحب الكلان فقط ) ء
  - \`${prefix}clan ownership\`: لنقل ملكيةالكلان
  - \`${prefix}clan leave\`: للخروج من الكلان الذي انت به
  - \`${prefix}clan kick\`: لطرد عضو من الكلان ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan disband\`: لمسح الكلان من السستم ( صاحب الكلان فقط ) ء
  - \`${prefix}clan stats\`: لعرض معلومات الكلان تبعك
  - \`${prefix}clan list\`: يظهر لك اعضاء الكلان برسالة
  - \`${prefix}clan accept\`: لقبول شخص وجعل الشخص يدخل الكلان ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan decline\`: لرفض شخص وعم جعل الشخص يدخل الكلان ( يطلب صلاحية الادمن ) ء`)
  .setFooter("dFuZe")
  message.channel.send(embed);
}

    if(args[1] && args[1] === 'create') {
      //if(level[author.id].level < 10) return message.channel.send('**# يجب أن يكون لديك 10 مستويات لعمل كلان , لتجميع مستويات تفاعل بالشات وسيتم حساب النقاط**');
      if(system[author.id].clan !== 'None') return message.channel.send('**# يجب عليك ان تخرج من الكلان الذي أنت به حاليا**');

      let m = await message.channel.send('**# أكتب أسم الكلان الان**');
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors: ['time']}).then(collected => {
        if(collected.first().content.length > 25) return message.channel.send("**# لا يمكنك وضع اسم للكلان يفوق الـ25 حرفا , أعد كابة الأمر**");
        if(collected.first().content.includes("None")) return message.channel.send("**# `None`, لا يمكنك وضع هذه الكلمة كأسم للكلان**");
        collected.first().delete().catch();
        nameClan = collected.first().content;
      });

      m = await m.edit('**# جارى عمل الكلان**');
      awaited = await setTimeout(async() => {
        let membersArray = {
          nameClan: {
            array: []
          }
        };
        let members = membersArray.nameClan.array;
        members.push(message.author.id);
        clans[nameClan] = {
          name: nameClan,
          createdAt: new Date().toLocaleString(),
          level: levelClan,
          creator: message.author.id,
          members: members,
          applylist: [],
          admins: []
        };
        fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
        system[author.id] = {
          clan: nameClan,
          joinedAt: new Date().toLocaleString(),
          clanLevel: 0,
          creator: message.author.id
        };
        fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});
        m = await m.edit('**# تم عمل الكلان بنجاح**');
      }, 2300);

    }
    if(args[1] && args[1] === 'invite') {
      if(!system[author.id]) return message.channel.send("**# أنت لست بكلان**");
      let clan = system[author.id].clan;
      if(system[author.id].clan === 'None') return message.channel.send('**# أنت لست بكلان**');
      if(!clans[clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send('**# يجب عليك ان تكون اداري بالكلان**');
      let mention = message.mentions.users.first();
      if(!mention) return message.channel.send('**# منشن شخص لدعوته للكلان**');
      if(clans[clan].members.includes(mention.id)) return message.channel.send("**# هذا العضو بالكلان بالفعل**");
      if(clans[clan].members.length === 10) return message.channel.send("**# هذا الكلان وصل للحد الاقصى من الاعضاء يمكنك**");

      let m = await message.channel.send(`**${mention} # \`${clan}\`, تم دعوتك لدخول الكلان**\n\n - لقبول الدعوة \`نعم\`\n - لرفض الدعوة \`لا\``);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === mention.id, {max: 1, time: 20000, errors:['time']}).then(collected => {
        collected.first().delete().catch();
        if(collected.first().content === 'نعم') {
          clans[clan].members.push(mention.id);
          fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
          system[author.id].members += 1;
          fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

          system[mention.id] = {
            clan: clan,
            joinedAt: new Date().toLocaleString(),
            clanLevel: 0,
            creator: clans[clan].creator
          };
          fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});
          message.channel.send(`**${message.author} # تم قبول الدعوة**`);
        }
        if(collected.first().content === 'لا') {
          message.channel.send(`**${message.author} # تم رفض الدعوة**`);
        } else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
          return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
        }
      });
    }
    if(args[1] && args[1] === 'stats') {
      if(system[author.id].clan === 'None') return message.channel.send('**# يجب ان تكون بكلان لأستخدام هذا الأمر**');
      let clan = system[author.id].clan;
      let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} || الكلانات`, message.author.avatarURL)
        .setDescription(`الكلان || \`${clan.toString()}\``)
        embed.addField('» اسم الكلان', clan, true)
        embed.addField('» تاريخ عمل الكلان', clans[clan].createdAt, true);
        embed.addField('» تاريخ دخول الكلان', system[author.id].joinedAt, true)
        embed.addField('» صاحب الكلان', `<@${clans[clan].creator}>`, true);
        embed.addField('» لفل الكلان', clans[clan].level, true);
        embed.addField('» عدد اعضاء الكلان', clans[clan].members.length, true);
        embed.addField('» عدد التقديمات للكلان', clans[clan].applylist.length, true);
        embed.addField('» عدد الادمنية بالكلان', clans[clan].admins.length, true);
        embed.addField('» اعضاء الكلان', `${prefix}clan list || يظهرلك رسالة بها اعضاء الكلان`);
        embed.setFooter("dFuZe")
      message.channel.send(embed);

    }
    if(args[1] && args[1] === 'join') {
    let clanName = message.content.split(' ').slice(2).join(" ");
    if(system[author.id].clan !== 'None') return message.channel.send("**# يجب أن لا تكون بكلان**");
    if(!args[2]) return message.channel.send("**# يجب عليك كتابة اسم الكلان**");
    if(!clans[clanName]) return message.channel.send("**# هذا الكلان غير موجود**");
    if(clans[clanName].applylist.includes(message.author.id)) return message.channel.send("**# لقد قدمت على دخول هذا الكلان مسبقا");

    clans[clanName].applylist.push(message.author.id);
    message.channel.send("**# لقد تم التقديم على دخول الكلان , سيتم الرد عليك من قبل احد ادارة الكلان**");

  }
    if(args[1] && args[1] === 'accept') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      if(!clans[system[author.id].clan].applylist.includes(mention.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");

      clans[system[author.id].clan].applylist.shift(mention.id);
      clans[system[author.id].clan].members.push(mention.id);
      let clan = system[author.id].clan;
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});

      system[mention.id] = {
        clan: clan,
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0,
        creator: clans[clan].creator
      };
      fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

      mention.send(`**# \`${system[author.id].clan}\`, لقد تم قبولك بالكلان**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم قبول الشخص ودخوله للكلان**`);
    }
    if(args[1] && args[1] === 'decline') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      if(!clans[system[author.id].clan].applylist.includes(message.author.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");

      clans[system[author.id].clan].applylist.shift(mention.id);
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      system[mention.id] = {
        clan: clans[system[author.id].clan],
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0
      };
      fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

      mention.send(`**# \`${system[author.id].clan}\`, لقد تم رفض دخولك للكلان**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم رفض دخول الشخص للكلان**`);

    }
    if(args[1] && args[1] === 'promote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لترقية عضو بالكلان**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا العضو لديه ادمن بالفعل**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");

      clans[system[author.id].clan].admins.push(mention.id);
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});

      mention.send(`**# \`${system[author.id].clan}\`, لقد تم ترقيتك الى ادمن**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم ترقية العضو الى رتبة ادمن**`);
    }
    if(args[1] && args[1] === 'demote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر لضاحب الكلان فقط**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(!clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس ادمن بالكلان**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");

      clans[system[author.id].clan].admins.shift(mention.id);
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      mention.send(`**# \`${system[author.id].clan}\`, لقد تم ازالتك من منصب الادمن**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم ازالة الادمنية من العضو**`);
    }
    if(args[1] && args[1] === 'rename') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      let newName;
      let oldName = clans[system[author.id].clan];
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر مخصص لصاحب الكلان فقط**");
      if(!args[2]) return message.channel.send("**# يجب عليك تحديد اسم الكلان**");

      let c = message.content.split(' ').slice(2).join(" ");
      newName = c;
      let clanInfo = clans[system[author.id].clan];
      let m = await message.channel.send(`**# \`${c}\`, هل أنت متأكد من تغيير اسم الكلان \n\n - للتأكيد \`نعم\`\n - للرفض \`لا\`**`);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(c => {
        let collected = c.first();
        collected.delete().catch();
        m.delete().catch();
        if(collected.content === 'نعم') {
          clans[newName] = {
            name: newName,
            createdAt: clanInfo.createdAt,
            level: clanInfo.level,
            creator: clanInfo.creator,
            members: clanInfo.members,
            applylist: clanInfo.applylist,
            admins: clanInfo.admins
          };
          clans[system[author.id].clan] = undefined;
          fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
          system[author.id].clan = newName;
          fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

            message.channel.send("**# جارى تغيير الاسم**");
            message.channel.send("**# تم تغيير اسم الكلان بنجاح**");

        } else if(collected.content === 'لا') {
          message.channel.send(`**# \`${newName}\`, تم الغاء تغيير اسم الكلان**`);

        } else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
          return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**')
        }
      });
    }
    if(args[1] && args[1] === 'list') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      let clan = clans[system[author.id].clan];
      let members = Array.from(clan.members);
      let admins = Array.from(clan.admins);
      let applylist = Array.from(clan.applylist);
      let i = 1;
      let o = 1;

      let embed = new Discord.RichEmbed();
      embed.setAuthor(`${message.author.username} || ${clan.name}`, message.author.avatarURL);
      embed.addField("# Members", members.map(r => `\`${i++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Admins', admins.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Apply', applylist.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Owner', `\`1.\` **|| <@${clan.creator}>**`, true);
      message.channel.send(embed);
    }
    if(args[1] && args[1] === 'leave') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      let m = await message.channel.send("**# هل انت متأكد انك تريد الخروج من الكلان \n\n - للتأكيد \`نعم\`\n - للألغاء \`لا\`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === 'نعم') {
          clans[system[author.id].clan].members.shift(author.id);
          fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
          system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
          fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

          message.channel.send("**# لقد غادرت الكلان**");
        } else if(collected.content === 'لا') {
          message.channel.send("**# تم الغاء الخروج من الكلان**");
        } else if(collected.content !== 'نعم' && collected.content === 'لا') {
          message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
        }
      });
    }
    if(args[1] && args[1] === 'kick') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لأستخدام هذا الامر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لطرده**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
      fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(clans[system[author.id].clan].admins.includes(mention.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا العضو لديه ادمن**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك طرد نفسك**");

        let index = clans[system[author.id].clan].members.indexOf(mention.id);
        let index2 = clans[system[author.id].clan].admins.indexOf(mention.id) || "";
        clans[system[author.id].clan].members.splice(index, 1);
        if(clans[system[author.id].clan].admins.includes(mention.id)) clans[system[author.id].clan].admins.splice(index2, 1);
        fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
        system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
        fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

        message.channel.send(`**# \`${mention.username}\`, تم طرد الشخص من الكلان**`);
        mention.send(`**# \`${system[author.id].clan}\`, لقد تم طردك من الكلان**`).catch();
    }
    if(args[1] && args[1] === 'ownership') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لتسليمه الأونر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}`;

      message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
        return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
      });

      let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 10000, errors:['time']}).then(c => {
        let collected = c.first();

        if(collected.content === number) {
          clans[system[author.id].clan].creator = mention.id;
          fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});

          m.delete();
          message.channel.send(`**# \`${mention.username}\`, تم تحويل اونر الكلان للشخص**`);
        } else
        if(collected.content !== number) {
          m.delete();
        }
      });
    }
    if(args[1] && args[1] === 'disband') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let fi = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}${fi}`;

      message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
        return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
      });

      let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 60000, errors:['time']}).then(c => {
        let collected = c.first();

        if(collected.content === number) {
          m.delete().catch();
          collected.delete().catch();
          let name = system[author.id].clan;
          let members = clans[system[author.id].clan].members.length;
          let cvlMembers = Array.from(clans[name].members);
          for(let i = 0; i < cvlMembers.length; i++) {
            let g = client.users.get(cvlMembers[0]);
              g.send(`- \`${system[author.id].clan}\`, تم اقفال الكلان`).catch();
              system[g.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
              fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});

            cvlMembers.shift();
            if(cvlMembers.length <= 0) {
              message.channel.send(`- \`${name}\`, تم اقفال الكلان`);

              system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
              fs.writeFile('./ClanSystem/ClanStats.json', JSON.stringify(system, null, 4), function(err) {if(err) console.log(err)});
              clans[system[author.id].clan] = undefined;
              fs.writeFile('./ClanSystem/ClanSystem.json', JSON.stringify(clans, null, 4), function(err) {if(err) console.log(err)});
            }
          }
        } else
        if(collected.content !== number) {
          m.delete();
          message.channel.send(`- \`${name}\`, تم الإلغاء`);
        }
      });
    }
    if(args && args[1] === 'room') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      if(message.guild.channels.find(r => r.name.toLowerCase() === system[author.id].clan && r.type === 'text') || message.guild.channels.find(r => r.name === system[author.id].clan && r.type === 'voice')) return message.channel.send("**# الكلان لديه روم بالفعل**");
      let id = '459349654249930756';
      let m = await message.channel.send("**# اكتب نوع الروم الان\n\n - `كتابي`\n - `صوتي`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === 'كتابي') {
          message.guild.createChannel(system[author.id].clan, 'text').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              READ_MESSAGES: true,
              CONNECT: false,
              SPEAK: false
            });

            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                CONNECT: true,
                SPEAK: true
              });

              newArray.shift();
            }
          });
          m.edit('**# تم عمل الروم**');
        } else if(collected.content === 'صوتي') {
          message.guild.createChannel(system[author.id].clan, 'voice').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              CONNECT: false,
              SPEAK: false
            });

            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                CONNECT: true,
                SPEAK: true
              });

              newArray.shift();
            }
          });
          m.edit('**# تم عمل الروم**');
        }
      });
    }
  }
});


client.on('message',  async  message  =>  {
    var  user  =  message.mentions.users.first();
    var  reason  =  message.content.split(' ').slice(2).join(' ');
if(message.content.startsWith(prefix  +  'warn'))  {
		message.delete();
		if(!message.member.hasPermission('MUTE_MEMBERS')) return;
    if(!user)  return  message.channel.send("**  -  mention  a  member  **")//by  orochix
    if(!reason)  return  message.channel.send("**  -  Type  Reason  **")//by  orochix
    let  reportembed  =  new  Discord.RichEmbed()
    .setTitle(`**New  Warned User !**`)
.addField("**Warned  User:**",  `${user}`)//by  orochix
.addField('**Warned  By:**',`${message.author}`)//by  orochix
.addField('**Reason:**',  `${reason}`,  true)
.setFooter("dFuZe")
.setColor('#060c37')
message.guild.channels.find('name',  'incidents').sendEmbed(reportembed)
message.reply(`**:warning: ${user} has been warned !:warning:**`).then(msg  =>  msg.delete(3000));
  user.send(`**:warning: You are has been warned in ${message.guild.name} reason: ${reason} :warning:**`)
}

//coding  by  orochix  !

})



client.on('message', message => {
var prefix = "#";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {

               if(!message.channel.guild) return;
let user = message.mentions.users.first()
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let reason = message.content.split(" ").slice(2).join(" ");

  if (!user) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

  const Kickembed = new Discord.RichEmbed()
  .setTitle('**New Kicked User !**')
  .setColor("RANDOM")
  .setTimestamp()
  .addField("Kicked User:",  `${user}`)
  .addField("Kicked By:", `${message.author}`)
  .addField("Reason:", `${reason}`)
  message.guild.channels.find('name',  'incidents').sendEmbed(Kickembed)
message.channel.send(`**:white_check_mark: ${user} has been kicked ! :airplane:**`)
user.send(`**:airplane: You are has been kicked in ${message.guild.name} reason: ${reason}**`)
	  message.delete()
}
});






const mmss = require('ms');
client.on('message', async message => {
    let muteReason = message.content.split(" ").slice(3).join(" ");
    let mutePerson = message.mentions.users.first();
    let messageArray = message.content.split(" ");
    let muteRole = message.guild.roles.find("name", "Muted");
    let time = messageArray[2];
    if(message.content.startsWith(prefix + "mute")) {
        if(!message.member.hasPermission('MUTE_MEMBERS')) return;
        if(!mutePerson) return message.channel.send("**- منشن الشخص يلي تبي تعطيه الميوت**");
        if(mutePerson === message.author) return message.channel.send('**- ماتقدر تعطي نفسك ميوت**');
        if(mutePerson === client.user) return message.channel.send('**- ماتقدر تعطي البوت ميوت :)**');
        if(message.guild.member(mutePerson).roles.has(muteRole.id)) return message.channel.send('**- هذا الشخص ميوتد بالفعل**');
        if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
        if(!time) return message.channel.send("**- اكتب الوقت**");
        if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**- اكتب وقت حقيقي**');
        if(!muteReason) return message.channel.send("**- اكتب السبب**");
        message.guild.member(mutePerson).addRole(muteRole);
	     message.channel.send(`**:white_check_mark: ${mutePerson} has been muted !**`)
        let muteEmbed = new Discord.RichEmbed()
        .setTitle(`New Muted User`)
        .addField('Muted By:',message.author,true)
        .addField('Muted User:', `${mutePerson}`)
        .addField('Reason:',muteReason,true)
        .addField('Duration:',`${mmss(mmss(time), {long: true})}`)
        .setFooter(message.author.username,message.author.avatarURL);
        let incidentchannel = message.guild.channels.find(`name`, "incidents");
        if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
        incidentchannel.send(muteEmbed)
	    message.delete()
        mutePerson.send(`**You Are has been muted in ${message.guild.name} reason: ${muteReason}**`)
        .then(() => { setTimeout(() => {
           message.guild.member(mutePerson).removeRole(muteRole);
       }, mmss(time));
    });
    }
});


  

client.on('message', async message =>{
  var prefix = "#";  
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**This Command For Servers Only ! **').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES'));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return;


  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**Mention Someone Please**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**This Person Is Not Muted ! **:x:")

  await toMute.removeRole(role)

  message.channel.sendMessage(`**${toMute} Has been unmuted !**:white_check_mark:`);
		message.delete();
  let mutedEmbed = new Discord.RichEmbed()
  .setDescription("» New UnMute User «")
  .setColor("#bc0000")
  .addField("Unmuted", `${Warned} with ID ${Warned.id}`)
  .addField("Unmuted By", `<@${message.member.id}> with ID ${message.member.id}`)
  let incidentchannel = message.guild.channels.find(`name`, "incidents");
  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
  return;
  
  }

});  
  

const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[ ] ${client.users.size}`)
    client.user.setStatus("idle")
});
client.on('ready', () => {
     client.user.setActivity("you",{type: 'WATCHING'});

});

client.on('message', async msg => {
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **rl")
			}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {

				var video = await youtube.getVideo(url);

			} catch (error) {
				try {
				    					    var fast = {};
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)
					.setFooter(`${msg.guild.name}`)
          	.setThumbnail('https://e.top4top.net/p_1001lsv3w1.png')
          
					msg.channel.sendEmbed(embed1).then(message =>{

						message.delete(15000)

					});
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 20000,
							errors: ['time']
						})

						}catch(err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
						}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':x: لا يتوفر نتآئج بحث ');
				}
		}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `replay`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)
	msg.channel.send({embed: embedNP})
  	 return handleVideo(video, msg, msg.member.voiceChannel);

	} else if (command === `queue`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		const embedqu = new Discord.RichEmbed()
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`,
		time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,
		eyad:`${video.thumbnails.high.url}`,
		best:`${video.channel.title}`,
		bees:`${video.raw.snippet.publishedAt}`,
		shahd:`${video.raw.kind}`,
		zg:`${video.raw.snippet.channelId}`,
        views:`${video.raw.views}`,
        like:`${video.raw.likeCount}`,
        dislike:`${video.raw.dislikeCount}`,
        hi:`${video.raw.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);
		queueConstruct.songs.push(song);
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
		fetchVideoInfo(`${song.hi}`, function (err,  idk) {
  if (err) throw new Error(err);
  console.log( idk);
  	  const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {
    like: `${ idk.likeCount}`,
    dislike: `${ idk.dislikeCount}`
  }
	serverQueue.textChannel.send({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
	}).then(love => {
		love.react('👍').then(r=>{
		love.react('👎').then(r =>{
		love.react('🙌').then(r=> {
    let likee = (reaction, user) => reaction.emoji.name === '👍' && user.id === msg.author.id;
    let dislikee = (reaction, user) => reaction.emoji.name === '👎' && user.id === msg.author.id;
    let cnn = (reaction, user) => reaction.emoji.name === '🙌' && user.id === msg.author.id;

    let ll = love.createReactionCollector(likee , {max:5});
    let dd = love.createReactionCollector(dislikee , {max:5});
    let cn = love.createReactionCollector(cnn , {max:5});

		    ll.on("collect", r => {
		      yyyy[msg.guild.id].like++;
	love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${yyyy[msg.guild.id].like}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
});
    })

    dd.on("collect", r => {
      yyyy[msg.guild.id].dislike++;
	love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${yyyy[msg.guild.id].dislike}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
});
})
    cn.on("collect", r => {
	love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
});
})
})
})
})
})
})
}
});

client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '+';

if(cmd === `${prefix}suggest`) {
    var suggestMessage = message.content.substring(8)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("New suggest just added!!")
    .setDescription(`**${suggestMessage}**`)
    .setFooter(`Suggested By : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "suggests");
    if (!suggests) return message.channel.send("You should make A **suggests** channel!")
    suggests.send(suggestEMBED);
message.delete()
}

});


 client.on('message', message => {
  var prefix = "+"
   let args = message.content.split(' ').slice(1);
   if(message.content.startsWith(prefix + 'role')) {
       let member = message.mentions.users.first();
       let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
       console.log(role);
       if(member) {
             if(role.startsWith('+')) {
               let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
               console.log(roleRe);
               let role1 = message.guild.roles.find('name', roleRe);
               console.log(`hi`);
const ee =new Discord.RichEmbed()
.setDescription('**:x: I can’t find the role.**')
.setFooter('Requested By '+message.author.username,message.author.avatarURL)
       if(!role1) return message.channel.send(ee);                message.guild.member(member).removeRole(role1.id);
               
                    const e = new Discord.RichEmbed()
                    
                .setDescription(':white_check_mark:** Changed Roles For **'+member+'**,** '+'**'+'-'+role1.name+'**')
               .setFooter('Requested By '+message.author.username,message.author.avatarURL)
               .setColor('BLACK')
                message.channel.send(e)
           } else if(!role.startsWith('+')) {
               let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
               let role1 = message.guild.roles.find('name', roleRe);
const ee =new Discord.RichEmbed()
.setDescription('**:x: I can’t find the role.**')
.setFooter('Requested By : '+message.author.username,message.author.avatarURL)
       if(!role1) return message.channel.send(ee);                message.guild.member(member).addRole(role1);
               const e = new Discord.RichEmbed()
               
               .setDescription(':white_check_mark:** Changed Roles For **'+member+'**,** '+'**'+'+'+role1.name+'**')
               .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
               .setColor('BLACK')
                message.channel.send(e)
           } else {
               message.reply(`يجب عليك كتابة اسم الرتبة`);
           } 
       }
else if(args[0] == 'all') {
    if(role.startsWith('+')) { 
      let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
        let role1 = message.guild.roles.find('name', roleRe);
                  message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
          message.guild.members.forEach(m => {
           message.guild.member(m).removeRole(role1.id);
       });
        msg.edit(`** :white_check_mark:   Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
   });
 }
   if(role) {
   let role1 = message.guild.roles.find('name', role);
   if(!role1) return;
   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
       message.guild.members.forEach(m => {
           message.guild.member(m).addRole(role1);
       });
       msg.edit(`** :white_check_mark:   Done...\n**` +  role1.name+`** Has Given To __${message.guild.members.size}__ Members **`);
   });
}
} else if(args[0] == 'humans') {
    if(role.startsWith('+')) { 
      let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
        let role1 = message.guild.roles.find('name', roleRe);
                  message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
          message.guild.members.forEach(m => {
           message.guild.member(m).removeRole(role1.id);
       });
        msg.edit(`** :white_check_mark:   Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
   });
 }

   if(role) {
       let role1 = message.guild.roles.find('name', role);

const ee =new Discord.RichEmbed()
.setDescription('I Cann’t Find This Role')
.setFooter('Requested By : '+message.author.username,message.author.avatarURL)
       if(!role1) return message.channel.send(ee);
       message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
           message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
               message.guild.member(m).addRole(role1);
           });
       msg.edit(`** :white_check_mark:   Done...**`);
       });
   }
} else if(args[0] == 'bots') {
    if(role.startsWith('+')) { 
      let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
        let role1 = message.guild.roles.find('name', roleRe);
                  message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
          message.guild.members.forEach(m => {
           message.guild.member(m).removeRole(role1.id);
       });
        msg.edit(`** :white_check_mark:  Done...**`);
   });
 }
   if(role) {
       let role1 = message.guild.roles.find('name', role);
      const ee =new Discord.RichEmbed()
.setDescription('I Cann’t Find This Role')
.setFooter('Requested By : '+message.author.username,message.author.avatarURL)
       if(!role1) return message.channel.send(ee);
       message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
           message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
               message.guild.member(m).addRole(role1);
           });
       msg.edit(`** :white_check_mark:  Done...\n**` +role1.name+`** Has Given To __${message.guild.members.size}__ Member**`);
});
}
}
}
});


const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');
 
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', '💬welcome');
const w = ['./w1.png'];
 
         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
         
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`Welcome To dFuZe Network`, 300, 130);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                         
               
                             
welcomer.sendFile(canvas.toBuffer())
 
 
 
     
     
                    }  )  
     
                   
 
})
      });                    
});
client.on("guildMemberAdd", member => {
    let welcomer = member.guild.channels.find('name', '💬welcome');
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
	.setImage('https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif')
     welcomer.send({embed:heroo});
      }})
 
const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "💬welcome");
    logChannel.send(`Invited by: <@${inviter.tag}>`);
  });
});


const coolDown = new Set();
client.on('message', message => {
  
      if (message.content.startsWith("رابط")) {
        if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your invite :yen: link refreshes in \`\`1 Day\`\`.**`);

    message.channel.createInvite({
  
          thing: true,
  
          maxUses: 5,
  
          maxAge: 86400
  
      }).then(invite =>
  
        message.author.sendMessage(invite.url)
  
      )
  
    message.channel.send("**تم ارسال الرابط برسالة خاصة**")   .then(() => {     
      coolDown.add(message.author.id);
  });
  
  
  message.author.send(`**مدة الرابط : يـوم
  عدد استخدامات الرابط : 5**`)
  
      }

      setTimeout(() => {
        coolDown.remove(message.author.id);
     },86400000);
     
  });  
client.login(process.env.BOT_TOKEN);
