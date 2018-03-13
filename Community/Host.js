var PERM = require('../Perms');

module.exports = function () {
    var Say = {
        Name: "say",
        Usage: "$say <msg>",
        Description: "Lets the bot say your msg",
        WholeArgs: true,
        Permissions: PERM.permissions.rolenames.Admin,
        Function: function (command, args, message) {
            message.channel.send(args);
        },
    };
    var invoke = {
        Name: "invoke",
        Usage: "$invoke <module> <command>",
        Description: "Manually invokes a command without doing any checks for channel or permissions",
        Permissions: PERM.permissions.rolenames.Hosts,
        Function: function (command, args, message, ModuleHandler) {
            if (args.length < 2) {
                message.channel.send(invoke.Usage);
            }
            var mod = ModuleHandler.FindModule(args[0]);
            if (mod.Commands) {
                for (var i = 0; i < mod.Commands.length; i++) {
                    if (mod.Commands[i].Name == args[1] && mod.Commands[i].Function) {
                        mod.Commands[i].Function(command, args.slice(2), message, ModuleHandler);
                        return;
                    }
                }
            }
            message.channel.send("Command not found");
        }
    };
    var blamevyo = {
        Name: "bv",
        Permissions: PERM.permissions.rolenames.Hosts,
        Function: function (command, args, message) {
            message.channel.send("Blame <@140501984141770752>");
        }
    };
    var blameanime = {
        Name: "ba",
        Permissions: PERM.permissions.rolenames.Hosts,
        Function: function (command, args, message) {
            message.channel.send("Blame <@140501984141770752>");
        }
    };
    var that = {
        ModuleName: "Host",
        Commands: [Say, invoke, blamevyo, blameanime]
    };
    return that;
};