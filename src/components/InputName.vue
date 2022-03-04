<template>
   <form>
       <label for="name">Input for Name</label>
       <input type="text" id="name" v-model="playerName">
       <button @click.stop.prevent="$emit('update:modelValue', this.playerName)">Click</button> 
       <div>Player name: {{this.playerName}}</div>
   </form>
</template>

<script>
export default {
    name: "InputName",
    emits: ["update:modelValue"],
    data() {
        return {
            playerName: ""
        }
    }
}
</script>