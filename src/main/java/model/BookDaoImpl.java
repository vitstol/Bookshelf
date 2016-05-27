package model;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;
import java.util.List;



public class BookDaoImpl implements BookDao {

    @PersistenceContext
    private EntityManager emf;

    public void add(Book book) {
        emf.persist(book);
    }

    public void update(Book book) {
        emf.merge(book);
    }

    public void delete(Book book) {
        emf.remove(emf.getReference(Book.class, book.getId()));
    }

    public Collection<Book> getBooks(String search) {
        if(null==search||search.trim().isEmpty()){
            return emf.createQuery(
                    "select c from Book c", Book.class)
                    .getResultList();
        }
        return emf.createQuery(
                "select c from Book c where c.name like :search", Book.class)
                .setParameter("search", search.trim()+"%")
                .getResultList();
    }

    public List<Book> findByBook(String name, String author) {
        return emf.createQuery(
                "select c from Book c where c.name = :name and c.author = :author", Book.class)
                .setParameter("name",name)
                .setParameter("author", author)
                .getResultList();
    }
}
