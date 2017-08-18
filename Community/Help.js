var PERM = require('../Perms');
//var Q = require('q');
var help = function () {
    var helptext = {
        add: "use `$add <game>` to add a game tag to your roles, this means you will receive notifications for that game. Using `$games` (or `$g`) will display all available games.",
        remove: "use `$remove <game>` to remove the game tag form your roles, this will disable notifications for that game.",
        region: "use `$region <region>` to add your region to your roles. Using `$regions` (or `$r`) will display all available regions. When you add a region all others get removed.",
        //start: "use `$start` to to start the Minecraft server should it be down (this is still WIP).",
    };
    var that = {
        Register: function (AddCommand) {
            AddCommand("help", PERM.permissions.rolenames.everyone, function (command, args, message) {
                message.delete().catch(console.error);
                if (args.length > 0) {
                    if (helptext[args[0]] !== undefined){
                        message.reply(helptext[args[0]]);
                        return;
                    }
                }
                var mess = "you need to assign roles to be able to see channels, these roles can be added using the `$add <game>` command, list of games: `$games`.";
                mess += "\r\n";
                mess += "You can also assign yourself a region (purely informative) with the `$region <region>` command, list of regions: `$regions`.";
                mess += "\r\n";
                mess += "Extra info about commands can be found using `$help <command>`, list of all commands: `$commands`.";
                message.reply(mess);
            }, [PERM.channels.channelnames.botchannel]);
            return that;
        },
        UnRegister: function (RemoveCommand) {
            RemoveCommand("help", PERM.permissions.rolenames.everyone);
            return that;
        }
    };
    return that;
};
module.exports = help;