define(function(require, exports, module) {
    main.consumes = ["Plugin", "tabManager", "save"];
    main.provides = ["plugin.luarun"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var tabManager = imports.tabManager;
        var save = imports.save;

        var plugin = new Plugin("LuaRun", main.consumes);
        var emit = plugin.getEmitter();
        
        function load() {
            save.on("beforeSave", function(e) { //TODO: move to a keybind
                var tab = tabManager.focussedTab.document.value;
                console.log("RUNLUA: " + tab) 
            })
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