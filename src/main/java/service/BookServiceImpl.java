package service;

import model.Book;
import model.BookDao;

import org.springframework.transaction.annotation.Transactional;
import java.util.Collection;
import java.util.List;



public class BookServiceImpl implements BookService  {
    private BookDao bookDao;

    public BookDao getBookDao() {
        return bookDao;
    }

    public void setBookDao(BookDao bookDao) {
        this.bookDao = bookDao;
    }


    @Transactional
    public Boolean add(Book book) {
        List<Book> duplicate = bookDao.findByBook(book.getName(),book.getAuthor());
        if(duplicate.isEmpty()){
            bookDao.add(book);
        }
        return false;
    }


    @Transactional
    public void update(Book book) {
        bookDao.update(book);
    }

    @Transactional
    public Collection<Book> getBooks(String search) {
        return bookDao.getBooks(search);
    }

    @Transactional
    public void delete(Book book) {
        bookDao.delete(book);
    }
}
