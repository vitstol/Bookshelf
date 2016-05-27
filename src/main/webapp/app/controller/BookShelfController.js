/*Created by vitalii on 25.05.16.*/
Ext.define('BookShelf.controller.BookShelfController', {
    extend: 'Ext.app.Controller',


    refs: [
        {selector: 'bookGridView',
            ref: 'bookGridView'},
        {selector: 'bookGridView button[action="add"]',
            ref: 'bookGridAdd'},
        {selector: 'bookGridView button[action="delete"]',
            ref: 'bookGridDelete'},
        {selector: 'searchBookView button[action="search"]',
            ref: 'searchBook'},
        {selector: 'addBookFormView',
            ref: 'addBookFormView'},
        {selector: 'bookShelfView',
            ref: 'bookShelfView'},
        {selector: 'addBookFormView textfield[name=name] ',
            ref: 'addBookFormName'},
        {selector: 'addBookFormView textfield[name=author]',
            ref: 'addBookFormAuthor'},
        {selector: 'addBookFormView button[action=save]',
            ref: 'addBookFormSave'}
    ],

    init: function () {
        this.control({
            'bookGridView  button[action=add]': {
                click: this.onAddBook
            },
            'bookGridView  button[action=delete]': {
                click: this.onDelBook
            },
            'searchBookView  textfield[name="search"]': {
                change: this.onChangeText
            },
            'bookGridView': {
                cellclick: this.onLineGrid
            },
            'addBookFormView  button[action=save]': {
                click: this.onSaveBook
            },
            'addBookFormView  textfield[name=name]': {
                change: this.onValidation
            },
            'addBookFormView  textfield[name=author]': {
                change: this.onValidation
            }
        });
    },

    onSaveBook: function (button) {
        var me = this;
        var bookModel = Ext.create('BookShelf.model.BookShelfModel');
        bookModel.set(this.getAddBookFormView().down('form').getValues());
        bookModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('BookShelf.model.BookShelfModel').add(objAjax);
                //noinspection JSUnresolvedFunction
                me.getAddBookFormView().close();
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'Дубликат!',
                    msg: 'Такая книга с этим автором уже добавлена',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }

        });
    },

    onAddBook: function () {
        Ext.widget('addBookFormView');
    },

    onDelBook: function () {
        var sm = this.getBookGridView().getSelectionModel();
        var rs = sm.getSelection();
        this.getBookGridView().store.remove(rs[0]);
        this.getBookGridView().store.commitChanges();
        this.getBookGridDelete().disable();
    },

    onChangeText: function () {
        Ext.getStore('BookShelf.store.BookShelfStore').load({
            params: {
                search: this.getBookShelfView().down('searchBookView').getValues()
            }
        });
    },

    onLineGrid: function () {
        this.getBookGridDelete().enable();
    },

    onValidation: function () {
        if (this.getAddBookFormName().validate() && this.getAddBookFormAuthor().validate()) {
            this.getAddBookFormSave().enable();
        } else {
            this.getAddBookFormSave().disable();
        }
    }

});