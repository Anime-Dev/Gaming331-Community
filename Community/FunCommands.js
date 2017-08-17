var PERM = require('../Perms');
var Fun = function () {
    var that = {
        Register: function (AddCommand) {
            AddCommand("pet", PERM.permissions.rolenames.everyone, that.pet);
            AddCommand("C#", PERM.permissions.rolenames.everyone, that.cs);
            AddCommand("funpic", PERM.permissions.rolenames.everyone, that.funpic);
            AddCommand("pantsu", PERM.permissions.rolenames.everyone, that.pantsu);
            return that;
        },
        UnRegister: function (RemoveCommand) {
            RemoveCommand("pet", PERM.permissions.everyone, that.pet);
            RemoveCommand("C#", PERM.permissions.everyone, that.cs);
            RemoveCommand("funpic", PERM.permissions.rolenames.everyone, that.funpic);
            RemoveCommand("pantsu", PERM.permissions.rolenames.everyone, that.pantsu);
            return that;
        },
        pet: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send(message.member + " pets " + args.join(' '));
        },
        cs: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send("Why do Java developers wear glasses? Because they don't C# " + PERM.channels.GetEmoji("lul"));
        },
        funpic: function(command,args,message) {
            var images = ["WoW for cats: https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif","bert is gona be pissed: https://i.pinimg.com/736x/da/76/e8/da76e8f92ffa7561bc99be733a714c57--funny-shit-funny-pics.jpg","the cat burnned the charger: https://i.pinimg.com/736x/c1/65/02/c16502e626ed0f8c3537beec610e7ac6--funny-pets-funny-animals.jpg","https://s-media-cache-ak0.pinimg.com/736x/f7/14/a3/f714a35f92de708f56d2aa3bd7a5edbe--evil-cats-candles.jpg"]
            message.channel.send(images[Math.round(Math.random() * images.length)]);
        },
        pantsu: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send(PERM.channels.GetEmoji("forsenpuke") + "  " + message.author + "\n" + PERM.channels.GetEmoji("pantsu"));
        },
    };
    return that;
};
module.exports = Fun;
