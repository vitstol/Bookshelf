Ext.application({
    name: 'BookShelf',

    views: [
        'AddBookFormView',
        'BookShelfView',
        'BookGridView',
        'SearchBookView'
    ],

    controllers : [
        'BookShelf.controller.BookShelfController'
    ],

    stores : [
        "BookShelf.store.BookShelfStore"
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype  : 'bookShelfView'
            }
        });
    }
});