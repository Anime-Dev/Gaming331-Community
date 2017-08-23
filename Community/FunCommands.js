var PERM = require('../Perms');
//var ALIAS = require('../Alias');
//var Q = require('q');
module.exports = function () {
    var funpicImages = [["WoW for cats:", "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"],
    ["Bert is gonna be pissed:", "https://i.pinimg.com/736x/da/76/e8/da76e8f92ffa7561bc99be733a714c57--funny-shit-funny-pics.jpg"],
    ["Wrong spell:", "https://i.pinimg.com/736x/c1/65/02/c16502e626ed0f8c3537beec610e7ac6--funny-pets-funny-animals.jpg"],
    ["The cat burned the charger:", "https://s-media-cache-ak0.pinimg.com/736x/f7/14/a3/f714a35f92de708f56d2aa3bd7a5edbe--evil-cats-candles.jpg"],
    ["Keemstar has been deleted:", "http://www.maneki-neko.nl/memes/Keemstar%20deleted.jpg"],
    ["Luckly I dont see This goat's hands:", "http://cdn.playbuzz.com/cdn/c1ffedc1-2f64-4503-8c91-689bb8c48218/8325ab64-99f2-4ce1-9da3-c98b8ae7e395.jpg"],
    ["When u try killing a admin in a MMORPG:", "https://lh3.googleusercontent.com/-ZTy0vB70kuM/UwwQwBMmEoI/AAAAAAAAAU8/Xgo2TJlLVwY/w426-h240/angel_beats_gif_animation_4_by_black_wolf_90-d4ifmsj.gif"],
    ["When u just jumped from a boat with a surfboard meant to protect you but actually kills you and the water gets drained:", "http://vignette4.wikia.nocookie.net/filthy-frank/images/a/a5/Pink_guy.gif"],
    ["when u find out ur dog had the shits:", "http://i0.kym-cdn.com/photos/images/facebook/000/000/578/1234931504682.jpg"]];
    var eightBallAnswers = [
        "You may rely on it",
        "As I see it, yes",
        "That might be",
        "Could be true",
        "I doupt that",
        "Don't ask me that",
        "NO, GET OUT!",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don’t count on it",
        "It is certain",
        "It is decidedly so",
        "Most likely",
        "My reply is no",
        "My sources say no",
        "Outlook good",
        "Outlook not so good",
        "Reply hazy, try again",
        "Signs point to yes",
        "Very doubtful",
        "Without a doubt",
        "Yes",
        "Yes, definitely",
        "No!",
        "Are you kidding me?",
        "LMAO",
        ":100:",
        "Signs point to no",
        "Not sure about that one :eyes:",
        "What, no...",
        "Sure, sure..."
    ];
    var pet = {
        Name: "pet",
        Usage: "$pet <name>",
        Description: "Pets someone",
        WholeArgs: true,
        Function: function (command, args, message) {
            message.channel.send(message.member + " pets " + args + ' ' + PERM.channels.GetEmoji("petme"));
        }
    };
    var cs = {
        Name: "C#",
        Function: function (command, args, message) {
            message.channel.send("Why do Java developers wear glasses? Because they don't C# " + PERM.channels.GetEmoji("lul"));
        }
    };
    var funpic = {
        Name: "funpic",
        Description: 'Gives a "funny" picture',
        Function: function (command, args, message) {
            var answer = funpicImages[Math.round(Math.random() * funpicImages.length)];
            var embed = message.getRichEmbed()
                .setImage(answer[1])
                .setTitle("Funny Picture")
                .setDescription(answer[0])
                .setAuthor(message.author.username, message.author.avatarURL)
                .send();
        },
        Channels: [PERM.channels.channelnames.botchannel]
    };
    var pantsu = {
        Name: "pantsu",
        Function: function (command, args, message) {
            message.channel.send(PERM.channels.GetEmoji("forsenpuke") + "  " + message.author + "\n" + PERM.channels.GetEmoji("pantsu"));
        }
    };
    var ping = {
        Name: "ping",
        Description: "pong!",
        Function: function (command, args, message) {
            message.channel.send('Pong!');
        }
    };
    var hug = {
        Name: "hug",
        Usage: "$hug <name>",
        Description: "Hugs someone",
        WholeArgs: true,
        Function: function (command, args, message) {
            message.channel.send(message.member + " hugs " + args + " " + PERM.channels.GetEmoji("bingHeart"));
        }
    };
    var theclaw = {
        Name: "theclaw",
        Function: function (command, args, message) {
            message.channel.send(message.member + ": http://i.imgur.com/XpowyN2.jpg");
        }
    };
    var agree = {
        Name: "agree",
        Usage: "$agree <name>",
        Description: "Agrees with someone",
        WholeArgs: true,
        Function: function (command, args, message) {
            message.channel.send(message.member + " agrees to " + args + " :thumbsup:");
        }
    };
    var eightball = {
        Name: "8ball",
        Usage: "$8ball <question>",
        Description: "Asks the all-knowing bot if a question is true or false",
        Function: function (command, args, message) {
            var embed = message.getRichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(args.join(' '), eightBallAnswers[Math.round(Math.random() * eightBallAnswers.length)])
                .send();
        }
    };
    var blamevyo = {
        Name: "bv",
        Permissions: PERM.permissions.rolenames.Hosts,
        Function: function (command, args, message) {
            message.channel.send("Blame <@140501984141770752>");
        }
    };
    var vote = {
        Name: "vote",
        Function: function (command, args, message) {
            var greenTick = PERM.channels.GetEmoji(":greenTick:") +"";
            var redTick = PERM.channels.GetEmoji(":redTick:") +"";
            var embed = message.getRichEmbed()
                .addField("Vote", args.join(' '))
                .send()
                .then(message => {
                    message.react(greenTick.slice(12,-1)).catch(console.error)
                    .then(() => message.react(redTick.slice(10,-1)).catch(console.error));
                });
        }
    };
    var that = {
        ModuleName: "Fun",
        Register: function (Add, AddCommand, ModuleHandler) {
            ModuleHandler.Add(pet);
            ModuleHandler.Add(cs);
            ModuleHandler.Add(funpic);
            ModuleHandler.Add(pantsu);
            ModuleHandler.Add(ping);
            ModuleHandler.Add(hug);
            ModuleHandler.Add(theclaw);
            ModuleHandler.Add(agree);
            ModuleHandler.Add(eightball);
            ModuleHandler.Add(blamevyo);
            ModuleHandler.Add(vote);
            return that;
        },
        UnRegister: function (Remove, RemoveCommand, ModuleHandler) {
            ModuleHandler.Remove(pet);
            ModuleHandler.Remove(cs);
            ModuleHandler.Remove(funpic);
            ModuleHandler.Remove(pantsu);
            ModuleHandler.Remove(ping);
            ModuleHandler.Remove(hug);
            ModuleHandler.Remove(theclaw);
            ModuleHandler.Remove(agree);
            ModuleHandler.Remove(eightball);
            ModuleHandler.Remove(blamevyo);
            ModuleHandler.Remove(vote);
            return that;
        },
    };
    return that;
};