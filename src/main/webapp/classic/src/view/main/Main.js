/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('webapp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    width : 500,
    height : 500,

/*
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'webapp.view.main.MainController',
        'webapp.view.main.MainModel',
        'webapp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
*/

    items : [{
        xtype : 'button',
        text : 'Click',
        handler : function(){
            Ext.Ajax.request({
                url : '/testAPI',
                success : function(res){
                    var api = Ext.decode(res.responseText);
                    console.log("API Result::",api);
                }
            })
        }
    }]
});
