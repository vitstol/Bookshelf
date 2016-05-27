/**
 * Created by vitalii on 25.05.16.
 */
Ext.define('BookShelf.model.BookShelfModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'author'],
    proxy: {
        type: 'rest',
        api: {
            create: 'book',
            read: 'book',
            destroy: 'book',
            update: 'book'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});