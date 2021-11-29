package project.hackathon.theta.jonah.nicfito;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class NicFiToApplication {

	public static void main(String[] args) {
		SpringApplication.run(NicFiToApplication.class, args);
	}

}
