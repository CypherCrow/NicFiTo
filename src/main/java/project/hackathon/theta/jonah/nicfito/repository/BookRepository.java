package project.hackathon.theta.jonah.nicfito.repository; 

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository; 
import org.springframework.data.mongodb.repository.Query;

import project.hackathon.theta.jonah.nicfito.objects.Book;

public interface BookRepository extends MongoRepository<Book, String>{
    
    @Query("{title: '?0'}")
    Book findByTitle(String title); 

    @Query("{type: '?0'}")
    Book findByType(String type); 

    @Query("{id: '?0'}")
    Optional<Book> findById(String id);

    @Query("{id: '?0'}")
    List<Book> findAll(String id);

}