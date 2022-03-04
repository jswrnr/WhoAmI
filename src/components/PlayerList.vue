<template>
   <div>
        <ul>
            <li v-for="(player, index) in playerList" :key="index">Name : {{player.name}}, Guess : {{player.guess}}</li>
        </ul>
   </div>
</template>

<script>
export default {
    name: "PlayerList",
    props: {playerList : Array}
}
</script>