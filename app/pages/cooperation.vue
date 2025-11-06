<template>
  <div class="flex flex-col h-screen items-start justify-start">
    <video
      ref="video"
      src="~/assets/sprites/cooperation.MP4"
      playsinline
      muted
      class="object-cover w-full h-full inset-0 absolute"
    />
    <div class="rounded-2xl z-10 m-10 bg-red-400">
      <h1 class="text-[12rem] font-secondary text-white">
        <ruby>協調性<rt>きょうちょうせい</rt></ruby>
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
