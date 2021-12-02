package project.hackathon.theta.jonah.nicfito;

//import com.mongodb.ServerAddress;
//import com.mongodb.client.MongoClient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import project.hackathon.theta.jonah.nicfito.objects.Book;
import project.hackathon.theta.jonah.nicfito.repository.BookRepository;
import project.hackathon.theta.jonah.nicfito.services.SequenceGeneratorService;

@SpringBootApplication
@EnableMongoRepositories
public class NicFiToApplication implements CommandLineRunner{

	@Autowired
	BookRepository bookRepo;

	@Autowired
	private SequenceGeneratorService seqeunceGenerator; 

	public static void main(String[] args) {
		SpringApplication.run(NicFiToApplication.class, args);
	}

	void createBooks(){
		System.out.println("Uploading books...");
		Book[] books = { new Book("Black Order", "novel", "A conspiracy novel involving Sigma Force and Nazis"), 
			new Book("Of Mice and Men", "novella", "About two brothers looking for work during the Great Depression"), 
			new Book("American Short Stories", "short_story", "A collection of renowned American short stories")
		}; 
		
		for(Book book : books){
			book.setId(seqeunceGenerator.getSequenceNumber(Book.SEQUENCE_STRING)); 
			System.out.println(book.getId());
			bookRepo.save(book); 
		}

		System.out.println("Book uploads complete...");  
	}

	public void run(String...args) throws Exception {
		System.out.println("-------------RESETTING 'BOOK' REPO-------------------------------\n");
		bookRepo.deleteAll();
		System.out.println("-------------CREATE BOOKS-------------------------------\n");
		createBooks();
	}
}
