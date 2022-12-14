Ext.define('webapp.view.login.Login', {
    extend : 'Ext.window.Window',
    xtype : 'login',
    layout : 'center',
    closable : false,
    maximized : true,
    autoShow : true,
    onEsc : function(){
        return falseQ
    },
    items : [{
        xtype : 'form',
        layout : {
            type : 'vbox',
            align : 'center',
            pack : 'center'
        },
        items : [{
            xtype : 'textfield'
        },{
            xtype : 'textfield',
            inputType : 'password'
        },{
            xtype : 'button',
            width : 165,
            text : 'Login',
            handler : function(btn){
                btn.up("window").close();
                Ext.widget("main");
            }
        }]
    }]
});