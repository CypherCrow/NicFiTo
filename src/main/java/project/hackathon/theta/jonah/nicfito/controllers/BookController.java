package project.hackathon.theta.jonah.nicfito.controllers;

import java.util.List;
import java.util.Optional;

//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;

import project.hackathon.theta.jonah.nicfito.objects.Book;
import project.hackathon.theta.jonah.nicfito.repository.BookRepository;
import project.hackathon.theta.jonah.nicfito.services.SequenceGeneratorService;

@RequestMapping("/api")
public class BookController {
    
    @Autowired
    BookRepository bookRepo;

    @Autowired
    private SequenceGeneratorService sequenceGenerator; 

    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookRepo.findAll();
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id") String id){
        Optional<Book> book = bookRepo.findById(id);
        
        if(!book.isPresent()){
            System.out.println("Book does not exist");
            return ResponseEntity.status(404).body(book.get()); 
        }

        return ResponseEntity.ok().body(book.get()); 
    }

    @PostMapping("/books")
    public Book createBook(@Validated @RequestBody Book book){
        return bookRepo.save(book); 
    }

	public String[] getBookDetails(Book book){
		String[] details = { book.getTitle(), book.getType(), book.getSynopsis()}; 
        return details; 
    }

   public void createBook(String title, String type, String synopsis){
		Book book = new Book(title, type, synopsis);
		book.setId(sequenceGenerator.getSequenceNumber(Book.SEQUENCE_STRING));
		bookRepo.save(book); 
	}

}
