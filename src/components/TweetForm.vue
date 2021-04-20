<template>
  <div class="tweet-form container" :class="{open: showForm }" >
      <form @submit.prevent="sendTweet">
          <input type="text" class="form-control" placeholder="Tu nombre" v-model="username" />
          <textarea  class="form-control" 
           name="" id="" cols="30" rows="3"
           placeholder="Escribe tu tweet"
           v-model="tweet"
           ></textarea>
          <button type="submit" class="btn btn-primary">
              Enviar tweet
          </button>
      </form>

  </div>
</template>

<script>
import { ref } from "vue";
import { saveTweetApi } from "../api/tweet";

export default {
    props:{
        showForm: Boolean,
        reloadTweets: Function,
        openCloseForm: Function,
    },
    setup(props){

        let username= ref("");
        let tweet = ref("");

       const sendTweet = () =>{
           if(!tweet.value || !username.value) return

           saveTweetApi(tweet.value, username.value);
           tweet.value = "";
           tweet.username="";
           props.reloadTweets();
           props.openCloseForm();
       };
       
       return { sendTweet, username, tweet };
    }
}
</script>

<style lang="scss" scoped>
.tweet-form{
    height: 0px;
    margin-top: 20px;
    overflow: hidden;

    &.open {
        height: auto;
    }

    form{
        margin-bottom: 50px;
        input{
            margin-bottom: 10px;
        }

        button{
            width: 100%;
            margin-top: 10px;
        }
    }
}
</style>