<template>
  <div class="flex justify-end items-top h-screen">
    <div class="rounded-2xl z-10 bg-white text-lime-600 flex-1">
      <ul class="font-display text-[6rem] list-disc p-10">
        <li class="line-clamp-1">‣項目1</li>
        <li class="line-clamp-1">‣項目1</li>
        <li class="line-clamp-1">‣項目1</li>
        <li class="line-clamp-1">‣項目1</li>
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
