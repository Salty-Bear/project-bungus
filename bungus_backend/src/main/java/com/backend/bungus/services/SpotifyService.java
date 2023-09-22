package com.backend.bungus.services;

import com.backend.bungus.models.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SpotifyService {

    @Autowired
    RestTemplate restTemplate;

    public Token getToken() {

        String url = "https://accounts.spotify.com/api/token";

        String body =
                "grant_type=client_credentials&client_id=9c5b7572134d442991db9a5b24baa924&client_secret=45a81c2fd04a43b6a9b3c2889cf4aa49";

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/x-www-form-urlencoded");

        HttpEntity<String> httpEntity = new HttpEntity<>(body, headers);

        return restTemplate.postForObject(url, httpEntity, Token.class);
    }

}
