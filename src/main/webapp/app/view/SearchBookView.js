/**
 * Created by vitalii on 06.05.16.
 */
Ext.define('BookShelf.view.SearchBookView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchBookView',
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            name: 'search',
            fieldLabel: 'Введите название книги',
            maxLenght: 200
        }
    ]

});