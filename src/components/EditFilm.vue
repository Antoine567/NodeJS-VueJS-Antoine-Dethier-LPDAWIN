<template>
    <div>
        <h1>Update le Film</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'Films' }" class="btn btn-success">Return to Items</router-link></div>
        </div>

        <form v-on:submit.prevent="updateItem">
            <div class="form-group">
                <label>Nom du film</label>
                <input type="text" class="form-control" v-model="item.name">
            </div>

            <div class="form-group">
                <label name="product_price">Année de sortie</label>
                <input type="text" class="form-control" v-model="item.sortie">
            </div>

            <div class="form-group">
                <label>Langue</label>
                <input type="text" class="form-control" v-model="item.langue">
            </div>

            <div class="form-group">
                <label>Nom du réalisateur</label>
                <input type="text" class="form-control"Nom du film v-model="item.nomR">
            </div>

            <div class="form-group">
                <label>Date naissance du réalisateur</label>
                <input type="text" class="form-control" v-model="item.dateN">
            </div>

            <div class="form-group">
                <label>Nationalité du réalisateur</label>
                <input type="text" class="form-control" v-model="item.nationalite">
            </div>

            <div class="form-group">
                <label>Genre du film</label>
                <input type="text" class="form-control" v-model="item.genre">
            </div>
			<div class="form-group">
                <label>Note du film</label>
                <select class="form-control" v-model="item.note">
				<option>0</option>
				<option>1 </option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
				</select>
            </div>



            <div class="form-group">
                <button class="btn btn-primary">Update le film</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
              let uri = 'http://localhost:4000/items/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/items/update/' + this.$route.params.id;
                this.axios.post(uri, this.item).then((response) => {
                  this.$router.push({name: 'Films'});
                });
            }
        }
    }
</script>
