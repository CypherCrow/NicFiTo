package project.hackathon.theta.jonah.nicfito.repository; 

import java.util.List; 

import org.springframework.data.mongodb.repository.MongoRepository; 
import org.springframework.data.mongodb.repository.Query;

import project.hackathon.theta.jonah.nicfito.objects.Book;

public interface BookRepository extends MongoRepository<Book, String>{
    
    @Query("{title: }")
    Book findByTitle(String title); 
    Book findBySynopsis(String synopsis); 
    List<Book> findAll(String category); 
}