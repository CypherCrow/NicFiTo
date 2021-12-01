package project.hackathon.theta.jonah.nicfito.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/message")
public class MessageController {
    
    @GetMapping("/hello")
    public String hello(){
        return "Where fictional works and authors shine. An NFT bookstore, basically";
    }

}
