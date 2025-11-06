<template>
  <div class="flex justify-center">
    <h2
      class="font-small font-bold text-white text-[7rem] z-10 bg-blue-500 mt-10 line-clamp-1"
    >
      コレクティブ・イノベーター
    </h2>
    <video
      ref="video"
      src="~/assets/sprites/team-creativity.MP4"
      playsinline
      muted
      class="object-cover h-full inset-0 absolute mx-auto"
    />
  </div>
</template>

<script setup>
const video = ref(null);
const { attach } = usePingPongVideo({ autoStart: true, speed: 1 });

onMounted(() => {
  attach(video.value);
});
</script>
