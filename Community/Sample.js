var PERM = require('../Perms');
//var ALIAS = require('../Alias');
//var Q = require('q');
module.exports = function () {
    var sample = {
        Name: "sample",
        Usage: "$sample <arg1> <arg2>",//Optional defaults to $Name
        Description: "Does absolutely nothing",//Optional defaults to Name
        KeepMessage: true,//Optional defaults to false, doesn't delete the message automatically
        WholeArgs: true,//Optional defaults to false, gives arguments as string ("arg1 arg2") instead of an array (["arg1","arg2"])
        Permissions: PERM.permissions.rolenames.Hosts,//Optional defaults to PERM.permissions.rolenames.everyone
        Function: function (command, args, message, ModuleHandler) {
            //do stuff
        },
        Alias: null,//Optional defaults to null, usage: ALIAS([["from1", "to1"], ["from2", "to2"]])
        Channels: [PERM.channels.channelnames.botchannel],//Optional defaults to null
    };
    var that = {
        ModuleName: "sampleModule",
        //Add command the simplest way:
        Commands: [sample],
        Register: function (Add, AddCommand, ModuleHandler) {
            //You can run code here when the module gets loaded (don't forget to unload)
            console.log("Sample Module loading...")

            //Older way to add a command:
            //ModuleHandler.Add(sample);

            //Oldest way to add a command (Do not use this anymore, it might not work in future versions)
            //this will make a command $command that runs the f function when anyone (everyone+) uses the command in botstuff
            //it will also convert the word "from" in the arguments to "to" in the arguments given to function f
            //AddCommand("command", PERM.permissions.rolenames.everyone, that.f, [PERM.config.channels.botchannel], [["from", "to"]]);
            return that;
        },
        UnRegister: function (Remove, RemoveCommand, ModuleHandler) {
            //ALWAYS clean up here

            //Old way of unregistering commands
            ModuleHandler.Remove(sample);

            //Oldest way to unregister a command
            //RemoveCommand("command", PERM.permissions.rolenames.everyone, that.f);
            return that;
        },
    };
    return that;
};