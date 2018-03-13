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
    var that = {
        ModuleName: "Status",
        Commands: [Status],
        Status: function (add) {
            if (Status.LastStatus) {
                add(Status.LastStatus);
            }
            return add;
        }
    };
    return that;
};