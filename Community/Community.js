var PERM = require('../Perms');
//var Q = require('q');
//var Sample = require('Sample');
var Fun = require('FunCommands');
var register = function () {
    var that = {
        Register: function (AddCommand, ModuleHandler) {
            //register the module here after require'ing
            //ModuleHandler.AddModule(Sample());
            ModuleHandler.AddModule(Fun());
            return that;
        },
        UnRegister: function (RemoveCommand) {
            //No need to clean up modules
            return that;
        },
    };
    return that;
};
module.exports = register;