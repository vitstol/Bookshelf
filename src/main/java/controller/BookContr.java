package controller;



import model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.BookService;


import java.util.Collection;

/**
 * Created by vitalii on 02.05.16.
 */


@Controller
@RequestMapping("/book")
public class BookContr {

    @Autowired
    private BookService bookService;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Book> getBooks(String search){
        return bookService.getBooks(search);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResult setBook(Book book){
        return new ExtResult(bookService.add(book), book);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteBook(Book book){
        bookService.delete(book);
        return "delete";
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseBody
    public String updateBook(Book book){
        bookService.update(book);
        return "update";
    }
}
