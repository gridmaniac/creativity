<template>
  <div class="flex flex-col h-screen justify-center items-end">
    <div
      class="rounded-2xl z-10 m-10 bg-white border-blue-400 border-12 strikethrough"
    >
      <s class="text-[12rem] font-small text-blue-400">
        <ruby>創造性<rt>そうぞうせい</rt></ruby></s
      >
    </div>
    <video
      ref="video"
      src="~/assets/sprites/egg.MP4"
      playsinline
      muted
      class="object-cover h-full inset-0 absolute"
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
