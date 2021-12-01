package project.hackathon.theta.jonah.nicfito.objects; 

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")
public class Book {

    @Transient
    public static final String SEQUENCE_STRING = "books_sequence"; 

    @Id
    private long id; 

    @Indexed
    private String title;
    @Indexed
    private String type;
    private String synopsis;

    public Book() { 
        super(); 
    }

    public Book(String title, String type, String synopsis){
        super(); 
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

    public void setId(long id){
        this.id = id;
    }

    public long getId(){
        return this.id; 
    }

    @Override 
    public String toString() {
        return String.format(
            "Customer[id=%s, title='%s', type='%s', synopsis='%s'", 
            id, title, type, synopsis
        ); 
    }
}