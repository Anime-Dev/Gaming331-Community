var PERM = require('../Perms');
var Fun = function () {
    var that = {
        Register: function (AddCommand) {
            AddCommand("pet", PERM.permissions.rolenames.everyone, that.pet);
            AddCommand("C#", PERM.permissions.rolenames.everyone, that.cs);
            return that;
        },
        UnRegister: function (RemoveCommand) {
            RemoveCommand("pet", PERM.permissions.everyone, that.pet);
            RemoveCommand("C#", PERM.permissions.everyone, that.cs);
            return that;
        },
        pet: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send(message.member + " pets " + args.join(' '));
        },
        cs: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send("Why do Java developers wear glasses? Because they don't C#");
        },
    };
    return that;
};
module.exports = Fun;