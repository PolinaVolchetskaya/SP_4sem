package com.bsu.twitter.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Tweets {
    private List<Tweet> tweets;

    public Tweets(){
        tweets = new ArrayList<>();

        //tests
        List<String> hashtags = new ArrayList<>();
        hashtags.add("hello");
        hashtags.add("goodbye");

        List<String> likes = new ArrayList<>();
        likes.add("mary");
        likes.add("john");

        this.addTweet(new Tweet("1", "test 1", new Date(), "Polina Volchetskaya", "www.photo",
                hashtags, likes));

        this.addTweet(new Tweet("2", "test 2", new Date(), "Ivan", "www.photo.link",
                hashtags, likes));
    }

    public Tweet getTweet(String id){
        //return tweets.get(Integer.parseInt(id)-1);
        //if (tweets.stream().com.bsu.twitter.filter(tweet->tweet.getId().equals(id)))
        for(Tweet tweet: tweets) {
            if(tweet.getId().equals(id)) {
                return tweet;
            }
        }
        return null;
    }

    public boolean validate (Tweet tweet){
        if (tweet.getId() == null || tweet.getId().length() < 1)
            return false;
        if (tweet.getDescription() == null || tweet.getDescription().length() > 250)
            return false;
        if (tweet.getCreatedAt() == null)
            return false;
        if (tweet.getAuthor() == null || tweet.getAuthor().length() < 1)
            return false;
        else return true;
    }

    public boolean addTweet(Tweet tweetToAdd){
        for(Tweet tweet: tweets) {
            if(tweet.getId().equals(tweetToAdd.getId())) {
                return false;
            }
        }
        if(validate(tweetToAdd)) {
            tweets.add(tweetToAdd);
            return true;
        }
        return false;
    }

    public boolean editTweet(String id, Tweet tweet){
        Tweet tweetForEdit = this.getTweet(id);
        if(tweet.getDescription() != null)
            tweetForEdit.setDescription(tweet.getDescription());
        if(tweet.getPhotoLink() != null)
            tweetForEdit.setPhotoLink(tweet.getPhotoLink());
        if(tweet.getHashtags() != null)
            tweetForEdit.setHashtags(tweet.getHashtags());
        return validate(tweetForEdit);
    }

    public boolean removeTweet(String id){
        for (Tweet tweet: tweets){
            if (tweet.getId().equals(id)) {
                tweets.remove(tweet);
                return true;
            }
        }
        return false;
    }

    public List<Tweet> addAllTweets(List<Tweet> tweets){
        List<Tweet> invalidTweets = new ArrayList<Tweet>();

        for(Tweet tweet: tweets) {
            if(validate(tweet)) {
                this.tweets.add(tweet);
            }
            else {
                invalidTweets.add(tweet);
            }
        }
        return invalidTweets;
    }

    public List<Tweet> getAllTweets() {
        return tweets;
    }

    public void removeAllTweets() {
        tweets.clear();
    }
}
