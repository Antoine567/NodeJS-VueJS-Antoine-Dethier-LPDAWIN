<template>
  <div>
    <h1>Films</h1>
<router-link :to="{ name: 'CreateFilm' }" class="btn btn-primary">Ajouter un film</router-link>
<div class="search">Rechercher film : <input type="text" v-model="search"></div><br><br>
    <carousel>
      <slide v-for="movie in movie_search">
	  <div id="film" class="col-md-8">
        <img src="cine.png">
        <p>Titre : {{ movie.name }}</p>
        <p>Date de sortie : {{ movie.sortie }}</p>
        <p>Langue : {{ movie.langue }}</p>
        <p>Réalisateur : {{ movie.nomR }}</p>
        <p>Date naissance réalisateur : {{ movie.dateN }}</p>
        <p>Nationalité : {{ movie.nationalite }}</p>
        <p>Genre du film : {{ movie.genre }}</p>
		<p>Note du film : {{movie.note}}</p>
        <p><router-link :to="{name: 'EditFilm', params: { id: movie._id }}" class="btn btn-primary">Editer film</router-link>
        <button class="btn btn-danger" v-on:click="deleteItem(movie._id)">Supprimer film</button></p>
		</div>
      </slide>
    </carousel>



</div>
</template>


<style>
img{
  max-width: 300px;
  display: block;
  margin: auto;
}

p{
  text-align: center;
}

.search{
float:right;
}

#film{
background-color:#f2f4f7;

}
</style>
<script>


export default {
  data(){
    return{
      search:'',
      items: [],
      slide: 0,
      sliding: null
    }
  },

  created: function()
  {
    this.fetchItems();
  },

  methods: {
    fetchItems()
    {
      let uri = 'http://localhost:4000/items';
      this.axios.get(uri).then((response) => {
        this.items = response.data;
      });
    },
    deleteItem(id)
    {
      let uri = 'http://localhost:4000/items/delete/'+id;
      this.items.splice(id, 1);
      this.axios.get(uri);
    }
  },
  computed: {
    movie_search: function() {

      return this.items.filter(m => m.name.indexOf(this.search)!=-1);
    }
  }
}
</script>
