var PERM = require('../Perms');
//var ALIAS = require('../Alias');
//var Q = require('q');
module.exports = function () {
    var Status = {
        Name: "status",
        Usage: "$status <new status msg>",
        Description: "Sets the status of the bot",
        WholeArgs: true,
        Permissions: PERM.permissions.rolenames.Admin,
        LastStatus: undefined,
        Function: function (command, args, message, ModuleHandler) {
            if (args && args !== "" && args !== "clear") {
                Status.LastStatus = args;
                ModuleHandler.StatusUpdate();
            }
            else {
                that.LastStatus = undefined;
                ModuleHandler.StatusUpdate();
            };
        },
    };
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
    var that = {
        ModuleName: "Status",
        Register: function (Add, AddCommand, ModuleHandler) {
            ModuleHandler.Add(Status);
            ModuleHandler.Add(Say);
            return that;
        },
        UnRegister: function (Remove, RemoveCommand, ModuleHandler) {
            ModuleHandler.Remove(Status);
            ModuleHandler.Remove(Say);
            return that;
        },
    };
    return that;
};