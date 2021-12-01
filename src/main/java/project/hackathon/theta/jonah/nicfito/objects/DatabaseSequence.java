package project.hackathon.theta.jonah.nicfito.objects;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "database_sequences")
public class DatabaseSequence {
    
    @Id
    private String id;
    private long seq; 

    public String getId(){
        return this.id; 
    }

    public long getSeq(){
        return this.seq;
    }
}