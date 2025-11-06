<template>
  <div class="flex min-h-screen items-center justify-center radial-gradient">
    <div class="rounded-2xl z-10 m-10 mx-auto px-5 bg-red-400">
      <h1
        v-for="item in 3"
        :key="item"
        class="text-[14rem] font-display border-b-5 border-b-black border-dotted mb-5"
      >
        <ruby>改善<rt>KAIZEN</rt></ruby>
        <span class="text-[5rem]">券</span>
      </h1>
    </div>
  </div>
</template>

<script setup>
const video = ref(null);
const { attach } = usePingPongVideo({ autoStart: true, speed: 1 });

onMounted(() => {
  attach(video.value);
});
</script>

<style scoped>
.radial-gradient {
  background-color: #000;
}
</style>
