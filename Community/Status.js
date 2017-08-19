var PERM = require('../Perms');
//var Q = require('q');
var status = function () {
    var that = {
        LastStatus: undefined,
        Register: function (AddCommand, ModuleHandler) {
            AddCommand("status", PERM.permissions.rolenames.Admin, function (command, args, message) {
                message.delete().catch(console.error);
                var stat = args.join(' ');
                if (stat && stat !== "" && stat !== "clear") {
                    that.LastStatus = stat;
                    ModuleHandler.StatusUpdate();
                }
                else {
                    that.LastStatus = undefined;
                    ModuleHandler.StatusUpdate();
                }
            });
            return that;
        },
        UnRegister: function (RemoveCommand) {
            //ALWAYS clean up commands
            LastStatus = undefined;
            RemoveCommand("status", PERM.permissions.rolenames.Admin);
            return that;
        },
        Status: function (add) {
            if (that.LastStatus) {
                add(LastStatus);
            }
            return add;
        }
    };
    return that;
};
module.exports = status;