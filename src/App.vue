<template>
    <input-name v-model="this.player"></input-name>
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
            playerList : [{ "name" :"Hans", "guess" : "Obama"}, { "name" :"Karl", "guess" : "Kafka"}, { "name" :"Jürgen", "guess" : "Moses"}, { "name" :"Peter", "guess" : "Benjamin Blümchen"}, { "name" :"Chris", "guess" : "Putin"}],
            player: ""
        }
    },
    computed : {
        passableList() {
            if (this.player== "") {
                return [];
            }
            return this.playerList.filter( a => a.name!=this.player);
        }
    },
    methods : {
       
    }
}
</script>