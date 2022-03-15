<template>
    <input-name @updatePlayer="player=$event" v-if="!player"></input-name>
    <div v-if="player">Player name: {{this.player}}</div>
    <br>
    <player-list :playerList="this.passableList"></player-list>
    <add-player @add="handleAdd($event)"></add-player>
</template>

<script>
import PlayerList from "./components/PlayerList.vue";
import InputName from "./components/InputName.vue";
import AddPlayer from "./components/AddPlayer.vue";

export default {
    components: {
        PlayerList,
        InputName,
        AddPlayer
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
        async updateList() {
            try {
                let data = await fetch(this.backend +"/players");
                this.playerList = await data.json();   
            } catch (error) {
                console.error("error fetching players");
            }
       },
       //add a player to the list
       //todo: push player to server instead
       handleAdd(player) {
           this.playerList.push(player)
       } 
    },
    //on creation. update the players list
    created(){
        this.updateList();
    }
}
</script>