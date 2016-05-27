package service;

import model.Book;

import java.util.Collection;


public interface BookService {

    Boolean add(Book book);
    void update(Book book);
    Collection<Book> getBooks(String search);
    void delete(Book book);
}
