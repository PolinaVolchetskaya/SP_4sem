package com.bsu.twitter.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Tweet {
    private String id;
    private String description;
    private Date createdAt;
    private String author;
    private String photoLink;
    private List<String> hashtags;
    private List<String> likes;

    public Tweet(){
        this.id = "";
        this.description = "";
        this.author = "";
        this.photoLink = "";
        this.hashtags = new ArrayList<>();
        this.likes = new ArrayList<>();
    }

    public Tweet(String id, String description, Date createdAt, String author,
                 String photoLink, List<String> hashtags, List<String> likes){
        this.id = id;
        this.description = description;
        this.createdAt = new Date();
        this.author = author;
        this.photoLink = photoLink;
        this.hashtags = new ArrayList<>(hashtags);
        this.likes = new ArrayList<>(likes);
    }

    public void setId(String id){
        this.id = id;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setCreatedAt(Date createdAt){
        this.createdAt = createdAt;
    }

    public void setAuthor(String author){
        this.author = author;
    }

    public void setPhotoLink(String photoLink){
        this.photoLink = photoLink;
    }

    public void setHashtags(List<String> hashtags){
        this.hashtags = hashtags;
    }

    public void setLikes(List<String> likes){
        this.likes = likes;
    }

    public String getId(){
        return id;
    }

    public String getDescription(){
        return description;
    }

    public Date getCreatedAt(){
        return createdAt;
    }

    public String getAuthor(){
        return author;
    }

    public String getPhotoLink(){
        return photoLink;
    }

    public List<String> getHashtags(){
        return hashtags;
    }

    public List<String> getLikes(){
        return likes;
    }

}
