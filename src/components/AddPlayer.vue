<template>
    <div>
        <label for="add">Add a player:</label>
        <input type="text" id="name" v-model="name">
        <input type="text" id="guess" v-model="guess">
        <button @click="handleAdd()" id="add">Add</button>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

    const emit = defineEmits(["add"]);
    const name = ref("");
    const guess = ref("");
    

    function handleAdd() {
        if (!name || !guess) {
            console.log("can't add without name and guess");
            return
        }
        console.log(name.value, guess.value);
        emit("add", {"name": name.value, "guess": guess.value})
    }
</script>