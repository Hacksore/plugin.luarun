define(function(require, exports, module) {
    main.consumes = ["Plugin", "tabManager", "commands"];
    main.provides = ["plugin.luarun"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var tabManager = imports.tabManager;
        var commands = imports.commands;

        var plugin = new Plugin("Hacksore", main.consumes);
        var emit = plugin.getEmitter();
  
        function load() {

            commands.addCommand({
                name: "luarun",
                group: "Plugins",
                bindKey: {
                    mac: "Command-Enter", 
                    win: "Ctrl-Shift-S"
                },
                exec: function() {
                    var code = tabManager.focussedTab.document.value;
                    console.log("RUNLUA: " + code)
                    
                    if(gmod.runLua != null){ //experimental test
                        gmod.runLua(1, code)
                    }
                }
            }, plugin);

        }

        plugin.on("load", function() {
            load();
        });

        plugin.on("unload", function() {

        });

        plugin.freezePublicAPI({

        });

        register(null, {
            "plugin.luarun": plugin
        });
    }
});