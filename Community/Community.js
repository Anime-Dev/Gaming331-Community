var PERM = require('../Perms');
var Q = require('q');
//var Sample = require('Sample');
var Fun = require('./FunCommands');


var register = function () {
    var that = {
        modules: [],
        Register: function (AddCommand, ModuleHandler) {
            var RegisterModule = function (m) {
                that.modules.push(m);
                ModuleHandler.AddModule(m);
            }

            //register the module here after require'ing
            //RegisterModule(Sample());
            RegisterModule(Fun());


            return that;
        },
        UnRegister: function (RemoveCommand, ModuleHandler) {
            //No need to clean up modules manually
            var tasks = [];
            for (var i = 0; i < modules.length; i++) {
                tasks.push(ModuleHandler.RemoveModule(modules[i]));
            }
            modules = [];
            return tasks.reduce(Q.when, Q(true));
        }
    };
    return that;
};
module.exports = register;