<template>
    <input-name @updatePlayer="player=$event" v-if="!player"></input-name>
    <div v-if="player">Player name: {{this.player}}</div>
    <br>
    <player-list :playerList="this.passableList"></player-list>
</template>

<script>
import PlayerList from "./components/PlayerList.vue";
import InputName from "./components/InputName.vue";
export default {
    components: {
        PlayerList,
        InputName
    },

    data() {
        return {
            playerList : [],
            player: "",
            backend: "http://localhost:8001"
        }
    },
    computed : {
        //list with [player : guess] pairs excluding this.player
        passableList() {
            if (this.player== "") {
                return [];
            }
            return this.playerList.filter( a => a.name!=this.player);
        }
    },
    methods : {
        //fetch the players list from server and update value in model
        updateList() {
           fetch(this.backend +"/players")
           .then( res => {
               if (!res.ok) {
                   throw new Error("error fetching players "+ res.status );
               }
               return res.json()
           })
           .then( json => {
               this.playerList = json
           })
           .catch( error => console.error(error))
       }
    },
    //on creation. update the players list
    created(){
        this.updateList();
    }
}
</script>