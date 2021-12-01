package project.hackathon.theta.jonah.nicfito.services;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import project.hackathon.theta.jonah.nicfito.objects.DatabaseSequence;

@Service
public class SequenceGeneratorService {

    private MongoOperations mongoOperations;

    @Autowired
    public SequenceGeneratorService(MongoOperations mongoOperations){
        this.mongoOperations = mongoOperations;
    }

    public long getSequenceNumber(String seqName){
        Query query = new Query(Criteria.where("id").is(seqName));
        Update update = new Update().inc("seq", 1); 
        DatabaseSequence counter = mongoOperations
            .findAndModify(query,
                update, options().returnNew(true).upsert(true), 
                DatabaseSequence.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1; 
    }
    
}
