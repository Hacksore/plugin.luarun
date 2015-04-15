define(function(require, exports, module) {
    main.consumes = ["Plugin", "tabManager", "save"];
    main.provides = ["plugin.luarun"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var tabManager = imports.tabManager;
        var save = imports.save;

        /***** Initialization *****/
        
        var plugin = new Plugin("LuaRun", main.consumes);
        var emit = plugin.getEmitter();
        
        function load() {
            
            save.on("beforeSave", function(e) {
                var tab = tabManager.focussedTab.document.value;
                console.log("RUNLUA: " + tab)  
            })
        }
        
        /***** Methods *****/
        
        /***** Lifecycle *****/
        
        
        plugin.on("fileSave", function() {
            console.log("FILE SAVED")
        });
        
        plugin.on("load", function() {
            load();
        });
        plugin.on("unload", function() {
        
        });
        
        /***** Register and define API *****/
        
        plugin.freezePublicAPI({
            
        });
        
        register(null, {
            "plugin.luarun": plugin
        });
    }
});