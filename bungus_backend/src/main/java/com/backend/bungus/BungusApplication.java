package com.backend.bungus;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Objects;

@SpringBootApplication
public class BungusApplication {

	public static void main(String[] args) throws IOException {

		ClassLoader classLoader = BungusApplication.class.getClassLoader();

		File file =
				new File(Objects.requireNonNull(classLoader.getResource("serviceKey.json")).getFile());

		FileInputStream serviceAccount =
				new FileInputStream(file.getAbsolutePath());

		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.build();

		FirebaseApp.initializeApp(options);


		SpringApplication.run(BungusApplication.class, args);
	}

}
