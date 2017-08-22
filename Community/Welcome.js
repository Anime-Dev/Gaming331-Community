var PERM = require('../Perms');
//var ALIAS = require('../Alias');
//var Q = require('q');
module.exports = function () {
    var fakeJoin = {
        Name: "fakejoin",
        Usage: "$fakejoin",
        Description: "Triggers the welcome msg",
        Function: function (command, args, message) {
            that.MemberAdd(message.member);
        },
    };
    var that = {
        ModuleName: "Welcome",
        Handler: undefined,
        Register: function (Add, AddCommand, ModuleHandler) {
            Handler = ModuleHandler;
            PERM.channels.guild.client.on("guildMemberAdd", that.MemberAdd);
            if (PERM.channels.isBeta()) {
                ModuleHandler.Add(fakeJoin);
            }
            return that;
        },
        UnRegister: function (Remove, RemoveCommand, ModuleHandler) {
            PERM.channels.guild.client.removeListener("guildMemberAdd", that.MemberAdd);
            if (PERM.channels.isBeta()) {
                ModuleHandler.Remove(fakeJoin);
            }
            return that;
        },
        MemberAdd: function (member) {
            if (PERM.channels.isBeta()) {
                PERM.channels.GetChannel("general").send(member)
                    .then(message => message.delete().catch(console.error));
                var welcomeEmbed = Handler.getRichEmbed()
                    .setTitle("Hiya!")
                    .setDescription("Welcome " + member + " to the testing server! Be sure to read <#348032747404525569>")
                    .send(PERM.channels.GetChannel("general"));
            }
            else {
                PERM.channels.GetChannel("general").send(member)
                    .then(message => message.delete().catch(console.error));
                var welcomeEmbed = Handler.getRichEmbed()
                    .setTitle("Welcome!")
                    .setDescription(member + ", to see the game channels you need to have the correct roles (`$add <game>`), these will also be used to announce our events. Be sure to read " + PERM.channels.GetChannel("information") + " to get you started here, we hope you enjoy your stay!")
                    .send(PERM.channels.GetChannel("general"));
            }
        }
    };
    return that;
};