<template>
  <div class="flex flex-col h-screen items-center justify-end">
    <video
      ref="video"
      src="~/assets/sprites/personality.MP4"
      playsinline
      muted
      class="object-cover w-full h-full inset-0 absolute"
    />
    <h2 class="text-[10rem] z-10 font-secondary bg-black w-full text-center">
      <span class="text-blue-400">自</span><span class="text-red-400">分</span
      ><span class="text-green-400">ら</span
      ><span class="text-orange-400">し</span
      ><span class="text-purple-400">い</span
      ><span class="text-yellow-400">社</span><span class="text-white">会</span>
    </h2>
  </div>
</template>

<script setup>
const video = ref(null);
const { attach } = usePingPongVideo({ autoStart: true, speed: 1 });

onMounted(() => {
  attach(video.value);
});
</script>
