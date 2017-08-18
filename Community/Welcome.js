//guildMemberAdd 
var PERM = require('../Perms');
//var Q = require('q');
var welcome = function () {
    var that = {
        Register: function (AddCommand) {
            PERM.channels.guild.client.on("guildMemberAdd", that.MemberAdd);
            return that;
        },
        UnRegister: function (RemoveCommand) {
            PERM.channels.guild.client.removeListener("guildMemberAdd", that.MemberAdd);
            return that;
        },
        MemberAdd: function (member) {
            PERM.channels.GetChannel("general").send("**Welcome** " + member + ", to see the game channels you need to have the correct roles (`$add <game>`), these will also be used to announce our events. Be sure to read #information to get you started here, we hope you enjoy your stay!");
        }
    };
    return that;
};
module.exports = welcome;