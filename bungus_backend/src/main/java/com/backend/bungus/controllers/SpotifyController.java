package com.backend.bungus.controllers;

import com.backend.bungus.models.Token;
import com.backend.bungus.services.SpotifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpotifyController {
    @Autowired
    private SpotifyService spotifyService;

    @GetMapping({"/getToken"})
    public Token getToken() {
        return spotifyService.getToken();
    }

}
