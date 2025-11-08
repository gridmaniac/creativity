<template>
  <div class="flex h-screen items-center justify-center gap-44">
    <div
      class="flex justify-center items-center text-white text-[8rem] w-50 bg-blue-400 transition-[height]"
      :style="{
        height: (poll.yes / (poll.no + poll.yes)) * 60 + 'rem',
      }"
    >
      {{ poll.yes }}
    </div>
    <div class="flex flex-col items-center">
      <h2 class="text-[4rem]">AIを使いますか？</h2>
      <img class="w-[40rem] aspect-square" src="~/assets/sprites/qr.png" />
    </div>
    <div
      class="flex justify-center items-center text-white text-[8rem] w-50 bg-red-400 transition-[height]"
      :style="{
        height: (poll.no / (poll.no + poll.yes)) * 60 + 'rem',
      }"
    >
      {{ poll.no }}
    </div>
  </div>
</template>

<script setup lang="ts">
let timer: NodeJS.Timeout;
const poll = reactive({ yes: 0, no: 0 });
const { data, refresh } = await useFetch<Poll>("/api/poll");

onMounted(() => {
  timer = setInterval(async () => {
    refresh();
    poll.yes = data.value?.yes || 0;
    poll.no = data.value?.no || 0;
    console.log(data.value);
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
