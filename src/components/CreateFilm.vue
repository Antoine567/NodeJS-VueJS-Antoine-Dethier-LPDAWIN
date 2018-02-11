<template>
  <div>
    <h1>Créer un film</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nom :</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Année de sortie :</label>
            <input type="text" class="form-control" v-model="item.sortie" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Langue :</label>
            <input type="text" class="form-control" v-model="item.langue">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nom réalisateur :</label>
            <input type="text" class="form-control" v-model="item.nomR">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Date naissance réalisateur :</label>
            <input type="date" class="form-control" v-model="item.dateN">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nationalité réalisateur :</label>
            <input type="text" class="form-control" v-model="item.nationalite">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Genre du film :</label>
            <input type="text" class="form-control" v-model="item.genre">
          </div>
        </div>
      </div>
	  <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Note :</label>
            <select class="form-control" v-model="item.note">
				<option>0</option>
				<option>1 </option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			</select>
          </div>
        </div>
      </div>
	  


      <br />
      <div class="form-group">
        <button class="btn btn-primary">Ajouter film</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      item:{}
    }
  },
  methods: {
    addItem(){
      let uri = 'http://localhost:4000/items/add';
      this.axios.post(uri, this.item).then((response) => {
        this.$router.push({name: 'Films'})
      })
    }
  }
}
</script>
