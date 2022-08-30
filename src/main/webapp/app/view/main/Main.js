Ext.define('webapp.view.main.Main',{
    extend : 'Ext.container.Viewport',
    xtype : 'main',
    layout : 'border',
    items : [{
        xtype : 'panel',
        region : 'north',
        //title : 'Market Admin'
        header : false,
        items: [{
            xtype: 'toolbar',
            items : [{
                xtype: 'label',
                html: '<h2>Market Admin</h2>'
            }, '->',{
              xtype: 'button',
              text : 'xxx님',
              menu : [{
                  text : '비밀번호변경'
              },{
                  text : '로그아웃'
              }]
            }]
        }]
    },{
        xtype : 'panel',
        region : 'west',
        width : 200,
        layout : 'fit',
        items : [{
            xtype : 'treelist',
            listeners : {
                selectionchange : function (obj, record){
                    console.log(record.get('page'));
                    var centerPage = obj.up("viewport").down("component[region=center]");
                    centerPage.removeAll(true);
                    centerPage.add({
                        xtype : record.get('page')
                    })
                }
            },
            store : {
                root : {
                    expanded : true,
                    children : [{
                        text : '상품관리',
                        iconCls : 'x-fa fa-gift',
                        expanded : true,
                        selectable : false,
                        children : [{
                            text : '상품목록',
                            page : 'productList',
                            leaf : true
                        }]
                    },{
                        text : '주문관리',
                        iconCls : 'x-fa fa-shopping-cart',
                        expanded : true,
                        selectable : false,
                        children : [{
                            text : '주문목록',
                            page : 'orderList',
                            leaf : true
                        }]
                    },{
                        text : '회원관리',
                        iconCls : 'x-fa fa-users',
                        expanded : true,
                        selectable : false,
                        children : [{
                            text : '회원목록',
                            page : 'memberList',
                            leaf : true
                        }]
                    }]
                }
            }
        }]
    },{
        xtype : 'panel',
        region : 'center',
        flex : 1,
        layout : 'fit',
        items : [{
            xtype : 'panel',
            html : '<H2>MAIN DASHBOARD</H2>'
        }]
    }]
});