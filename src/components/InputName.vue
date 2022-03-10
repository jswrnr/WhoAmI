<template>
   <form>
       <label for="name">Input for Name</label>
       <input type="text" id="name" v-model="player">
       <button @click.stop.prevent="$emit('updatePlayer', this.player)">Click</button> 
   </form>
</template>

<script>
export default {
    name: "InputName",
    emits: ["updatePlayer"],
    data() {
        return {
            player: ""
        }
    }
}
</script>