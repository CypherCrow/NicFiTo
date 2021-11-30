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

    public Book(String id, String title, String type, String synopsis){
        this.id = id;
        this.title = title; 
        this.type = type;
        this.synopsis = synopsis; 
    } 

    public String getTitle(){
        return this.title;
    }

    public String getType(){
        return this.type; 
    }

    public String getSynopsis(){
        return this.synopsis;
    }

    @Override 
    public String toString() {
        return String.format(
            "Customer[id=%s, title='%s', type='%s', synopsis='%s'", 
            id, title, type, synopsis
        ); 
    }
}