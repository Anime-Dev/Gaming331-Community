var PERM = require('../Perms');
//var Q = require('q');
var sample = function () {
    var that = {
        Register: function (AddCommand) {
            //this will make a command $command that runs the f function when anyone (everyone+) uses the command in botstuff
            //it will also convert the word "from" in the arguments to "to" in the arguments given to function f
            AddCommand("command", PERM.permissions.rolenames.everyone, that.f, [PERM.config.channels.botchannel], [["from", "to"]]);
            return that;
        },
        UnRegister: function (RemoveCommand) {
            //ALWAYS clean up commands
            RemoveCommand("command", PERM.permissions.rolenames.everyone, that.f);
            return that;
        },
        f: function (command, args, message) { }
    };
    return that;
};
module.exports = sample;