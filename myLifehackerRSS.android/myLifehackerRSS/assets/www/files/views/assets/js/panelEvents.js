var Panel = function() {
    var that = {},
        _panel = $('#mypanel');
 
    var page = _panel.parents("[data-role=page]");
    page.append(_panel);
 
    _panel.on("panelbeforeopen", function( event, ui ) {
        $("#view_alert").die().live("click", function() {
            alert("view alert")
        });
 
        $("#close_panel").die().live("click", function() {
            that.close();
        });    
    });
    that.open = function() {
        _panel.panel("open");
    }
    that.close = function() {
        _panel.panel("close");
    }
 
    return that;
 
};