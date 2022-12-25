package seb41_pre_32.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.ApplicationPidFileWriter;

@SpringBootApplication
public class BackApplication {

    public static void main(String[] args) {
        SpringApplication application = new SpringApplication(BackApplication.class);
        application.addListeners(new ApplicationPidFileWriter());
        application.run(args);
    }

}
