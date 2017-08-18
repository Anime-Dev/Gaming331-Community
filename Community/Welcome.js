//guildMemberAdd 
var PERM = require('../Perms');
//var Q = require('q');
var welcome = function () {
    var that = {
        Register: function (AddCommand) {
            PERM.channels.guild.client.on("guildMemberAdd", that.MemberAdd);
            if (PERM.channels.isBeta()){
                AddCommand("fakejoin", PERM.permissions.rolenames.everyone, function (command, args, message) {
                    message.delete().catch(console.error);
                    that.MemberAdd(message.member);
                });
            }
            return that;
        },
        UnRegister: function (RemoveCommand) {
            PERM.channels.guild.client.removeListener("guildMemberAdd", that.MemberAdd);
            if (PERM.channels.isBeta()){
                RemoveCommand("fakejoin", PERM.permissions.rolenames.everyone);
            }
            return that;
        },
        MemberAdd: function (member) {
            if (PERM.channels.isBeta()) {
                PERM.channels.GetChannel("general").send("**Welcome** " + member + " to the testing server! Be sure to read <#348032747404525569>");
            }
            else {
                PERM.channels.GetChannel("general").send("**Welcome** " + member + ", to see the game channels you need to have the correct roles (`$add <game>`), these will also be used to announce our events. Be sure to read " + PERM.channels.GetChannel("information") + " to get you started here, we hope you enjoy your stay!");
            }
        }
    };
    return that;
};
module.exports = welcome;