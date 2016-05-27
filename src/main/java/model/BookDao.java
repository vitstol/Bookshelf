package model;

import java.util.Collection;
import java.util.List;

public interface BookDao {

    void add(Book book);

    void update(Book book);

    void delete(Book book);

    Collection<Book> getBooks(String search);

     List<Book> findByBook(String name, String author);
}
