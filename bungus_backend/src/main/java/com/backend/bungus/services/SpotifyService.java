package com.backend.bungus.services;

import com.backend.bungus.models.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SpotifyService {

    @Autowired
    RestTemplate restTemplate;

    @Value("${spotify.client.id}")
    private String clientID;

    @Value("${spotify.client.secret}")
    private String clientSecret;


    public Token getToken() {

        String url = "https://accounts.spotify.com/api/token";

        String body =
                "grant_type=client_credentials&client_id="+clientID+"&client_secret="+clientSecret;

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/x-www-form-urlencoded");

        HttpEntity<String> httpEntity = new HttpEntity<>(body, headers);

        return restTemplate.postForObject(url, httpEntity, Token.class);
    }

}
