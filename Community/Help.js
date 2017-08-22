var PERM = require('../Perms');
//var ALIAS = require('../Alias');
//var Q = require('q');
module.exports = function () {
    var help = {
        Name: "help",
        Usage: "$help [command]",
        Description: "Displays usage and description of commands",
        WholeArgs: true,
        Function: function (command, args, message, ModuleHandler) {
            if (args.length > 0) {
                var cmd = ModuleHandler.FindCommand(args);
                if (cmd !== undefined){
                    message.getRichEmbed()
                    .setTitle(cmd.Name)
                    .setDescription(cmd.Usage + "\r\n" + cmd.Description)
                    .send();
                    return;
                }
            }
            var mess = message.member + ", you need to assign roles to be able to see channels, these roles can be added using the `$add <game>` command, list of games: `$games`.";
            mess += "\r\n";
            mess += "You can also assign yourself a region (purely informative) with the `$region <region>` command, list of regions: `$regions`.";
            mess += "\r\n";
            mess += "Extra info about commands can be found using `$help <command>`, list of all commands: `$commands`.";
            message.getRichEmbed()
            .setTitle("Help")
            .setDescription(mess)
            .send();
        },
    };
    var that = {
        ModuleName: "Help",
        Register: function (Add, AddCommand, ModuleHandler) {
            ModuleHandler.Add(help);
            return that;
        },
        UnRegister: function (Remove, RemoveCommand, ModuleHandler) {
            ModuleHandler.Remove(help);
            return that;
        },
    };
    return that;
};