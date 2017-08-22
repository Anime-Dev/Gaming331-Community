var PERM = require('../Perms');
var Q = require('q');
//var Sample = require('Sample');
var Fun = require('./FunCommands');
var Help = require('./Help');
var Welcome = require('./Welcome');
var Status = require('./Status');
var Explosm = require('./Explosm');


module.exports = function () {
    var that = {
        modules: [],
        ModuleName: "CommunityLoader",
        Register: function (Add, AddCommand, ModuleHandler) {
            var RegisterModule = function (m) {
                that.modules.push(m);
                Add(m);
            }

            //register the module here after require'ing
            //RegisterModule(Sample());
            RegisterModule(Fun());
            RegisterModule(Help());
            RegisterModule(Welcome());
            RegisterModule(Status());
            RegisterModule(Explosm());


            return that;
        },
        UnRegister: function (Remove, RemoveCommand, ModuleHandler) {
            //No need to clean up modules manually
            var tasks = [];
            for (var i = 0; i < that.modules.length; i++) {
                tasks.push(Remove(that.modules[i]));
            }
            that.modules = [];
            return tasks.reduce(Q.when, Q(true));
        },
    };
    return that;
};