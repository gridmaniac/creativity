<template>
  <div class="flex justify-end items-top h-screen">
    <div class="rounded-2xl z-10 bg-white text-lime-600 flex-1">
      <ul class="font-display text-[5rem] list-disc p-10 vert">
        <li class="line-clamp-1">‣チームワーク</li>
        <li class="line-clamp-1">‣部活動</li>
        <li class="line-clamp-1">‣文化祭</li>
        <li class="line-clamp-1">‣公演や展示会</li>
      </ul>
    </div>
    <video
      ref="video"
      src="~/assets/sprites/teamwork.MP4"
      playsinline
      muted
      class="object-cover h-full"
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

<style scoped>
.vert {
  writing-mode: vertical-rl;
}
</style>
