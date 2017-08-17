var PERM = require('../Perms');
var Fun = function () {
    var that = {
        Register: function (AddCommand) {
            AddCommand("pet", PERM.permissions.everyone, that.pet);
            return that;
        },
        UnRegister: function (RemoveCommand) {
            RemoveCommand("pet", PERM.permissions.everyone, that.pet);
            return that;
        },
        pet: function (command, args, message) {
            message.delete().catch(console.error);
            message.channel.send(message.member + " pets " + args.join(' '));
         }
    };
    return that;
};
module.exports = Fun;