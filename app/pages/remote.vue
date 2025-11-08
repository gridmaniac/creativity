<template>
  <div class="flex flex-col h-screen gap-5">
    <button class="button" @click="prev">PREV</button>
    <button class="button" @click="next">NEXT</button>
    <button class="button" @click="home">HOME</button>
    <button class="button" @click="clear">CLEAR</button>
  </div>
</template>

<script setup lang="ts">
const prev = async () => {
  await $fetch("/api/prev");
};

const next = async () => {
  await $fetch("/api/next");
};

const home = async () => {
  await $fetch("/api/home");
};

const clear = async () => {
  await $fetch("/api/clear");
};
</script>

<style scoped>
.button {
  background-color: #e7e7e7;
  color: black;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}
</style>
