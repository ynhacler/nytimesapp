<template>
  <div class="hello">
    <div class="row" v-for="posts in processedPosts">
      <div class="columns medium-6 large-3" v-for='post in posts'>
        <div class="card">
          <div class="card-divider">
            {{post.title}}
          </div>
          <a :href="post.url" target="_blank">
            <img :src="post.image_url" alt="">
          </a>
          <div class="card-section">
            {{post.abstract}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      results:[
        //{title:"sfff",abstract:"sfdf"},

      ],
    }
  },
  mounted(){
    this.axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=93a47449484741989456578bb9a05b09")
    .then(response => {
      this.results= response.data.results
    }).catch(error => {
      console.log(error);
    });
  },
  computed:{
    processedPosts(){
      let posts = this.results;
      posts.map(post => {
        let imgObj = post.multimedia.find(media => media.format === "superJumbo");
        post.image_url = imgObj ? imgObj.url : "https://placehold.it/300x200?text=N/A";
      });

      let i,j,chunkedArray = [],chunk = 4;
      for(i = 0,j = 0;i<posts.length;i += chunk,j++){
        chunkedArray[j] = posts.slice(i,i+chunk);
      }
      return chunkedArray;
    } 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
