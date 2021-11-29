package project.hackathon.theta.jonah.nicfito.objects; 

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("book")
public class Book {
    @Id
    private String id; 

    private String title;
    private String type; 
    private String synopsis;

    public Book() {}

    public Book(String title, String type, String synopsis){
        this.title = title; 
        this.type = type;
        this.synopsis = synopsis; 
    } 

    @Override 
    public String toString() {
        return String.format(
            "Customer[id=%s, title='%s', type='%s', synopsis='%s'", 
            id, title, type, synopsis
        ); 
    }
}