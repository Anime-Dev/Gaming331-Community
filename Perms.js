var Pemissions = {
    roles: [],
    rolenames: {
        everyone: "@everyone",
        Muted: "Muted",
        AllGames: "All Games",
        FreeGames: "Free Games",
        Osu: "Osu!",
        BDO: "BDO",
        RS: "RS",
        RL: "RL",
        CSGO: "CS:GO",
        OW: "OW",
        LoL: "LoL",
        MC: "MC",
        ASRegion: "AS Region",
        NARegion: "NA Region",
        EURegion: "EU Region",
        NC331Staff: "NC-331 Staff",
        Moderator: "Moderator",
        Admin: "Admin",
        Bots: "Bots",
        Hosts: "Hosts",
    },
    makeroles: function (Discord) {
        //Run if you renamed, deleted or added roles
    },
    GetRole(name) {
        //Returns a Discord role from a given name
    }
}
var channels = {
    guildname: "Gaming-331",
    guild: null,
    channelnames: {
        botchannel: "botstuff",
        MCTest: "minecraft_test",
        MC: "minecraft",
        GameSuggestion: "game_suggestions",
        Admin: "admin",
    },
    channels: [],
    makechannels: function (Discord) {
        //Run if you renamed, deleted or added Channels
    },
    GetChannel(name) {
        //Returns a Discord Channel from a given name
    },
    GetEmoji(name) {
        //Returns a Discord Emoji from a given name
    }
};
var saves = {
    saved: {
        //everything here gets saved and loaded on exit/start
        games: [],
        //use you modules name for saving
        //Sample: {savegoeshere: false},
    },
    save: function () {
        //Manually save (after a change) prevents dataloss on crash
    },
    load: function () {
        //Manually load (should not be used)
    },
    getGameRoles: function () {
        //gets all roles used for community games
    },
};
var date = {
    //returns the formatted date from the server: USE THIS DATE IN LOGS
    Now: function () { return moment().utc().add(2, 'h').format("hh:mm:ss DD-MM-YYYY"); }
};
module.exports.permissions = Pemissions;
module.exports.channels = channels;
module.exports.saves = saves;
module.exports.date = date;