import { v4 as uuidv4 } from "uuid";
import { size, remove } from "lodash";
import { TWEETS } from "../utils/constants";

export function saveTweetApi(tweet, username){
    const tweets = getTweetsApi();

    //if(tweets.length ===0){
    if(size(tweets)===0){
 
        const tweetTemp = [
            {
                id:uuidv4(),
                tweet,
                username,
                createdAt: new Date()
            },
        ];
        localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
    }else{
        //console.log("Hay Tweets");
        tweets.push({
            id: uuidv4(),
            tweet,
            username,
            createdAt: new Date(),

        });
       
        localStorage.setItem(TWEETS, JSON.stringify(tweets));
        console.log(tweets);
    }
        
}

export function getTweetsApi(){
    const tweets = localStorage.getItem(TWEETS);

    if (tweets){
        return JSON.parse(tweets);
    }
    return [];
    
}

export function deleteTweetApi(idTweet){
    const tweets = getTweetsApi();

    remove(tweets, function(tweet){
       return tweet.id === idTweet;

    });

    localStorage.setItem(TWEETS, JSON.stringify(tweets));

}