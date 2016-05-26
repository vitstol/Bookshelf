/**
 * Created by vitalii on 06.05.16.
 */
Ext.define('BookShelf.view.BookShelfView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.bookShelfView',
    layout: 'border',
    items: [
        {
            xtype: 'bookGridView',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">Книжная полка </font></center></div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'searchBookView',
            title: 'Поиск',
            region: 'west',
            width: 300,
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});