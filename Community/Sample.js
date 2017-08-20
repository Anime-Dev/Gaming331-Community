var PERM = require('../Perms');
//var ALIAS = require('../Alias');
//var Q = require('q');
module.exports = function () {
    var sample = {
        Name: "sample",
        Usage: "$sample <arg1> <arg2>",//Optional defaults to $Name
        Description: "Does absolutely nothing",//Optional defaults to Name
        KeepMessage: true,//Optional defaults to false, doesn't delete the messagee automatically
        WholeArgs: true,//Optional defaults to false, gives arguments as string ("arg1 arg2") instead of an array (["arg1","arg2"])
        Permissions: PERM.permissions.rolenames.Hosts,//Optional defaults to PERM.permissions.rolenames.everyone
        Function: function (command, args, message) {
            //do stuff
        },
        Alias: null,//Optional defaults to null, usage: ALIAS([["from1", "to1"], ["from2", "to2"]])
        Channels: [PERM.channels.channelnames.botchannel],//Optional defaults to null
    };
    var that = {
        ModuleName: "sampleModule",
        Register: function (AddCommand, ModuleHandler) {
            //this will make a command $command that runs the f function when anyone (everyone+) uses the command in botstuff
            //it will also convert the word "from" in the arguments to "to" in the arguments given to function f
            //AddCommand("command", PERM.permissions.rolenames.everyone, that.f, [PERM.config.channels.botchannel], [["from", "to"]]);
            ModuleHandler.Add(sample);
            return that;
        },
        UnRegister: function (RemoveCommand, ModuleHandler) {
            //ALWAYS clean up commands
            //RemoveCommand("command", PERM.permissions.rolenames.everyone, that.f);
            ModuleHandler.Remove(sample);
            return that;
        },
    };
    return that;
};