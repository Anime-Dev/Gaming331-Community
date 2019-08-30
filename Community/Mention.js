var PERM = require('../Perms');
module.exports = function () {
    var sample = {
        Name: "mention",
        Usage: "$mention <RoleNAME1> <RoleNAME2> <RoleNAME3> ...",
        Description: "Mentions people with the roles provided",
        Permissions: PERM.permissions.rolenames.Hosts,
        Function: function (command, args, message, ModuleHandler) {
            //Placeholder for future command
        }
    };
    var that = {
        ModuleName: "BetterMentions",
        Commands: [sample]
    };
    return that;
};