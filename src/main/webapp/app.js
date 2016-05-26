Ext.application({
    name: 'BookShelf',

    views: [
        'AddBookFormView',
        'BookShelfView',
        'BookGridView',
        'SearchBookView'
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