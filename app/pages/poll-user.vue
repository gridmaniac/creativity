<template>
  <div class="flex flex-col h-screen items-center justify-center">
    <h1 class="text-2xl">AIを使いますか？</h1>
    <div class="flex w-full justify-center items-center gap-4 p-4">
      <button
        class="button flex-1 flex justify-center items-center"
        @click="yes"
      >
        <div class="border-blue-400 rounded-full border-16 size-28" />
      </button>
      <button
        class="button flex-1 flex justify-center items-center"
        @click="no"
      >
        <img
          class="aspect-square object-cover size-28"
          src="~/assets/sprites/batsu_sign.png"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const yes = async () => {
  await useFetch("/api/yes");
  navigateTo("poll-complete");
};

const no = async () => {
  await useFetch("/api/no");
  navigateTo("poll-complete");
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
