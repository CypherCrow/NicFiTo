package project.hackathon.theta.jonah.nicfito;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import project.hackathon.theta.jonah.nicfito.objects.Book;
import project.hackathon.theta.jonah.nicfito.repository.BookRepository;

@SpringBootApplication
@EnableMongoRepositories
public class NicFiToApplication implements CommandLineRunner{

	@Autowired
	BookRepository bookRepo; 

	public static void main(String[] args) {
		SpringApplication.run(NicFiToApplication.class, args);
	}

	void createBooks(){
		System.out.println("Uploading books...");
		bookRepo.save(new Book("00001", "Black Order", "novel", "A conspiracy novel involving Sigma Force and Nazis"));
		bookRepo.save(new Book("00002", "Of Mice and Men", "novella", "About two brothers looking for work during the Great Depression"));
		bookRepo.save(new Book("00003", "American Short Stories", "short_story", "A collection of renowned American short stories")); 
		System.out.println("Book uploads complete...");  
	}

	public void showAllBooks(){
		bookRepo.findAll().forEach(book -> System.out.println(getBookDetails(book)));
	}

	public void getBookByTitle(String title){
		System.out.println("Getting book by title: " + title);
		Book book = bookRepo.findByTitle(title);
		System.out.println(getBookDetails(book));
	}

	public String getBookDetails(Book book){
		System.out.println(
			"Book title: " + book.getTitle() + 
			", \nBook type: " + book.getType() + 
			", \nBook synopsis: " + book.getSynopsis()
		);

		return "";
	}

	public void run(String...args) throws Exception {

		System.out.println("-------------RESETTING 'BOOK' REPO-------------------------------\n");
		bookRepo.deleteAll();
		System.out.println("-------------CREATE BOOKS-------------------------------\n");
		createBooks();
		System.out.println("\n----------------SHOW ALL BOOKS---------------------------\n");
		showAllBooks();
		System.out.println("\n--------------GET ITEM BY NAME-----------------------------------\n");
		getBookByTitle("Black Order"); 
	}
}
