var ModuleHandler = {
    AddModule(Module) {
        //adds a module :rollingeyes: #noshit
    },
    AddCommand(Name, Perms, func, channels, alias) {
        //adds a command with given name, permissions, function to run, and optional allowed channels (use "*" for all and "!" + channelname for not this one) and aliasses for arguments
        //THIS WILL SOON BE DEPRICATED! (for now you can still use it but it won't have all functionality)
    },
    RemoveModule(Module) {
        //du-uh
    },
    RemoveAllModules() {
        //kidding me?
    },
    RemoveCommand(name, perm, func) {
        //you still reading this?
    },
    Remove(com) {
        //removes a command or module
    },
    StatusUpdate(){
        //what do you think this does? Alert santa?
    },
    Add(com) {
        //adds a command or module, see Sample.js/Community.js for correct usage
    },
    GetFormattedAllowed(user) {
        //Gives the allowed commands for a member
    },
    StatusUpdate() {
        //Forces a status update
    },
    Discord: Discord,//the Discord object
    Client: Client,//the Discord Client
    FindModule(name) {
        //Finds a module by name and returns the module object
    },
};